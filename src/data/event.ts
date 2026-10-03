/* ──────────────────────────────────────────────────────────────────────────
 *  NEXORA ’26 — EVENT DATA
 *  This is the ONLY file you need to edit to change the website's content.
 *  Date, time, venue, ticket price, theme, agenda, wording and SEO all live here.
 * ────────────────────────────────────────────────────────────────────────── */

export interface AgendaItem {
  /** Shown in gold on the timeline, e.g. "03:00 PM" */
  time: string;
  /** Title of the programme item.
   *  Titles wrapped in [square brackets] are shown as muted "coming soon" placeholders. */
  title: string;
  /** Optional one-line description under the title */
  description?: string;
}

export interface EventData {
  name: string;
  subtitle: string;
  community: string;
  date: string;
  time: string;
  ticketPrice: string;
  theme: string;
  cta: string;
  venue: {
    name: string;
    area: string;
    /** "View Location" button link. Defaults to a Google Maps search for the venue name.
     *  Replace with the exact "Share" link from Google Maps whenever you have it. */
    mapsUrl: string;
  };
  agendaHeading: string;
  agendaNote: string;
  /** ⬇⬇⬇  EDIT THE EVENING PROGRAMME HERE  ⬇⬇⬇ */
  agenda: AgendaItem[];
  about: {
    heading: string;
    paragraphs: string[];
    pillars: string[];
  };
  themeSection: {
    quote: string;
    caption: string;
  };
  ticketSection: {
    heading: string;
    text: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

export const eventData: EventData = {
  name: "NEXORA ’26",
  subtitle: "The Reunion",
  community: "Badulla Central College 2K26 A/L Science Section",

  // ── Core details (used in the hero, info cards, venue section and footer) ──
  date: "25 October 2025",
  time: "2:00 PM onwards",
  ticketPrice: "LKR 3,500",
  theme: "Celestial Royalty",
  cta: "Explore the Evening",

  venue: {
    name: "Crown Regency",
    area: "Badulla",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Crown+Regency+Badulla",
  },

  // ── The Evening (timeline) ────────────────────────────────────────────────
  agendaHeading: "The Evening",
  agendaNote: "The full programme will be announced soon.",
  agenda: [
    { time: "02:00 PM", title: "Arrival & Registration" },
    { time: "03:00 PM", title: "[Agenda to be updated]" },
    { time: "04:00 PM", title: "[Agenda to be updated]" },
    { time: "06:00 PM", title: "[Agenda to be updated]" },
    { time: "08:00 PM", title: "[Agenda to be updated]" },
  ],

  // ── About ─────────────────────────────────────────────────────────────────
  about: {
    heading: "About NEXORA ’26",
    paragraphs: [
      "NEXORA ’26 is the reunion of the Badulla Central College 2K26 A/L Science Section — an evening to come together again with the friends we shared classrooms, laughter and long days with.",
      "Years from now, it will be the faces, the stories and the shared journey we remember most. This is our night to celebrate all of it, together.",
    ],
    pillars: ["Friendship", "Memories", "The Journey"],
  },

  // ── Theme ─────────────────────────────────────────────────────────────────
  themeSection: {
    quote:
      "An evening beneath the stars, celebrating friendship, memories and the journey we shared.",
    caption: "This year's theme",
  },

  // ── Ticket / entry ────────────────────────────────────────────────────────
  ticketSection: {
    heading: "Your Ticket Is Your Entry",
    text: "Scan the QR code on your ticket to access the NEXORA ’26 reunion experience and event information.",
  },

  // ── SEO / social sharing (WhatsApp, Facebook, etc.) ───────────────────────
  seo: {
    title: "NEXORA ’26 — The Reunion | Badulla Central College",
    description:
      "Join the Badulla Central College 2K26 A/L Science Section for NEXORA ’26 — The Reunion. An evening beneath the stars on 25 October at Crown Regency, Badulla. 2:00 PM onwards.",
  },
};

/** "Crown Regency, Badulla" */
export const venueLine = `${eventData.venue.name}, ${eventData.venue.area}`;
