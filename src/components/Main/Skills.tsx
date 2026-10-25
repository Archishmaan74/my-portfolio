import { skillGroups } from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl scroll-mt-10 px-6 py-16 lg:px-10 lg:py-20"
    >
      <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
        04 / Technologies
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        A practical, full-stack toolkit.
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 p-5"
          >
            <h3 className="font-medium">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-500">
              {item.values}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
