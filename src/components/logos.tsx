/**
 * Small marks for the organisations named on the page. 1337 and VEX use their
 * real lettering, because redrawing it would make a different logo. Scale uses
 * the two triangles from its favicon. ABA is the monogram from its app icon,
 * without the tile, in a red light enough to read on the dark page.
 * The others are reduced to the one shape a person recognises at this size:
 * the hexagon eyes, the ring, the circled initials, the four squares.
 */
import type { SVGProps } from "react";

type MarkProps = { className?: string };

function Mark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return <svg aria-hidden="true" className={className} {...props} />;
}

function Digieye({ className }: MarkProps) {
  return (
    <Mark className={className} viewBox="0 0 24 24">
      <path fill="#2F6FE0" d="M6.7 3.3h10.6L21.6 12l-4.3 8.7H6.7L2.4 12Z" />
      <circle cx="9.15" cy="12" r="2.05" className="fill-surface" />
      <circle cx="14.85" cy="12" r="2.05" className="fill-surface" />
    </Mark>
  );
}

function Outlier({ className }: MarkProps) {
  return (
    <Mark className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="7.1" stroke="currentColor" strokeWidth="3.6" />
    </Mark>
  );
}

function Atj({ className }: MarkProps) {
  return (
    <Mark className={className} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" fill="#6EC4C0" />
      <text
        x="12"
        y="12.7"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#08302e"
        fontSize="7.4"
        fontWeight="700"
        fontFamily="var(--font-bricolage), ui-sans-serif, sans-serif"
        letterSpacing="-0.04em"
      >
        ATJ
      </text>
    </Mark>
  );
}

/** The header wordmark from 1337.ma, with the fill left to the surrounding text. */
function School1337({ className }: MarkProps) {
  return (
    <Mark className={className} viewBox="0 0 76 20" fill="currentColor">
      <path d="M2.8333 17.6623H5.92418V2.33766H2.31816V5.45455H0V1.49012e-07H8.75748V17.6623H11.8484V20H2.8333V17.6623Z" />
      <path d="M21.3785 17.6623H30.6512V10.9091H22.1513V8.57143H30.6512V2.33766H21.3785V0H33.4845V20H21.3785V17.6623Z" />
      <path d="M42.2419 17.6623H51.5146V10.9091H43.0147V8.57143H51.5146V2.33766H42.2419V0H54.3479V20H42.2419V17.6623Z" />
      <path d="M72.6355 2.33766H64.9084V7.27273H62.5902V0H75.2113V20H72.6355V2.33766Z" />
    </Mark>
  );
}

function Um6p({ className }: MarkProps) {
  const cells = [
    { x: 0, letter: "U" },
    { x: 20, letter: "M" },
    { x: 40, letter: "6" },
    { x: 60, letter: "P" },
  ];
  return (
    <Mark className={className} viewBox="0 0 78 20">
      {cells.map((cell) => (
        <g key={cell.letter}>
          <rect x={cell.x} width="18" height="20" fill="#ea3b15" />
          <text
            x={cell.x + 9}
            y="14.4"
            textAnchor="middle"
            fill="#fff"
            fontSize="12.5"
            fontWeight="700"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
          >
            {cell.letter}
          </text>
        </g>
      ))}
    </Mark>
  );
}

/** The aba monogram from the aba.technology app icon. The tile is left off, and the red is lifted so the letters read on a dark surface. */
function Aba({ className }: MarkProps) {
  return (
    <Mark className={className} viewBox="-0.4 12.8 64.8 38.4">
      <path
        fill="#E23B5C"
        fillRule="evenodd"
        d="M19.69 13.71 L18.64 14.07 L18.64 26.02 L23.91 26.37 L23.91 14.07 L19.69 13.71 Z M25.32 17.58 L24.97 22.51 L33.76 22.86 L37.63 26.02 L38.68 30.59 L37.27 34.46 L34.11 36.92 L29.19 37.27 L24.97 34.46 L22.86 29.89 L19.34 26.73 L13.71 24.97 L8.44 25.67 L3.16 29.19 L0.35 34.81 L0.7 41.85 L4.57 47.47 L9.49 49.93 L18.99 50.29 L18.99 45.01 L9.85 44.66 L6.68 42.2 L5.63 40.09 L5.27 36.22 L6.68 33.05 L9.14 30.95 L11.25 30.24 L14.42 30.24 L16.88 31.3 L18.99 33.41 L19.34 35.16 L21.8 38.68 L25.32 40.79 L20.04 40.79 L20.04 49.93 L25.32 49.93 L25.32 41.14 L29.54 42.55 L34.46 42.2 L38.33 40.44 L40.79 38.33 L40.79 37.63 L45.01 41.14 L47.82 42.2 L57.32 42.55 L57.32 37.27 L49.23 37.27 L46.77 36.22 L44.31 33.41 L43.6 28.84 L45.36 24.97 L49.58 22.51 L53.8 22.86 L55.21 23.56 L57.32 26.37 L62.95 26.37 L61.89 23.21 L59.08 20.04 L53.8 17.58 L48.18 17.58 L44.66 18.99 L40.79 22.15 L38.68 19.69 L34.11 17.58 L25.32 17.58 Z M58.73 27.43 L58.37 42.2 L63.65 42.2 L63.65 28.13 L62.24 27.43 L58.73 27.43 Z"
      />
    </Mark>
  );
}

