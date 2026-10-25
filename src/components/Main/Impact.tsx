import { achievements } from "../../data/experience";

const Impact = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
            Impact in practice
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Small changes. Measurable results.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-zinc-500">
          Selected improvements from my professional engineering work.
        </p>
      </div>

      <div className="mt-9 grid gap-4 md:grid-cols-3">
        {achievements.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-violet-300/30"
          >
            <p className="text-3xl font-semibold tracking-tight text-violet-200 sm:text-4xl">
              {item.value}
            </p>
            <p className="mt-3 text-sm text-zinc-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
