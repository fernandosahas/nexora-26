import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  note,
}: {
  eyebrow?: string;
  title: string;
  note?: string;
}) {
  return (
    <Reveal className="text-center">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-[1.9rem] font-semibold leading-tight tracking-[0.06em] text-gold-gradient sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 flex items-center justify-center gap-3" aria-hidden>
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400/70" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold-400" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400/70" />
      </div>
      {note && <p className="mx-auto mt-5 max-w-md text-sm text-slate-400">{note}</p>}
    </Reveal>
  );
}
