import { Arrow, Box, Frame, Note, Title } from "./primitives";

export function FtNmapDiagram() {
  const scans = ["SYN", "NULL", "FIN", "XMAS", "ACK", "UDP"];
  return (
    <Frame>
      <Title>six scans, one thread pool</Title>
      {scans.map((s, i) => (
        <Box key={s} x={12 + (i % 3) * 50} y={34 + Math.floor(i / 3) * 30} w={44} h={22} label={s} accent={i === 0} />
      ))}
      <Arrow x1={164} y1={62} x2={188} y2={62} />
      <Box x={192} y={34} w={58} h={52} label="raw socket" sub="raw TCP" />
      <Arrow x1={250} y1={62} x2={274} y2={62} />
      <Box x={266} y={50} w={44} h={24} label="target" />
      <Box x={12} y={104} w={172} h={22} label="port range split across workers" dashed />
      <Note x={12} y={144}>The flags are the point: each combination</Note>
      <Note x={12} y={154}>provokes a different reply from a live host.</Note>
    </Frame>
  );
}

export function NetworkingDiagram() {
  return (
    <Frame>
      <Title>hardened host, repaired routes</Title>
      <Box x={12} y={34} w={80} h={24} label="LVM + LUKS" accent />
      <Box x={12} y={62} w={80} h={22} label="UFW" />
      <Box x={12} y={88} w={80} h={22} label="ssh :4242" />
      <Box x={12} y={114} w={80} h={22} label="sudo audit" />
      <Note x={12} y={150}>Born2beroot</Note>

      <line x1="108" y1="30" x2="108" y2="158" stroke="var(--rule-2)" strokeDasharray="3 3" />

      <Box x={126} y={38} w={54} label="10.0.1.0" sub="/24" />
      <Arrow x1={182} y1={51} x2={204} y2={51} />
      <Box x={208} y={38} w={44} label="router" accent />
      <Arrow x1={230} y1={64} x2={230} y2={84} />
      <Box x={208} y={88} w={44} label="gw" />
      <Arrow x1={252} y1={51} x2={276} y2={51} />
      <Box x={262} y={38} w={50} label="10.0.2.0" sub="/24" />
      <Note x={126} y={112}>mask too wide → no route</Note>
      <Note x={126} y={124} accent>fix the mask, not the cable</Note>
      <Note x={126} y={150}>NetPractice</Note>
    </Frame>
  );
}

export function InceptionDiagram() {
  return (
    <Frame>
      <Title>hand-written Dockerfiles only</Title>
      <rect x="10" y="30" width="300" height="86" rx="4" fill="none" stroke="var(--rule-2)" strokeDasharray="3 2" />
      <Note x={16} y={42}>private bridge network</Note>
      <Box x={22} y={50} w={76} h={46} label="NGINX" sub="TLSv1.3 only" accent />
      <Arrow x1={98} y1={73} x2={118} y2={73} />
      <Box x={122} y={50} w={76} h={46} label="WordPress" sub="php-fpm" />
      <Arrow x1={198} y1={73} x2={218} y2={73} />
      <Box x={222} y={50} w={76} h={46} label="MariaDB" />
      <Arrow x1={260} y1={96} x2={260} y2={124} />
      <Box x={222} y={128} w={76} h={22} label="named volume" dashed />
      <Note x={22} y={134}>No pulled application images.</Note>
      <Note x={22} y={144}>Every layer is written, not borrowed.</Note>
    </Frame>
  );
}

export function IotDiagram() {
  return (
    <Frame>
      <Title>git is the source of truth</Title>
      <Box x={12} y={38} w={58} label="git repo" accent />
      <Arrow x1={74} y1={51} x2={98} y2={51} label="watch" />
      <Box x={102} y={38} w={62} label="Argo CD" />
      <Arrow x1={133} y1={64} x2={133} y2={86} label="reconcile" />
      <rect x="10" y="90" width="300" height="56" rx="4" fill="none" stroke="var(--rule-2)" strokeDasharray="3 2" />
      <Note x={16} y={102}>k3s cluster</Note>
      <Box x={22} y={108} w={58} h={26} label="server" />
      <Box x={88} y={108} w={58} h={26} label="agent 1" />
      <Box x={154} y={108} w={58} h={26} label="agent 2" />
      <Box x={220} y={108} w={80} h={26} label="Ingress" sub="by host" />
      <Box x={176} y={38} w={64} label="apply" dashed />
      <Note x={250} y={44}>drift is</Note>
      <Note x={250} y={54} accent>corrected</Note>
      <Note x={12} y={164}>Nobody deploys by hand; the cluster chases the repo.</Note>
    </Frame>
  );
}

export function CloudDiagram() {
  return (
    <Frame>
      <Title>rebuildable from nothing</Title>
      <Box x={12} y={36} w={62} label="script" sub="provision" accent />
      <Arrow x1={78} y1={49} x2={100} y2={49} />
      <Box x={104} y={36} w={62} label="instance" />
      <Arrow x1={170} y1={49} x2={192} y2={49} />
      <Box x={196} y={36} w={62} label="TLS" sub="certbot" />
      <Arrow x1={135} y1={62} x2={135} y2={84} />
      <Box x={72} y={88} w={132} h={26} label="services + reverse proxy" />
      <Arrow x1={135} y1={114} x2={135} y2={132} />
      <Box x={82} y={136} w={106} h={24} label="persistent volume" dashed />
      <Note x={200} y={96}>Destroy the box and</Note>
      <Note x={200} y={106}>run the script again:</Note>
      <Note x={200} y={116} accent>same stack, same data.</Note>
    </Frame>
  );
}
