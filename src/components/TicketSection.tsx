import { eventData } from "@/data/event";
import { ScanIcon } from "./Icons";
import Reveal from "./Reveal";

export default function TicketSection() {
  const { ticketSection, name, subtitle, ticketPrice } = eventData;

  return (
    <section id="ticket" className="relative px-5 py-20 sm:py-28">
      <Reveal className="mx-auto max-w-xl">
        <div className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-x-6 -inset-y-6 rounded-[2rem] bg-[radial-gradient(ellipse,rgba(224,185,90,0.18),transparent_70%)] blur-2xl" />

          <div className="glass relative overflow-hidden rounded-3xl">
            {/* ticket notches */}
            <span aria-hidden className="absolute -left-3 top-[58%] h-6 w-6 rounded-full bg-midnight-900 ring-1 ring-gold-400/25" />
            <span aria-hidden className="absolute -right-3 top-[58%] h-6 w-6 rounded-full bg-midnight-900 ring-1 ring-gold-400/25" />

            <div className="px-7 pb-8 pt-9 text-center sm:px-10">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-gold-400/40 bg-gold-400/10 text-gold-300 shadow-[0_0_30px_-6px_rgba(224,185,90,0.6)]">
                <ScanIcon className="h-9 w-9" />
              </span>
              <h2 className="mt-6 font-display text-[1.6rem] font-semibold leading-tight tracking-[0.06em] text-gold-gradient sm:text-3xl">
                {ticketSection.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-md font-serif text-[1.25rem] leading-relaxed text-slate-200 sm:text-[1.4rem]">
                {ticketSection.text}
              </p>
            </div>

            <div className="mx-6 border-t border-dashed border-gold-400/30" aria-hidden />

            <div className="flex items-center justify-between gap-4 px-7 py-5 sm:px-10">
              <div>
                <p className="font-display text-sm font-semibold tracking-[0.08em] text-white">{name}</p>
                <p className="font-display text-[0.65rem] uppercase tracking-[0.35em] text-gold-300/80">
                  {subtitle}
                </p>
              </div>
              <p className="font-serif text-2xl font-semibold text-gold-gradient">{ticketPrice}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
