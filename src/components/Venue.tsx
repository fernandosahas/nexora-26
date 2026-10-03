import { eventData } from "@/data/event";
import { ExternalIcon, PinIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Venue() {
  const { venue } = eventData;

  return (
    <section id="venue" className="relative px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-xl">
        <SectionHeading eyebrow="Location" title="The Venue" />
        <Reveal className="mt-12">
          <div className="glass card-hover relative overflow-hidden rounded-3xl p-8 text-center sm:p-10">
            <div aria-hidden className="pointer-events-none absolute -top-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(224,185,90,0.22),transparent_70%)] blur-2xl" />
            <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold-400/40 bg-gold-400/10 text-gold-300">
              <PinIcon className="h-7 w-7" />
            </span>
            <h3 className="relative mt-5 font-display text-3xl font-semibold tracking-[0.08em] text-white">
              {venue.name}
            </h3>
            <p className="relative mt-1 font-serif text-2xl italic text-gold-200">{venue.area}</p>
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost relative mt-7"
            >
              View Location
              <ExternalIcon className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
