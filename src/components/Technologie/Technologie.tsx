import { use } from "react";
import TechnologiCard from "./TechnologiCard";
import type { Technologiese } from "../../type/type";
import Stack from "../Stack/Stack";

interface TechProps {
  teachnologiesData: Promise<Technologiese[]>;
  stack: Technologiese[];
  addToStack: (technology: Technologiese) => void;
  removeFromStack: (id: Technologiese["id"]) => void;
}

export default function Technologie({
  teachnologiesData,
  stack,
  addToStack,
  removeFromStack,
}: TechProps) {
  const technologies = use(teachnologiesData);

  return (
    <div className="container mx-auto grid grid-cols-4 gap-8">
      <div className="col-span-3 grid grid-cols-3 gap-5">
        {technologies.map((technologie) => (
          <TechnologiCard
            key={technologie.id}
            technologie={technologie}
            isAdded={stack.some((item) => item.id === technologie.id)}
            addToStack={addToStack}
          />
        ))}
      </div>

      <aside>
        <Stack stack={stack} removeFromStack={removeFromStack} />
      </aside>
    </div>
  );
}
