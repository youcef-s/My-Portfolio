import { languages, skillGroups } from "@/content/stack";
import { Spotlight } from "./motion";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Stack() {
  return (
    <Section
      id="stack"
      label="Toolkit"
      title={
        <>
          What I <em>work</em> in
        </>
      }
    >
      <Reveal className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Spotlight
            key={group.heading}
            className={`spotlight rounded-[28px] border border-rule bg-surface p-7 ${
              // The long "familiar" list gets the full width so it wraps into rows, not a tower.
              i === skillGroups.length - 1 && skillGroups.length % 2 === 1 ? "lg:col-span-2" : ""
            }`}
          >
            <h3 className="flex items-center justify-between gap-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-ink-3">
              {group.heading}
              <span className="font-mono text-[12px] tracking-normal">{String(group.items.length).padStart(2, "0")}</span>
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className={`rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                    group.emphasis
                      ? "bg-ink text-bg hover:bg-lime hover:text-on-lime"
                      : "border border-rule-2 text-ink-2 hover:border-ink hover:text-ink"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Spotlight>
        ))}
      </Reveal>

      {/* Languages are a different kind of thing from the stack, so they get
          their own row rather than another card of chips. */}
      <Reveal className="mt-12 flex flex-wrap items-baseline gap-x-12 gap-y-4">
        <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-ink-3">Languages</h3>
        <dl className="flex flex-wrap gap-x-10 gap-y-3">
          {languages.map((language) => (
            <div key={language.name} className="flex items-baseline gap-2.5">
              <dt className="font-display text-[24px] font-bold tracking-[-0.03em]">{language.name}</dt>
              <dd className="text-[14px] text-ink-3">{language.level}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
