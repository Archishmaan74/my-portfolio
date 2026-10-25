import { motion, useReducedMotion } from "motion/react";
import { skillGroups } from "../../data/skills";

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl scroll-mt-8 px-6 py-8 lg:px-10 lg:py-10"
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
          Technologies
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          A practical, full-stack toolkit.
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
          Tools I use to build interfaces, integrate services, test behavior,
          and deliver maintainable applications.
        </p>
      </motion.div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((item, index) => (
          <motion.article
            key={item.title}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.4,
              delay: shouldReduceMotion ? 0 : index * 0.08,
              ease: "easeOut",
            }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-violet-300/25"
          >
            <h3 className="font-medium">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {item.values}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
