import type { CurriculumEntry } from "@/content/curriculum";

/**
 * The table is wider than a phone, so its container scrolls sideways. That
 * container is a tab stop: without one, a keyboard-only reader cannot reach the
 * columns past the right edge.
 */
export function CurriculumTable({ caption, entries }: { caption: string; entries: CurriculumEntry[] }) {
  return (
    <div
      role="region"
      aria-label={caption}
      tabIndex={0}
      className="overflow-x-auto border-t border-rule"
    >
      <table className="w-full min-w-[560px] border-collapse text-[13.5px]">
        <caption className="px-6 pt-6 pb-2 text-left text-[12px] font-semibold uppercase tracking-[0.2em] text-accent">
          {caption}
        </caption>
        <thead>
          <tr>
            {["Project", "Domain", "Workload", "XP", "Validated"].map((heading) => (
              <th
                key={heading}
                scope="col"
                className="border-b border-rule px-3.5 py-2 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-ink-3"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.name} className="group">
              <th
                scope="row"
                className="border-t border-rule px-3.5 py-[9px] text-left font-mono text-[13px] font-medium whitespace-nowrap group-first:border-t-0 group-hover:bg-bg-2"
              >
                {entry.name}
              </th>
              <td className="border-t border-rule px-3.5 py-[9px] align-baseline text-[13.5px] text-ink-3 group-first:border-t-0 group-hover:bg-bg-2">
                {entry.kind}
              </td>
              <td className="border-t border-rule px-3.5 py-[9px] align-baseline font-mono text-[12px] tabular-nums whitespace-nowrap text-ink-3 group-first:border-t-0 group-hover:bg-bg-2">
                {entry.hours ? `${entry.hours}h` : "n/a"}
              </td>
              <td className="border-t border-rule px-3.5 py-[9px] align-baseline font-mono text-[12px] tabular-nums whitespace-nowrap text-ink-3 group-first:border-t-0 group-hover:bg-bg-2">
                {entry.xp ? `${entry.xp} XP` : "n/a"}
              </td>
              <td className="border-t border-rule px-3.5 py-[9px] align-baseline font-mono text-[11.5px] whitespace-nowrap text-ink-3 group-first:border-t-0 group-hover:bg-bg-2">
                {entry.validated}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
