import { Suspense, useState } from "react";
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
  const [stack, setStack] = useState<Technologiese[]>([]);

  const addToStack = (technology: Technologiese) => {
    setStack((prev) => {
      if (prev.some((item) => item.id === technology.id)) {
        return prev;
      }

      return [...prev, technology];
    });

    toast.success(`${technology.name} Added successfully`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,

      style: {
        background: "linear-gradient(135deg, #001F3F, #0066FF)",
        color: "#FFFFFF",
      },
    });
  };

  const removeFromStack = (id: Technologiese["id"]) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
    toast.success(` Remove successfully`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,

      style: {
        background: "linear-gradient(135deg, #001F3F, #0066FF)",
        color: "#FFFFFF",
      },
    });
  };

  const allRemoveFromStack = () => {
    setStack([]);
    toast.success(` Remove All successfully`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,

      style: {
        background: "linear-gradient(135deg, #001F3F, #0066FF)",
        color: "#FFFFFF",
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
