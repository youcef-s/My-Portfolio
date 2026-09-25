"use client";

import { useMemo, useState } from "react";
import { DOMAINS, projects, type Domain } from "@/content/projects";
import { Reveal } from "./Reveal";
import { Figure } from "./Figure";
import { Spotlight } from "./motion";

type Filter = Domain | "all";

/** Only offer a filter that actually has projects behind it. */
const activeDomains = (Object.keys(DOMAINS) as Domain[]).filter((domain) =>
  projects.some((project) => project.domains.includes(domain)),
);

export function ProjectFilters() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.domains.includes(filter))),
    [filter],
  );

  return (
    <>
      <Reveal className="mb-[26px]">
        <div
          role="group"
          aria-label="Filter projects by domain"
          className="inline-flex flex-wrap gap-1 rounded-[26px] border border-rule bg-surface p-1.5"
        >
          {(["all", ...activeDomains] as Filter[]).map((key) => {
            const selected = filter === key;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(key)}
                className={`cursor-pointer rounded-full px-4 py-2 text-[14px] font-medium transition-all duration-300 ${
                  selected ? "bg-lime text-on-lime shadow-[0_6px_24px_-8px_var(--lime)]" : "text-ink-2 hover:bg-bg-2 hover:text-ink"
                }`}
              >
                {key === "all" ? "All" : DOMAINS[key]}
              </button>
            );
          })}
        </div>
      </Reveal>

      <p aria-live="polite" className="sr-only">
        Showing {visible.length} of {projects.length} projects.
      </p>

      {/* Cards stretch to match their row. */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,340px),1fr))] gap-5">
        {visible.map((project) => (
          <Reveal key={project.name} as="article" className="h-full">
            <Spotlight className="spotlight group flex h-full flex-col overflow-hidden rounded-[28px] border border-rule bg-surface transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-rule-2">
              <div className="p-2.5 pb-0">
                <div className="overflow-hidden rounded-[20px] [&_img]:transition-transform [&_img]:duration-700 group-hover:[&_img]:scale-[1.04]">
                  <Figure
                    figure={project.figure}
                    peek="150px"
                    fade="surface"
                    framed={false}
                    controlClassName="px-3"
                    sizes="(max-width: 760px) 100vw, 420px"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6 pt-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-[26px] leading-[1.1] font-bold tracking-[-0.035em]">{project.name}</h3>
                  <span className="mt-1 flex-none rounded-full border border-rule-2 px-2.5 py-0.5 text-[12px] font-medium text-ink-3">
                    {project.tech}
                  </span>
                </div>
                <p className="text-[15.5px] leading-[1.6] text-ink-2">{project.blurb}</p>
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </>
  );
}
