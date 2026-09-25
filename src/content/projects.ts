import ftTranscendence from "@/assets/ft-transcendence.webp";
import hypertube from "@/assets/hypertube.webp";
import type { Figure } from "@/lib/screenshot";

export const DOMAINS = {
  systems: "Systems",
  network: "Networking",
  security: "Security",
  web: "Web",
  cloud: "Cloud",
  algo: "Algorithms",
  mobile: "Mobile",
  web3: "Web3",
} as const;

export type Domain = keyof typeof DOMAINS;
export type Project = {
  name: string;
  /** Languages or platform, shown top-right on the card. */
  tech: string;
  blurb: string;
  domains: Domain[];
  /** Every project carries one: a capture where there was a UI, a drawing where there was not. */
  figure: Figure;
};

/** Selected 1337 / 42 work. The full record lives in `curriculum.ts`. */
export const projects: Project[] = [
  {
    name: "ft_transcendence",
    tech: "Backend · real time",
    blurb:
      "A real time multiplayer Pong platform built as a team, where I owned the backend. OAuth2 login, two factor authentication, public, private and protected chat channels, direct messaging, and the APIs holding the game and the social layer together.",
    domains: ["web", "systems"],
    figure: {
      kind: "screenshot",
      image: ftTranscendence,
      alt: "The PIPO landing page: the product name over a short pitch and a Play now button, beside a 3D render of a table-tennis paddle and ball on a near-black ground.",
    },
  },
  {
    name: "hypertube",
    tech: "Frontend · streaming",
    blurb:
      "A video search and streaming site served by a BitTorrent player that downloads and plays at the same time. I built the frontend: authentication and account management, live search across sources, and a player that holds up on a phone.",
    domains: ["web"],
    figure: {
      kind: "screenshot",
      image: hypertube,
      alt: "The H-Tube streaming interface: a search bar and Home, Movies and Series navigation over a full-bleed hero for a featured film with rating, genres, runtime and a Watch now button, above a scrolling row of poster thumbnails.",
    },
  },
  {
    name: "webserv",
    tech: "C++98",
    blurb:
      "An HTTP/1.1 server with nothing underneath it. One non-blocking poll() loop over every socket, an NGINX-style config parser for virtual hosts, CGI execution, chunked transfer and file upload, all driven from a real browser.",
    domains: ["systems", "network", "cloud"],
    figure: {
      kind: "diagram",
      diagram: "webserv",
      alt: "A single poll() loop sits between many client sockets and the parse, route, CGI and respond stages, showing that one loop serves every connection rather than a thread per client.",
    },
  },
  {
    name: "cub3d",
    tech: "C · MiniLibX",
    blurb:
      "A raycasting engine in the Wolfenstein lineage. DDA grid traversal, per-column texture mapping, a map parser that rejects anything malformed, and a render loop that stays smooth while the player turns.",
    domains: ["systems", "algo"],
    figure: {
      kind: "diagram",
      diagram: "cub3d",
      alt: "A top-down grid with rays fanning out from the player on the left, and on the right the same rays drawn as textured vertical columns whose height falls off with distance.",
    },
  },
  {
    name: "minishell",
    tech: "C",
    blurb:
      "A working shell: lexer, recursive-descent parser, pipelines, all four redirections, heredocs, environment expansion, builtins, job signals and an exit-status contract that matches bash where it matters.",
    domains: ["systems"],
    figure: {
      kind: "diagram",
      diagram: "minishell",
      alt: "A command line passing through lexer, parser and expansion, then forking into two processes joined by a pipe, with the last stage redirected to a file.",
    },
  },
  {
    name: "Inception-of-Things",
    tech: "k3s · Argo CD",
    blurb:
      "Kubernetes from the developer's side. Multi-node k3s clusters provisioned by Vagrant, host-based Ingress routing, and a GitOps pipeline where Argo CD reconciles the running app against a Git repository.",
    domains: ["cloud", "network", "systems"],
    figure: {
      kind: "diagram",
      diagram: "iot",
      alt: "A git repository watched by Argo CD, which reconciles a three-node k3s cluster behind a host-based Ingress, so drift is corrected automatically.",
    },
  },
  {
    name: "ft_nmap",
    tech: "C · libpcap",
    blurb:
      "A port scanner that writes its own packets. SYN, NULL, FIN, XMAS, ACK and UDP scans, raw socket construction, and a thread pool dividing the port range across workers.",
    domains: ["network", "security"],
    figure: {
      kind: "diagram",
      diagram: "ftNmap",
      alt: "Six scan types feeding a hand-built raw socket aimed at a target, with the port range split across a pool of worker threads.",
    },
  },
  {
    name: "taskmaster",
    tech: "Process control",
    blurb:
      "A supervisor-class process manager: declarative config, restart policies, graceful stop signals with timeouts, per-process log redirection, and a control shell that reloads the config without dropping running jobs.",
    domains: ["systems"],
    figure: {
      kind: "diagram",
      diagram: "taskmaster",
      alt: "A process lifecycle cycling through stopped, running, exited and restart, with a separate path for reloading configuration without dropping running children.",
    },
  },
  {
    name: "snow-crash",
    tech: "ASM · Perl · PHP",
    blurb:
      "Fourteen escalating levels of binary and web exploitation. Reversing unknown binaries, race conditions, and privilege escalation up to root, each level documented alongside the flaw that let it through.",
    domains: ["security"],
    figure: {
      kind: "diagram",
      diagram: "snowCrash",
      alt: "A rising staircase of privilege levels climbing from level zero to root, each step reached by exploiting a different class of mistake.",
    },
  },
  {
    name: "darkly",
    tech: "Web security",
    blurb:
      "A deliberately vulnerable site taken apart end to end. Stored and reflected XSS, SQL injection, IDOR, broken authentication and weak hashing, each one with a written remediation.",
    domains: ["security", "web"],
    figure: {
      kind: "diagram",
      diagram: "darkly",
      alt: "Five classes of web vulnerability listed on the left, each paired with a written remediation on the right.",
    },
  },
  {
    name: "ft_turing",
    tech: "OCaml",
    blurb:
      "A Turing machine simulator written functionally: machines described in JSON, an immutable tape and transition engine, plus a hand-built unary subtraction machine to prove the model runs.",
    domains: ["algo"],
    figure: {
      kind: "diagram",
      diagram: "ftTuring",
      alt: "A Turing machine tape of symbols with a read head over one cell, and below it the transition rule that fires: read, write, move, change state.",
    },
  },
  {
    name: "ft_containers",
    tech: "C++98 templates",
    blurb:
      "vector, map, set and stack rebuilt to the standard, with iterator hierarchies, allocators, SFINAE type traits, and a red-black tree keeping the ordered containers balanced.",
    domains: ["algo", "systems"],
    figure: {
      kind: "diagram",
      diagram: "ftContainers",
      alt: "A balanced red-black tree of seven nodes with alternating red and black levels, the structure that keeps ordered container lookup logarithmic.",
    },
  },
  {
    name: "Philosophers",
    tech: "C · pthreads",
    blurb:
      "The dining philosophers solved twice, once with threads and mutexes and once with processes and semaphores. Both deadlock free and race free under a checker that fails you on a single millisecond of drift.",
    domains: ["systems", "algo"],
    figure: {
      kind: "diagram",
      diagram: "philosophers",
      alt: "Five philosophers seated in a circle with a fork between each pair, beside the three rules that prevent deadlock and starvation.",
    },
  },
  {
    name: "ft_ssl_md5",
    tech: "C · cryptography",
    blurb:
      "MD5 and the SHA-2 family implemented straight from the specifications, down to the padding, block scheduling and compression rounds, behind an OpenSSL-compatible CLI reading stdin, strings or files.",
    domains: ["security", "algo"],
    figure: {
      kind: "diagram",
      diagram: "ftSsl",
      alt: "A message padded to a multiple of 512 bits, split into blocks that feed forward through compression rounds into a final digest.",
    },
  },
  {
    name: "Tokenizer & TokenizeArt",
    tech: "Solidity",
    blurb:
      "An ERC-20 token and an ERC-721 NFT collection written, tested and deployed to a public chain, with on-chain metadata and a documented deployment path a stranger can reproduce.",
    domains: ["web3"],
    figure: {
      kind: "diagram",
      diagram: "token",
      alt: "An ERC-20 fungible token and an ERC-721 one-of-one token both deployed to a public testnet from verified, reproducible source.",
    },
  },
  {
    name: "matt-daemon",
    tech: "C++",
    blurb:
      "A properly daemonised TCP service: fork/setsid detachment, a single-instance lock file, one client at a time, a small command interpreter and a complete activity log.",
    domains: ["systems", "network"],
    figure: {
      kind: "diagram",
      diagram: "mattDaemon",
      alt: "A parent process forking a child that calls setsid to become a session leader while the parent exits, leaving a locked single-instance TCP listener with no controlling terminal.",
    },
  },
  {
    name: "lem-ipc",
    tech: "System V IPC",
    blurb:
      "Independent processes cooperating with no network at all. Shared memory for the board, message queues for coordination and semaphores for the locking, playing a team game down to the last survivor.",
    domains: ["systems"],
    figure: {
      kind: "diagram",
      diagram: "lemIpc",
      alt: "Four independent processes reading and writing one shared-memory board, guarded by semaphores and coordinated through message queues, with no networking involved.",
    },
  },
  {
    name: "Inception",
    tech: "Docker Compose",
    blurb:
      "A full stack from hand-written Dockerfiles only, with no pulled application images. NGINX terminating TLSv1.3, WordPress on php-fpm, MariaDB, named volumes and a private bridge network.",
    domains: ["cloud", "network"],
    figure: {
      kind: "diagram",
      diagram: "inception",
      alt: "NGINX, WordPress on php-fpm and MariaDB on a private bridge network with a named volume, every image written by hand rather than pulled.",
    },
  },
  {
    name: "ft_hangouts",
    tech: "React Native · Expo",
    blurb:
      "A contact manager on Expo: contacts in SQLite, a message thread per contact, and a full runtime locale switch. The screen turns, the layout is rebuilt, and every draft and selection still has to be there afterwards.",
    domains: ["mobile"],
    figure: {
      kind: "diagram",
      diagram: "hangouts",
      alt: "A phone showing a contact list above a message thread, beside the pieces behind it: a SQLite contacts table feeding the list, a stored thread per contact, and a runtime locale switch.",
    },
  },
  {
    name: "swifty-companion",
    tech: "React Native · Expo",
    blurb:
      "An Expo client for the 42 API. OAuth2 authorisation, a refresh path that recovers from an expired token without sending the user back to a login screen, student lookup and the skill breakdown the API returns.",
    domains: ["mobile"],
    figure: {
      kind: "diagram",
      diagram: "swifty",
      alt: "An OAuth2 flow from the app through the 42 authorisation server to a token and the v2 API, with a dashed path showing an expired token being refreshed after a 401, and the skill levels the API returns.",
    },
  },
  {
    name: "Mobile piscine",
    tech: "React Native · Expo",
    blurb:
      "Six graded modules on Expo. The first four run from a first render through state, navigation and API-backed screens to a design pass; the last two build a diary app behind Google and GitHub login, with entries in a hosted database and a calendar agenda over them.",
    domains: ["mobile"],
    figure: {
      kind: "diagram",
      diagram: "piscine",
      alt: "Six piscine modules: 00 to 03 at seven hours each, running from first render through state and navigation and API data to a design pass, feeding into modules 04 and 05, which build one diary app with authentication, a database, a profile and an agenda across 63 hours.",
    },
  },
  {
    name: "push_swap",
    tech: "C",
    blurb:
      "Sort a stack using eleven permitted instructions and as few moves as possible. A chunked radix strategy that clears the top grading threshold on 500 random integers.",
    domains: ["algo"],
    figure: {
      kind: "diagram",
      diagram: "pushSwap",
      alt: "Two stacks with values moving between them in chunks, beside the eleven permitted instructions and the move budget the solution has to beat.",
    },
  },
  {
    name: "cloud-1",
    tech: "Deployment · Terraform",
    blurb:
      "A multi-service application put onto cloud infrastructure the way it would actually ship, with provisioning, TLS, persistent storage and a scripted setup that rebuilds the whole thing from nothing.",
    domains: ["cloud"],
    figure: {
      kind: "diagram",
      diagram: "cloud",
      alt: "A provisioning script building an instance, terminating TLS, running the services behind a reverse proxy and attaching a persistent volume, so the stack can be rebuilt from nothing.",
    },
  },
  {
    name: "ft_shield",
    tech: "C · offensive security",
    blurb:
      "A resident daemon written to understand persistence from the attacker's side: self-reinstalling service, single-instance guard and an authenticated remote shell, written as a lab exercise in what defenders are looking for.",
    domains: ["security", "systems"],
    figure: {
      kind: "diagram",
      diagram: "ftShield",
      alt: "A dropped binary daemonising, reinstalling itself at boot and exposing an authenticated remote shell, drawn to show what a defender would look for.",
    },
  },
  {
    name: "boot2root",
    tech: "CTF",
    blurb:
      "A team assault on a hardened ISO. Enumerate services, chain the weaknesses, escalate to root, then write up every path that worked and why it existed.",
    domains: ["security"],
    figure: {
      kind: "diagram",
      diagram: "boot2root",
      alt: "A chain from service enumeration to foothold to pivot to root, with the written report of every working path as the actual deliverable.",
    },
  },
  {
    name: "Born2beroot & NetPractice",
    tech: "Linux · TCP/IP",
    blurb:
      "A hardened Debian VM with LVM-encrypted partitions, UFW, SSH off port 22, sudo auditing and a password policy, plus ten broken network topologies repaired by hand: subnets, masks and default routes.",
    domains: ["network", "cloud"],
    figure: {
      kind: "diagram",
      diagram: "networking",
      alt: "On the left a hardened host with encrypted volumes, a firewall and a moved SSH port; on the right two subnets joined through a router where the fix is the mask, not the cable.",
    },
  },
];
