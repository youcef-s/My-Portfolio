/** Keys into the pill icon set, so the content stays free of JSX. */
export type LinkIcon = "mail" | "phone" | "github" | "linkedin";

export type ProfileLink = {
  /** Short label used on the pill. */
  label: string;
  href: string;
  /** Longer label shown in the footer, where there is room for the full address. */
  longLabel?: string;
  /** Falls back to the plain accent dot when a link has no mark of its own. */
  icon?: LinkIcon;
};

export const profile = {
  /** Canonical origin. Feeds metadataBase, the sitemap and robots.txt. */
  url: "https://youssef-labtaimi.vercel.app",
  firstName: "Youssef",
  lastName: "Labtaimi",
  title: "Full Stack Developer",
  location: "Casablanca-Settat Region, Morocco",
  campus: "Khouribga",
  enrolledSince: "November 2021",
  /** The hero's short pitch. The longer story lives in the sections below it. */
  intro:
    "Full-stack developer who ships production features end to end, from polished React interfaces to the APIs and data behind them. I own work from spec to deploy, get productive in a new codebase quickly, and write code the next person can maintain.",
  /** Cycled in the hero headline, one at a time. */
  crafts: ["interfaces", "backends", "systems", "AI products"],
  links: [
    { label: "oyoucef099@gmail.com", href: "mailto:oyoucef099@gmail.com", icon: "mail" },
    { label: "+212 684 756 387", href: "tel:+212684756387", icon: "phone" },
    {
      label: "GitHub",
      longLabel: "github.com/youcef-s",
      href: "https://github.com/youcef-s",
      icon: "github",
    },
    {
      label: "LinkedIn",
      longLabel: "LinkedIn",
      href: "https://www.linkedin.com/in/youssef-labtaimi/",
      icon: "linkedin",
    },
  ] satisfies ProfileLink[],
  /** Served from /public, keep the filename in sync if the PDF is replaced. */
  resumePath: "/youssef-labtaimi-resume.pdf",
} as const;

export const navSections = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "curriculum", label: "Curriculum" },
  { id: "awards", label: "Awards" },
  { id: "stack", label: "Stack" },
  /** Links past the section to the end of the page, so the whole card shows. */
  { id: "contact", label: "Contact", href: "#say-hello" },
] as const;
