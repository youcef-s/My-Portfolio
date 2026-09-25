"use client";

import { useId, useState, type CSSProperties, type ReactNode } from "react";

/**
 * Shows the top of a block of content, fading into its background, and expands
 * to the whole thing on request.
 *
 * The height animates through `grid-template-rows` rather than `max-height`:
 * `0fr` and `1fr` interpolate, so the open state resolves to the content's real
 * height and the easing runs over exactly that distance. `minmax()` holds the
 * peek as a floor, so one transition covers both directions.
 */
export function PeekReveal({
  children,
  label,
  className = "",
  controlClassName = "",
  peek,
  fade = "bg",
  framed = true,
}: {
  children: ReactNode;
  /** Noun for the toggle, e.g. "screenshot" in "Show screenshot". */
  label: string;
  className?: string;
  /** Extra classes for the toggle, so it can align with a padded container. */
  controlClassName?: string;
  /** Overrides the default peek height, for slots holding shorter content. */
  peek?: string;
  /** Which surface the content fades into. */
  fade?: "bg" | "surface";
  /** Off when the content sits flush inside a container that already has an edge. */
  framed?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const regionId = useId();

  return (
    <div className={className}>
      {/* The peek is shorter on phones, where the content is short to begin with
          and a tall peek would leave nothing to reveal. */}
      <div
        className="relative [--peek:112px] sm:[--peek:168px]"
        style={peek ? ({ "--peek": peek } as CSSProperties) : undefined}
      >
        {/* `inert` is what makes the collapsed state honest: clipping alone leaves
            the content focusable and announced, contradicting aria-expanded. */}
        <div
          id={regionId}
          inert={!open}
          className={`grid overflow-hidden transition-[grid-template-rows] duration-[700ms] ease-[cubic-bezier(0.22,0.75,0.28,1)] ${
            framed ? "rounded-[20px] border border-rule" : ""
          }`}
          style={{ gridTemplateRows: open ? "minmax(var(--peek),1fr)" : "minmax(var(--peek),0fr)" }}
        >
          <div className="overflow-hidden">{children}</div>
        </div>

        {/* Sits on the container's moving bottom edge, so the fade travels with it. */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-[72px] bg-gradient-to-b from-transparent transition-opacity duration-500 ${
            fade === "surface" ? "to-surface" : "to-bg"
          } ${framed ? "rounded-b-[20px]" : ""} ${open ? "opacity-0" : "opacity-100"}`}
        />

        {open ? null : (
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => setOpen(true)}
            className="absolute inset-0 cursor-pointer"
          />
        )}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={regionId}
        className={`mt-2 -mb-1 inline-flex cursor-pointer items-center gap-1.5 py-1 text-[13.5px] font-medium text-ink-3 transition-colors hover:text-accent ${controlClassName}`}
      >
        <svg
          viewBox="0 0 12 12"
          aria-hidden="true"
          className={`size-3 transition-transform duration-500 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {open ? `Hide ${label}` : `Show ${label}`}
      </button>
    </div>
  );
}
