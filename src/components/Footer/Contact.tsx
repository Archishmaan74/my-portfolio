import { ArrowUpRight } from "lucide-react";
import { personal } from "../../data/personal";

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-10 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111116] p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-violet-500/15 blur-[110px]" />
          <div className="relative max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
              05 / Get in touch
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Let's build something
              <span className="block text-zinc-500">worth building.</span>
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-zinc-400">
              {personal.contactMessage}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold !text-[#09090d] transition hover:bg-violet-200"
              >
                Get in touch <ArrowUpRight size={16} />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm transition hover:border-violet-300/50"
              >
                GitHub <ArrowUpRight size={16} />
              </a>
              {personal.linkedin && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm transition hover:border-violet-300/50"
                >
                  LinkedIn <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
