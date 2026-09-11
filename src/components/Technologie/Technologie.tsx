import { use } from "react";
import TechnologiCard from "./TechnologiCard";
import type { Technologiese } from "../../type/type";
import Stack from "../Stack/Stack";

interface TechProps {
  teachnologiesData: Promise<Technologiese[]>;
  stack: Technologiese[];
  addToStack: (technology: Technologiese) => void;
  removeFromStack: (id: Technologiese["id"]) => void;
  allRemoveFromStack: () => void;
}

export default function Technologie({
  teachnologiesData,
  stack,
  allRemoveFromStack,
  addToStack,
  removeFromStack,
}: TechProps) {
  const technologies = use(teachnologiesData);

  return (
    <div className="container mx-auto mb-32">
      <h2 className="font-bold text-4xl leading-4 font-Jakarta ">
        Explore the
        <span className=" prime-gradient ">Technologies</span>
      </h2>
      <p className="font-normal text-lg leading-6 font-Jakarta mb-14 mt-6">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-3 grid grid-cols-3 gap-6">
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
          <Stack
            stack={stack}
            removeFromStack={removeFromStack}
            allRemoveFromStack={allRemoveFromStack}
          />
        </aside>
      </div>
    </div>
  );
}
