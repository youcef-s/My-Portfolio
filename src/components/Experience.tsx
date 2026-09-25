import { experience, roleYears } from "@/content/experience";
import { CompanyLink } from "./CompanyLink";
import { RailFill, Spotlight } from "./motion";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { ReviewSample } from "./ReviewSample";
import { ShotReveal } from "./ShotReveal";

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
                <h3 className="font-display text-[clamp(26px,3.2vw,40px)] leading-[1.05] font-bold tracking-[-0.035em]">
                  <CompanyLink href={role.href}>{role.company}</CompanyLink>
                </h3>
                <p className="mt-2 text-[16px] font-medium text-accent">
                  {role.title}
                  {role.parent ? (
                    <span className="font-normal text-ink-3">
                      {" "}· part of{" "}
                      <CompanyLink href={role.parent.href} className="inline-block -my-[5px] py-[5px] text-ink-2">
                        {role.parent.name}
                      </CompanyLink>
                    </span>
                  ) : null}
                </p>

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