/** The two triangles from scale.com/favicon.svg. */
function Scale({ className }: MarkProps) {
  return (
    <Mark className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M26.6222 3.99373H5.3804C4.15244 3.99373 3.53846 5.47605 4.40659 6.34352L25.6484 27.5692C26.5166 28.4366 28 27.8218 28 26.5961V5.37046C28 4.60991 27.3833 3.99373 26.6222 3.99373Z" />
      <path d="M13.9063 17.4729H4.63369C4.0973 17.4729 3.82977 18.1198 4.20832 18.4981L13.4822 27.7649C13.8608 28.1432 14.5082 27.8759 14.5082 27.3399V18.073C14.5082 17.7416 14.2393 17.4716 13.9063 17.4716V17.4729Z" />
    </Mark>
  );
}

/** The VEX wordmark. The surrounding line continues with "Robotics Competition", so this stands in for the word VEX. */
function Vex({ className }: MarkProps) {
  return (
    <Mark className={className} viewBox="0 0 46.87 14.84" fill="currentColor">
      <path d="M42.66,6a.19.19,0,0,0-.1,0s-3.91,2.71-4.09,2.85L34.35,6a.17.17,0,0,0-.1,0H30.63a.17.17,0,0,0-.16.12.07.07,0,0,0,0,.05.16.16,0,0,0,.08.14l5.86,4L30,14.52a.18.18,0,0,0-.08.15.11.11,0,0,0,0,.05.17.17,0,0,0,.16.12h3.7a.17.17,0,0,0,.1,0l4.54-3.14L43,14.81a.19.19,0,0,0,.1,0H46.7a.18.18,0,0,0,.17-.12v-.05a.17.17,0,0,0-.07-.15l-6.33-4.26,5.89-4a.15.15,0,0,0,.07-.14V6.1A.18.18,0,0,0,46.26,6Z" />
      <path d="M14.22,6a.16.16,0,0,0-.13.06L8.67,12.67,3.35,6A.2.2,0,0,0,3.21,6h-3A.16.16,0,0,0,0,6.07a.18.18,0,0,0,0,.19l7,8.52a.2.2,0,0,0,.14.06h3a.16.16,0,0,0,.13-.06l7.11-8.52a.15.15,0,0,0,0-.18.16.16,0,0,0-.16-.1Z" />
      <path d="M19,6a5.06,5.06,0,0,1-.56-2.4c0-1.94,1-3.57,2.16-3.57H28.1c.4,0,.73.54.73,1.2s-.33,1.21-.73,1.21H20.62c-.4,0-.7.54-.7,1.16s.28,1.22.7,1.22H28.1c.4,0,.73.54.73,1.18h0c0,.65-.33,1.18-.73,1.18H20.62c-.42,0-.7.6-.7,1.22s.3,1.17.7,1.17H28.1c.4,0,.73.54.73,1.2S28.5,12,28.1,12H20.62c-1.18,0-2.16-1.63-2.16-3.57A5.06,5.06,0,0,1,19,6Z" />
    </Mark>
  );
}

const MARKS = {
  digieye: Digieye,
  outlier: Outlier,
  atj: Atj,
  aba: Aba,
  scale: Scale,
  "1337": School1337,
  um6p: Um6p,
  vex: Vex,
} as const;

export type LogoName = keyof typeof MARKS;

export function Logo({ name, className }: { name: LogoName; className?: string }) {
  const MarkForName = MARKS[name];
  return <MarkForName className={className} />;
}
