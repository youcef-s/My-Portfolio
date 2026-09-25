"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type PointerEvent,
  type ReactNode,
} from "react";

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = () => window.matchMedia("(pointer: fine)").matches;

/**
 * Hands the pointer position to CSS as --mx/--my, relative to the element. The
 * `.spotlight` utility turns that into a glow; the hero turns it into a light.
 */
export function Spotlight({
  as: Tag = "div",
  id,
  className = "",
  children,
}: {
  as?: ElementType;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  function onPointerMove(event: PointerEvent<HTMLElement>) {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <Tag id={id} onPointerMove={onPointerMove} className={className}>
      {children}
    </Tag>
  );
}

/**
 * Leans its child a little toward the pointer and springs back on leave. Only
 * for a mouse: on touch there is no hover to lean toward.
 */
export function Magnetic({ children, strength = 0.28 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  function onPointerMove(event: PointerEvent<HTMLSpanElement>) {
    const el = ref.current;
    if (!el || !finePointer() || reducedMotion()) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * strength;
    const y = (event.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }

  function onPointerLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <span
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1.4)]"
    >
      {children}
    </span>
  );
}

/**
 * Counts up to `value` the first time it scrolls into view. The server renders
 * the final number, so without JS (or with reduced motion) that is what shows.
 */
export function CountUp({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 1600, 1);
          setShown(value * (1 - Math.pow(1 - t, 4)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    // Parked at zero only once we know an animation will follow.
    setShown(0);
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {shown.toFixed(decimals)}
    </span>
  );
}

/** Copies the address and says so, falling back to the mail link if the clipboard is refused. */
export function CopyEmail({ email, href }: { email: string; href: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      // A second click restarts the confirmation instead of racing the first.
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = href;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="relative inline-flex h-11 cursor-pointer items-center overflow-hidden rounded-full border border-rule-2 px-5 text-[14px] font-medium text-ink-2 transition-colors hover:border-ink hover:text-ink"
    >
      <span aria-hidden={copied} className={`transition-transform duration-500 ${copied ? "-translate-y-[150%]" : ""}`}>
        Copy email
      </span>
      <span
        aria-live="polite"
        className={`absolute inset-0 grid place-items-center text-accent transition-transform duration-500 ${
          copied ? "" : "translate-y-[150%]"
        }`}
      >
        {copied ? "Copied ✓" : ""}
      </span>
    </button>
  );
}

/**
 * A vertical line that fills to wherever the middle of the viewport has reached
 * along it. Server-rendered full, so it reads correctly before JS and with
 * reduced motion.
 */
export function RailFill({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const track = el?.parentElement;
    if (!el || !track || reducedMotion()) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      const rect = track.getBoundingClientRect();
      const progress = (window.innerHeight * 0.55 - rect.top) / rect.height;
      el.style.transform = `scaleY(${Math.min(Math.max(progress, 0), 1)})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return <div ref={ref} className={`origin-top ${className}`} />;
}
