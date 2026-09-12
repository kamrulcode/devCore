import { FaGithub, FaRegCopyright } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import Back from "../../assets/back.svg";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";

export default function Footer() {
  return (
    <footer
      className=" border-t-2 border-muted pt-10"
      style={{
        backgroundImage: `url(${Back})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <div className=" container mx-auto w-[90%] text-textSupport">
        <div className=" sm:grid sm:grid-cols-5 mb-14">
          <div className="sm:col-span-2 sm:inline-block flex flex-col items-center">
            <a
              className="w-10 h-10 flex items-center font-bold text-2xl gap-3 "
              href="#"
            >
              <img className="rounded-lg" src={Logo} alt="DevStack" />
              <p className="text-textPrime">
                dev<span className="text-action">Core</span>
              </p>
            </a>
            <p className="sm:w-3/5 my-6 sm:text-left text-center tracking-wider">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="sm:justify-start flex gap-5 justify-center">
              <FaGithub />
              <FaXTwitter />
              <BiLogoLinkedin />
            </div>
          </div>
          <div className="hidden sm:block mt-3">
            <h4 className="font-Jakarta  font-bold leading-4 text-textPrimeLight text-sm">
              PRODUCT
            </h4>
            <ul className="text-sm">
              <li className="my-3">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Technologies</a>
              </li>
              <li className="my-3">
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
          <div className="hidden sm:block mt-3">
            <h4 className="font-Jakarta  font-bold leading-4 text-textPrimeLight text-sm">
              COMPANY
            </h4>
            <ul className="text-sm">
              <li className="my-3">
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li className="my-3">
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="hidden sm:block  mt-3 ">
            <h4 className="font-Jakarta text-textPrimeLight text-sm font-bold leading-4">
              LEGAL
            </h4>
            <ul className="text-sm">
              <li className="my-3">
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between my-10 text-textLight">
          <p className="flex items-center gap-0.5">
            <FaRegCopyright /> 2026 Dev Stack. All rights reserved.
          </p>
          <p>Privacy | Terms</p>
        </div>
      </div>
    </footer>
  );
}
