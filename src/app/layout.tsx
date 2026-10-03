import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource/cinzel/500.css";
import "@fontsource/cinzel/600.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/600.css";
import "./globals.css";
import { eventData } from "@/data/event";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: eventData.seo.title,
  description: eventData.seo.description,
  applicationName: eventData.name,
  openGraph: {
    type: "website",
    siteName: `${eventData.name} — ${eventData.subtitle}`,
    title: eventData.seo.title,
    description: eventData.seo.description,
    locale: "en_LK",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: eventData.seo.title,
    description: eventData.seo.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05060f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Lets the CSS enable scroll-reveal only when JavaScript is running */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
