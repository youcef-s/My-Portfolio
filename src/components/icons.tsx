/**
 * The site's glyphs, drawn inline rather than pulled from an icon package: there
 * are seven of them, they all inherit `currentColor`, and a dependency for that
 * would ship a font or a tree of components to save a few hundred bytes of path.
 *
 * The drawn icons share a 16-unit box and a 1.3 stroke so they sit at the same
 * weight as the text beside them. The two brand marks are the official 24-unit
 * filled shapes, which cannot be redrawn without becoming a different logo.
 */
import type { SVGProps } from "react";

type IconProps = { className?: string };

function Stroked({ className = "size-4", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    />
  );
}

function Brand({ className = "size-4", ...props }: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className} {...props} />;
}

export function MailIcon({ className }: IconProps) {
  return (
    <Stroked className={className}>
      <rect x="1.6" y="3.4" width="12.8" height="9.2" rx="1.6" />
      <path d="m2.4 4.8 4.74 3.44a1.5 1.5 0 0 0 1.72 0L13.6 4.8" />
    </Stroked>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <Stroked className={className}>
      {/* The handset: two grip pads joined by the arc that sweeps under the dial. */}
      <path d="M5.9 1.9 3.2 3.4a1.4 1.4 0 0 0-.6 1.7 15 15 0 0 0 8.3 8.3 1.4 1.4 0 0 0 1.7-.6l1.5-2.7a1 1 0 0 0-.4-1.3l-2.3-1.2a1 1 0 0 0-1.2.2L9 9.1a11.6 11.6 0 0 1-2.1-2.1l1.3-1.2a1 1 0 0 0 .2-1.2L7.2 2.3a1 1 0 0 0-1.3-.4Z" />
    </Stroked>
  );
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <Brand className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </Brand>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <Brand className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
    </Brand>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <Stroked className={className}>
      <path d="M8 1.9v7.8M5.1 7.1 8 9.9l2.9-2.8" />
      <path d="M2.2 11.2v1.5a1.4 1.4 0 0 0 1.4 1.4h8.8a1.4 1.4 0 0 0 1.4-1.4v-1.5" />
    </Stroked>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <Stroked className={className}>
      <path d="m6 3.4 4.6 4.6L6 12.6" />
    </Stroked>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <Stroked className={className}>
      <path d="M4.6 11.4 11.4 4.6M5.6 4.6h5.8v5.8" />
    </Stroked>
  );
}
