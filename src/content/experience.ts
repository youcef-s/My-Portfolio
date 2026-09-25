import atjConsulting from "@/assets/atj-consulting.webp";
import digieye from "@/assets/digieye.webp";
import rlinks from "@/assets/rlinks.webp";
import type { ReviewSample } from "@/components/ReviewSample";
import type { Figure } from "@/lib/screenshot";

export type Role = {
  company: string;
  /** Where the company name points. The company's own site when it has one, otherwise LinkedIn. */
  href?: string;
  /** A second link when the employer sits under a parent company. */
  parent?: { name: string; href: string };
  title: string;
  /** Rendered in the left rail; keep to the `MM - MM.YYYY` shape for alignment. */
  period: string;
  place: string;
  /** Employment type. Location lives in `place`, on the left rail. */
  employment: string;
  highlights: string[];
  stack: string[];
  /** Product shot from the role, shown under the stack chips. */
  shot?: Figure;
  /** For roles whose output was judgement rather than an interface. */
  sample?: ReviewSample;
};

export const experience: Role[] = [
  {
    company: "DIGIEYE",
    href: "https://www.linkedin.com/company/iot-digieye/",
    parent: { name: "ABA Technology", href: "https://aba.technology/" },
    title: "Full Stack Developer",
    period: "07 - 10.2025",
    place: "Casablanca",
    employment: "Full-time",
    highlights: [
      "Built a Jupyter-style notebook interface covering cell execution, ordered output and an editing model that holds up over long sessions.",
      "Designed the conversational UI through which users direct and supervise autonomous agents.",
      "Implemented a low-code drag-and-drop application builder.",
      "Contributed to an AI workflow assistant that generates automation processes inside a visual orchestration system, and explains what it built.",
    ],
    stack: ["React", "Vite", "TypeScript", "LangChain", "FastAPI", "TailwindCSS"],
    shot: {
      kind: "screenshot",
      image: digieye,
      alt: "The Flowstream visual orchestration canvas: a node graph wiring Odoo, RabbitMQ and Databricks through agent, validation and text-to-SQL steps out to a dashboard, WhatsApp, email and webhooks, with a searchable component palette on the left.",
    },
  },
  {
    company: "RLinks",
    title: "Frontend Developer",
    period: "04 - 06.2025",
    place: "Remote",
    employment: "Freelance",
    highlights: [
      "Built the customer-facing food ordering site from scratch: menu browsing, cart and checkout.",
      "Modelled server state with React Query and client state with Zustand, so order data stayed consistent across the app without prop drilling.",
      "Worked into the restaurant dashboard, fixing bugs and reworking order tracking so staff could follow an order through its whole lifecycle.",
    ],
    stack: ["Next.js", "React", "React Query", "Zustand", "TailwindCSS"],
    shot: {
      kind: "screenshot",
      image: rlinks,
      alt: "The restaurant dashboard: sidebar navigation for stats, orders, menu, dispatch and users, a row of menu section tiles, and a grid of products with prices in dirhams alongside controls to add products and options.",
    },
  },
  {
    company: "Outlier",
    href: "https://outlier.ai/",
    parent: { name: "Scale AI", href: "https://scale.com/" },
    title: "Full Stack Software Engineer",
    period: "01 - 04.2025",
    place: "Remote",
    employment: "Freelance",
    highlights: [
      "Reviewed and tested AI-generated code, comparing competing implementations for correctness.",
      "Debugged and repaired faulty or incomplete submissions rather than just flagging them.",
      "Stress-tested models to surface edge cases and failure modes.",
    ],
    stack: ["Code review", "Python", "JavaScript", "C++", "Model evaluation"],
    sample: {
      task: "Judge a candidate implementation against its prompt and say whether it ships.",
      code: `function chunk(items, size) {
  const out = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }
  return out;
}`,
      flagged: [2],
      finding:
        "Correct for every size the prompt showed. At size = 0 the counter never advances, so the loop runs forever and the worker hangs instead of throwing. Rejected, with the failing input attached.",
      caption:
        "Illustrative of the review pattern. Real submissions are covered by the contributor agreement.",
    },
  },
  {
    company: "ATJ Consulting",
    href: "https://www.linkedin.com/company/atj-consulting-digital/",
    title: "Full Stack Developer",
    period: "11.2023 - 05.2024",
    place: "Remote",
    employment: "Internship",
    highlights: [
      "Built a bulk WhatsApp messaging platform end to end: contact management, message scheduling, queued delivery through RabbitMQ, real-time status updates and Stripe payments.",
      "Built the backend on Nest.js and the operator interface on React.",
      "Migrated a corporate site off Laravel and PHP onto Vue.js with PayloadCMS.",
      "Built and refined interface components for a mobile playdate scheduling app.",
    ],
    stack: ["Nest.js", "React.js", "Vue.js", "Node.js", "RabbitMQ", "Stripe API", "PayloadCMS", "React Native"],
    shot: {
      kind: "screenshot",
      image: atjConsulting,
      alt: "The SwiftBroadcast operator dashboard: contact, message and device counters beside a campaigns panel, with navigation for devices, contacts and campaigns.",
    },
  },
];

/**
 * The span the roles cover, read off the periods rather than restated, so the
 * heading cannot disagree with the entries under it.
 */
const years = experience.flatMap((role) => role.period.match(/\d{4}/g) ?? []).map(Number);
export const roleYears = `${Math.min(...years)}-${Math.max(...years)}`;
