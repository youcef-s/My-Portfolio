import { PeekReveal } from "./PeekReveal";

export type ReviewSample = {
  /** What the task asked for. */
  task: string;
  code: string;
  /** Zero-based indices of the lines the finding turns on. */
  flagged: number[];
  finding: string;
  /** States plainly that the snippet stands in for the real submissions. */
  caption: string;
};

const label = "text-[11px] font-bold uppercase tracking-[0.12em]";

/**
 * A worked example of a review pass, for a role whose output was judgement
 * rather than an interface. Drawn in the site's own type and colour so it reads
 * as an illustration, never as a captured screen.
 */
export function ReviewSample({ sample }: { sample: ReviewSample }) {
  const lines = sample.code.split("\n");

  return (
    <PeekReveal label="review example" className="mt-5">
      <div className="bg-bg">
        <div className="flex items-baseline gap-2.5 border-b border-rule px-4 py-2.5">
          <span className={`${label} flex-none text-accent`}>Task</span>
          <span className="text-[14px] text-ink-2">{sample.task}</span>
        </div>

        <div
          role="region"
          aria-label={`Code under review: ${sample.task}`}
          tabIndex={0}
          className="overflow-x-auto py-2.5"
        >
          <pre className="w-fit min-w-full font-mono text-[12.5px] leading-[1.75]">
            <code>
              {lines.map((line, i) => {
                const flagged = sample.flagged.includes(i);
                return (
                  <span
                    key={i}
                    className={`block px-4 ${
                      flagged
                        ? "bg-accent-soft shadow-[inset_2px_0_0_var(--accent)] text-ink"
                        : "text-ink-2"
                    }`}
                  >
                    {line || " "}
                  </span>
                );
              })}
            </code>
          </pre>
        </div>

        <div className="flex items-baseline gap-2.5 border-t border-rule px-4 py-2.5">
          <span className={`${label} flex-none text-ok`}>Finding</span>
          <span className="text-[14px] text-ink-2">{sample.finding}</span>
        </div>

        <p className="border-t border-rule px-4 py-2.5 text-[12.5px] text-ink-3 italic">
          {sample.caption}
        </p>
      </div>
    </PeekReveal>
  );
}
