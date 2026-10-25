import { personal } from "../../data/personal";
import { principles } from "../../data/skills";

const About = () => {
  return (
    <section id="about" className="scroll-mt-10 border-t border-white/[0.06]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-28">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
            01 / About me
          </p>
          <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            I care about the details behind great software.
          </h2>
        </div>

        <div>
          <p className="max-w-3xl text-lg leading-8 text-zinc-400">
            {personal.about}
          </p>
          <p className="mt-5 max-w-3xl leading-8 text-zinc-500">
            {personal.aboutDetails}
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="border-t border-white/10 pt-5">
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
