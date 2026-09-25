"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { navSections, profile } from "@/content/profile";
import { DownloadIcon } from "./icons";

/**
 * A floating bar: monogram on the left, the section links in a pill that a
 * lime marker slides along, and the résumé on the right. Below `md`
 * the links move to a dock at the bottom of the screen, within thumb reach.
 */
export function SiteNav() {
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = navSections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const measure = () => {
      setStuck(window.scrollY > 24);
      const mark = window.scrollY + window.innerHeight * 0.35;
      let current: string | null = null;
      for (const el of targets) {
        if (el.getBoundingClientRect().top + window.scrollY <= mark) current = el.id;
      }
      // The last section is often too short to reach the mark before the page ends.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = targets.at(-1)?.id ?? current;
      }
      setActive(current);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };

    // Reading layout happens once per frame rather than once per scroll event,
    // which browsers can fire far more often than that.
    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        measure();
      });
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[70] h-[2px]">
        <div ref={progress} className="h-full origin-left scale-x-0 bg-lime" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4">
          <a
            href="#top"
            aria-label={`${profile.firstName} ${profile.lastName}, back to top`}
            className={`group flex h-12 items-center gap-3 rounded-full border pr-5 pl-1.5 backdrop-blur-xl transition-colors duration-500 ${
              stuck ? "border-rule bg-surface/75" : "border-transparent"
            }`}
          >
            <span className="grid size-9 place-items-center rounded-full bg-lime font-display text-[15px] font-extrabold tracking-[-0.04em] text-on-lime transition-transform duration-500 group-hover:rotate-[360deg]">
              YL
            </span>
            <span className="hidden text-[14.5px] font-semibold tracking-[-0.01em] sm:inline">
              {profile.firstName} {profile.lastName}
            </span>
          </a>

          <SectionLinks
            active={active}
            className={`hidden transition-colors duration-500 md:flex ${stuck ? "border-rule bg-surface/75" : "border-rule/60 bg-surface/40"}`}
          />

          <a
            href={profile.resumePath}
            className={`group flex h-12 items-center gap-2 rounded-full border px-5 text-[14px] font-medium backdrop-blur-xl transition-colors duration-500 hover:border-lime hover:bg-lime hover:text-on-lime ${
              stuck ? "border-rule bg-surface/75" : "border-rule-2"
            }`}
          >
            <DownloadIcon className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            Résumé
          </a>
        </div>
      </header>

      {/* The dock scrolls sideways when the links are wider than a small phone. */}
      <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-3 md:hidden">
        <SectionLinks active={active} className="max-w-full overflow-x-auto border-rule bg-surface/85 shadow-[0_20px_50px_-20px_rgb(0_0_0/0.5)] [scrollbar-width:none]" />
      </div>
    </>
  );
}

function SectionLinks({ active, className = "" }: { active: string | null; className?: string }) {
  const list = useRef<HTMLUListElement>(null);
  const [marker, setMarker] = useState<{ left: number; width: number } | null>(null);

  // Measured before paint so the marker never flashes at its old position.
  useLayoutEffect(() => {
    // Set on cleanup, so a font-load re-measure queued for an earlier section
    // cannot land after the reader has moved on and drag the marker back.
    let stale = false;
    const measure = () => {
      if (stale) return;
      // The item, not the link: each item is positioned, so a link's offset is always 0.
      const item = active ? list.current?.querySelector<HTMLElement>(`[data-id="${active}"]`)?.parentElement : null;
      setMarker(item ? { left: item.offsetLeft, width: item.offsetWidth } : null);
    };
    measure();
    // The labels change width once the web font replaces the fallback.
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => {
      stale = true;
      window.removeEventListener("resize", measure);
    };
  }, [active]);

  return (
    <nav aria-label="Sections" className={`rounded-full border p-1.5 backdrop-blur-xl ${className}`}>
      <ul ref={list} className="relative flex">
        <li
          aria-hidden="true"
          className="absolute inset-y-0 rounded-full bg-lime transition-[left,width,opacity] duration-500 ease-[cubic-bezier(0.3,1.2,0.4,1)]"
          style={marker ? { left: marker.left, width: marker.width } : { left: 0, width: 0, opacity: 0 }}
        />
        {navSections.map(({ id, label }) => (
          <li key={id} className="relative">
            <a
              href={`#${id}`}
              data-id={id}
              aria-current={active === id ? "location" : undefined}
              className={`block rounded-full px-4 py-2 text-[14px] font-medium whitespace-nowrap transition-colors duration-300 ${
                active === id ? "text-on-lime" : "text-ink-2 hover:text-ink"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
