import type { LinkIcon, ProfileLink } from "@/content/profile";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./icons";

const ICONS: Record<LinkIcon, (props: { className?: string }) => React.ReactElement> = {
  mail: MailIcon,
  phone: PhoneIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

/**
 * A contact route as a plain underlined link. The underline sits faint until
 * hover so a row of them reads as text, not as a toolbar. Links that leave the
 * site carry the outbound arrow; mail and phone hand off to an app instead.
 */
export function ContactLink({
  link,
  long = false,
  className = "",
}: {
  link: ProfileLink;
  long?: boolean;
  className?: string;
}) {
  const external = link.href.startsWith("http");
  const Icon = link.icon ? ICONS[link.icon] : null;
  return (
    <a
      href={link.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center gap-2 font-medium underline decoration-current/25 decoration-1 underline-offset-[6px] transition-[text-decoration-color] hover:decoration-current ${className}`}
    >
      {Icon ? <Icon className="size-[15px] flex-none opacity-70" /> : null}
      {long ? (link.longLabel ?? link.label) : link.label}
      {external ? (
        <ArrowUpRightIcon className="size-[13px] flex-none opacity-60 transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
      ) : null}
    </a>
  );
}
