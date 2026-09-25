export type SkillGroup = {
  heading: string;
  items: string[];
  /** Emphasised groups get the accent treatment on their chips. */
  emphasis?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    heading: "Advanced",
    emphasis: true,
    items: [
      "Node.js",
      "Nest.js",
      "Next.js",
      "React.js",
      "TailwindCSS",
      "Docker",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    heading: "AI-assisted development",
    emphasis: true,
    items: ["Claude Code", "Codex", "Cursor", "Kiro", "OpenCode", "OpenRouter"],
  },
  {
    heading: "Familiar",
    items: [
      "Vue.js",
      "FastAPI",
      "LangChain",
      "React Native",
      "Rust",
      "C",
      "C++",
      "Python",
      "Kubernetes",
      "Linux / sysadmin",
      "TCP/IP",
      "Bash",
      "Solidity",
      "Web security",
      "Terraform",
      "RabbitMQ",
      "Stripe API",
      "PayloadCMS",
    ],
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Advanced" },
  { name: "French", level: "Intermediate" },
];

/**
 * The two scrolling bands under the hero, in a hand-set order: no two tools
 * from the same area sit side by side, including across the seam where each
 * loop wraps back to its start. Every name must also appear in a group above.
 */
export const marquee = {
  /** The lime band: the core stack and the AI tools, interleaved. */
  front: [
    "Node.js",
    "Cursor",
    "TailwindCSS",
    "OpenRouter",
    "PostgreSQL",
    "Claude Code",
    "Next.js",
    "Kiro",
    "Docker",
    "Codex",
    "MongoDB",
    "OpenCode",
    "Nest.js",
    "React.js",
  ],
  /** The band behind it: the familiar tools. */
  back: [
    "Rust",
    "Kubernetes",
    "Vue.js",
    "TCP/IP",
    "Python",
    "Stripe API",
    "Terraform",
    "C++",
    "LangChain",
    "Web security",
    "React Native",
    "Bash",
    "RabbitMQ",
    "Solidity",
    "Linux / sysadmin",
    "PayloadCMS",
    "C",
    "FastAPI",
  ],
};
