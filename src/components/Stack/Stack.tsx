import { Button, Card } from "@heroui/react";
import {
  FiBox,
  FiChevronDown,
  FiChevronUp,
  FiLayers,
  FiTrash2,
} from "react-icons/fi";
import { useState, useContext } from "react";
import type { Technologiese } from "../../type/type";
import StackCard from "./StackCard";
import { useTech } from "../../context/TechProvider";

// interface Props {
//   stack: Technologiese[];
//   removeFromStack: (id: Technologiese["id"]) => void;
//   allRemoveFromStack: () => void;
// }

export default function Stack() {
  const [expanded, setExpanded] = useState(false);
  const { stack, removeFromStack, allRemoveFromStack, session } = useTech();

  return (
    <Card
      className={` border border-slate-200 bg-white shadow-xl  shadow-slate-900/5 lg:rounded-xl rounded-b-none  ${expanded ? " bottom-0 z-50  sm:w-[390px]  w-73 " : ""}`}
    >
      <Card.Content className="p-0">
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="flex w-full items-center justify-between p-5 text-left lg:cursor-default lg:h-20 h-10 "
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-fuchsia-100 text-violet-600">
              <FiLayers size={21} />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">
                Your Stack
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">
                {stack.length
                  ? `${stack.length} technology selected`
                  : "No technology selected yet"}
              </p>
            </div>
          </div>
          <span className="lg:hidden text-slate-400">
            {expanded ? <FiChevronDown size={20} /> : <FiChevronUp size={20} />}
          </span>
        </button>

        <div
          className={`${expanded ? "block" : "hidden"} max-h-[58vh] overflow-y-auto px-4 pb-4 lg:block lg:max-h-none`}
        >
          {stack.length === 0 ? (
            <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl bg-slate-50 px-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
                <FiBox size={24} />
              </div>
              <p className="mt-4 font-semibold text-slate-700">
                Your stack is empty
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Choose technologies from the cards to build your stack.
              </p>
            </div>
          ) : (
            <div className="space-y-1 rounded-2xl bg-slate-50 p-2">
              {stack.map((technology) => (
                <StackCard key={technology.id} technology={technology} />
              ))}
            </div>
          )}

          <Button
            fullWidth
            variant="outline"
            isDisabled={!session?.user || stack.length === 0}
            onPress={allRemoveFromStack}
            className="mt-4 h-11 border-red-200 font-bold text-red-500 hover:bg-red-50"
          >
            <FiTrash2 size={16} /> Remove All
          </Button>

          {!session?.user && (
            <p className="mt-3 text-center text-xs leading-5 text-slate-400">
              Sign in to save your stack across sessions.
            </p>
          )}
        </div>
      </Card.Content>
    </Card>
  );
}
