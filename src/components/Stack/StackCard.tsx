import { IoClose } from "react-icons/io5";
import type { Technologiese } from "../../type/type";

interface CardProps {
  technology: Technologiese;
  removeFromStack: (id: Technologiese["id"]) => void;
}

export default function StackCard({ technology, removeFromStack }: CardProps) {
  return (
    <div
      key={technology.id}
      className="flex items-center justify-between rounded-md  p-3  transition-all duration-300 hover:-translate-y-0.5 leading-4"
    >
      <div className="flex items-center gap-3  ">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12  flex justify-center items-center   p-2 rounded-lg "
          style={{ background: `${technology.theme.color + "40"}` }}
        />

        <div className="flex flex-col ">
          <span className="font-medium text-textPrimeLight">
            {technology.name}
          </span>
          <span className="font-normal text-xs text-textLight">
            {technology.category}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => removeFromStack(technology.id)}
        className="rounded-lg border border-violet-200 bg-prime px-3 py-2 text-sm font-medium  transition "
      >
        <IoClose className="w-8 h-8 text-gray-500 hover:text-close" />
      </button>
    </div>
  );
}
