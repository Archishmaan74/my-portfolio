import { Download } from "lucide-react";
import { personal } from "../../data/personal";

const Navbar = () => {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
      <a href="#home" className="shrink-0 text-xl font-semibold tracking-tight">
        {personal.brand}
        <span className="text-violet-400">.</span>
      </a>

      <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
        <a href="#about" className="transition hover:text-white">
          About
        </a>
        <a href="#experience" className="transition hover:text-white">
          Experience
        </a>
        <a href="#projects" className="transition hover:text-white">
          Projects
        </a>
        <a href="#skills" className="transition hover:text-white">
          Skills
        </a>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <a
          href={personal.resume}
          target="_blank"
          rel="noreferrer"
          aria-label="Open resume"
          className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm transition hover:border-violet-400 hover:bg-violet-400/10 sm:inline-flex"
        >
          <Download size={15} />
          Resume
        </a>

        <a
          href="#contact"
          className="rounded-full border border-white/15 px-4 py-2.5 text-sm transition hover:border-violet-400 hover:bg-violet-400/10 sm:px-5"
        >
          Let's talk <span className="ml-1">↗</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
