import { eventData } from "@/data/event";
import { StarIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Agenda() {
  const items = eventData.agenda;

  return (
    <section id="evening" className="relative px-5 py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/3 -z-0 mx-auto h-80 max-w-xl rounded-full bg-[radial-gradient(circle,rgba(109,92,224,0.16),transparent_70%)] blur-3xl" />
      <div className="relative mx-auto max-w-2xl">
        <SectionHeading eyebrow="Programme" title={eventData.agendaHeading} note={eventData.agendaNote} />

        <ol className="relative mt-12">
          <span
            aria-hidden
            className="absolute bottom-3 left-[15px] top-3 w-px bg-gradient-to-b from-gold-400/70 via-gold-400/25 to-transparent"
          />
          {items.map((item, i) => {
            const placeholder = item.title.trim().startsWith("[");
            const isLast = i === items.length - 1;
            return (
              <li key={`${item.time}-${i}`} className="relative">
                <Reveal delay={i * 70} className={`relative pl-12 ${isLast ? "" : "pb-6"}`}>
                  <span
                    className={`absolute left-0 top-4 grid h-[31px] w-[31px] place-items-center rounded-full border bg-midnight-900 ${
                      placeholder
                        ? "border-gold-400/25 text-gold-400/45"
                        : "border-gold-300/70 text-gold-300 shadow-[0_0_20px_-2px_rgba(224,185,90,0.7)]"
                    }`}
                  >
                    <StarIcon className="h-3.5 w-3.5" />
                  </span>
                  <div className="glass card-hover rounded-2xl p-4 sm:p-5">
                    <p className="font-display text-[0.8rem] font-medium tracking-[0.22em] text-gold-300">
                      {item.time}
                    </p>
                    <h3
                      className={`mt-1 font-serif text-xl leading-snug sm:text-2xl ${
                        placeholder ? "italic text-slate-400" : "font-semibold text-white"
                      }`}
                    >
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{item.description}</p>
                    )}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
