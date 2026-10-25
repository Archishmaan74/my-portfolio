import { ArrowUpRight, Building2, Code2, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { personal } from "../../data/personal";
import { projectSection, projects } from "../../data/projects";

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="scroll-mt-10 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
            03 / Selected projects
          </p>

          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                {projectSection.heading}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
                {projectSection.description}
              </p>
            </div>

            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
            >
              More on GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.1 }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease: "easeOut",
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101015] transition-colors hover:border-violet-300/30"
            >
              <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-violet-500/[0.10] via-[#111116] to-blue-500/[0.08] sm:h-56">
                <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-[80px]" />
                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-[80px]" />

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="relative h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-black/30 text-violet-200 shadow-2xl transition duration-300 group-hover:scale-105">
                    {project.name === "Om Guest House Management" ? (
                      <Building2 size={42} strokeWidth={1.4} />
                    ) : (
                      <Code2 size={38} strokeWidth={1.4} />
                    )}
                  </div>
                )}

                {project.status && (
                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-[#101015]/90 px-3 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {project.status}
                  </span>
                )}

                <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-[#101015]/80 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-sm">
                  {project.number}
                </span>
              </div>

              <div className="p-5 sm:p-7">
                <p className="text-xs tracking-[0.2em] text-violet-300">
                  {project.type}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/[0.07] pt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white transition hover:text-violet-300"
                    >
                      Live demo <ExternalLink size={15} />
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
