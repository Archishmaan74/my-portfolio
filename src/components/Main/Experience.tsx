import { motion, useReducedMotion } from "motion/react";
import { experience } from "../../data/experience";

const Experience = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
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
            02 / Career journey
          </p>

          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Growing through real engineering challenges.
            </h2>

            <p className="max-w-md text-sm leading-6 text-zinc-500">
              From my first React application to enterprise banking systems,
              each role has expanded how I approach software development.
            </p>
          </div>
        </motion.div>

        <div className="mt-7 space-y-4">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: "easeOut",
              }}
              className="rounded-3xl border border-white/10 bg-[#101015] p-5 sm:p-7"
            >
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
                <div>
                  <p className="text-xs tracking-[0.2em] text-violet-300">
                    {item.period}
                  </p>

                  <h3 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">
                    {item.role}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    {item.company} · {item.location}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                    {item.story}
                  </p>

                  <div className="mt-5 border-t border-white/[0.08] pt-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-violet-300">
                      Engineering focus
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.focus.map((focus) => (
                        <span
                          key={focus}
                          className={`rounded-lg border px-3 py-2 text-xs leading-5 ${
                            focus === "Full-stack development"
                              ? "border-violet-300/30 bg-violet-300/10 text-violet-200"
                              : "border-white/10 bg-white/[0.02] text-zinc-400"
                          }`}
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Key contributions
                  </p>

                  <ul className="mt-3 space-y-2.5">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm leading-6 text-zinc-300 sm:text-[15px] sm:leading-7"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 border-t border-white/[0.08] pt-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-violet-300">
                      Technologies & skills
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-400 transition hover:border-violet-300/30 hover:text-zinc-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
