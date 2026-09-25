import type { ReactNode } from "react";

/**
 * Shared drawing kit for the project diagrams.
 *
 * Every diagram is inline SVG on one viewBox, coloured through the theme tokens
 * so it reads in both themes, and carries no <marker> ids (arrow heads are drawn
 * as polygons) so any number of diagrams can share a page without colliding.
 */
/**
 * Rounds computed geometry so the server and the browser emit byte-identical
 * SVG. Math.cos/Math.sin may differ in the last unit in the last place between
 * V8 on Node and V8 in the browser, and React reports that as a hydration
 * mismatch even though the drawing is visually identical.
 */
export const r = (n: number) => Math.round(n * 100) / 100;

export const VB_W = 320;
export const VB_H = 176;

export function Frame({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      className="h-auto w-full font-mono"
      aria-hidden="true"
      focusable="false"
    >
      <rect width={VB_W} height={VB_H} fill="var(--bg-2)" />
      {children}
    </svg>
  );
}

type BoxProps = {
  x: number;
  y: number;
  w: number;
  h?: number;
  label: string;
  sub?: string;
  /** Draws the box in the accent colour: the one step that carries the idea. */
  accent?: boolean;
  dashed?: boolean;
};

export function Box({ x, y, w, h = 26, label, sub, accent, dashed }: BoxProps) {
  const stroke = accent ? "var(--accent)" : "var(--rule-2)";
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="3"
        fill={accent ? "var(--accent-soft)" : "var(--surface)"}
        stroke={stroke}
        strokeWidth="1"
        strokeDasharray={dashed ? "3 2" : undefined}
      />
      {label ? (
        <text
          x={x + w / 2}
          y={sub ? y + h / 2 - 1 : y + h / 2 + 3.2}
          textAnchor="middle"
          fontSize="8.5"
          fill={accent ? "var(--ink)" : "var(--ink-2)"}
        >
          {label}
        </text>
      ) : null}
      {sub ? (
        <text x={x + w / 2} y={y + h / 2 + 8.5} textAnchor="middle" fontSize="6.5" fill="var(--ink-3)">
          {sub}
        </text>
      ) : null}
    </g>
  );
}

type ArrowProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  accent?: boolean;
  dashed?: boolean;
  label?: string;
};

export function Arrow({ x1, y1, x2, y2, accent, dashed, label }: ArrowProps) {
  const colour = accent ? "var(--accent)" : "var(--ink-3)";
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const head = 4.2;
  // Stop the shaft short so it does not poke through the head.
  const sx = r(x2 - Math.cos(angle) * head);
  const sy = r(y2 - Math.sin(angle) * head);
  const wing = (turn: number) =>
    `${r(x2 - Math.cos(angle - turn) * head * 1.9)},${r(y2 - Math.sin(angle - turn) * head * 1.9)}`;

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={sx}
        y2={sy}
        stroke={colour}
        strokeWidth="1"
        strokeDasharray={dashed ? "3 2" : undefined}
      />
      <polygon points={`${x2},${y2} ${wing(0.45)} ${wing(-0.45)}`} fill={colour} />
      {label ? (
        <text
          x={(x1 + x2) / 2}
          y={y1 === y2 ? y1 - 4 : (y1 + y2) / 2}
          textAnchor="middle"
          fontSize="6"
          fill="var(--ink-3)"
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}

/** Small caption, used for the one fact the drawing exists to deliver. */
export function Note({
  x,
  y,
  children,
  anchor = "start",
  accent,
}: {
  x: number;
  y: number;
  children: string;
  anchor?: "start" | "middle" | "end";
  accent?: boolean;
}) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize="7" fill={accent ? "var(--accent)" : "var(--ink-3)"}>
      {children}
    </text>
  );
}

/** Section eyebrow inside a drawing. */
export function Title({ children }: { children: string }) {
  return (
    <text x="12" y="18" fontSize="7.5" fill="var(--ink-3)" letterSpacing="1.2">
      {children.toUpperCase()}
    </text>
  );
}
