import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useSession } from "../../lib/auth-client";
import type { Technologiese } from "../../type/type";
import Loader from "../Loader/Loader";
import Technologie from "../Technologie/Technologie";

const STORAGE_KEY = "technologyStack";

function readLocalStack(): Technologiese[] {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value ? (JSON.parse(value) as Technologiese[]) : [];
  } catch {
    return [];
  }
}

export default function Technologies() {
  const { data: session } = useSession();
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
          .filter((technology): technology is Technologiese => Boolean(technology));
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
        body: JSON.stringify({ technologyIds: nextStack.map((item) => item.id) }),
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
    () => Array.from(new Set(technologies.map((technology) => technology.category))),
    [technologies],
  );

  if (loading) {
    return (
      <section id="technologies" className="contain-width py-24">
        <div className="flex justify-center py-20"><Loader /></div>
      </section>
    );
  }

  return (
    <section id="technologies" className="relative overflow-hidden border-y border-slate-100 bg-white py-20 sm:py-28">
      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-violet-100/70 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-pink-100/70 blur-3xl" />

      <div className="contain-width relative">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-violet-600">Explore the ecosystem</div>
            <h2 className="font-jakarta text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Explore the <span className="brand-gradient-text">Technologies</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Pick technologies by category and build a stack that matches your development workflow.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
                {category}
              </span>
            ))}
          </div>
        </div>

        <Technologie
          technologies={technologies}
          stack={stack}
          addToStack={addToStack}
          removeFromStack={removeFromStack}
          allRemoveFromStack={allRemoveFromStack}
        />
      </div>
    </section>
  );
}
