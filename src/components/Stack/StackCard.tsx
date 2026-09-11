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
      <div className="flex items-center gap-3 ">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10"
        />

        <div className="flex flex-col ">
          <span className="font-medium">{technology.name}</span>
          <span className="font-normal text-xs">{technology.category}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => removeFromStack(technology.id)}
        className="rounded-md px-3 py-2 text-sm text-red-500 hover:bg-red-50"
      >
        Remove
      </button>
    </div>
  );
}
