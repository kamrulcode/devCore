import { Button, Card } from "@heroui/react";

import { FiStar } from "react-icons/fi";
import type { Technologiese } from "../../type/type";
import { useNavigate } from "react-router";
import { useTech } from "../../context/TechProvider";

interface Props {
  technologie: Technologiese;
  isAdded: boolean;
}

export default function TechnologiCard({ technologie, isAdded }: Props) {
  const navigate = useNavigate();

  const { addToStack, session } = useTech();

  return (
    <Card className="group h-full border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/10">
      <Card.Content className="flex h-full flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl p-2.5 transition group-hover:scale-105"
            style={{ background: `${technologie.theme.color}20` }}
          >
            <img
              className="h-7 w-7 object-contain"
              src={technologie.icon}
              alt={`${technologie.name} icon`}
              loading="lazy"
            />
          </div>
          <span
            className="rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider"
            style={{
              color: technologie.theme.color,
              background: `${technologie.theme.color}15`,
            }}
          >
            {technologie.badge}
          </span>
        </div>

        <h3 className="mt-6 text-xl font-extrabold text-slate-900">
          {technologie.name}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
          {technologie.description}
        </p>

        <div className="mt-6 grid grid-cols-3 gap-2 border-y border-slate-100 py-4 text-xs">
          <div>
            <p className="text-slate-400">Category</p>
            <p className="mt-1 font-semibold text-slate-700">
              {technologie.category}
            </p>
          </div>
          <div>
            <p className="text-slate-400">Level</p>
            <p className="mt-1 truncate font-semibold text-slate-700">
              {technologie.difficulty}
            </p>
          </div>
          <div>
            <p className="text-slate-400">Rating</p>
            <p className="mt-1 flex items-center gap-1 font-semibold text-slate-700">
              <FiStar size={13} className="text-amber-400" />{" "}
              {technologie.rating}
            </p>
          </div>
        </div>

        <Button
          fullWidth
          className={
            isAdded
              ? "mt-auto h-11 bg-slate-100 font-bold text-slate-400"
              : "mt-auto h-11 bg-action hover:bg-hover text-white shadow-md shadow-violet-500/15"
          }
          isDisabled={isAdded}
          onPress={() => {
            if (session?.user) addToStack(technologie);
            else navigate("/signin");
          }}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </Button>
      </Card.Content>
    </Card>
  );
}
