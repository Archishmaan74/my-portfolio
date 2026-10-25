import { personal } from "../../data/personal";

const Navbar = () => {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
      <a href="#home" className="text-xl font-semibold tracking-tight">
        {personal.brand}
        <span className="text-violet-400">.</span>
      </a>

      <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
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

      <a
        href="#contact"
        className="rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-violet-400 hover:bg-violet-400/10"
      >
        Let's talk <span className="ml-1">↗</span>
      </a>
    </nav>
  );
};

export default Navbar;
