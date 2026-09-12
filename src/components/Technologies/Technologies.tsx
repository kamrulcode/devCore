import { Suspense, useEffect, useState } from "react";
import Technologie from "../Technologie/Technologie";
import type { Technologiese } from "../../type/type";
import { Slide, toast } from "react-toastify";
import Loader from "../Loader/Loader";

const fetchTechnologies = async (): Promise<Technologiese[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

export default function Technologies() {
  const [teachnologiesData] = useState(() => fetchTechnologies());
  const [stack, setStack] = useState<Technologiese[]>(() => {
    const savedStack = localStorage.getItem("technologyStack");

    if (!savedStack) {
      return [];
    }

    return JSON.parse(savedStack) as Technologiese[];
  });

  const addToStack = (technology: Technologiese) => {
    const alreadyExists = stack.some((item) => item.id === technology.id);

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`, {
        position: "bottom-right",
        autoClose: 3000,
        theme: "dark",
        transition: Slide,
        style: {
          background: "linear-gradient(135deg, #001F3F, #0066FF)",
          color: "#FFFFFF",
        },
      });

      return;
    }

    setStack((prev) => {
      if (prev.some((item) => item.id === technology.id)) {
        return prev;
      }

      return [...prev, technology];
    });

    toast.success(`${technology.name} Added successfully`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,

      style: {
        background: "linear-gradient(135deg, #001F3F, #7C3AED )",
        color: "#FFFFFF",
      },
    });
  };

  useEffect(() => {
    localStorage.setItem("technologyStack", JSON.stringify(stack));
  }, [stack]);

  const removeFromStack = (id: Technologiese["id"]) => {
    setStack((prev) => prev.filter((item) => item.id !== id));

    const removeItem = stack.find((remove) => remove.id === id);

    toast.success(
      ` ${removeItem ? removeItem.name : "Can't find"} Remove successfully`,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,

        style: {
          background: "linear-gradient(135deg, #001F3F,  #7C3AED )",
          color: "#ff5988",
        },
      },
    );
  };

  const allRemoveFromStack = () => {
    setStack([]);
    toast.success(` Remove All successfully`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,

      style: {
        background: "linear-gradient(135deg, #001F3F,  #7C3AED )",
        color: "#ff5988",
      },
    });
  };

  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center mb-80">
            <Loader />
          </div>
        }
      >
        <Technologie
          teachnologiesData={teachnologiesData}
          stack={stack}
          addToStack={addToStack}
          removeFromStack={removeFromStack}
          allRemoveFromStack={allRemoveFromStack}
        />
      </Suspense>
    </div>
  );
}
