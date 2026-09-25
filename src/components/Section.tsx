import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  /** The short tag above the title. */
  label: string;
  /** The headline. Wrap a word in <em> to set it in the accent. */
  title: ReactNode;
  note?: string;
  children: ReactNode;
};

export function Section({ id, label, title, note, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-[88px] py-[clamp(64px,10vw,140px)]">
      <Reveal className="mb-[clamp(36px,5vw,64px)] flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <div>
          <p className="flex items-center gap-3 text-[12.5px] font-semibold uppercase tracking-[0.22em] text-accent">
            <span aria-hidden="true" className="h-px w-10 bg-accent" />
            {label}
          </p>
          <h2 className="mt-5 font-display text-[clamp(40px,6.4vw,92px)] leading-[0.95] font-bold tracking-[-0.045em] [&_em]:text-accent [&_em]:not-italic">
            {title}
          </h2>
        </div>
        {note ? <p className="pb-2 font-mono text-[13px] text-ink-3">{note}</p> : null}
      </Reveal>
      {children}
    </section>
  );
}
