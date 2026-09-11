import { FaGithub, FaInstagram, FaRegCopyright } from "react-icons/fa";
import Logo from "../../assets/logo-text.png";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="container mx-auto w-[90%] text-textLight">
      <div className=" sm:grid sm:grid-cols-5 mb-14">
        <div className="sm:col-span-2 sm:inline-block flex flex-col items-center">
          <img src={Logo} alt="" />
          <p className="sm:w-3/4 my-6 sm:text-left text-center">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="sm:justify-start flex gap-5 justify-center">
            <FaGithub />
            <FaXTwitter />
            <BiLogoLinkedin />
            <FaInstagram />
          </div>
        </div>
        <div className="hidden sm:block ">
          <h4 className="font-Jakarta  font-bold leading-4 text-textSecs text-sm">
            PRODUCT
          </h4>
          <ul className="text-sm">
            <li className="my-4">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li className="my-4">
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>
        <div className="hidden sm:block text-textSecs">
          <h4 className="font-Jakarta  font-bold leading-4 text-textSecs text-sm">
            COMPSNY
          </h4>
          <ul className="text-sm">
            <li className="my-4">
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li className="my-4">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="hidden sm:block text-textSecs">
          <h4 className="font-Jakarta text-textSecs text-smfont-bold leading-4">
            LEGAL
          </h4>
          <ul className="text-sm">
            <li className="my-4">
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between my-10">
        <p className="flex items-center gap-0.5">
          <FaRegCopyright /> 2026 Dev Stack. All rights reserved.
        </p>
        <p>Privacy | Terms</p>
      </div>
    </div>
  );
}
