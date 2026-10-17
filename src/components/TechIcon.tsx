import { techIcons, type TechName } from "@/content/tech-icons";

/**
 * A 24×24 mark that inherits the chip colour, so the row stays one palette.
 * TCP/IP has no product logo; the three nodes are an original network mark.
 */
export function TechIcon({ name, className }: { name: TechName; className?: string }) {
  if (name === "TCP/IP") return <NetworkMark className={className} />;

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d={techIcons[name]} />
    </svg>
  );
}

function NetworkMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M8.1 11.25 14.65 7.75M8.1 12.75 14.65 16.25"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="5.7" cy="12" r="2.35" fill="currentColor" />
      <circle cx="17.4" cy="6.8" r="2.35" fill="currentColor" />
      <circle cx="17.4" cy="17.2" r="2.35" fill="currentColor" />
    </svg>
  );
}
