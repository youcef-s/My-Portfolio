import type { ReactNode } from "react";

/**
 * A company name that links out when we have somewhere to send people, and is
 * plain text when we do not. The dotted underline marks it as a link without
 * competing with the heading it sits inside.
 */
export function CompanyLink({
  href,
  className = "",
  children,
}: {
  href?: string;
  className?: string;
  children: ReactNode;
}) {
  if (!href) return <span className={className}>{children}</span>;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline decoration-dotted decoration-from-font underline-offset-[4px] transition-colors hover:decoration-solid ${className}`}
    >
      {children}
    </a>
  );
}
