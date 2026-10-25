import { experience } from "../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-10 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
          02 / Experience
        </p>
        <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Building, improving, and shipping software.
          </h2>
          <p className="text-sm text-zinc-500">Accenture · 2023 — Present</p>
        </div>

        <div className="mt-12 space-y-5">
          {experience.map((item) => (
            <article
              key={item.role}
              className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:grid-cols-[0.7fr_1.3fr]"
            >
              <div>
                <p className="text-xs tracking-[0.15em] text-violet-300">
                  {item.period}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{item.role}</h3>
                <p className="mt-2 text-sm text-zinc-500">
                  {item.company} · {item.location}
                </p>
              </div>
              <ul className="space-y-3">
                {item.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex gap-3 text-sm leading-7 text-zinc-400"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
