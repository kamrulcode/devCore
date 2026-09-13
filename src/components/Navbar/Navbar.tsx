import Logo from "../../assets/logo.png";
import menu from "../../assets/hamburger.png";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const menuItems = ["Home", "Technologies", "About", "Projects", "Contact"];
  return (
    <div className="containwidth sticky top-0 navbar bg-prime  py-4 z-20">
      <div className="navbar-start md:w-1/2 w-3/4 md:justify-start justify-between">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <img src={menu} alt="" />
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-prime rounded-box z-1 mt-3 w-52 p-2 shadow md:text-sm text-[9px] leading-5"
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
        <div className="flex items-center font-bold sm:text-2xl text-xl sm:gap-3 gap-1">
          <a href="#">
            <img className="rounded-lg sm:w-10 w-7" src={Logo} alt="DevStack" />
          </a>
          <a className="text-textPrime">
            dev<span className="text-action">Core</span>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="flex gap-2 text-base ">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={`cursor-pointer px-2 py-1 rounded-lg ${
                active === item
                  ? " text-action font-medium"
                  : "text-textSupport font-medium hover:text-textPrime "
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/*  */}
      <div className="navbar-end ">
        <a className="rounded-lg text-textSupport   font-medium   md:px-3 lg:px-5  px-2 md:py-2 py-2.5   transition hover:bg-actionLight hover:text-textPrime  mr-1 md:text-sm  text-xs ">
          Sign In
        </a>
        <button className="rounded-lg bg-action font-medium  lg:px-5 md:px-3 px-2 md:py-2 py-1.5  text-white transition hover:bg-hover md:text-sm  text-xs ">
          Sign Up
        </button>
      </div>
    </div>
  );
}
