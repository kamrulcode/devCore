import BannerImg from "../../assets/banner-stack.png";
export default function Banner() {
  return (
    <div className="container mx-auto sm:grid sm:grid-cols-12 sm:gap-8  sm:my-24 my-14 items-center w-[90%] md:text-left text-center">
      <div className="col-span-7 ">
        <h1 className="text-textPrime font-Inter font-extrabold lg:text-7xl md:text-5xl  text-4xl sm:leading-20 leading-10 sm:mb-6 mb-2 tracking-[-1.5px]">
          Build Your <br />
          <span className="prime-gradient">Perfect Tech Stack </span>
        </h1>
        <p className="font-Jakarta sm:text-lg text-sm leading-7 sm:max-w-7/12 sm:mb-14 mb-9 text-textSupport font-medium tracking-wider">
          Create your own custom stack, explore different tools, and find the
          right technologies for your development workflow.
        </p>
        <div className="flex gap-5 sm:justify-start justify-center">
          <button className="rounded-lg bg-action px-5 py-2.5 font-medium text-white transition hover:bg-hover">
            Explore Technologies
          </button>

          <button className="rounded-lg border  text-textPrime  px-5 py-2.5 font-medium hover:bg-actionLight transition">
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
