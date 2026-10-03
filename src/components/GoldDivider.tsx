/** Elegant transition between sections. */
export default function GoldDivider() {
  return (
    <div aria-hidden className="mx-auto flex max-w-xs items-center justify-center gap-3 px-5">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-400/40" />
      <span className="h-1 w-1 rotate-45 bg-gold-400/70" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold-300" />
      <span className="h-1 w-1 rotate-45 bg-gold-400/70" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-400/40" />
    </div>
  );
}
