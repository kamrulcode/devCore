import BannerImg from "../../assets/banner-stack.png";
export default function Banner() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-8 my-24 items-center">
      <div className="col-span-7">
        <h1 className="font-Inter font-extrabold text-6xl leading-15 mb-6 tracking-[-1.5px]">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-prime via-secs to-acce bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="font-Jakarta text-lg leading-7 max-w-7/12 mb-10">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-5">
          <div
            className="btn  bg-linear-to-r
  from-prime
  via-secs
  to-acce
  text-white rounded-2xl"
          >
            Explore Technologies
          </div>
          <div className="btn">Learn More</div>
        </div>
      </div>
      <div className="col-span-5">
        <img className="w-full" src={BannerImg} alt="" />
      </div>
    </div>
  );
}
