import { useTech } from "../../context/TechProvider";

import Loader from "../Loader/Loader";
import Technologie from "../Technologie/Technologie";

export default function Technologies() {
  const { loading, categories } = useTech();

  if (loading) {
    return (
      <section id="technologies" className="contain-width py-24">
        <div className="flex justify-center py-20">
          <Loader />
        </div>
      </section>
    );
  }

  return (
    <section
      id="technologies"
      className="relative border-y border-slate-100 bg-white py-20 sm:py-28"
    >
      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-violet-100/70 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-pink-100/70 blur-3xl" />

      <div className="contain-width relative">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-violet-600">
              Explore the ecosystem
            </div>
            <h2 className="font-jakarta text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Explore the{" "}
              <span className="brand-gradient-text">Technologies</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Pick technologies by category and build a stack that matches your
              development workflow.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <Technologie />
      </div>
    </section>
  );
}
