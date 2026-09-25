import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/content/profile";
import { stats } from "@/lib/stats";
import { PALETTE } from "@/lib/theme";

export const alt = `${profile.firstName} ${profile.lastName} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The card most people see before the site: the hero, redrawn for a feed. It
 * holds up against both light and dark chat backgrounds, and the fonts are
 * vendored so the build needs no network. Satori
 * cannot read variable fonts, so each weight is its own static file.
 *
 * Satori supports flexbox only, so nothing here uses grid and every element
 * with more than one child declares `display: flex`.
 */
const fonts = join(process.cwd(), "src/assets/fonts");
const [medium, display] = await Promise.all([
  readFile(join(fonts, "InstrumentSans-Medium.ttf")),
  readFile(join(fonts, "BricolageGrotesque-ExtraBold.ttf")),
]);

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          backgroundColor: PALETTE.bg,
          backgroundImage: `radial-gradient(circle at 88% 12%, ${PALETTE.accent}33, transparent 45%)`,
          color: PALETTE.ink,
          fontFamily: "Instrument Sans",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "10px 22px 10px 16px",
              borderRadius: 999,
              border: `2px solid ${PALETTE.rule}`,
              fontSize: 24,
              color: PALETTE.ink2,
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 999, backgroundColor: PALETTE.accent }} />
            Available for full-stack roles
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              borderRadius: 999,
              backgroundColor: PALETTE.accent,
              color: PALETTE.bg,
              fontFamily: "Bricolage Grotesque",
              fontSize: 32,
              letterSpacing: "-0.04em",
            }}
          >
            YL
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Bricolage Grotesque",
            fontSize: 150,
            lineHeight: 0.86,
            letterSpacing: "-0.055em",
          }}
        >
          <span>{profile.firstName}</span>
          <span style={{ color: PALETTE.accent }}>{profile.lastName}</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: PALETTE.ink3 }}>
          <span style={{ color: PALETTE.ink2 }}>{profile.title} · {profile.location}</span>
          <span>1337 / 42 · {stats.projectsValidated} projects</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Sans", data: medium, weight: 500, style: "normal" },
        { name: "Bricolage Grotesque", data: display, weight: 800, style: "normal" },
      ],
    },
  );
}
