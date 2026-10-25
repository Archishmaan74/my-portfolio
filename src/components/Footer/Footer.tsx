import { personal } from "../../data/personal";

const SiteFooter = () => {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/[0.06] px-6 py-7 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
      <p>Designed and built with React, TypeScript, and Motion.</p>
      <a href="#home" className="transition hover:text-white">
        Back to top ↑
      </a>
      <p>
        © {new Date().getFullYear()} {personal.name}
      </p>
    </footer>
  );
};

export default SiteFooter;
