import { Suspense, useState } from "react";
import Technologie from "../Technologie/Technologie";
import type { Technologiese } from "../../type/type";

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
  };

  const removeFromStack = (id: Technologiese["id"]) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div>
      <Suspense fallback={"loading......"}>
        <Technologie
          teachnologiesData={teachnologiesData}
          stack={stack}
          addToStack={addToStack}
          removeFromStack={removeFromStack}
        />
      </Suspense>
    </div>
  );
}
