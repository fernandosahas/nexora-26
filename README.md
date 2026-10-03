# NEXORA ’26 — The Reunion

Premium, mobile-first event website for the **Badulla Central College 2K26 A/L Science Section** reunion.
Built with Next.js (App Router) · TypeScript · Tailwind CSS. No database, no auth, no admin panel.

## Folder structure

```
nexora-26/
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── README.md
├── public/
└── src/
    ├── data/
    │   └── event.ts              ← ✏️  EDIT EVERYTHING HERE (date, venue, agenda, wording, SEO)
    ├── app/
    │   ├── layout.tsx            Fonts, metadata, Open Graph
    │   ├── page.tsx              Page composition
    │   ├── globals.css           Theme styles, glass, gold button, reveal
    │   ├── opengraph-image.tsx   Auto-generated WhatsApp/Facebook share image
    │   └── icon.svg              Favicon
    └── components/
        ├── StarField.tsx         Canvas stars, constellation lines, shooting star
        ├── Reveal.tsx            Scroll-reveal wrapper
        ├── Hero.tsx
        ├── InfoCards.tsx         Date / Venue / Time / Ticket
        ├── Agenda.tsx            "The Evening" timeline
        ├── About.tsx
        ├── ThemeSection.tsx      Celestial Royalty + constellation crown
        ├── Venue.tsx             "View Location" button
        ├── TicketSection.tsx     "Your Ticket Is Your Entry"
        ├── Footer.tsx
        ├── SectionHeading.tsx
        ├── GoldDivider.tsx
        └── Icons.tsx
```

## Install & run

```bash
npm install
npm run dev        # http://localhost:3000
```

Production check:

```bash
npm run build
npm start
```

## Editing the agenda (and everything else)

Open **`src/data/event.ts`** and edit the `agenda` array:

```ts
agenda: [
  { time: "02:00 PM", title: "Arrival & Registration" },
  { time: "03:00 PM", title: "[Agenda to be updated]" },   // placeholder (muted, italic)
  { time: "04:00 PM", title: "Welcome Ceremony", description: "Optional one-line description" },
  ...
],
```

- Add, remove or reorder items freely — the timeline updates automatically.
- Titles wrapped in `[square brackets]` appear as muted "coming soon" placeholders. Remove the brackets and they become full gold-highlighted entries.
- `description` is optional.

The same file holds the date, time, venue, ticket price, theme, theme quote, About text, ticket text and SEO title/description.

### Venue map link
`venue.mapsUrl` currently opens a Google Maps **search** for "Crown Regency Badulla" (no coordinates are invented).
When you have the exact pin, open it in Google Maps → Share → Copy link, and paste it into `mapsUrl`.

## Deploy to Vercel

**Option A — GitHub (recommended)**
1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repository.
3. Framework preset is detected automatically (Next.js). Click **Deploy**.
4. Every future `git push` redeploys the site automatically.

**Option B — Vercel CLI**
```bash
npm i -g vercel
vercel          # first deploy (preview)
vercel --prod   # production
```

### After deploying
- Generate your ticket QR codes from the final production URL (e.g. `https://nexora26.vercel.app`, or a custom domain added under Project → Settings → Domains).
- Optional: set an environment variable `NEXT_PUBLIC_SITE_URL` to your final domain so share-card (Open Graph) links use it exactly. On Vercel it falls back to the production URL automatically.
- Test the link in WhatsApp to preview the share card.
"# nexora-26" 
