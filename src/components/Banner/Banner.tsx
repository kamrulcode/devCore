import BannerImg from "../../assets/banner-stack.png";
export default function Banner() {
  return (
    <div className="container mx-auto sm:grid sm:grid-cols-12 sm:gap-8  sm:my-24 my-14 items-center w-[90%] md:text-left text-center">
      <div className="col-span-7 ">
        <h1 className="font-Inter font-extrabold lg:text-7xl md:text-5xl  text-4xl sm:leading-20 leading-10 sm:mb-6 mb-2 tracking-[-1.5px]">
          Build Your Ideal <br />
          <span className="prime-gradient">Development Stack</span>
        </h1>
        <p className="font-Jakarta sm:text-lg text-sm leading-7 sm:max-w-7/12 sm:mb-14 mb-9 text-textPrime">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-5 sm:justify-start justify-center">
          <button className="rounded-lg bg-violet-600 px-5 py-2.5 font-medium text-white transition hover:bg-violet-700">
            Explore Technologies
          </button>

          <button className="rounded-lg border border-violet-200 bg-white px-5 py-2.5 font-medium text-violet-600 transition hover:bg-violet-50">
            Learn More
          </button>
        </div>
      </div>
      <div className="col-span-5">
        <img className="w-full" src={BannerImg} alt="" />
      </div>
    </div>
  );
}
