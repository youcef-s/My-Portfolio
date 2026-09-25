import { Arrow, Box, Frame, Note, Title } from "./primitives";

export function TokenDiagram() {
  return (
    <Frame>
      <Title>two standards, one chain</Title>
      <Box x={12} y={36} w={132} h={30} label="ERC-20" sub="fungible supply" accent />
      <Box x={12} y={74} w={132} h={30} label="ERC-721" sub="one-of-one, on-chain metadata" />
      <Arrow x1={148} y1={51} x2={172} y2={62} />
      <Arrow x1={148} y1={89} x2={172} y2={78} />
      <Box x={176} y={54} w={64} h={26} label="deploy" />
      <Arrow x1={242} y1={67} x2={266} y2={67} />
      <Box x={252} y={54} w={58} h={26} label="testnet" />
      <Box x={12} y={114} w={228} h={24} label="verified source, reproducible from the repo" dashed />
      <Note x={12} y={158}>Anyone can read the contract and check the supply.</Note>
    </Frame>
  );
}
