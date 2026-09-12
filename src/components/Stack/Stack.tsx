import type { Technologiese } from "../../type/type";
import StackCard from "./StackCard";
import { RiStackLine } from "react-icons/ri";
import { FiBox } from "react-icons/fi";

interface StackProps {
  stack: Technologiese[];
  removeFromStack: (id: Technologiese["id"]) => void;
  allRemoveFromStack: () => void;
}

export default function Stack({
  stack,
  allRemoveFromStack,
  removeFromStack,
}: StackProps) {
  return (
    <div className="rounded-lg  bg-prime p-6 shadow-prime ">
      <div className="mb-4">
        <h2 className="mb-1 text-2xl font-semibold flex items-center gap-3 text-textPrimeLight">
          {" "}
          <RiStackLine /> Your Stack
        </h2>
        {stack.length === 0 ? (
          <p className="text-gray-500">No Technology Selected yet.</p>
        ) : (
          <p className="text-gray-500">{`${stack.length} Technology Selected.`}</p>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="flex flex-col items-center justify-center  min-h-56">
          <FiBox className="w-8 h-8 text-gray-500" />
          <p className="text-gray-500">Your Stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((technology) => (
            <StackCard
              key={technology.id}
              technology={technology}
              removeFromStack={removeFromStack}
            />
          ))}

          <button
            type="button"
            onClick={allRemoveFromStack}
            className="w-full mt-6 rounded-lg border border-red-200 bg-white px-3 py-2 text-lg font-medium text-close transition hover:bg-red-200"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}
