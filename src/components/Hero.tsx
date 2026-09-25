import { profile } from "@/content/profile";
import { ArrowUpRightIcon } from "./icons";
import { Magnetic, Spotlight } from "./motion";

/** Entrance stagger for the blocks around the name. */
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

/**
 * One line of the name, split into letters that climb out from behind the
 * line's own mask. The whole word stays in the accessible name; the letters
 * are presentation only.
 */
function NameLine({ text, from, className = "" }: { text: string; from: number; className?: string }) {
  return (
    <span aria-hidden="true" className={`block overflow-hidden pb-[0.06em] ${className}`}>
      {[...text].map((char, i) => (
        <span key={i} className="inline-block animate-char" style={delay(from + i * 45)}>
          {char}
        </span>
      ))}
    </span>
  );
}

/** Text set on a circle, turning slowly around the arrow into the page. */
function OrbitBadge() {
  const label = "Open to work · Full stack developer · ";
  return (
    <a
      href="#work"
      aria-label="Scroll to experience"
      className="group relative grid size-[132px] flex-none place-items-center rounded-full"
    >
      <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute inset-0 size-full animate-spin-slow">
        <defs>
          <path id="orbit" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
        </defs>
        {/* textLength stretches the label to exactly one lap, so it neither
            overlaps itself nor leaves a gap where the ends meet. */}
        <text className="fill-ink-2 font-mono text-[7.4px] uppercase">
          <textPath href="#orbit" textLength="237" lengthAdjust="spacing">
            {label}
          </textPath>
        </text>
      </svg>
      <span className="grid size-14 place-items-center rounded-full bg-lime text-on-lime transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
        <ArrowUpRightIcon className="size-5 rotate-90" />
      </span>
    </a>
  );
}

export function Hero() {
  return (
    <Spotlight
      as="section"
      id="top"
      className="group/hero relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-[84px] pb-[96px] sm:pt-[92px] md:pb-[max(24px,4svh)]"
    >
      {/* Backdrop: a slow drifting bloom, a grid that fades toward the edges,
          and a light that follows the pointer across it. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[8%] left-[45%] size-[46vmax] animate-drift rounded-full bg-lime opacity-[0.09] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(var(--rule)_1px,transparent_1px),linear-gradient(90deg,var(--rule)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)] bg-[size:72px_72px] opacity-60" />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover/hero:opacity-100 [background:radial-gradient(520px_circle_at_var(--mx)_var(--my),var(--glow),transparent_60%)]" />
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <p
          className="inline-flex animate-rise-in items-center gap-2.5 rounded-full border border-rule-2 bg-surface/60 py-1.5 pr-4 pl-3 text-[13px] font-medium text-ink-2 backdrop-blur"
          style={delay(100)}
        >
          <span className="relative flex size-2">
            <span className="absolute inset-0 animate-ping-soft rounded-full bg-lime" />
            <span className="relative size-2 rounded-full bg-lime" />
          </span>
          Available for full-stack roles
        </p>

        {/* Sized by whichever runs out first, width or height, and every gap
            below is in svh, so the whole hero fits one screen under the
            floating header on a short laptop as well as a tall monitor. */}
        <h1
          aria-label={`${profile.firstName} ${profile.lastName}`}
          className="mt-[clamp(16px,3.5svh,36px)] font-display text-[clamp(56px,min(16.5vw,21svh),240px)] leading-[0.84] font-extrabold tracking-[-0.055em] [font-variation-settings:'opsz'_96]"
        >
          <NameLine text={profile.firstName} from={250} />
          <NameLine
            text={profile.lastName}
            from={250 + profile.firstName.length * 45}
            className="text-accent"
          />
        </h1>

        <div className="mt-[clamp(20px,4.5svh,52px)] grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="animate-rise-in" style={delay(1000)}>
            {/* One word visible at a time; the first is repeated at the end so
                the loop wraps without a jump. Screen readers get the list. */}
            <p className="font-display text-[clamp(24px,min(3.4vw,5svh),44px)] leading-[1.15] font-semibold tracking-[-0.03em]">
              <span className="sr-only">I build {profile.crafts.join(", ")}.</span>
              <span aria-hidden="true">
                I build{" "}
                <span className="inline-block h-[1lh] overflow-hidden align-bottom">
                  <span className="cycle-4 block">
                    {[...profile.crafts, profile.crafts[0]].map((word, i) => (
                      <span key={i} className="block text-accent italic">
                        {word}.
                      </span>
                    ))}
                  </span>
                </span>
              </span>
            </p>
            <p className="mt-[clamp(10px,2svh,20px)] max-w-[56ch] text-[clamp(16px,1.5vw,18px)] leading-[1.6] text-ink-2">{profile.intro}</p>

            <div className="mt-[clamp(18px,3.5svh,36px)] flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href="#contact"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-lime pr-2 pl-6 text-[15px] font-semibold text-on-lime shadow-[0_10px_40px_-10px_var(--lime)] transition-shadow hover:shadow-[0_14px_50px_-8px_var(--lime)]"
                >
                  Let&rsquo;s talk
                  <span className="grid size-8 place-items-center rounded-full bg-on-lime text-lime transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRightIcon className="size-4" />
                  </span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#work"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-rule-2 px-6 text-[15px] font-medium transition-colors hover:border-ink hover:bg-ink hover:text-bg"
                >
                  See my work
                  <ArrowUpRightIcon className="size-4 rotate-90 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="hidden animate-rise-in lg:block" style={delay(1300)}>
            <OrbitBadge />
          </div>
        </div>
      </div>
    </Spotlight>
  );
}
