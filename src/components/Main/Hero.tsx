import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
import { motion } from "motion/react";
import { personal } from "../../data/personal";
import { tools } from "../../data/skills";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-10 lg:py-12"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-[130px]" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="relative z-10"
      >
        <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-zinc-300 sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {personal.availability}
        </div>

        <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-violet-300 sm:text-sm">
          Full-Stack Engineer
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
          I build software
          <span className="block text-zinc-500">that works</span>
          <span className="block bg-gradient-to-r from-violet-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
            beautifully.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
          {personal.introduction}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold !text-[#09090d] transition hover:bg-violet-200"
          >
            Explore my work <ArrowDown size={16} />
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm transition hover:border-violet-300/60 hover:bg-white/[0.04]"
          >
            GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
          <div>
            <p className="text-xl font-semibold sm:text-2xl">
              {personal.yearsExperience}
            </p>
            <p className="mt-1 text-xs leading-5 text-zinc-500 sm:text-sm">
              Engineering experience
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold sm:text-2xl">
              {personal.focus}
            </p>
            <p className="mt-1 text-xs leading-5 text-zinc-500 sm:text-sm">
              UI to REST APIs
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold sm:text-2xl">
              {personal.quality}
            </p>
            <p className="mt-1 text-xs leading-5 text-zinc-500 sm:text-sm">
              Testing and accessibility
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.12 }}
        className="relative z-10"
      >
        <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10 blur-2xl" />

        <div className="relative rounded-[1.75rem] border border-white/10 bg-[#111116]/95 p-5 shadow-2xl shadow-black/30 sm:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-300/10 bg-violet-400/10 text-violet-300">
                <Code2 size={22} />
              </div>
              <div>
                <p className="font-medium">Engineering toolkit</p>
                <p className="mt-1 text-xs text-zinc-500">What I work with</p>
              </div>
            </div>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1.5 text-xs text-emerald-300">
              Building
            </span>
          </div>

          <div>
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="flex items-center justify-between gap-4 border-b border-white/[0.07] py-4 last:border-0"
              >
                <div>
                  <p className="text-sm font-medium sm:text-base">
                    {tool.name}
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-zinc-500 sm:text-sm">
                    {tool.skills}
                  </p>
                </div>
                <span className="text-xs tabular-nums text-violet-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-2 rounded-2xl border border-violet-300/10 bg-gradient-to-r from-violet-400/[0.08] to-blue-400/[0.04] p-4">
            <p className="text-sm leading-6 text-zinc-300">
              Good engineering is more than shipping features. It's making them
              fast, accessible, testable, and easy to maintain.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
