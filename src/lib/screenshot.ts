import type { StaticImageData } from "next/image";
import type { DiagramName } from "@/components/diagrams";

/** A real capture of something that was built. */
export type Screenshot = {
  kind: "screenshot";
  image: StaticImageData;
  /** Describes what the capture shows, for readers who cannot see it. */
  alt: string;
};

/** A drawing that explains work with no interface to capture. */
export type DiagramFigure = {
  kind: "diagram";
  diagram: DiagramName;
  /** Describes what the drawing conveys, for readers who cannot see it. */
  alt: string;
};

export type Figure = Screenshot | DiagramFigure;
