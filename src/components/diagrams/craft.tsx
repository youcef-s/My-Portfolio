import { Arrow, Box, Frame, Note, r, Title } from "./primitives";

export function Cub3dDiagram() {
  const rays = Array.from({ length: 9 }, (_, i) => i);
  return (
    <Frame>
      <Title>rays become columns</Title>
      {/* Top-down grid the player stands in. */}
      {Array.from({ length: 5 }, (_, r) =>
        Array.from({ length: 5 }, (_, c) => {
          const wall = (r === 0 || c === 0 || r === 4 || (r === 2 && c === 3));
          return (
            <rect
              key={`${r}-${c}`}
              x={14 + c * 22}
              y={34 + r * 22}
              width="22"
              height="22"
              fill={wall ? "var(--rule-2)" : "none"}
              stroke="var(--rule)"
              strokeWidth="0.6"
            />
          );
        }),
      )}
      {rays.map((i) => {
        const a = -0.55 + (i / 8) * 1.1;
        return (
          <line
            key={i}
            x1={58}
            y1={100}
            x2={r(58 + Math.sin(a) * 70)}
            y2={r(100 - Math.cos(a) * 62)}
            stroke="var(--accent)"
            strokeWidth="0.7"
            opacity="0.75"
          />
        );
      })}
      <circle cx="58" cy="100" r="3" fill="var(--accent)" />
      <Note x={14} y={158}>DDA walks the grid</Note>

      <Arrow x1={130} y1={92} x2={152} y2={92} />
      {rays.map((i) => {
        const h = 30 + Math.abs(4 - i) * 7;
        return (
          <rect
            key={i}
            x={158 + i * 17}
            y={92 - h / 2}
            width="16"
            height={h}
            fill="var(--accent-soft)"
            stroke="var(--accent)"
            strokeWidth="0.6"
          />
        );
      })}
      <Note x={158} y={150}>one textured column per ray,</Note>
      <Note x={158} y={160}>height = 1 / distance</Note>
    </Frame>
  );
}

export function PushSwapDiagram() {
  const chunks = [
    { label: "0-99", y: 36 },
    { label: "100-199", y: 58 },
    { label: "200-299", y: 80 },
  ];
  return (
    <Frame>
      <Title>sorting on a move budget</Title>
      <Box x={12} y={34} w={54} h={92} label="" />
      <Note x={39} y={48} anchor="middle" accent>stack A</Note>
      {chunks.map((c, i) => (
        <rect key={c.label} x={18} y={c.y + 22} width="42" height="14" rx="2" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="0.6" opacity={1 - i * 0.22} />
      ))}
      <Arrow x1={70} y1={80} x2={98} y2={80} label="push chunk" />
      <Box x={102} y={34} w={54} h={92} label="" />
      <Note x={129} y={48} anchor="middle">stack B</Note>
      <Arrow x1={129} y1={130} x2={39} y2={130} label="rotate back in order" />
      <Box x={172} y={34} w={136} h={22} label="11 instructions only" accent />
      <Box x={172} y={62} w={136} h={22} label="sa sb ss pa pb ra rb rr" />
      <Box x={172} y={90} w={136} h={22} label="rra rrb rrr" />
      <Note x={172} y={132}>500 integers, under 5500 moves:</Note>
      <Note x={172} y={142} accent>chunked radix beats quicksort here.</Note>
    </Frame>
  );
}

export function ContainersDiagram() {
  return (
    <Frame>
      <Title>a red-black tree under the map</Title>
      <circle cx="160" cy="42" r="11" fill="var(--ink-2)" stroke="var(--ink-2)" />
      <text x="160" y="45" textAnchor="middle" fontSize="8" fill="var(--bg)">8</text>
      <line x1="152" y1="50" x2="120" y2="70" stroke="var(--rule-2)" />
      <line x1="168" y1="50" x2="200" y2="70" stroke="var(--rule-2)" />
      <circle cx="114" cy="78" r="11" fill="var(--accent)" />
      <text x="114" y="81" textAnchor="middle" fontSize="8" fill="var(--bg)">4</text>
      <circle cx="206" cy="78" r="11" fill="var(--accent)" />
      <text x="206" y="81" textAnchor="middle" fontSize="8" fill="var(--bg)">12</text>
      <line x1="106" y1="86" x2="86" y2="104" stroke="var(--rule-2)" />
      <line x1="122" y1="86" x2="142" y2="104" stroke="var(--rule-2)" />
      <line x1="198" y1="86" x2="178" y2="104" stroke="var(--rule-2)" />
      <line x1="214" y1="86" x2="234" y2="104" stroke="var(--rule-2)" />
      {[
        [80, 112, "2"], [148, 112, "6"], [172, 112, "10"], [240, 112, "14"],
      ].map(([x, y, t]) => (
        <g key={String(t)}>
          <circle cx={Number(x)} cy={Number(y)} r="10" fill="var(--ink-2)" />
          <text x={Number(x)} y={Number(y) + 3} textAnchor="middle" fontSize="7.5" fill="var(--bg)">{String(t)}</text>
        </g>
      ))}
      <Note x={12} y={146}>Rebalancing on every insert is what keeps</Note>
      <Note x={12} y={156}>map lookup at O(log n) instead of O(n).</Note>
      <Note x={236} y={146} accent>red</Note>
      <Note x={264} y={146}>/ black</Note>
    </Frame>
  );
}

export function TuringDiagram() {
  const cells = ["1", "1", "1", "-", "1", "1", "."];
  return (
    <Frame>
      <Title>a machine described in JSON</Title>
      {cells.map((c, i) => (
        <g key={i}>
          <rect x={44 + i * 32} y={62} width="32" height="30" fill={i === 3 ? "var(--accent-soft)" : "var(--surface)"} stroke="var(--rule-2)" />
          <text x={60 + i * 32} y={82} textAnchor="middle" fontSize="11" fill="var(--ink-2)">{c}</text>
        </g>
      ))}
      <polygon points="140,52 134,42 146,42" fill="var(--accent)" />
      <Note x={140} y={38} anchor="middle" accent>head</Note>
      <Box x={38} y={104} w={244} h={24} label="read '-' → write '=' , move R , goto subtract" />
      <Note x={12} y={148}>State, tape and transitions are data.</Note>
      <Note x={12} y={158}>The interpreter is 200 lines of OCaml.</Note>
    </Frame>
  );
}
