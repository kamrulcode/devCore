import React from "react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useSession } from "../lib/auth-client";
import type { Technologiese } from "../type/type.ts";

import { createContext } from "react";

type TechContextType = {
  session: ReturnType<typeof useSession>["data"];
  isPending: boolean;

  technologies: Technologiese[];
  categories: string[];
  loading: boolean;

  stack: Technologiese[];

  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setStack: React.Dispatch<React.SetStateAction<Technologiese[]>>;

  addToStack: (technology: Technologiese) => void;
  removeFromStack: (id: Technologiese["id"]) => void;
  allRemoveFromStack: () => void;
};

export const TeckContext = createContext<TechContextType | undefined>(
  undefined,
);

const STORAGE_KEY = "technologyStack";

function readLocalStack(): Technologiese[] {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value ? (JSON.parse(value) as Technologiese[]) : [];
  } catch {
    return [];
  }
}

const TechProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session, isPending } = useSession();
  const [technologies, setTechnologies] = useState<Technologiese[]>([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState<Technologiese[]>(readLocalStack);

  useEffect(() => {
    let cancelled = false;

    fetch("/data.json")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load technologies");
        return response.json() as Promise<Technologiese[]>;
      })
      .then((data) => {
        if (!cancelled) setTechnologies(data);
      })
      .catch(() => toast.error("Unable to load technologies right now."))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Logged-in users get server persistence. LocalStorage remains the instant fallback.
  useEffect(() => {
    if (!session?.user || technologies.length === 0) return;

    let cancelled = false;

    fetch("/api/stack", { credentials: "include" })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load saved stack");
        return response.json() as Promise<{ technologyIds: string[] }>;
      })
      .then(({ technologyIds }) => {
        if (cancelled || technologyIds.length === 0) return;
        const restored = technologyIds
          .map((id) => technologies.find((technology) => technology.id === id))
          .filter((technology): technology is Technologiese =>
            Boolean(technology),
          );
        setStack(restored);
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, [session?.user?.id, technologies]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stack));
  }, [stack]);

  const syncStack = async (nextStack: Technologiese[]) => {
    if (!session?.user) return;

    try {
      await fetch("/api/stack", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          technologyIds: nextStack.map((item) => item.id),
        }),
      });
    } catch {
      // LocalStorage keeps the visible stack usable even when the API is unavailable.
    }
  };

  const addToStack = (technology: Technologiese) => {
    if (!session?.user) {
      toast.info("Sign in to save technologies to your stack.");
      return;
    }

    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    const next = [...stack, technology];
    setStack(next);
    void syncStack(next);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (id: Technologiese["id"]) => {
    const removed = stack.find((item) => item.id === id);
    const next = stack.filter((item) => item.id !== id);
    setStack(next);
    void syncStack(next);
    toast.success(`${removed?.name ?? "Technology"} removed.`);
  };

  const allRemoveFromStack = () => {
    setStack([]);
    if (session?.user) {
      void fetch("/api/stack", { method: "DELETE", credentials: "include" });
    }
    toast.success("Stack cleared successfully.");
  };

  const categories = useMemo(
    () =>
      Array.from(
        new Set(technologies.map((technology) => technology.category)),
      ),
    [technologies],
  );

  return (
    <TeckContext.Provider
      value={{
        session,
        technologies,
        categories,
        loading,
        setLoading,
        stack,
        setStack,
        addToStack,
        removeFromStack,
        allRemoveFromStack,
        isPending,
      }}
    >
      {children}
    </TeckContext.Provider>
  );
};

export const useTech = () => {
  const context = React.useContext(TeckContext);

  if (!context) {
    throw new Error("useTech must be used inside TechProvider");
  }

  return context;
};

export default TechProvider;
