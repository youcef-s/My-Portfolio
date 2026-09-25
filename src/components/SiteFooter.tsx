import { profile } from "@/content/profile";
import { ContactLink } from "./ContactLink";
import { ArrowUpRightIcon } from "./icons";
import { CopyEmail, Magnetic, Spotlight } from "./motion";
import { Reveal } from "./Reveal";
import { Year } from "./Year";

const email = profile.links.find((link) => link.icon === "mail");

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-[88px] px-3 pb-24 sm:px-4 md:pb-4">
      <Spotlight className="group/cta relative isolate overflow-hidden rounded-[36px] bg-surface ring-1 ring-rule">
        {/* The same pointer light and bloom as the hero, so the page closes the
            way it opened. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -bottom-1/3 left-1/2 size-[50vmax] -translate-x-1/2 animate-drift rounded-full bg-lime opacity-[0.1] blur-[120px]" />
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover/cta:opacity-100 [background:radial-gradient(520px_circle_at_var(--mx)_var(--my),var(--glow),transparent_60%)]" />
        </div>

        <div className="mx-auto max-w-[1240px] px-5 pt-[clamp(72px,11vw,150px)] pb-10 sm:px-8">
          <Reveal>
            <p className="flex items-center gap-3 text-[12.5px] font-semibold uppercase tracking-[0.22em] text-accent">
              <span aria-hidden="true" className="h-px w-10 bg-accent" />
              Contact
            </p>
            <h2 className="mt-6 font-display text-[clamp(56px,12vw,176px)] leading-[0.86] font-extrabold tracking-[-0.055em]">
              Let&rsquo;s build
              <br />
              <span className="text-accent">something.</span>
            </h2>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-6">
              {email ? (
                <>
                  <Magnetic strength={0.2}>
                    <a
                      href={email.href}
                      className="group inline-flex h-14 items-center gap-3 rounded-full bg-lime pr-2 pl-7 text-[clamp(16px,1.6vw,19px)] font-semibold text-on-lime shadow-[0_10px_40px_-10px_var(--lime)]"
                    >
                      {email.label}
                      <span className="grid size-10 place-items-center rounded-full bg-on-lime text-lime transition-transform duration-500 group-hover:rotate-45">
                        <ArrowUpRightIcon className="size-4" />
                      </span>
                    </a>
                  </Magnetic>
                  <CopyEmail email={email.label} href={email.href} />
                </>
              ) : null}
            </div>

            <p className="mt-8 max-w-[46ch] text-[17px] text-ink-2">
              Happy to hear about a role, or to go deeper on anything here.
            </p>
          </Reveal>

          <div className="mt-[clamp(64px,9vw,120px)] flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-t border-rule pt-7">
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-[15px]">
              {profile.links
                .filter((link) => link !== email)
                .map((link) => (
                  <ContactLink key={link.href} link={link} long className="text-ink-2 hover:text-ink" />
                ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-ink-3">
              <span>
                © <Year fallback={new Date().getFullYear()} /> {profile.firstName} {profile.lastName}
              </span>
              <a href="#top" className="font-medium text-ink-2 transition-colors hover:text-accent">
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </Spotlight>
    </footer>
  );
}
