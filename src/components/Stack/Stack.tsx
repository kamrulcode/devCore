"use client";

import type { Technologiese } from "../../type/type";
import StackCard from "./StackCard";

import { RiStackLine } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

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
  const [fixstack, setFixstack] = useState(false);

  const stackHandle = () => {
    setFixstack((prev) => !prev);
  };

  return (
    <div
      className={`
        bg-prime
        shadow-prime

        /* =========================
           MOBILE
           ========================= */

        fixed
        bottom-0
        left-0
        right-0
        z-50

        w-full
        h-[40vh]

        rounded-t-2xl
        p-4

        transition-transform
        duration-300
        ease-in-out

        ${fixstack ? "translate-y-0" : "translate-y-[calc(100%-50px)]"}

        /* =========================
           TABLET / MEDIUM
           sm → lg
           ========================= */

        sm:left-auto
        sm:right-4
        sm:w-[360px]
        sm:rounded-t-2xl
        sm:rounded-b-none

        md:right-6
        md:w-[380px]

        /* =========================
           LARGE SCREEN
           lg+
           ========================= */

        lg:static
        lg:w-auto
        lg:h-auto
        lg:translate-y-0
        lg:rounded-lg
        lg:p-4

        xl:p-6
      `}
    >
      {/* Toggle Button */}
      <button
        type="button"
        onClick={stackHandle}
        aria-label={fixstack ? "Collapse stack" : "Expand stack"}
        className="
          absolute

          -top-10

          left-1/2
          -translate-x-1/2

          flex
          h-10
          w-20
          items-center
          justify-center

          rounded-t-xl

          border
          border-gray-200
          border-b-0

          bg-prime

          text-textPrimeLight

          shadow-[0_-4px_10px_rgba(0,0,0,0.08)]

          transition

          hover:bg-gray-50

          hover:text-primary

          /* Hide button on large screens */
          lg:hidden
        "
      >
        {fixstack ? (
          <IoIosArrowDown className="text-xl" />
        ) : (
          <IoIosArrowUp className="text-xl" />
        )}
      </button>

      {/* Header */}
      <div className="relative mb-4">
        <div
          className="
            mb-1
            flex
            items-center
            gap-2
            text-xl
            font-semibold
            text-textPrimeLight

            xl:text-2xl
          "
        >
          <RiStackLine />

          <h2>Your Stack</h2>
        </div>

        {stack.length === 0 ? (
          <p className="text-sm text-gray-500 xl:text-base">
            No Technology Selected yet.
          </p>
        ) : (
          <p className="text-gray-500">
            {`${stack.length} Technology Selected.`}
          </p>
        )}
      </div>

      {/* Empty Stack */}
      {stack.length === 0 ? (
        <div
          className="
            flex
            min-h-52
            flex-col
            items-center
            justify-center

            sm:min-h-80
          "
        >
          <FiBox className="h-8 w-8 text-gray-500" />

          <p className="text-gray-500">Your Stack is empty.</p>
        </div>
      ) : (
        <>
          {/* Stack Items */}
          <div
            className="
              h-[calc(40vh-170px)]

              space-y-3
              overflow-y-auto
              pr-1

              /* Normal height on tablet */
              sm:h-35

              /* Normal height on large */
              lg:h-auto
              lg:overflow-hidden
            "
          >
            {stack.map((technology) => (
              <StackCard
                key={technology.id}
                technology={technology}
                removeFromStack={removeFromStack}
              />
            ))}
          </div>

          {/* Remove All */}
          <button
            type="button"
            onClick={allRemoveFromStack}
            className="
              mt-4
              w-full
              rounded-lg

              border
              border-red-200

              bg-white

              px-3
              py-2

              text-lg
              font-medium
              text-close

              transition

              hover:bg-red-50

              sm:mt-6
            "
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}
