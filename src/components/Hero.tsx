import { eventData, venueLine } from "@/data/event";
import { ArrowDownIcon, CalendarIcon, ClockIcon, CrownIcon, PinIcon } from "./Icons";

export default function Hero() {
  const rows = [
    { Icon: CalendarIcon, text: eventData.date },
    { Icon: PinIcon, text: venueLine },
    { Icon: ClockIcon, text: eventData.time },
  ];

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-14 pt-12 text-center"
    >
      {/* Glows & light streak (decorative) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[14%] h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(224,185,90,0.2),transparent_65%)] blur-2xl animate-pulse-glow" />
        <div className="absolute -left-24 top-[55%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(109,92,224,0.25),transparent_65%)] blur-3xl" />
        <div className="absolute left-0 top-[22%] h-px w-[60vw] animate-streak bg-gradient-to-r from-transparent via-gold-200 to-transparent" />
      </div>

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center">
        <CrownIcon className="h-9 w-9 animate-float text-gold-300 drop-shadow-[0_0_14px_rgba(224,185,90,0.6)]" />

        <h1 className="mt-4 animate-fade-up">
          <span className="block font-display text-[clamp(2.35rem,11vw,5.25rem)] font-semibold leading-none tracking-[0.04em] text-gold-gradient drop-shadow-[0_0_28px_rgba(224,185,90,0.35)]">
            {eventData.name}
          </span>
          <span className="sr-only"> — </span>
          <span className="mt-3 flex items-center justify-center gap-3 font-display text-[0.8rem] tracking-[0.5em] text-gold-200 sm:text-base">
            <span aria-hidden className="h-px w-8 bg-gradient-to-r from-transparent to-gold-400/80 sm:w-14" />
            <span className="uppercase">{eventData.subtitle}</span>
            <span aria-hidden className="h-px w-8 bg-gradient-to-l from-transparent to-gold-400/80 sm:w-14" />
          </span>
        </h1>

        <p
          className="mt-4 max-w-xs animate-fade-up font-serif text-lg italic leading-snug text-slate-300 sm:max-w-md sm:text-xl"
          style={{ animationDelay: "120ms" }}
        >
          {eventData.community}
        </p>

        <ul
          className="glass mt-6 w-full max-w-sm animate-fade-up divide-y divide-gold-400/15 rounded-2xl px-4 py-1 text-left"
          style={{ animationDelay: "240ms" }}
        >
          {rows.map(({ Icon, text }) => (
            <li key={text} className="flex items-center gap-3 py-3">
              <Icon className="h-5 w-5 shrink-0 text-gold-300" />
              <span className="font-display text-[0.82rem] font-medium uppercase tracking-[0.14em] text-slate-100 sm:text-sm">
                {text}
              </span>
            </li>
          ))}
        </ul>

        <p
          className="mt-6 animate-fade-up rounded-full border border-gold-400/35 bg-gold-400/5 px-5 py-2 font-display text-[0.68rem] uppercase tracking-[0.38em] text-gold-300"
          style={{ animationDelay: "340ms" }}
        >
          {eventData.theme}
        </p>

        <a
          href="#details"
          className="btn-gold mt-7 animate-fade-up"
          style={{ animationDelay: "440ms" }}
        >
          {eventData.cta}
        </a>
      </div>

      <a
        href="#details"
        aria-label="Scroll to event details"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-gold-300/60 transition hover:text-gold-200"
      >
        <ArrowDownIcon className="h-5 w-5 animate-float" />
      </a>
    </section>
  );
}
