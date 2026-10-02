import { Button, Skeleton } from "@heroui/react";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import Profile from "../../assets/profile.svg";
import { Link, useLocation } from "react-router";
import { signOut } from "../../lib/auth-client";
import { DevCoreLogo } from "../shared/DevCoreLogo";
import Stack from "../Stack/Stack";
import { useTech } from "../../context/TechProvider";

export default function Navbar() {
  const { session, isPending, stack } = useTech();

  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const location = useLocation();
  const handleClick = () => {
    setProfile(!profile);
  };

  const { pathname, hash } = useLocation();

  const isActive = (to: string) => {
    const [path, h] = to.split("#"); // "/#about" -> ["/", "about"]
    const targetHash = h ? `#${h}` : "";
    return pathname === (path || "/") && hash === targetHash;
  };

  const links = [
    { label: "Home", to: "/" },
    { label: "Technologies", to: "/#technologies" },
    { label: "About", to: "/#about" },
    // { label: "Projects", to: "/#projects" },
    { label: "Contact", to: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/90 bg-white/85 backdrop-blur-xl">
      <div className="contain-width flex h-18 items-center justify-between gap-6">
        <Link to="/" aria-label="DevCore home">
          <DevCoreLogo />
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary navigation"
        >
          {links.map((link) => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`relative py-2 text-sm font-semibold transition ${
                  active
                    ? "text-pink-500"
                    : "text-slate-700 hover:text-pink-500"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 w-6 rounded-full bg-action" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {isPending ? (
            <div className="flex items-center gap-3 ">
              <Skeleton className="h-6 w-18 rounded-lg" />
              <Skeleton className="h-6 w-18 rounded-lg " />
            </div>
          ) : session?.user ? (
            <>
              <div className="relative">
                <div
                  onClick={handleClick}
                  className="flex gap-2 justify-center items-center cursor-pointer"
                >
                  <span className="hidden max-w-32 truncate text-sm font-normal text-action xl:block">
                    Welcome{" "}
                    <span className="uppercase font-medium text-slate-900">
                      {session.user.name}{" "}
                    </span>
                  </span>
                  <button>
                    {session?.user.image ? (
                      <img
                        width="30"
                        height="30"
                        src={session?.user.image}
                        alt="profile"
                        className="rounded-lg cursor-pointer border-3 border-slate-300"
                      />
                    ) : (
                      <img
                        width="35"
                        height="35"
                        src={Profile}
                        alt="profile"
                        className="rounded-lg cursor-pointer border-3 border-slate-300"
                      />
                    )}
                  </button>
                </div>

                {profile && (
                  <div
                    id="profile"
                    className="absolute right-0 top-12 z-50 w-48 rounded-xl bg-white shadow-lg px-6"
                  >
                    <p className="font-semibold uppercase mb-2 border-b pb-1">
                      {session?.user?.name}
                    </p>
                    <p className="mb-4">
                      Total have{" "}
                      <span className="text-action"> {stack.length} Stack</span>
                    </p>

                    <div className="border-b pb-2">
                      {stack.map((s) => (
                        <div className="flex gap-1 mb-2 ">
                          <img width={20} src={s.icon} alt="icon" />
                          <h2 className="text-sm">{s.name}</h2>
                        </div>
                      ))}
                    </div>

                    <Button
                      size="sm"
                      onPress={() => void signOut()}
                      className="w-full  bg-action font-semibold text-white hover:bg-hover my-3"
                    >
                      Sign Out
                    </Button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/signin">
                <Button
                  size="sm"
                  variant="ghost"
                  className="font-semibold text-slate-700"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  size="sm"
                  className="bg-linear-to-r from-pink-500 to-violet-600 px-5 font-bold text-white shadow-lg shadow-pink-500/20"
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>
      </div>

      {open && (
        <>
          <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden flex justify-between">
            <nav className="flex  flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-1.5 text-sm font-semibold text-slate-700 hover:bg-violet-50 hover:text-violet-600"
                >
                  {link.label}
                </Link>
              ))}
              {!session?.user && (
                <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 lg:hidden">
                  <Link to="/signin" onClick={() => setOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-linear-to-r from-pink-500 to-violet-600 text-white">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </nav>
            {session?.user && (
              <div className="relative">
                <div
                  onClick={handleClick}
                  className="flex gap-2 justify-center items-center cursor-pointer"
                >
                  <span className="hidden max-w-32 truncate text-sm font-normal text-action xl:block">
                    Welcome{" "}
                    <span className="uppercase font-medium text-slate-900">
                      {session.user.name}{" "}
                    </span>
                  </span>
                  <button>
                    {session?.user.image ? (
                      <img
                        width="30"
                        height="30"
                        src={session?.user.image}
                        alt="profile"
                        className="rounded-lg cursor-pointer border-3 border-slate-300"
                      />
                    ) : (
                      <img
                        width="35"
                        height="35"
                        src={Profile}
                        alt="profile"
                        className="rounded-lg cursor-pointer border-3 border-slate-300"
                      />
                    )}
                  </button>
                </div>

                {profile && (
                  <div
                    id="profile"
                    className="absolute right-0 top-12 z-50 w-48 rounded-xl bg-white shadow-lg px-6"
                  >
                    <p className="font-semibold uppercase mb-2 border-b pb-1">
                      {session?.user?.name}
                    </p>
                    <p className="mb-4">
                      Total have{" "}
                      <span className="text-action"> {stack.length} Stack</span>
                    </p>

                    <div className="border-b pb-2 flex gap-1">
                      {stack.map((s) => (
                        <div className=" mb-2 ">
                          <img width={20} src={s.icon} alt="icon" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="md:w-[60%] md:mx-0 md:ml-5  w-[80%] mx-auto">
            {session?.user && (
              <Button
                size="sm"
                onPress={() => void signOut()}
                className="w-full   bg-action font-semibold text-white hover:bg-hover my-3"
              >
                Sign Out
              </Button>
            )}
          </div>
        </>
      )}
    </header>
  );
}
