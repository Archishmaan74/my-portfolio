import { ArrowUpRight, Download, Mail } from "lucide-react";
import { personal } from "../../data/personal";

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-8 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111116] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-violet-500/15 blur-[110px]" />

          <div className="relative max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
              Get in touch
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Let's build something
              <span className="block text-zinc-500">worth building.</span>
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              {personal.contactMessage}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold !text-[#09090d] transition hover:bg-violet-200"
              >
                <Mail size={16} />
                Email me
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm transition hover:border-violet-300/50 hover:bg-white/[0.04]"
              >
                LinkedIn <ArrowUpRight size={16} />
              </a>

              <a
                href={personal.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm transition hover:border-violet-300/50 hover:bg-white/[0.04]"
              >
                Download resume <Download size={15} />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm transition hover:border-violet-300/50 hover:bg-white/[0.04]"
              >
                GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
