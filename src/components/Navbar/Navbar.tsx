import Logo from "../../assets/logo-text.png";
import menu from "../../assets/hamburger.png";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const menuItems = ["Home", "Technologies", "About", "Projects", "Contact"];
  return (
    <div className="container mx-auto sticky top-0 navbar bg-base-100 shadow-sm py-4 z-20">
      <div className="navbar-start lg:w-1/2 w-5/6 lg:justify-start justify-between">
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
        <ul className="flex gap-6 text-lg ">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={`cursor-pointer px-4 py-2 rounded-lg ${
                active === item
                  ? " prime-gradient font-medium"
                  : "text-gray-600 hover:text-secs-light "
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end ">
        <button className="rounded-lg border border-violet-200 bg-white md:px-3 lg:px-5 px-2 py-2.5 font-medium text-violet-600 transition hover:bg-violet-50 md:text-lg text-sm mr-3">
          Sign In
        </button>
        <button className="rounded-lg bg-violet-600 md:px-3 lg:px-5 px-2 py-2.5 font-medium text-white transition hover:bg-violet-700 md:text-lg text-xs">
          Sign Up
        </button>
      </div>
    </div>
  );
}
