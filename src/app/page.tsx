import { Awards } from "@/components/Awards";
import { projects } from "@/content/projects";
import { Curriculum } from "@/components/Curriculum";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProjectFilters } from "@/components/Projects";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <>
      <SiteNav />
      <Hero />
      <Marquee />
      <main className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <Experience />

        <Section
          id="projects"
          label="Academic work"
          title={
            <>
              Built from <em>scratch</em>
            </>
          }
          note={`${projects.length} projects at 1337`}
        >
          <ProjectFilters />
        </Section>

        <Curriculum />
        <Awards />
        <Stack />
      </main>
      <SiteFooter />
    </>
  );
}
