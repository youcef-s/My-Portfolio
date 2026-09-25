import { Arrow, Box, Frame, Note, Title } from "./primitives";

export function SnowCrashDiagram() {
  const levels = [0, 1, 2, 3, 4, 5];
  return (
    <Frame>
      <Title>fourteen levels, one ladder</Title>
      {levels.map((i) => (
        <g key={i}>
          <rect
            x={14 + i * 48}
            y={116 - i * 14}
            width="42"
            height={14}
            rx="2"
            fill={i === 5 ? "var(--accent-soft)" : "var(--surface)"}
            stroke={i === 5 ? "var(--accent)" : "var(--rule-2)"}
          />
          <text x={35 + i * 48} y={126 - i * 14} textAnchor="middle" fontSize="7" fill="var(--ink-2)">
            {i === 5 ? "root" : `lvl ${i}`}
          </text>
        </g>
      ))}
      <Arrow x1={56} y1={110} x2={62} y2={100} />
      <Arrow x1={104} y1={96} x2={110} y2={86} />
      <Arrow x1={152} y1={82} x2={158} y2={72} />
      <Arrow x1={200} y1={68} x2={206} y2={58} />
      <Arrow x1={248} y1={54} x2={254} y2={46} accent />
      <Box x={14} y={32} w={110} h={22} label="setuid · race · ASM" dashed />
      <Note x={14} y={150}>Every level is someone else&rsquo;s small mistake,</Note>
      <Note x={14} y={160}>read backwards from the binary.</Note>
    </Frame>
  );
}

export function DarklyDiagram() {
  const flaws = [
    "stored XSS",
    "SQL injection",
    "IDOR",
    "broken auth",
    "weak hashing",
  ];
  return (
    <Frame>
      <Title>one site, five classes of flaw</Title>
      {flaws.map((f, i) => (
        <g key={f}>
          <rect x={12} y={32 + i * 22} width="150" height="18" rx="2" fill="var(--surface)" stroke="var(--rule-2)" />
          <text x={20} y={44 + i * 22} fontSize="7.5" fill="var(--ink-2)">{f}</text>
          <Arrow x1={166} y1={41 + i * 22} x2={186} y2={41 + i * 22} accent={i === 1} />
          <rect x={190} y={32 + i * 22} width="118" height="18" rx="2" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="0.6" />
          <text x={198} y={44 + i * 22} fontSize="7" fill="var(--ink-2)">written remediation</text>
        </g>
      ))}
      <Note x={12} y={158}>Finding it is half the exercise. Saying how to fix it is the other half.</Note>
    </Frame>
  );
}

export function Boot2RootDiagram() {
  return (
    <Frame>
      <Title>from an ISO to root</Title>
      <Box x={12} y={40} w={58} label="enumerate" sub="ports, svc" />
      <Arrow x1={74} y1={53} x2={94} y2={53} />
      <Box x={98} y={40} w={58} label="foothold" sub="weak svc" />
      <Arrow x1={160} y1={53} x2={180} y2={53} />
      <Box x={184} y={40} w={58} label="pivot" sub="local user" />
      <Arrow x1={246} y1={53} x2={266} y2={53} accent />
      <Box x={270} y={40} w={38} label="root" accent />
      <Arrow x1={41} y1={66} x2={41} y2={90} dashed />
      <Box x={12} y={94} w={172} h={22} label="write up every path that worked" dashed />
      <Note x={12} y={152}>The report is the deliverable, not the shell.</Note>
    </Frame>
  );
}

export function FtShieldDiagram() {
  return (
    <Frame>
      <Title>persistence, from the other side</Title>
      <Box x={12} y={38} w={62} label="dropped" sub="single run" />
      <Arrow x1={78} y1={51} x2={98} y2={51} />
      <Box x={102} y={38} w={62} label="daemonise" />
      <Arrow x1={166} y1={51} x2={186} y2={51} />
      <Box x={190} y={38} w={62} label="reinstall" sub="on boot" accent />
      <Arrow x1={221} y1={64} x2={221} y2={86} />
      <Box x={160} y={90} w={144} h={24} label="authenticated remote shell" />
      <Arrow x1={133} y1={64} x2={133} y2={86} dashed />
      <Box x={70} y={90} w={84} h={24} label="lock: one copy" dashed />
      <Note x={12} y={134}>Written to learn what a defender</Note>
      <Note x={12} y={144}>is actually looking for:</Note>
      <Note x={12} y={156} accent>a service nobody installed.</Note>
    </Frame>
  );
}

export function SslDiagram() {
  return (
    <Frame>
      <Title>a hash, built from the spec</Title>
      <Box x={12} y={36} w={72} label="message" sub="any length" />
      <Arrow x1={88} y1={49} x2={108} y2={49} />
      <Box x={112} y={36} w={72} label="pad" sub="to 512-bit" accent />
      <Arrow x1={188} y1={49} x2={208} y2={49} />
      <Box x={212} y={36} w={96} label="split into blocks" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={92 + i * 54} y={78} width="46" height="22" rx="2" fill="var(--surface)" stroke="var(--rule-2)" />
          <text x={115 + i * 54} y={92} textAnchor="middle" fontSize="7" fill="var(--ink-2)">block {i}</text>
          {i < 2 ? <Arrow x1={138 + i * 54} y1={89} x2={146 + i * 54} y2={89} /> : null}
        </g>
      ))}
      <Arrow x1={115} y1={100} x2={115} y2={118} />
      <Box x={40} y={122} w={240} h={24} label="64 compression rounds, state carried forward" />
      <Arrow x1={228} y1={134} x2={252} y2={134} accent />
      <Note x={256} y={137} accent>digest</Note>
      <Note x={12} y={116}>No library calls.</Note>
    </Frame>
  );
}
