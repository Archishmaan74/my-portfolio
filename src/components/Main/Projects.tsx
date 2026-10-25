import { ArrowUpRight, Code2 } from "lucide-react";
import { motion } from "motion/react";
import { personal } from "../../data/personal";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-10 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
          03 / Selected projects
        </p>
        <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Ideas turned into working software.
          </h2>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            More on GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.number}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101015] transition-colors hover:border-violet-300/30"
            >
              <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-violet-500/[0.10] via-[#111116] to-blue-500/[0.08] sm:h-56">
                <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-[80px]" />
                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-[80px]" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-black/30 text-violet-200 shadow-2xl transition duration-300 group-hover:scale-105">
                  <Code2 size={34} strokeWidth={1.4} />
                </div>
                <span className="absolute right-6 top-6 text-sm text-zinc-500">
                  {project.number}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-xs tracking-[0.2em] text-violet-300">
                  {project.type}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-5 border-t border-white/[0.07] pt-5">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white transition hover:text-violet-300"
                    >
                      Live demo <ArrowUpRight size={16} />
                    </a>
                  )}
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
                  >
                    Source code <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
