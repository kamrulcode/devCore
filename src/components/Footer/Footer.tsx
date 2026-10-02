import { Link } from "@heroui/react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { DevCoreLogo } from "../shared/DevCoreLogo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="contain-width py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <DevCoreLogo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-5 flex gap-2">
              <Social href="https://github.com/kamrulcode"><FaGithub size={16} /></Social>
              <Social href="#"><FaTwitter size={16} /></Social>
              <Social href="https://www.linkedin.com/in/kamruliislam/"><FaLinkedinIn size={16} /></Social>
              <Social href="#"><FaYoutube size={16} /></Social>
            </div>
          </div>

          <Column title="Product" links={["Home", "Technologies", "Projects"]} />
          <Column title="Company" links={["About", "Contact", "Careers"]} />
        </div>

        <div className="my-8 h-px bg-slate-100" />
        <div className="flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DevCore. All rights reserved.</p>
          <p>Built with <span className="text-pink-500">♥</span> for developers.</p>
        </div>
      </div>
    </footer>
  );
}

function Column({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-extrabold uppercase tracking-[.15em] text-slate-900">{title}</h3>
      <div className="mt-4 space-y-3">
        {links.map((link) => (
          <Link key={link} href={link === "Home" ? "/" : `/#${link.toLowerCase()}`} className="block text-sm text-slate-500 hover:text-violet-600">
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Social({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600">
      {children}
    </a>
  );
}
