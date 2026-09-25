import { advanced, commonCore, level } from "@/content/curriculum";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { stats } from "@/lib/stats";
import { ChevronRightIcon } from "./icons";
import { CurriculumTable } from "./CurriculumTable";
import { CountUp, Spotlight } from "./motion";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/** Work still under way is not listed. */
const advancedDone = advanced.filter((entry) => entry.result !== "wip");

/** Counted from the projects themselves, so a domain only counts once there is work behind it. */
const domainsCovered = new Set(projects.flatMap((project) => project.domains)).size;

const tiles = [
  { value: stats.projectsValidated, decimals: 0, suffix: "", label: "projects validated and defended" },
  { value: level.current, decimals: 2, suffix: ` / ${level.max}`, label: "level reached on the 42 scale" },
  { value: domainsCovered, decimals: 0, suffix: "", label: "domains covered, from systems and security to web, cloud and mobile" },
];

export function Curriculum() {
  return (
    <Section
      id="curriculum"
      label="Education"
      title={
        <>
          Learned by <em>building</em>
        </>
      }
      note={`1337 · UM6P · ${profile.campus} · since ${profile.enrolledSince}`}
    >
      <Reveal className="mb-12 grid gap-4 sm:grid-cols-3">
        {tiles.map((tile) => (
          <Spotlight
            key={tile.label}
            className="spotlight rounded-[28px] border border-rule bg-surface p-7 transition-colors hover:border-rule-2"
          >
            <p className="font-display text-[clamp(44px,5.4vw,72px)] leading-none font-bold tracking-[-0.05em]">
              <CountUp value={tile.value} decimals={tile.decimals} />
              <span className="text-accent">{tile.suffix}</span>
            </p>
            <p className="mt-4 text-[15px] text-ink-3">{tile.label}</p>
          </Spotlight>
        ))}
      </Reveal>

      <Reveal className="mb-12 grid gap-x-12 gap-y-4 text-[17px] leading-[1.7] lg:grid-cols-2">
        <p className="text-ink-2">
          1337 is part of the 42 Network: no lectures, no teachers, no syllabus. You are handed a
          subject and a deadline and work the rest out with the people around you, moving through{" "}
          {stats.levelMax} levels at your own pace. Every project is then defended in front of peers
          who have built the same thing, so passing means{" "}
          <strong className="font-semibold text-ink">explaining your decisions</strong>, not just
          shipping something that runs.
        </p>
        <p className="text-ink-2">
          What stuck is the method more than any one language. Read the specification before writing
          a line. Build the layer you do not understand yet instead of importing your way around it.
          Write code you can still defend a month later. And reading other people&rsquo;s solutions at
          evaluation, to problems I had just solved differently, taught me more about readable code
          than any style guide.
        </p>
      </Reveal>

      <Reveal>
        <details className="group overflow-hidden rounded-[28px] border border-rule bg-surface">
          <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-5 text-[16px] font-semibold transition-colors hover:bg-bg-2 [&::-webkit-details-marker]:hidden">
            <span className="grid size-9 flex-none place-items-center rounded-full bg-lime text-on-lime">
              <ChevronRightIcon className="size-4 transition-transform duration-300 group-open:rotate-90" />
            </span>
            Open the full academic record
            <span className="ml-auto font-mono text-[13px] font-normal text-ink-3">
              {stats.projectsValidated} projects
            </span>
          </summary>
          <CurriculumTable caption="Common core · completed 100%" entries={commonCore} />
          <CurriculumTable caption="Advanced part" entries={advancedDone} />
        </details>
      </Reveal>
    </Section>
  );
}
