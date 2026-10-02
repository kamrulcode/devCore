import type { Technologiese } from "../../type/type";

import Stack from "../Stack/Stack";
import TechnologiCard from "./TechnologiCard";
import { useTech } from "../../context/TechProvider";

interface Props {
  technologies: Technologiese[];
  stack: Technologiese[];
  addToStack: (technology: Technologiese) => void;
  removeFromStack: (id: Technologiese["id"]) => void;
  allRemoveFromStack: () => void;
}

export default function Technologie() {
  const {
    technologies,
    stack,
    addToStack,
    removeFromStack,
    allRemoveFromStack,
  } = useTech();
  return (
    <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_340px]">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologiCard
            key={technology.id}
            technologie={technology}
            isAdded={stack.some((item) => item.id === technology.id)}
          />
        ))}
      </div>

      <aside className="lg:sticky lg:top-24 lg:self-start fixed bottom-0 md:w-97.5right-5 w-73  ">
        <Stack />
      </aside>
    </div>
  );
}
