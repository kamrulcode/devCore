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
    <div className=" p-5 rounded-md  bg-white  shadow-small transition-all duration-300 hover:-translate-y-1 hover:shadow-middle">
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
      <h3 className="font-bold text-lg leading-7">{technologie.name}</h3>
      <p className="text-xs font-Jakarta font-normal  leading-5 pt-5">
        {technologie.description}
      </p>
      <div className="flex text-xs justify-between pt-10 pb-6">
        <p className="">{technologie.category}</p>{" "}
        <p>{technologie.difficulty}</p>
        <div className="flex">
          <TiStarFullOutline />
          {technologie.rating}
        </div>
      </div>
      <button
        disabled={isAdded}
        onClick={() => addToStack(technologie)}
        className={`w-full  text-xs font-medium leading-4 px-6 py-3 uppercase ${
          isAdded
            ? "cursor-not-allowed bg-gray-300 text-gray-500"
            : "bg-acce text-white cursor-pointer "
        }`}
      >
        {isAdded ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
