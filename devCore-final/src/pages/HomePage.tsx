import { Button, Card } from "@heroui/react";
import { FiArrowRight, FiCheck, FiLayers, FiZap, FiUsers } from "react-icons/fi";
import { Link } from "react-router";
import BannerImg from "../assets/banner-stack.png";
import Technologies from "../components/Technologies/Technologies";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute -left-36 -top-44 h-[520px] w-[520px] rounded-full bg-fuchsia-300/35 blur-3xl" />
        <div className="absolute -right-44 top-64 h-[620px] w-[620px] rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="absolute left-[12%] top-[38%] h-4 w-4 rounded-full bg-fuchsia-400 animate-float-soft" />
        <div className="absolute right-[13%] top-[22%] h-14 w-14 rounded-full bg-gradient-to-br from-blue-300 to-violet-500 opacity-75 blur-[1px] animate-pulse-glow" />

        <div className="contain-width relative grid min-h-[calc(100vh-72px)] items-center gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/75 px-4 py-2 text-xs font-bold text-violet-700 shadow-sm backdrop-blur">
              <FiZap size={14} /> Build your developer stack
            </div>

            <h1 className="font-inter text-5xl font-extrabold leading-[1.05] tracking-[-2px] text-slate-950 sm:text-6xl lg:text-7xl">
              Build Your
              <br />
              <span className="brand-gradient-text">Perfect Tech Stack</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 tracking-wide text-slate-600 sm:text-lg">
              Explore modern tools, compare technologies, and create a stack that fits your development workflow — all in one beautiful workspace.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="#technologies">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-600 px-6 font-bold text-white shadow-xl shadow-fuchsia-500/20">
                  Explore Technologies <FiArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline" className="border-slate-300 bg-white/70 px-6 font-bold text-slate-800 backdrop-blur">
                  Create Account
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { Icon: FiLayers, value: "18+", label: "Technologies" },
                { Icon: FiZap, value: "7", label: "Categories" },
                { Icon: FiUsers, value: "Free", label: "To explore" },
              ].map(({ Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                    <Icon size={19} />
                  </div>
                  <div>
                    <p className="text-lg font-extrabold text-slate-900">{value}</p>
                    <p className="text-xs font-medium text-slate-500">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="absolute inset-8 rounded-[40px] bg-gradient-to-br from-fuchsia-400/20 via-violet-400/20 to-blue-400/20 blur-3xl" />
            <Card className="relative overflow-hidden border border-white/80 bg-white/70 shadow-2xl shadow-indigo-500/15 backdrop-blur-xl">
              <Card.Content className="p-5 sm:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-violet-600">DevCore</p>
                    <p className="mt-1 text-lg font-bold text-slate-900">Your stack starts here</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                    <FiCheck size={14} /> Ready
                  </div>
                </div>
                <img src={BannerImg} alt="Colorful illustration of a modern technology stack" className="w-full object-contain drop-shadow-xl" />
                <div className="mt-4 rounded-2xl bg-slate-950 p-4 text-white shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Selected stack</p>
                      <p className="mt-1 text-sm font-semibold">Frontend · Backend · Database</p>
                    </div>
                    <FiArrowRight className="text-fuchsia-400" size={20} />
                  </div>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>

      <Technologies />

      <section id="about" className="contain-width py-20 sm:py-28">
        <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-2xl sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-fuchsia-300">About DevCore</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">A simple place to make better technology choices.</h2>
            <p className="mt-5 leading-7 text-slate-300">
              DevCore keeps your technology exploration focused: browse tools, understand where they fit, and save the stack you want to build with.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="contain-width pb-20 sm:pb-28">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Explore", "Discover tools by category and compare the details that matter."],
            ["Compose", "Add technologies to your personal stack as you learn."],
            ["Build", "Use the stack as a starting point for real projects and experiments."],
          ].map(([title, description]) => (
            <Card key={title} className="border border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <Card.Content className="p-7">
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      <div id="contact" className="h-px" />
    </>
  );
}
