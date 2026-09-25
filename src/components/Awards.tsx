import Image from "next/image";
import { awards } from "@/content/awards";
import { Spotlight } from "./motion";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Awards() {
  return (
    <Section
      id="awards"
      label="Recognition"
      title={
        <>
          Along the <em>way</em>
        </>
      }
    >
      <div className="grid gap-5">
        {awards.map((award) => (
          <Reveal key={award.title} as="article">
            <Spotlight className="spotlight grid items-center gap-8 overflow-hidden rounded-[28px] border border-rule bg-surface p-[clamp(22px,3.5vw,44px)] md:grid-cols-[1fr_auto]">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-lime px-3 py-1 font-mono text-[12.5px] font-medium text-on-lime">
                  ★ {award.when}
                </p>
                <h3 className="mt-5 font-display text-[clamp(32px,4.4vw,56px)] leading-[1] font-bold tracking-[-0.045em]">
                  {award.title}
                </h3>
                <p className="mt-5 max-w-[58ch] text-[16.5px] leading-[1.65] text-ink-2">{award.body}</p>
                <p className="mt-4 text-[14px] text-ink-3">{award.source}</p>
              </div>

              {award.photo ? (
                /* The trophy was shot on white, so it keeps a light mat in both
                   themes. It tips upright on hover, like it is being picked up. */
                <div className="justify-self-start rounded-[22px] bg-white p-4 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.5)] transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1.3)] md:-rotate-3 md:hover:rotate-0 md:hover:scale-105">
                  <Image
                    src={award.photo.image}
                    alt={award.photo.alt}
                    placeholder="blur"
                    sizes="190px"
                    className="h-auto w-[150px] md:w-[190px]"
                  />
                </div>
              ) : null}
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
