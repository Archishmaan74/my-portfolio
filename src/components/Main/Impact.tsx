import { motion } from "motion/react";
import { achievements } from "../../data/experience";

const Impact = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
            Impact in practice
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Results that speak for themselves.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-zinc-500">
          Selected engineering improvements across build performance, testing,
          and transaction reliability.
        </p>
      </motion.div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {achievements.map((item, index) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.45,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-5 transition hover:border-violet-300/30 sm:p-6"
          >
            <p className="text-3xl font-semibold tracking-tight text-violet-200 sm:text-4xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{item.label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Impact;
