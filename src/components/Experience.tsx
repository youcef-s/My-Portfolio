import { experience, roleYears, type Role } from "@/content/experience";
import { CompanyLink } from "./CompanyLink";
import { Logo } from "./logos";
import { RailFill, Spotlight } from "./motion";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { ReviewSample } from "./ReviewSample";
import { ShotReveal } from "./ShotReveal";

/** The employer, with its mark when it has one. The underline stays on the name. */
function Employer({ role }: { role: Role }) {
  const name = (
    <span
      className={
        role.href
          ? "underline decoration-dotted decoration-from-font underline-offset-[4px] group-hover/name:decoration-solid"
          : undefined
      }
    >
      {role.company}
    </span>
  );
  const inner = (
    <>
      {role.logo ? <Logo name={role.logo} className="size-[0.72em] shrink-0" /> : null}
      {name}
    </>
  );
  const className = "inline-flex items-center gap-[0.28em]";
  if (!role.href) return <span className={className}>{inner}</span>;
  return (
    <a href={role.href} target="_blank" rel="noopener noreferrer" className={`group/name ${className}`}>
      {inner}
    </a>
  );
}

export function Experience() {
  return (
    <Section
      id="work"
      label="Experience"
      title={
        <>
          Where I&rsquo;ve <em>shipped</em>
        </>
      }
      note={`${experience.length} roles · ${roleYears}`}
    >
      {/* The rail runs the full height of the list and fills in lime as the
          reader scrolls down it. It sits in the gutter between the dates and
          the cards on wide screens, and down the left edge on narrow ones. */}
      <div className="relative">
        <div aria-hidden="true" className="absolute top-2 bottom-2 left-[5px] w-px bg-rule md:left-[199px]">
          <RailFill className="h-full w-full bg-accent shadow-[0_0_12px_var(--accent)]" />
        </div>

        <div className="grid gap-12">
          {experience.map((role) => (
            <Reveal
              key={role.company}
              as="article"
              className="relative grid gap-4 pl-9 md:grid-cols-[176px_1fr] md:gap-12 md:pl-0"
            >
              <span
                aria-hidden="true"
                className="absolute top-2 left-0 size-[11px] rounded-full border-2 border-accent bg-bg md:left-[194px]"
              />

              <div className="md:pt-1 md:text-right">
                <p className="font-mono text-[14px] font-medium text-ink">{role.period}</p>
                <p className="mt-1 text-[14px] text-ink-3">{role.place}</p>
                <p className="mt-2 inline-block rounded-full border border-rule-2 px-2.5 py-0.5 text-[12px] text-ink-3">
                  {role.employment}
                </p>
              </div>

              <Spotlight className="spotlight rounded-[28px] border border-rule bg-surface p-[clamp(22px,3vw,36px)] transition-colors hover:border-rule-2">
                <h3 className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 font-display text-[clamp(26px,3.2vw,40px)] leading-[1.05] font-bold tracking-[-0.035em]">
                  <Employer role={role} />
                  {role.parent ? (
                    <span className="inline-flex items-center gap-[0.4em] font-sans text-[15px] font-normal tracking-normal text-ink-3">
                      part of
                      <CompanyLink href={role.parent.href} logo={role.parent.logo} className="text-ink-2">
                        {role.parent.name}
                      </CompanyLink>
                    </span>
                  ) : null}
                </h3>
                <p className="mt-2 text-[16px] font-medium text-accent">{role.title}</p>

                <ul className="mt-6 grid gap-3">
                  {role.highlights.map((line) => (
                    <li key={line} className="relative max-w-[70ch] pl-6 text-[16px] leading-[1.6] text-ink-2">
                      <span aria-hidden="true" className="absolute top-[0.1em] left-0 text-accent">
                        ↳
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {role.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-bg-2 px-3 py-1 text-[12.5px] font-medium text-ink-2"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {role.shot ? <ShotReveal shot={role.shot} /> : null}
                {role.sample ? <ReviewSample sample={role.sample} /> : null}
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
