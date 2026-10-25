import { motion } from "motion/react";
import { personal } from "../../data/personal";
import { principles } from "../../data/skills";

const About = () => {
  return (
    <section id="about" className="scroll-mt-10 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-12">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
              01 / About me
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {personal.aboutHeading}
              <span className="mt-1 block text-zinc-500">
                {personal.aboutSubheading}
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              {personal.aboutIntro}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
            className="relative flex h-full min-h-64 items-center justify-center lg:min-h-0"
          >
            <div className="pointer-events-none absolute inset-8 rounded-full bg-violet-500/10 blur-3xl" />
            <img
              src="/tech-stack-collage.png"
              alt="Technology stack including React, TypeScript, JavaScript, Java, Spring Boot, PostgreSQL, Docker, AWS, GitHub, ChatGPT, Claude, and GitHub Copilot"
              className="relative z-10 block max-h-[340px] w-full object-contain"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-7 w-full space-y-4 text-base leading-7 text-zinc-400 sm:mt-9 sm:text-[17px] sm:leading-8"
        >
          {personal.aboutStory.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-7 rounded-2xl border border-violet-300/10 bg-gradient-to-r from-violet-400/[0.07] to-blue-400/[0.04] p-5 sm:mt-8 sm:p-6"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-violet-300">
            My engineering toolkit
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {personal.aboutSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400 transition hover:border-violet-300/30 hover:text-zinc-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-7 grid gap-5 sm:mt-8 sm:grid-cols-3 sm:gap-6">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="border-t border-white/10 pt-4"
            >
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
