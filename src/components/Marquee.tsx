import { marquee } from "@/content/stack";

/**
 * A tilted lime band of the core stack, crossed by a band of the familiar tools
 * running the other way. The track holds the list twice and slides by exactly half its
 * width, so the loop has no seam. Decorative: the Stack section lists the same
 * tools as real content.
 */
export function Marquee() {
  const track = (items: string[], reverse: boolean, className: string) => (
    <div aria-hidden="true" className={`flex overflow-hidden py-4 ${className}`}>
      <div
        className="flex w-max flex-none animate-marquee"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 pr-8 font-display text-[clamp(22px,3vw,34px)] font-bold tracking-[-0.03em] whitespace-nowrap"
          >
            {item}
            <svg viewBox="0 0 20 20" className="size-5 flex-none" fill="currentColor">
              <path d="M10 0c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10C5.4 9.4 9.4 5.4 10 0Z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative my-[clamp(24px,5vw,56px)] overflow-hidden py-10">
      {track(marquee.back, true, "absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-[3deg] border-y border-rule-2 bg-surface text-ink-3")}
      {track(marquee.front, false, "relative -mx-[5%] -rotate-[2deg] bg-lime text-on-lime")}
    </div>
  );
}
