import Logo from "../../assets/logo.png";
import menu from "../../assets/hamburger.png";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const menuItems = ["Home", "Technologies", "About", "Projects", "Contact"];
  return (
    <div className="container mx-auto sticky top-0 navbar bg-prime  py-4 z-20">
      <div className="navbar-start lg:w-1/2 w-5/6 lg:justify-start justify-between">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
        <a
          className="w-10 h-10 flex items-center font-bold text-2xl gap-3 "
          href="#"
        >
          <img className="rounded-lg" src={Logo} alt="DevStack" />
          <p className="text-textPrime">
            dev<span className="text-action">Core</span>
          </p>
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
        <a className="rounded-lg text-textSupport  font-medium   md:px-3 lg:px-5 px-2 py-2.5   transition hover:bg-actionLight hover:text-textPrime mr-3 sm:text-base text-sm ">
          Sign In
        </a>
        <button className="rounded-lg bg-action font-medium  md:px-3 lg:px-5 px-2 py-2.5  text-white transition hover:bg-hover sm:text-base text-sm ">
          Sign Up
        </button>
      </div>
    </div>
  );
}
