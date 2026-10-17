import type { ReactNode } from "react";
import type { LogoName } from "./logos";
import { Logo } from "./logos";

/**
 * A company name that links out when we have somewhere to send people, and is
 * plain text when we do not. The dotted underline stays on the name, so a mark
 * beside it does not pick up the line.
 */
export function CompanyLink({
  href,
  className = "",
  logo,
  children,
}: {
  href?: string;
  className?: string;
  logo?: LogoName;
  children: ReactNode;
}) {
  const inner = (
    <>
      {logo ? (
        <Logo
          name={logo}
          className={
            logo === "aba"
              ? "h-[22px] w-auto shrink-0"
              : "size-[26px] shrink-0 text-ink"
          }
        />
      ) : null}
      <span
        className={
          href
            ? "underline decoration-dotted decoration-from-font underline-offset-[4px] group-hover/co:decoration-solid"
            : undefined
        }
      >
        {children}
      </span>
    </>
  );
  const layout = `inline-flex items-center gap-[0.35em] ${className}`;
  if (!href) return <span className={layout}>{inner}</span>;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/co transition-colors ${layout}`}
    >
      {inner}
    </a>
  );
}
