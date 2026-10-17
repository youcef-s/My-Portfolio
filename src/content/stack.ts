import { type TechName } from "./tech-icons";

export type Skill = {
  name: TechName;
  href: string;
};

export type SkillGroup = {
  heading: string;
  items: Skill[];
  /** Emphasised groups get the accent treatment on their chips. */
  emphasis?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    heading: "Advanced",
    emphasis: true,
    items: [
      { name: "Node.js", href: "https://nodejs.org/" },
      { name: "Nest.js", href: "https://nestjs.com/" },
      { name: "Next.js", href: "https://nextjs.org/" },
      { name: "React.js", href: "https://react.dev/" },
      { name: "TailwindCSS", href: "https://tailwindcss.com/" },
      { name: "Docker", href: "https://www.docker.com/" },
      { name: "PostgreSQL", href: "https://www.postgresql.org/" },
      { name: "MongoDB", href: "https://www.mongodb.com/" },
    ],
  },
  {
    heading: "AI-assisted development",
    emphasis: true,
    items: [
      { name: "Antigravity", href: "https://antigravity.google/" },
      { name: "Claude Code", href: "https://claude.com/product/claude-code" },
      { name: "Codex", href: "https://openai.com/codex/" },
      { name: "Cursor", href: "https://cursor.com/" },
      { name: "Grok Build", href: "https://x.ai/build" },
      { name: "Kiro", href: "https://kiro.dev/" },
      { name: "OpenCode", href: "https://opencode.ai/" },
      { name: "OpenRouter", href: "https://openrouter.ai/" },
    ],
  },
  {
    heading: "Familiar",
    items: [
      { name: "Vue.js", href: "https://vuejs.org/" },
      { name: "FastAPI", href: "https://fastapi.tiangolo.com/" },
      { name: "LangChain", href: "https://www.langchain.com/" },
      { name: "React Native", href: "https://reactnative.dev/" },
      { name: "Rust", href: "https://www.rust-lang.org/" },
      { name: "C", href: "https://www.open-std.org/jtc1/sc22/wg14/" },
      { name: "C++", href: "https://isocpp.org/" },
      { name: "Python", href: "https://www.python.org/" },
      { name: "Kubernetes", href: "https://kubernetes.io/" },
      { name: "Linux / sysadmin", href: "https://www.kernel.org/" },
      { name: "TCP/IP", href: "https://www.ietf.org/" },
      { name: "Bash", href: "https://www.gnu.org/software/bash/" },
      { name: "Solidity", href: "https://soliditylang.org/" },
      { name: "Web security", href: "https://owasp.org/" },
      { name: "Terraform", href: "https://www.terraform.io/" },
      { name: "RabbitMQ", href: "https://www.rabbitmq.com/" },
      { name: "Stripe API", href: "https://stripe.com/" },
      { name: "PayloadCMS", href: "https://payloadcms.com/" },
    ],
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Advanced" },
  { name: "French", level: "Intermediate" },
];

/**
 * The two scrolling bands under the hero. The lime band in front carries the
 * advanced and familiar tools, with an advanced name between pairs of familiar
 * ones. The band behind it carries the AI tools. Every name must also appear
 * in a group above.
 */
export const marquee = {
  /** The lime band in front: advanced and familiar. */
  front: [
    "Node.js",
    "Rust",
    "Kubernetes",
    "Nest.js",
    "Vue.js",
    "TCP/IP",
    "Next.js",
    "Python",
    "Stripe API",
    "React.js",
    "Terraform",
    "C++",
    "TailwindCSS",
    "LangChain",
    "Web security",
    "Docker",
    "React Native",
    "Bash",
    "PostgreSQL",
    "RabbitMQ",
    "Solidity",
    "MongoDB",
    "Linux / sysadmin",
    "PayloadCMS",
    "C",
    "FastAPI",
  ],
  /** The band behind it: the AI tools. */
  back: [
    "Cursor",
    "OpenRouter",
    "Claude Code",
    "Kiro",
    "Codex",
    "OpenCode",
    "Antigravity",
    "Grok Build",
  ],
} as const satisfies { front: readonly TechName[]; back: readonly TechName[] };
