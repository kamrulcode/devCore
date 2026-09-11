import { useState } from "react";
// import { Menu, X } from "lucide-react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-gray-700 transition hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {/* {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />} */}
          {menuOpen ? "X" : "Menu"}
        </button>

        {/* Desktop Left Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            About
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Projects
          </a>
        </div>

        {/* Center Logo / Icon */}
        <a href="#" className="absolute left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-bold text-white lg:h-12 lg:w-12">
            K
          </div>
        </a>

        {/* Desktop Right */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Contact
          </a>

          <button className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
            Let's Talk
          </button>
        </div>

        {/* Mobile Right Button */}
        <button className="rounded-md bg-black px-3 py-1.5 text-xs font-medium text-white transition hover:bg-gray-800 sm:px-4 sm:py-2 sm:text-sm lg:hidden">
          Let's Talk
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-200 transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-4 py-4 sm:px-6">
          <a
            href="#"
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Home
          </a>

          <a
            href="#"
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            About
          </a>

          <a
            href="#"
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Projects
          </a>

          <a
            href="#"
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
