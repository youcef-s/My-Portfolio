import { Arrow, Box, Frame, Note, Title } from "./primitives";

/** Shared phone outline for the mobile drawings. */
function Phone({ x, accent, children }: { x: number; accent?: boolean; children: React.ReactNode }) {
  return (
    <g>
      <rect
        x={x}
        y={30}
        width="84"
        height="104"
        rx="8"
        fill="var(--surface)"
        stroke={accent ? "var(--accent)" : "var(--rule-2)"}
      />
      <rect x={x + 32} y={34} width="20" height="3" rx="1.5" fill="var(--rule-2)" />
      {children}
    </g>
  );
}

export function HangoutsDiagram() {
  return (
    <Frame>
      <Title>contacts, then conversations</Title>
      <Phone x={14}>
        {[46, 58, 70].map((y) => (
          <g key={y}>
            <circle cx={27} cy={y + 4} r="4" fill="var(--bg-2)" stroke="var(--rule-2)" strokeWidth="0.6" />
            <rect x={36} y={y} width="50" height="8" rx="2" fill="var(--bg-2)" stroke="var(--rule)" strokeWidth="0.5" />
          </g>
        ))}
        <line x1="22" y1="86" x2="90" y2="86" stroke="var(--rule)" strokeWidth="0.6" />
        <rect x={22} y={92} width="38" height="11" rx="3" fill="var(--bg-2)" stroke="var(--rule-2)" strokeWidth="0.6" />
        <rect x={50} y={108} width="40" height="11" rx="3" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="0.6" />
      </Phone>

      <Box x={122} y={40} w={80} h={24} label="SQLite" sub="contacts table" />
      <Arrow x1={202} y1={52} x2={222} y2={52} />
      <Box x={226} y={40} w={82} h={24} label="list + detail" />
      <Box x={122} y={74} w={80} h={24} label="SMS" sub="sent + received" />
      <Arrow x1={202} y1={86} x2={218} y2={86} />
      <Box x={222} y={74} w={86} h={24} label="message thread" sub="per contact" />
      <Box x={122} y={108} w={186} h={22} label="locale switch, EN / FR, at runtime" accent />

      <Note x={14} y={150}>The screen turns, the layout is rebuilt.</Note>
      <Note x={14} y={162}>The draft has to outlive it.</Note>
    </Frame>
  );
}

export function SwiftyDiagram() {
  return (
    <Frame>
      <Title>oauth2, then the profile</Title>
      <Box x={10} y={36} w={56} label="app" />
      <Arrow x1={70} y1={49} x2={86} y2={49} label="login" />
      <Box x={90} y={36} w={66} label="42 OAuth" accent />
      <Arrow x1={160} y1={49} x2={176} y2={49} label="code" />
      <Box x={180} y={36} w={56} label="token" />
      <Arrow x1={240} y1={49} x2={256} y2={49} />
      <Box x={258} y={36} w={52} label="API v2" />

      <Arrow x1={284} y1={62} x2={284} y2={80} />
      <Box x={196} y={84} w={114} h={22} label="user + skills" />

      <Arrow x1={196} y1={95} x2={172} y2={95} dashed label="401" />
      <Box x={90} y={84} w={78} h={22} label="refresh token" dashed />
      <Arrow x1={129} y1={84} x2={129} y2={62} dashed />

      {[
        { y: 118, w: 84, hot: true },
        { y: 128, w: 58, hot: false },
        { y: 138, w: 70, hot: false },
      ].map((bar) => (
        <rect key={bar.y} x={196} y={bar.y} width={bar.w} height="5" rx="2" fill={bar.hot ? "var(--accent)" : "var(--rule-2)"} />
      ))}
      <Note x={10} y={124}>An expired token must not</Note>
      <Note x={10} y={136}>send the user back to a login screen.</Note>
      <Note x={196} y={158}>skill levels from the API</Note>
    </Frame>
  );
}

export function PiscineDiagram() {
  const modules = [
    { n: "00", label: "first render" },
    { n: "01", label: "state + navigation" },
    { n: "02", label: "API and data" },
    { n: "03", label: "design pass" },
  ];

  return (
    <Frame>
      <Title>six modules, one diary app</Title>
      {modules.map((m, i) => (
        <g key={m.n}>
          <rect x={14} y={28 + i * 16} width="192" height="14" rx="3" fill="var(--surface)" stroke="var(--rule-2)" />
          <text x={24} y={38 + i * 16} fontSize="7" fill="var(--ink-3)">
            {m.n}
          </text>
          <text x={44} y={38 + i * 16} fontSize="7" fill="var(--ink-2)">
            {m.label}
          </text>
          <text x={196} y={38 + i * 16} textAnchor="end" fontSize="6.5" fill="var(--ink-3)">
            7h
          </text>
        </g>
      ))}

      <Arrow x1={110} y1={94} x2={110} y2={100} />

      {/* 04 and 05 are one continuous build, which is where the hours went. */}
      <g>
        <rect x={14} y={104} width="192" height="48" rx="3" fill="var(--accent-soft)" stroke="var(--accent)" />
        <text x={24} y={118} fontSize="7.5" fill="var(--ink)">
          04 auth + database
        </text>
        <text x={24} y={131} fontSize="7.5" fill="var(--ink)">
          05 profile + agenda
        </text>
        <text x={24} y={144} fontSize="6.5" fill="var(--ink-3)">
          one diary app, carried across both
        </text>
        <text x={196} y={124} textAnchor="end" fontSize="9" fill="var(--accent)">
          63h
        </text>
      </g>

      <Box x={216} y={28} w={92} h={46} label="Expo" sub="one toolchain" />
      <Note x={216} y={92}>Graded weekly,</Note>
      <Note x={216} y={104}>no carry-over.</Note>
      <Note x={216} y={126}>91h total</Note>
      <Note x={14} y={168}>A language and a paradigm on the clock, the 42 way.</Note>
    </Frame>
  );
}
