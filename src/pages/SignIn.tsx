import { Button } from "@heroui/react";
import { FiArrowRight, FiMail, FiRefreshCw } from "react-icons/fi";
import type { FormEvent } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { signIn } from "../lib/auth-client";
import { DevCoreLogo } from "../components/shared/DevCoreLogo";
import { PasswordWithToggle } from "../components/PasswordWithToggle";

export default function SignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    try {
      const result = await signIn.email({ email, password, callbackURL: "/" });

      if (result.error) {
        console.error("Sign-in error:", result.error);
        toast.error(
          result.error.message ||
            (result.error.status && result.error.status >= 500
              ? "Server error. Check /api/health on your deployment."
              : "Invalid email or password."),
        );
        return;
      }

      toast.success("Welcome back to DevCore.");
      navigate("/");
    } catch (error) {
      console.error("Sign-in failed:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-background relative min-h-[calc(100vh-72px)] overflow-hidden py-12 sm:py-16">
      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-fuchsia-400/25 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-[550px] w-[550px] rounded-full bg-indigo-400/25 blur-3xl" />

      <div className="relative mx-auto w-[92%] max-w-5xl">
        <div className="glass-card overflow-hidden rounded-[28px]">
          <div className="grid lg:grid-cols-2">
            <section className="dark-panel relative min-h-[560px] overflow-hidden p-8 text-white sm:p-12">
              <DevCoreLogo light />
              <p className="mt-14 text-xs font-bold uppercase tracking-[.24em] text-fuchsia-300">Welcome back</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
                Continue Building
                <br />
                with <span className="bg-gradient-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent">DevCore</span>
              </h1>
              <p className="mt-6 max-w-md text-sm leading-7 text-indigo-100 sm:text-base">
                Sign in to access your saved technology stack and continue exploring modern development tools.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Save your personal technology stack",
                  "Explore tools by development category",
                  "Keep your learning workflow organized",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-indigo-100">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-fuchsia-300">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-2 left-0 right-0 opacity-70">
                <svg viewBox="0 0 900 190" className="w-full" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 120C150 30 260 190 430 100C600 15 720 150 900 45V190H0Z" fill="#a855f7" opacity=".25" />
                </svg>
              </div>
            </section>

            <section className="flex items-center bg-white p-8 sm:p-12">
              <div className="mx-auto w-full max-w-md">
                <div className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-600">Welcome back</div>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Get in to Choose
                  <br />
                  Your <span className="brand-gradient-text">Stack</span>
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-500">Sign in to manage the technologies you have selected.</p>

                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="signin-email" className="mb-2 block text-sm font-semibold text-slate-800">Email <span className="text-pink-500">*</span></label>
                    <div className="relative">
                      <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input id="signin-email" name="email" type="email" required placeholder="john@example.com" className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10" />
                    </div>
                  </div>

                  <PasswordWithToggle />

                  <Button type="submit"  fullWidth size="lg" className="h-12 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-600 font-bold text-white shadow-lg shadow-fuchsia-500/20">
                    {loading ? "Signing in..." : <>Sign In <FiArrowRight size={18} /></>}
                  </Button>

                  <Button type="reset" fullWidth size="lg" variant="outline" className="h-12 border-slate-200 font-semibold text-slate-600">
                    <FiRefreshCw size={16} /> Reset
                  </Button>
                </form>

                <p className="mt-7 text-center text-sm text-slate-500">
                  Don&apos;t have an account? <Link to="/signup" className="font-bold text-violet-600 hover:text-pink-500">Create one</Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
