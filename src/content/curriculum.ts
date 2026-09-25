/** Only used to keep unfinished work out of the totals and the table. */
type Result = "bonus" | "pass" | "wip";

export type CurriculumEntry = {
  name: string;
  /** Short domain label, not a 42 skill tag. */
  kind: string;
  /** Estimated workload in hours, as published on the transcript. 0 when not applicable. */
  hours: number;
  xp: number;
  result: Result;
  validated: string;
  /**
   * How many projects this entry stands for in the totals. The nine CPP modules
   * are collapsed into one row for readability but still count as nine; an
   * internship is listed on the transcript but is not a project, so it counts 0.
   */
  counts?: number;
};

/** Transcribed from the official 1337 academic record, 07 June 2026. */
export const commonCore: CurriculumEntry[] = [
  { name: "Libft", kind: "C library", hours: 70, xp: 11, result: "bonus", validated: "Nov 2021" },
  { name: "get_next_line", kind: "C / I-O", hours: 55, xp: 21, result: "bonus", validated: "Nov 2021" },
  { name: "Born2beroot", kind: "Sysadmin", hours: 50, xp: 13, result: "bonus", validated: "Nov 2021" },
  { name: "ft_printf", kind: "C / variadics", hours: 55, xp: 21, result: "pass", validated: "Dec 2021" },
  { name: "minitalk", kind: "UNIX signals", hours: 50, xp: 27, result: "bonus", validated: "Jan 2022" },
  { name: "so_long", kind: "2D graphics", hours: 60, xp: 23, result: "bonus", validated: "Jan 2022" },
  { name: "push_swap", kind: "Algorithms", hours: 50, xp: 44, result: "bonus", validated: "Feb 2022" },
  { name: "Philosophers", kind: "Concurrency", hours: 70, xp: 80, result: "bonus", validated: "Mar 2022" },
  { name: "minishell", kind: "Systems", hours: 210, xp: 67, result: "pass", validated: "Apr 2022" },
  { name: "NetPractice", kind: "Networking", hours: 50, xp: 75, result: "pass", validated: "May 2022" },
  { name: "CPP Modules 00-08", kind: "C++ / OOP", hours: 170, xp: 230, result: "pass", validated: "Jul-Oct 2022", counts: 9 },
  { name: "cub3d", kind: "Raycasting", hours: 280, xp: 137, result: "bonus", validated: "Sep 2022" },
  { name: "ft_containers", kind: "C++ templates", hours: 140, xp: 239, result: "pass", validated: "Nov 2022" },
  { name: "webserv", kind: "HTTP server", hours: 175, xp: 515, result: "bonus", validated: "Dec 2022" },
  { name: "Inception", kind: "Docker", hours: 150, xp: 377, result: "bonus", validated: "Mar 2023" },
  { name: "ft_transcendence", kind: "Full-stack web", hours: 245, xp: 580, result: "pass", validated: "Aug 2023" },
];

export const advanced: CurriculumEntry[] = [
  { name: "Work Experience I", kind: "Professional experience, 6 months", hours: 0, xp: 1000, result: "bonus", validated: "2024", counts: 0 },
  { name: "ft_shield", kind: "Security / daemon", hours: 196, xp: 375, result: "pass", validated: "Jul 2024" },
  { name: "Inception-of-Things", kind: "Kubernetes / GitOps", hours: 200, xp: 605, result: "bonus", validated: "Aug 2024" },
  { name: "ft_nmap", kind: "Networking", hours: 49, xp: 375, result: "bonus", validated: "Jan 2025" },
  { name: "Tokenizer", kind: "Web3 / ERC-20", hours: 98, xp: 225, result: "bonus", validated: "Jan 2025" },
  { name: "TokenizeArt", kind: "Web3 / NFT", hours: 98, xp: 225, result: "bonus", validated: "Jan 2025" },
  { name: "boot2root", kind: "Security / CTF", hours: 49, xp: 273, result: "pass", validated: "Feb 2025" },
  { name: "ft_hangouts", kind: "Mobile / React Native", hours: 49, xp: 100, result: "bonus", validated: "Mar 2025" },
  { name: "swifty-companion", kind: "Mobile / React Native", hours: 49, xp: 100, result: "bonus", validated: "Mar 2025" },
  { name: "darkly", kind: "Web security", hours: 98, xp: 150, result: "bonus", validated: "Mar 2025" },
  { name: "Mobile 00: Basics", kind: "Mobile piscine", hours: 7, xp: 11, result: "pass", validated: "Mar 2025" },
  { name: "snow-crash", kind: "Security / exploitation", hours: 147, xp: 225, result: "bonus", validated: "Apr 2025" },
  { name: "Mobile 01: Structure & logic", kind: "Mobile piscine", hours: 7, xp: 22, result: "pass", validated: "May 2025" },
  { name: "Mobile 02: API & data", kind: "Mobile piscine", hours: 7, xp: 23, result: "pass", validated: "May 2025" },
  { name: "Mobile 03: Design", kind: "Mobile piscine", hours: 7, xp: 47, result: "pass", validated: "May 2025" },
  { name: "hypertube", kind: "Streaming / BitTorrent", hours: 196, xp: 375, result: "bonus", validated: "Jun 2025" },
  { name: "matt-daemon", kind: "Systems / daemon", hours: 49, xp: 225, result: "bonus", validated: "Jul 2025" },
  { name: "ft_turing", kind: "OCaml / functional", hours: 98, xp: 225, result: "bonus", validated: "Aug 2025" },
  { name: "cloud-1", kind: "Cloud deployment", hours: 100, xp: 225, result: "pass", validated: "Aug 2025" },
  { name: "ft_ssl_md5", kind: "Cryptography", hours: 49, xp: 225, result: "pass", validated: "Sep 2025" },
  { name: "taskmaster", kind: "Process supervision", hours: 98, xp: 225, result: "bonus", validated: "Sep 2025" },
  { name: "lem-ipc", kind: "System V IPC", hours: 98, xp: 225, result: "pass", validated: "Mar 2026" },
  { name: "rubik", kind: "Algorithms", hours: 98, xp: 0, result: "wip", validated: "n/a" },
  { name: "Mobile", kind: "React Native / Expo", hours: 63, xp: 0, result: "pass", validated: "2026" },
];

export const level = { current: 19.79, max: 21 } as const;
