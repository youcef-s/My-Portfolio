import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist_Mono, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { profile } from "@/content/profile";
import { PALETTE } from "@/lib/theme";
import "./globals.css";

/* Display face: the optical-size axis lets the huge name tighten its own
   spacing, and the width axis gives the section titles their condensed cut. */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

/* Reserved for what is genuinely code: snippets, the record table, the diagrams. */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fullName = `${profile.firstName} ${profile.lastName}`;
const summary =
  "Full-stack developer in the Casablanca-Settat region, shipping product since 2023 in React, Next.js, Node and Nest: agent interfaces, ordering platforms, payments and message queues.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: `${fullName}, ${profile.title}`,
  description: summary,
  keywords: ["full stack developer", "Next.js", "React", "Node.js", "1337", "42", "Casablanca", "Morocco"],
  authors: [{ name: fullName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title: `${fullName}, ${profile.title}`,
    description: summary,
    locale: "en_US",
    siteName: fullName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${fullName}, ${profile.title}`,
    description: summary,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: PALETTE.bg,
  colorScheme: "dark",
};

/** Search engines read this; the page already shows the same facts. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: fullName,
  jobTitle: profile.title,
  url: profile.url,
  email: profile.links.find((link) => link.icon === "mail")?.href.replace(/^mailto:/, ""),
  telephone: profile.links.find((link) => link.icon === "phone")?.href.replace(/^tel:/, ""),
  homeLocation: { "@type": "Place", name: profile.location },
  sameAs: profile.links.flatMap((link) => (link.href.startsWith("https://") ? [link.href] : [])),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="grain flex min-h-full flex-col font-sans text-base leading-[1.6]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
