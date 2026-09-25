import { Arrow, Box, Frame, Note, r, Title } from "./primitives";

export function WebservDiagram() {
  return (
    <Frame>
      <Title>one non-blocking poll() loop</Title>
      <Box x={10} y={40} w={52} label="sockets" sub="N clients" />
      <Arrow x1={66} y1={53} x2={82} y2={53} />
      <Box x={86} y={40} w={56} label="poll()" sub="readiness" accent />
      <Arrow x1={146} y1={53} x2={162} y2={53} />
      <Box x={166} y={40} w={62} label="parse" sub="route by vhost" />
      <Arrow x1={232} y1={53} x2={248} y2={53} />
      <Box x={252} y={40} w={58} label="respond" sub="chunked" />

      <Arrow x1={197} y1={66} x2={197} y2={82} />
      <Box x={166} y={86} w={62} h={22} label="CGI" dashed />
      <Arrow x1={228} y1={97} x2={276} y2={70} dashed />

      {/* The loop back to poll(): the whole point of the design. */}
      <line x1="281" y1="66" x2="281" y2="122" stroke="var(--ink-3)" strokeWidth="1" />
      <line x1="281" y1="122" x2="114" y2="122" stroke="var(--ink-3)" strokeWidth="1" />
      <Arrow x1={114} y1={122} x2={114} y2={70} />
      <Note x={198} y={118} anchor="middle">next ready socket</Note>

      <Note x={10} y={146}>No thread per client. One loop owns every socket,</Note>
      <Note x={10} y={158}>so a slow client cannot block any other.</Note>
    </Frame>
  );
}

export function MinishellDiagram() {
  return (
    <Frame>
      <Title>a line becomes a process tree</Title>
      <Note x={12} y={38} accent>{`cat f.txt | grep x > out`}</Note>
      <Box x={12} y={50} w={62} label="lexer" sub="tokens" />
      <Arrow x1={78} y1={63} x2={94} y2={63} />
      <Box x={98} y={50} w={62} label="parser" sub="AST" />
      <Arrow x1={164} y1={63} x2={180} y2={63} />
      <Box x={184} y={50} w={62} label="expand" sub="$VAR, ~" />
      <Arrow x1={215} y1={76} x2={215} y2={94} />
      <Box x={166} y={98} w={44} h={24} label="fork" />
      <Box x={216} y={98} w={44} h={24} label="fork" />
      <Arrow x1={188} y1={122} x2={188} y2={138} accent />
      <Arrow x1={238} y1={122} x2={238} y2={138} accent />
      <Note x={132} y={144} accent>pipe()</Note>
      <Note x={250} y={144}>dup2 → out</Note>
      <Note x={12} y={144}>Each stage keeps its own fds,</Note>
      <Note x={12} y={154}>so the exit status still matches bash.</Note>
    </Frame>
  );
}

export function TaskmasterDiagram() {
  return (
    <Frame>
      <Title>supervised process lifecycle</Title>
      <Box x={12} y={40} w={52} label="STOPPED" />
      <Arrow x1={68} y1={53} x2={90} y2={53} label="start" />
      <Box x={94} y={40} w={52} label="RUNNING" accent />
      <Arrow x1={150} y1={53} x2={172} y2={53} label="exit" />
      <Box x={176} y={40} w={52} label="EXITED" />
      <Arrow x1={228} y1={53} x2={250} y2={53} label="policy" />
      <Box x={254} y={40} w={54} label="RESTART" />
      <Arrow x1={281} y1={66} x2={281} y2={92} />
      <Arrow x1={281} y1={100} x2={126} y2={100} />
      <Arrow x1={120} y1={92} x2={120} y2={68} />
      <Box x={84} y={116} w={152} h={24} label="reload config, keep children" dashed />
      <Note x={12} y={162}>Restart is a policy, not a reflex: always, never,</Note>
      <Note x={12} y={171}>or only on unexpected exit codes.</Note>
    </Frame>
  );
}

export function MattDaemonDiagram() {
  return (
    <Frame>
      <Title>detaching from the terminal</Title>
      <Box x={12} y={38} w={58} label="parent" sub="has tty" />
      <Arrow x1={74} y1={51} x2={96} y2={51} label="fork" />
      <Box x={100} y={38} w={58} label="child" />
      <Arrow x1={162} y1={51} x2={184} y2={51} label="setsid" />
      <Box x={188} y={38} w={72} label="session lead" accent />
      <Arrow x1={41} y1={64} x2={41} y2={84} />
      <Box x={12} y={88} w={58} h={22} label="exit" dashed />
      <Arrow x1={220} y1={64} x2={220} y2={84} />
      <Box x={168} y={88} w={128} h={22} label="lock file, one instance" />
      <Arrow x1={220} y1={110} x2={220} y2={128} />
      <Box x={150} y={132} w={152} h={22} label="TCP listener + command shell" />
      <Note x={12} y={124}>No controlling terminal,</Note>
      <Note x={12} y={134}>no SIGHUP on logout.</Note>
    </Frame>
  );
}

export function LemIpcDiagram() {
  return (
    <Frame>
      <Title>processes talking without a network</Title>
      <Box x={110} y={36} w={100} h={30} label="shared memory" sub="the board" accent />
      <Box x={12} y={92} w={54} label="proc A" />
      <Box x={78} y={92} w={54} label="proc B" />
      <Box x={144} y={92} w={54} label="proc C" />
      <Box x={210} y={92} w={54} label="proc D" />
      <Arrow x1={39} y1={92} x2={130} y2={68} />
      <Arrow x1={105} y1={92} x2={150} y2={68} />
      <Arrow x1={171} y1={92} x2={172} y2={68} />
      <Arrow x1={237} y1={92} x2={194} y2={68} />
      <Box x={74} y={130} w={128} h={22} label="semaphores guard writes" dashed />
      <Note x={214} y={144}>msg queues</Note>
      <Note x={214} y={154}>coordinate teams</Note>
      <Note x={12} y={144}>Same host only.</Note>
    </Frame>
  );
}

export function PhilosophersDiagram() {
  const seats = [0, 1, 2, 3, 4];
  const cx = 96;
  const cy = 96;
  return (
    <Frame>
      <Title>eat, think, never deadlock</Title>
      {seats.map((i) => {
        const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
        const x = r(cx + Math.cos(a) * 46);
        const y = r(cy + Math.sin(a) * 46);
        const fa = ((i + 0.5) / 5) * Math.PI * 2 - Math.PI / 2;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="11" fill="var(--surface)" stroke={i === 0 ? "var(--accent)" : "var(--rule-2)"} />
            <text x={x} y={y + 3} textAnchor="middle" fontSize="8" fill="var(--ink-2)">
              {i + 1}
            </text>
            <line
              x1={r(cx + Math.cos(fa) * 26)}
              y1={r(cy + Math.sin(fa) * 26)}
              x2={r(cx + Math.cos(fa) * 38)}
              y2={r(cy + Math.sin(fa) * 38)}
              stroke="var(--ink-3)"
              strokeWidth="1.4"
            />
          </g>
        );
      })}
      <Note x={cx} y={cy + 3} anchor="middle">5 forks</Note>
      <Box x={158} y={44} w={150} h={22} label="lower-numbered fork first" />
      <Box x={158} y={72} w={150} h={22} label="timestamp every meal" />
      <Box x={158} y={100} w={150} h={22} label="monitor kills on starvation" accent />
      <Note x={158} y={144}>One millisecond late and the</Note>
      <Note x={158} y={154}>grader fails the whole run.</Note>
    </Frame>
  );
}
