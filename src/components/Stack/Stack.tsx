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
    <div className="rounded-lg  bg-prime xl:p-6 p-4 shadow-prime ">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1 xl:text-2xl text-xl font-semibold text-textPrimeLight">
          <RiStackLine />
          <h2 className="">Your Stack</h2>
        </div>

        {stack.length === 0 ? (
          <p className="text-gray-500 xl:text-base text-sm">
            No Technology Selected yet.
          </p>
        ) : (
          <p className="text-gray-500">{`${stack.length} Technology Selected.`}</p>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="flex flex-col items-center  justify-center sm:min-h-80 min-h-52">
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
