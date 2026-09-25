import { Figure } from "./Figure";
import type { Figure as FigureData } from "@/lib/screenshot";

/** A role's visual: a capture where there was a product, a drawing where there was not. */
export function ShotReveal({ shot }: { shot: FigureData }) {
  const portrait = shot.kind === "screenshot" && shot.image.height > shot.image.width;

  return (
    <Figure
      figure={shot}
      className={`mt-5 ${portrait ? "max-w-[248px]" : ""}`}
      sizes={portrait ? "248px" : "(max-width: 900px) 100vw, 700px"}
    />
  );
}
