import { advanced, commonCore, level, type CurriculumEntry } from "@/content/curriculum";

const validated = (entries: CurriculumEntry[]) => entries.filter((entry) => entry.result !== "wip");

const all = [...commonCore, ...advanced];

/**
 * Derived from the transcript data rather than typed in, so the figures on the
 * page cannot drift out of sync with the table they summarise.
 */
export const stats = {
  levelMax: level.max,
  /** Each entry declares its own weight via `counts`; see CurriculumEntry. */
  projectsValidated: validated(all).reduce((total, entry) => total + (entry.counts ?? 1), 0),
} as const;
