import { eventData, venueLine } from "@/data/event";
import { CalendarIcon, ClockIcon, PinIcon, TicketIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function InfoCards() {
  const cards = [
    { label: "Date", value: eventData.date, Icon: CalendarIcon },
    { label: "Venue", value: venueLine, Icon: PinIcon },
    { label: "Time", value: eventData.time, Icon: ClockIcon },
    { label: "Ticket", value: eventData.ticketPrice, Icon: TicketIcon, accent: true },
  ];

  return (
    <section id="details" className="relative px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Event Details" title="Save the Evening" />
        <div className="mt-12 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ label, value, Icon, accent }, i) => (
            <Reveal key={label} delay={i * 90}>
              <div className="glass card-hover h-full rounded-2xl p-6 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-gold-400/35 bg-gold-400/10 text-gold-300">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-4 font-display text-[0.7rem] uppercase tracking-[0.35em] text-gold-300/90">
                  {label}
                </p>
                <p
                  className={`mt-2 font-serif text-2xl leading-snug ${
                    accent ? "text-gold-gradient font-semibold" : "text-white"
                  }`}
                >
                  {value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
