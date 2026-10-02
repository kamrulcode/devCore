import { FiX } from "react-icons/fi";

import type { Technologiese } from "../../type/type";
import { useTech } from "../../context/TechProvider";

interface Props {
  technology: Technologiese;
}

export default function StackCard({ technology }: Props) {
  const { session, removeFromStack } = useTech();

  return (
    <div className="flex items-center justify-between rounded-xl p-3 transition hover:bg-white hover:shadow-sm">
      <div className="flex min-w-0 items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg p-2"
          style={{ background: `${technology.theme.color}22` }}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-6 w-6 object-contain"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-slate-700">
            {technology.name}
          </p>
          <p className="text-xs text-slate-400">{technology.category}</p>
        </div>
      </div>
      <button
        type="button"
        disabled={!session?.user}
        onClick={() => removeFromStack(technology.id)}
        className="ml-3 rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label={`Remove ${technology.name}`}
      >
        <FiX size={17} />
      </button>
    </div>
  );
}
