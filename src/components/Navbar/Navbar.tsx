import Logo from "../../assets/logo-text.png";
import menu from "../../assets/hamburger.png";
import { useState } from "react";
export default function Navbar() {
  const [active, setActive] = useState("home");
  return (
    <div className="container mx-auto sticky top-0 navbar bg-base-100 shadow-sm">
      <div className="navbar-start md:w-1/2 w-5/6 md:justify-start justify-between">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <img src={menu} alt="" />
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow md:text-sm text-[9px] leading-5"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Technologies</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className="" href="#">
          <img src={Logo} alt="DevStack" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="bg-blue-600 text-white">
            <a>Home</a>
          </li>
          <li>
            <a>Technologies</a>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end  md:text-sm text-[9px]">
        <a className="btn rounded-2xl text-sm font-medium text-gray-700 hover:text-black">
          Sign In
        </a>
        <a className="btn  bg-linear-to-r from-prime via-secs to-acce text-white  rounded-lg px-5 py-2.5 text-sm font-medium transition hover:bg-gray-800">
          Sign Up
        </a>
      </div>
    </div>
  );
}
