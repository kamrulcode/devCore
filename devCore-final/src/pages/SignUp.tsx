import { Button } from "@heroui/react";
import { FiArrowRight, FiMail, FiRefreshCw, FiUser } from "react-icons/fi";
import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { signUp } from "../lib/auth-client";
import { DevCoreLogo } from "../components/shared/DevCoreLogo";
import { PasswordWithToggle } from "../components/PasswordWithToggle";

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    if (name.length < 3) {
      toast.error("Name must be at least 3 characters.");
      setLoading(false);
      return;
    }

    try {
      const result = await signUp.email({ name, email, password });

      if (result.error) {
        toast.error(result.error.message ?? "Unable to create your account.");
        return;
      }

      toast.success("Account created successfully.");
      navigate("/");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-background relative min-h-[calc(100vh-72px)] overflow-hidden py-12 sm:py-16">
      <div className="absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-fuchsia-400/30 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-indigo-400/25 blur-3xl" />

      <div className="relative mx-auto w-[92%] max-w-5xl">
        <div className="glass-card overflow-hidden rounded-[28px]">
          <div className="grid lg:grid-cols-2">
            <section className="dark-panel relative min-h-[600px] overflow-hidden p-8 text-white sm:p-12">
              <div className="relative z-10">
                <DevCoreLogo light />
                <p className="mt-14 text-xs font-bold uppercase tracking-[.24em] text-fuchsia-300">Developer Community</p>
                <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
                  Build Your Future
                  <br />
                  with <span className="bg-gradient-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent">DevCore</span>
                </h1>
                <p className="mt-6 max-w-md text-sm leading-7 text-indigo-100 sm:text-base">
                  Join our community and get access to modern technologies, expert resources, and exciting projects. Let&apos;s build something amazing together.
                </p>

                <div className="mt-10 space-y-5">
                  {[
                    ["Modern Technologies", "Learn the latest tools & frameworks", "bg-violet-500"],
                    ["Expert Community", "Get help and grow together", "bg-pink-500"],
                    ["Real Projects", "Build your portfolio with hands-on work", "bg-blue-500"],
                  ].map(([title, description, color]) => (
                    <div key={title} className="flex items-center gap-4">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${color} text-white shadow-lg`}>
                        <span className="text-lg font-black">+</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">{title}</p>
                        <p className="mt-1 text-xs text-indigo-200">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-3 left-0 right-0 opacity-80">
                <svg viewBox="0 0 900 190" className="w-full" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="signup-wave" x1="0" y1="0" x2="900" y2="0">
                      <stop stopColor="#6366F1" />
                      <stop offset=".5" stopColor="#EC4899" />
                      <stop offset="1" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                  <path d="M0 120C150 30 260 190 430 100C600 15 720 150 900 45V190H0Z" fill="url(#signup-wave)" opacity=".45" />
                  <path d="M0 140C150 50 270 200 440 120C600 45 730 175 900 70" stroke="#F0ABFC" strokeWidth="2" opacity=".6" />
                </svg>
              </div>
            </section>

            <section className="bg-white p-8 sm:p-12">
              <div className="mx-auto max-w-md">
                <div className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-600">Create Account</div>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Get Started to Find
                  <br />
                  the <span className="brand-gradient-text">Best Stack</span>
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-500">Create your account and start your journey with DevCore today.</p>

                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-800">Name <span className="text-pink-500">*</span></label>
                    <div className="relative">
                      <FiUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input id="name" name="name" required minLength={3} placeholder="John Doe" className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-800">Email <span className="text-pink-500">*</span></label>
                    <div className="relative">
                      <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input id="email" name="email" type="email" required placeholder="john@example.com" className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10" />
                    </div>
                  </div>

                  <PasswordWithToggle />

                  <Button
                    type="submit"
                    
                    fullWidth
                    size="lg"
                    className="h-12 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-600 font-bold text-white shadow-lg shadow-fuchsia-500/20"
                  >
                    {loading ? "Creating account..." : <>Submit <FiArrowRight size={18} /></>}
                  </Button>

                  <Button type="reset" fullWidth size="lg" variant="outline" className="h-12 border-slate-200 font-semibold text-slate-600">
                    <FiRefreshCw size={16} /> Reset
                  </Button>
                </form>

                <p className="mt-7 text-center text-sm text-slate-500">
                  Already have an account? <Link to="/signin" className="font-bold text-violet-600 hover:text-pink-500">Sign in</Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
