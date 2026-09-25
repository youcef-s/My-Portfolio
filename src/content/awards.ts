import judgesAward from "@/assets/judges-award.webp";
import type { Screenshot } from "@/lib/screenshot";

export type Award = {
  when: string;
  title: string;
  body: string;
  source: string;
  /** Photograph of the award itself. */
  photo?: Screenshot;
};

export const awards: Award[] = [
  {
    when: "03.2023",
    title: "The Judges Award",
    body: "Given at the judges' discretion to a team they consider deserving of special recognition. It is not tied to match record, so it goes to the work behind the robot rather than the scoreboard.",
    source: "VEX Robotics Competition · 4 March 2023",
    photo: {
      kind: "screenshot",
      image: judgesAward,
      alt: "The VEX Robotics Competition Judges Award trophy: a brushed aluminium tower on a perforated metal base, engraved with the competition name and a plaque reading Judges Award.",
    },
  },
];
