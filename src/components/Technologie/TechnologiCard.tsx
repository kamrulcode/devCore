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
    <div className=" p-6 rounded-md  bg-white  shadow-small transition-all duration-300 hover:-translate-y-1 hover:shadow-middle">
      <div className="flex justify-between">
        <div className="w-10 flex justify-center items-center">
          <img className="w-7" src={technologie.icon} alt="" />
        </div>
        <p
          className="font-Jakarta font-semibold  text-xs leading-4"
          style={{ color: technologie.theme.color }}
        >
          {technologie.badge}
        </p>
      </div>
      <h3 className="font-bold text-lg leading-7 mt-5">{technologie.name}</h3>
      <p className="text-sm font-Jakarta font-normal  leading-5 mt-3">
        {technologie.description}
      </p>
      <div className="flex text-xs justify-between items-center pt-8 pb-6">
        <p className="">{technologie.category}</p>{" "}
        <p>{technologie.difficulty}</p>
        <div className="flex items-center gap-1">
          <TiStarFullOutline />
          {technologie.rating}
        </div>
      </div>
      <button
        type="button"
        disabled={isAdded}
        onClick={() => addToStack(technologie)}
        className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-200 text-gray-400"
            : "bg-violet-600 text-white hover:bg-violet-700"
        }`}
      >
        {isAdded ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
