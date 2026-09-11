import { FaGithub, FaInstagram, FaRegCopyright } from "react-icons/fa";
import Logo from "../../assets/logo-text.png";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="container mx-auto">
      <div className=" grid grid-cols-5 mb-14">
        <div className="col-span-2">
          <img src={Logo} alt="" />
          <p className="w-4/5 my-6">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-5">
            <FaGithub />
            <FaXTwitter />
            <BiLogoLinkedin />
            <FaInstagram />
          </div>
        </div>
        <div className="">
          <h4 className="font-Jakarta text-xs font-bold leading-4">PRODUCT</h4>
          <ul>
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
        <div className="">
          <h4 className="font-Jakarta text-xs font-bold leading-4">COMPSNY</h4>
          <ul>
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
        <div className="">
          <h4 className="font-Jakarta text-xs font-bold leading-4">LEGAL</h4>
          <ul>
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
