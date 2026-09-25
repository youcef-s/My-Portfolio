import { Cub3dDiagram, ContainersDiagram, PushSwapDiagram, TuringDiagram } from "./craft";
import { HangoutsDiagram, PiscineDiagram, SwiftyDiagram } from "./mobile";
import { CloudDiagram, FtNmapDiagram, InceptionDiagram, IotDiagram, NetworkingDiagram } from "./network";
import {
  Boot2RootDiagram,
  DarklyDiagram,
  FtShieldDiagram,
  SnowCrashDiagram,
  SslDiagram,
} from "./security";
import {
  LemIpcDiagram,
  MattDaemonDiagram,
  MinishellDiagram,
  PhilosophersDiagram,
  TaskmasterDiagram,
  WebservDiagram,
} from "./systems";
import { TokenDiagram } from "./web3";

/** Every project diagram, keyed by the name used in the project data. */
export const DIAGRAMS = {
  webserv: WebservDiagram,
  cub3d: Cub3dDiagram,
  minishell: MinishellDiagram,
  iot: IotDiagram,
  ftNmap: FtNmapDiagram,
  taskmaster: TaskmasterDiagram,
  snowCrash: SnowCrashDiagram,
  darkly: DarklyDiagram,
  ftTuring: TuringDiagram,
  ftContainers: ContainersDiagram,
  philosophers: PhilosophersDiagram,
  ftSsl: SslDiagram,
  token: TokenDiagram,
  mattDaemon: MattDaemonDiagram,
  lemIpc: LemIpcDiagram,
  inception: InceptionDiagram,
  hangouts: HangoutsDiagram,
  swifty: SwiftyDiagram,
  piscine: PiscineDiagram,
  pushSwap: PushSwapDiagram,
  cloud: CloudDiagram,
  ftShield: FtShieldDiagram,
  boot2root: Boot2RootDiagram,
  networking: NetworkingDiagram,
} as const;

export type DiagramName = keyof typeof DIAGRAMS;
