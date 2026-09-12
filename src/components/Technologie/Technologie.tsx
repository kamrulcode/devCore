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
    <div className="container mx-auto mb-32 w-[90%] ">
      <h2 className="font-bold sm:text-4xl text-2xl leading-4 font-Jakarta text-textPrime ">
        Explore the <span className=" prime-gradient ">Technologies</span>
      </h2>
      <p className="font-medium sm:text-lg text-sm leading-6 font-Jakarta sm:mb-14 mb-8 sm:mt-6 mt-3 text-textSupport tracking-wider">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
        <div className="md:col-span-3 sm:col-span-2 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
