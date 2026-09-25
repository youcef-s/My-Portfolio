import Image from "next/image";
import { DIAGRAMS } from "./diagrams";
import { PeekReveal } from "./PeekReveal";
import type { Figure as FigureData } from "@/lib/screenshot";

/**
 * The visual attached to a project. Screenshots are real captures; diagrams are
 * drawn here in the site's own tokens to explain work that has no interface.
 * The toggle names whichever it is, so nothing is called a screenshot that is
 * not one.
 */
export function Figure({
  figure,
  peek,
  fade = "bg",
  framed = true,
  controlClassName,
  sizes,
  className,
}: {
  figure: FigureData;
  peek?: string;
  fade?: "bg" | "surface";
  framed?: boolean;
  controlClassName?: string;
  sizes?: string;
  className?: string;
}) {
  const isShot = figure.kind === "screenshot";
  const Diagram = isShot ? null : DIAGRAMS[figure.diagram];

  return (
    <PeekReveal
      label={isShot ? "screenshot" : "diagram"}
      peek={peek}
      fade={fade}
      framed={framed}
      controlClassName={controlClassName}
      className={className}
    >
      {isShot ? (
        <Image
          src={figure.image}
          alt={figure.alt}
          placeholder="blur"
          sizes={sizes ?? "(max-width: 900px) 100vw, 700px"}
          className="h-auto w-full"
        />
      ) : (
        <figure role="img" aria-label={figure.alt}>
          {Diagram ? <Diagram /> : null}
        </figure>
      )}
    </PeekReveal>
  );
}
