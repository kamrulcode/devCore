import { TiStarFullOutline } from "react-icons/ti";
import type { Technologiese } from "../../type/type";

interface Technologie {
  technologie: Technologiese;
  isAdded: boolean;
  addToStack: (technology: Technologiese) => void;
}

export default function TechnologiCard({
  technologie,
  isAdded,
  addToStack,
}: Technologie) {
  return (
    <div className=" xl:p-6 p-4 rounded-lg  bg-prime  shadow-prime transition-all duration-300 hover:-translate-y-1 hover:shadow-middle sm:mb-0 mb-2 flex flex-col justify-between">
      <div className="flex justify-between lg:items-center xl:items-start">
        <div
          className=" xl:w-12 xl:h-12 w-10 flex justify-center items-center  h-10 p-2 rounded-lg "
          style={{ background: `${technologie.theme.color + "40"}` }}
        >
          <img className="w-7" src={technologie.icon} alt="Techonolgy Icon" />
        </div>
        <p
          className="font-Jakarta font-bold  text-xs leading-4"
          style={{ color: technologie.theme.color }}
        >
          {technologie.badge}
        </p>
      </div>
      <h3 className="font-bold xl:text-2xl text-xl leading-7 mt-5 text-textPrimeLight">
        {technologie.name}
      </h3>
      <p className="xl:text-base text-sm font-Jakarta font-normal  leading-5 mt-4 text-textSupport  tracking-wider">
        {technologie.description}
      </p>
      <div className="flex xl:text-sm text-xs justify-between items-center pt-8 pb-6 ">
        <p className="text-textLight">{technologie.category}</p>{" "}
        <p className="text-textLight">{technologie.difficulty}</p>
        <div className="flex items-center gap-1 text-textLight">
          <TiStarFullOutline
            style={{ color: "#f9731695", fill: "#f9731695" }}
            size={16}
          />
          {technologie.rating}
        </div>
      </div>
      <button
        type="button"
        disabled={isAdded}
        onClick={() => addToStack(technologie)}
        className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-muted text-textMuted"
            : "bg-action text-white hover:bg-hover"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
