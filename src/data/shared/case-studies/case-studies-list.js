import Accuknox from './logos/accuknox.inline.svg'
import Akita from './logos/akita.inline.svg';
import Alibaba from './logos/alibaba.inline.svg';
import Android from './logos/android.inline.svg';
import AntGroup from './logos/ant-group.inline.svg';
import Apple from './logos/apple.inline.svg';
import Aqua from './logos/aqua.inline.svg';
import ArvanCloud from './logos/arvancloud.inline.svg';
import Bell from './logos/bell.inline.svg';
import Bytedance from './logos/byte-dance.inline.svg';
import CapitalOne from './logos/capital-one.inline.svg';
import Cloudflare from './logos/cloudflare.inline.svg';
import CoreTech from './logos/coretech.inline.svg';
import Cruise from './logos/cruise.inline.svg';
import Cycode from './logos/cycode.inline.svg';
import Datadog from './logos/datadog.inline.svg';
import DigitalOcean from './logos/digital-ocean.inline.svg';
import DoorDash from './logos/doordash.inline.svg';
import Exein from './logos/exein.inline.svg';
import F5 from './logos/f5.inline.svg';
import FlowSecurity from './logos/flowsecurity.inline.svg';
import Global from './logos/global.inline.svg';
import Google from './logos/google.inline.svg';
import groundcover from './logos/groundcover.inline.svg';
import Helios from './logos/helios.inline.svg';
import Ikea from './logos/ikea.inline.svg';
import Isovalent from './logos/isovalent.inline.svg';
import Kodem from './logos/kodemsec.inline.svg';
import Levo from './logos/levo.inline.svg';
import LineCoporation from './logos/line-corp.inline.svg';
import LinkedIn from './logos/linkedin.inline.svg';
import Meta from './logos/meta.inline.svg';
import Microsoft from './logos/microsoft.inline.svg';
import Netflix from './logos/netflix.inline.svg';
import NYT from './logos/nyt.inline.svg';
import Oligo from './logos/oligosecurity.inline.svg';
import Palantir from './logos/palantir.inline.svg';
import RADSecurity from './logos/rad-security.inline.svg';
import Redhat from './logos/redhat.inline.svg';
import Samsung from './logos/samsung.inline.svg';
import SentinelOne from './logos/sentinelone.inline.svg';
import Seznam from './logos/seznam.inline.svg';
import Shopify from './logos/shopify.inline.svg';
import Sky from './logos/sky.inline.svg';
import Sysdig from './logos/sysdig.inline.svg';
import Threatx from './logos/threatX.inline.svg';
import Traceable from './logos/traceable.inline.svg';
import Trip from './logos/trip.inline.svg';
import Walmart from './logos/walmart.inline.svg';
import Wildlife from './logos/wildlife.inline.svg';
import Wiz from './logos/wiz.inline.svg';
import Yahoo from './logos/yahoo.inline.svg';

const caseStudiesData = {
  en: [
    {
      title: 'Google',
      logo: Google,
      description:
        '<strong>Google</strong> uses eBPF for security auditing, packet processing, and performance monitoring',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=XFJw37Vwzcc&t=657s',
        },
        {
          text: 'Talk',
          to: 'https://legacy.netdevconf.info/0x14/session.html?talk-replacing-HTB-with-EDT-and-BPF',
        },
      ],
    },
    {
      title: 'Netflix',
      logo: Netflix,
      description: '<strong>Netflix</strong> uses eBPF at scale for network insights',
      links: [
        {
          text: 'Blog',
          to: 'https://netflixtechblog.com/how-netflix-uses-ebpf-flow-logs-at-scale-for-network-insight-e3ea997dca96',
        },
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=16slh29iN1g',
        },
      ],
    },
    {
      title: 'Android',
      logo: Android,
      description:
        '<strong>Android</strong> uses eBPF to monitor network usage, power, and memory profiling',
      links: [
        {
          text: 'Docs',
          to: 'https://source.android.com/docs/core/architecture/kernel/bpf',
        },
      ],
    },
    {
      title: 'S&P Global',
      logo: Global,
      description:
        '<strong>S&P Global</strong> uses eBPF through Cilium for networking across multiple clouds and on-prem',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6CZ_SSTqb4g',
        },
      ],
    },
    {
      title: 'Shopify',
      logo: Shopify,
      description: '<strong>Shopify</strong> uses eBPF through Falco for intrusion detection',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6pVci31Mb6Q',
        },
      ],
    },
    {
      title: 'Cloudflare',
      logo: Cloudflare,
      description:
        '<strong>Cloudflare</strong> uses eBPF for network security, performance monitoring, and network observability',
      links: [
        {
          text: 'Blog',
          to: 'https://blog.cloudflare.com/tag/ebpf/',
        },
        {
          text: 'Talk',
          to: 'https://legacy.netdevconf.info/0x13/session.html?talk-XDP-based-DDoS-mitigation',
        },
      ],
    },
    {
      title: 'Microsoft',
      logo: Microsoft,
      description:
        '<strong>Microsot</strong> uses eBPF to enhance the observability and inspection of processes within Kubernetes',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=ilcYXPDSgu8&list=PLj6h78yzYM2Pm5nF_GmNQHMyt9CUZr2uQ&index=5',
        },
      ],
    },
    {
      title: 'Samsung',
      logo: Samsung,
      description: '<strong>Samsung</strong> uses eBPF in their android devices for networking',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/live/EViAho-6qoc?t=5220&si=shsfjYQ5X5lnL5cL',
        },
      ],
    },
    {
      title: 'Ikea',
      logo: Ikea,
      description:
        '<strong>Ikea</strong> uses eBPF through Cilium for networking and load balancing in their private cloud',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=sg-F_R-ZVNc',
        },
      ],
    },
    {
      title: 'Apple',
      logo: Apple,
      description: '<strong>Apple</strong> uses eBPF through Falco for kernel security monitoring',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZBlJSr6XkN8',
        },
      ],
    },
    {
      title: 'Meta',
      logo: Meta,
      description:
        '<strong>Meta</strong> uses eBPF to process and load balance every packet coming into their data centers',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZYBXZFKPS28',
        },
        {
          text: 'Blog',
          to: 'https://engineering.fb.com/2018/05/22/open-source/open-sourcing-katran-a-scalable-network-load-balancer/',
        },
        {
          text: 'Talk',
          to: 'https://lpc.events/event/16/contributions/1363/',
        },
      ],
    },
    {
      title: 'DoorDash',
      logo: DoorDash,
      description:
        '<strong>DoorDash</strong> uses eBPF through BPFAgent for kernel level monitoring',
      links: [
        {
          text: 'Blog',
          to: 'https://doordash.engineering/2023/08/15/bpfagent-ebpf-for-monitoring-at-doordash/',
        },
      ],
    },
    {
      title: 'Datadog',
      logo: Datadog,
      description:
        '<strong>Datadog</strong> uses eBPF for networking and security in their SaaS product',
      links: [
        {
          text: 'Video',
          to: 'https://datadogon.datadoghq.com/episodes/datadog-on-ebpf/',
        },
        {
          text: 'Blog',
          to: 'https://www.datadoghq.com/blog/network-performance-monitoring/',
        },
        {
          text: 'Talk',
          to: ' https://www.youtube.com/watch?v=6nlv_VCsjpQ',
        },
      ],
    },
    {
      title: 'Alibaba',
      logo: Alibaba,
      description:
        '<strong>Alibaba</strong> uses eBPF through Cilium to provide networking in their cloud',
      links: [
        {
          text: 'Blog',
          to: 'https://www.alibabacloud.com/blog/how-does-alibaba-cloud-build-high-performance-cloud-native-pod-networks-in-production-environments_596590',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=Z4qxd5yYoP4',
        },
      ],
    },
    {
      title: 'Red Hat',
      logo: Redhat,
      description:
        '<strong>Red Hat</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/xxRAppnmirY?si=OSxhLJ8S1B2-Z-9T',
        },
      ],
    },
    {
      title: 'Isovalent',
      logo: Isovalent,
      description:
        "eBPF is the technlogy that powers <b>Isovalent</b>'s enterpise networking, observability and security solutions",
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=Xs3MBK17kCk',
        },
        {
          text: 'Blog',
          to: 'https://isovalent.com/blog/post/next-generation-observability-with-ebpf/?utm_source=website-ebpf&utm_medium=referral&utm_campaign=ebpf-blog',
        },
      ],
    },
    {
      title: 'Seznam',
      logo: Seznam,
      description: '<strong>Seznam</strong> uses eBPF for load balancing',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=xwjZF3alO7g',
        },
      ],
    },
    {
      title: 'Trip.com',
      logo: Trip,
      description: '<strong>Trip.com</strong> uses eBPF for load balancing',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/02/05/how-trip-com-uses-cilium/',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=NIsU4I950l4',
        },
      ],
    },
    {
      title: 'Bell',
      logo: Bell,
      description: '<strong>Bell</strong> Canada uses eBPF to moderize telco networking with SRv6',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=fNtG0iHYne4',
        },
      ],
    },
    {
      title: 'Wildlife Studios',
      logo: Wildlife,
      description:
        '<strong>Wildlife Studios</strong> uses eBPF through Cilium for high performance game networking',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/09/03/wildlife-studios-multi-cluster-gaming-platform',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=_1t3bXzptP0',
        },
      ],
    },
    {
      title: 'Capital One',
      logo: CapitalOne,
      description: '<strong>Capital One</strong> uses eBPF to secure their cloud infrastructure',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w&ab_channel=eBPFSummit',
        },
      ],
    },
    {
      title: 'Sky',
      logo: Sky,
      description: '<strong>Sky</strong> uses eBPF through Cilium for cloud networking',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=u-4naOMfs_w',
        },
      ],
    },
    {
      title: 'Walmart',
      logo: Walmart,
      description: '<strong>Walmart</strong> uses eBPF for edge cloud load balancing',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/thmAcyix8FM',
        },
        {
          text: 'Blog',
          to: 'https://medium.com/walmartglobaltech/introducing-walmarts-l3af-project-how-do-we-use-ebpf-to-provide-network-visibility-in-a-8b9ae4d26200',
        },
      ],
    },
    {
      title: 'Palantir',
      logo: Palantir,
      description: '<strong>Palantir</strong> uses eBPF to debug networking problems',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/0RDp1IPxbg0',
        },
      ],
    },
    {
      title: 'Cruise',
      logo: Cruise,
      description: '<strong>Cruise</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/7bdy2AkRjqE',
        },
      ],
    },
    {
      title: 'Digital Ocean',
      logo: DigitalOcean,
      description: '<strong>Digital Ocean</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/gcHxfhDT-I4',
        },
      ],
    },
    {
      title: 'Yahoo',
      logo: Yahoo,
      description: '<strong>Yahoo</strong> uses eBPF for load balancing and performance analysis',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/-C86fBMcp5Q',
        },
        {
          text: 'Talk',
          to: 'https://www.usenix.org/conference/lisa21/presentation/jones-zachary',
        },
      ],
    },
    {
      title: 'Bytedance',
      logo: Bytedance,
      description: '<strong>Bytedance</strong> uses eBPF for system tracing',
      links: [
        {
          text: 'Blog',
          to: 'https://inf.news/en/tech/3313635d67f796ae38e7ef64061bc7c4.html',
        },
      ],
    },
    {
      title: 'F5',
      logo: F5,
      description: '<strong>F5</strong> BIG-IP integration with Cilium VTEP feature',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/EfmdjrQLFFg',
        },
        {
          text: 'Guide',
          to: 'https://github.com/f5devcentral/f5-ci-docs/blob/master/docs/cilium/cilium-bigip-info.rst',
        },
      ],
    },
    {
      title: 'LinkedIn',
      logo: LinkedIn,
      description: '<strong>LinkedIn</strong> uses eBPF for Infrastructure Observability',
      links: [
        {
          text: 'Blog',
          to: 'https://engineering.linkedin.com/blog/2022/skyfall--ebpf-agent-for-infrastructure-observability',
        },
      ],
    },
    {
      title: 'The New York Times',
      logo: NYT,
      description: '<strong>The New York Times</strong> uses eBPF for networking',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=qmrHONqsV2M&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D',
        },
      ],
    },
    {
      title: 'SentinelOne',
      logo: SentinelOne,
      description:
        '<strong>SentinelOne</strong> uses eBPF to detect and to respond to runtime threats like ransomware and zero-day exploits in real time.',
      links: [
        {
          text: 'Blog',
          to: 'https://www.sentinelone.com/blog/the-advantages-of-ebpf-for-cwpp-applications/',
        },
      ],
    },
    {
      title: 'Aqua Security',
      logo: Aqua,
      description:
        '<strong>Aqua Security</strong> uses eBPF to handle runtime detection and forensics',
      links: [
        {
          text: 'Blog',
          to: 'https://blog.aquasec.com/linux-vulnerabilitie-tracee',
        },
      ],
    },
    {
      title: 'Oligo Security',
      logo: Oligo,
      description:
        '<strong>Oligo Security</strong> uses eBPF for application security observability and protection',
      links: [
        {
          text: 'Blog',
          to: 'https://www.oligo.security/blog/scaling-runtime-security-how-ebpf-is-solving-decade-long-challenges',
        },
      ],
    },
    {
      title: 'Akita',
      logo: Akita,
      description: '<strong>Akita</strong> uses eBPF at scale for API observability',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.akita.software/docs/how-akita-works#what-makes-akita-different',
        },
      ],
    },
    {
      title: 'groundcover',
      logo: groundcover,
      description:
        '<strong>groundcover</strong> uses eBPF to instantly monitor application performance in cloud native environments, at any scale.',
      links: [
        {
          text: 'Product',
          to: 'https://www.groundcover.com/how-it-works',
        },
        {
          text: 'Docs',
          to: 'https://www.groundcover.com/docs',
        },
        {
          text: 'Video',
          to: 'https://youtu.be/73wait5RR7c?si=vZKzrQpwHmyIeM3k',
        },
      ],
    },
    {
      title: 'Line Coporation',
      logo: LineCoporation,
      description:
        '<strong>Line Corporation</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=cxfVpBYlol4',
        },
      ],
    },
    {
      title: 'Exein',
      logo: Exein,
      description:
        '<strong>Exein</strong> uses eBPF in their open source runtime security framework for IoT',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=vmRQXRit-sY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=16',
        },
      ],
    },
    {
      title: 'Ant Group',
      logo: AntGroup,
      description:
        '<strong>Ant Group</strong> uses eBPF in their cloud native security platform for vulnerability live-patching, and system anomaly detection',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/TXlxgDvxcoY?si=lvC1HqNl4jXNyfD0',
        },
      ],
    },
    {
      title: 'Sysdig',
      logo: Sysdig,
      description:
        '<strong>Sysdig</strong> uses eBPF to enable high-performance system call tracing, facilitate container-aware troubleshooting, conduct security auditing, and provide rich insights and data from the kernel',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=BxoKztfHnYY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=28',
        },
        {
          text: 'Blog',
          to: 'https://sysdig.com/blog/sysdig-and-falco-now-powered-by-ebpf/',
        },
      ],
    },
    {
      title: 'Kodem',
      logo: Kodem,
      description:
        '<strong>Kodem</strong> uses eBPF for application visibilty and runtime intelligence',
      links: [
        {
          text: 'Blog',
          to: 'https://kodemsec.webflow.io/resources/deep-visibility-with-ebpf',
        },
      ],
    },
    {
      title: 'Cycode',
      logo: Cycode,
      description: '<strong>Cycode</strong> uses eBPF for CI/CD security',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=pcBGRFvSrvY',
        },
        {
          text: 'Blog',
          to: 'https://cycode.com/blog/introducing-cimon-build-hardening/',
        },
      ],
    },
    {
      title: 'Wiz',
      logo: Wiz,
      description:
        '<strong>Wiz</strong> uses eBPF to provide real-time threat detection and monitoring within cloud workloads',
      links: [
        {
          text: 'Blog',
          to: 'https://www.wiz.io/blog/wiz-expands-platform-with-the-runtime-sensor-to-provide-unified-cloud-security',
        },
      ],
    },
    {
      title: 'Core Tech',
      logo: CoreTech,
      description:
        '<strong>Core Tech</strong> uses eBPF to filter out unwanted traffic and mitigate DDoS attacks ',
      links: [
        {
          text: 'Blog',
          to: 'https://www.linkedin.com/pulse/coretechnologys-how-drop-1-tbps-ddos-traffic-coretechnolgys-rayif/',
        },
      ],
    },
    {
      title: 'FlowSecurity',
      logo: FlowSecurity,
      description:
        '<strong>Flow Security</strong> uses eBPF technology to analyze data in motion for data discovery, classification, risk management, and data violation detection and response',
      links: [
        {
          text: 'Blog',
          to: 'https://www.flowsecurity.com/ebpf-data-security-hype/',
        },
      ],
    },
    {
      title: 'Helios',
      logo: Helios,
      description:
        '<strong>Helios</strong> uses eBPF in their runtime analysis tool for observability and security',
      links: [
        {
          text: 'Blog',
          to: 'https://gethelios.dev/blog/introducing-helios-runtime-for-appsec/',
        },
      ],
    },
    {
      title: 'ThreatX',
      logo: Threatx,
      description:
        '<strong>ThreatX</strong> uses eBPF for securing their runtime environment and delivering real-time blocking for runtime threats',
      links: [
        {
          text: 'Blog',
          to: 'https://www.threatx.com/blog/cisco-acquires-isovalent-creator-of-ebpf-why-it-matters/',
        },
      ],
    },
    {
      title: 'Levo',
      logo: Levo,
      description: '<strong>Levo</strong> uses eBPF for API discovery and documentation',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.levo.ai/api-observability/concepts#ebpf-sensor',
        },
      ],
    },
    {
      title: 'Traceable',
      logo: Traceable,
      description: '<strong>Traceable</strong> uses eBPF for enhanced data collection',
      links: [
        {
          text: 'Blog',
          to: 'https://www.traceable.ai/blog-post/unlocking-the-power-of-ebpf-at-traceable',
        },
      ],
    },
    {
      title: 'ArvanCloud',
      logo: ArvanCloud,
      description: '<strong>ArvanCloud</strong> uses eBPF for their CDN product',
      links: [
        {
          text: 'Blog',
          to: 'https://medium.com/@amiremohamadi/we-removed-shared-memory-by-building-an-ebpf-load-balancer-394f9f1b344',
        },
      ],
    },
    {
      title: 'RAD Security',
      logo: RADSecurity,
      description:
        '<strong>RAD Security</strong> uses eBPF for runtime threat detection and supply chain verification',
      links: [
        {
          text: 'Blog',
          to: 'https://ksoc.com/blog/introducing-rad-security',
        },
      ],
    },
    {
      title: 'Accuknox',
      logo: Accuknox,
      description: '<strong>Accuknox</strong> uses eBPF through KubeArmor for runtime security observability, container forensics and policy enforcement',
      links: [
        {
          text: 'Blog',
          to: 'https://www.accuknox.com/blog/runtime-security-and-the-role-of-ebpf-bpf-lsm',
        },
      ],
    },
  ],
  'fr-fr': [
    {
      title: 'Google',
      logo: Google,
      description:
        '<strong>Google</strong> utilise eBPF pour des audits sécurité, du traitement de paquets ainsi que le monitoring de performance',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=XFJw37Vwzcc&t=657s',
        },
        {
          text: 'Talk',
          to: 'https://legacy.netdevconf.info/0x14/session.html?talk-replacing-HTB-with-EDT-and-BPF',
        },
      ],
    },
    {
      title: 'Netflix',
      logo: Netflix,
      description:
        '<strong>Netflix</strong> utilise eBPF à grande échelle pour obtenir des informations sur le réseau',
      links: [
        {
          text: 'Blog',
          to: 'https://netflixtechblog.com/how-netflix-uses-ebpf-flow-logs-at-scale-for-network-insight-e3ea997dca96',
        },
      ],
    },
    {
      title: 'Android',
      logo: Android,
      description:
        '<strong>Android</strong> utilise eBPF pour surveiller l’utilisation du réseau, pour l’alimentation et le profilage de la mémoire',
      links: [
        {
          text: 'Docs',
          to: 'https://source.android.com/docs/core/architecture/kernel/bpf',
        },
      ],
    },
    {
      title: 'S&P Global',
      logo: Global,
      description:
        '<strong>S&P Global</strong> utilise eBPF via Cilium pour la mise en réseau à travers plusieurs clouds et sur site.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6CZ_SSTqb4g',
        },
      ],
    },
    {
      title: 'Shopify',
      logo: Shopify,
      description:
        '<strong>Shopify</strong> utilise eBPF via Falco pour la détection des intrusions',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6pVci31Mb6Q',
        },
      ],
    },
    {
      title: 'Cloudflare',
      logo: Cloudflare,
      description:
        '<strong>Cloudflare</strong> utilise eBPF pour la sécurisation du réseau, la surveillance des performances et l’observabilité du réseau',
      links: [
        {
          text: 'Blog',
          to: 'https://blog.cloudflare.com/tag/ebpf/',
        },
        {
          text: 'Talk',
          to: 'https://legacy.netdevconf.info/0x13/session.html?talk-XDP-based-DDoS-mitigation',
        },
      ],
    },
    {
      title: 'Microsoft',
      logo: Microsoft,
      description:
        '<strong>Microsot</strong> uses eBPF to enhance the observability and inspection of processes within Kubernetes',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=ilcYXPDSgu8&list=PLj6h78yzYM2Pm5nF_GmNQHMyt9CUZr2uQ&index=5',
        },
      ],
    },
    {
      title: 'Samsung',
      logo: Samsung,
      description: '<strong>Samsung</strong> uses eBPF in their android devices for networking',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/live/EViAho-6qoc?t=5220&si=shsfjYQ5X5lnL5cL',
        },
      ],
    },
    {
      title: 'Ikea',
      logo: Ikea,
      description:
        '<strong>Ikea</strong> uses eBPF through Cilium for networking and load balancing in their private cloud',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=sg-F_R-ZVNc',
        },
      ],
    },
    {
      title: 'Apple',
      logo: Apple,
      description: '<strong>Apple</strong> uses eBPF through Falco for kernel security monitoring',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZBlJSr6XkN8',
        },
      ],
    },
    {
      title: 'DoorDash',
      logo: DoorDash,
      description:
        '<strong>DoorDash</strong> uses eBPF through BPFAgent for kernel level monitoring',
      links: [
        {
          text: 'Blog',
          to: 'https://doordash.engineering/2023/08/15/bpfagent-ebpf-for-monitoring-at-doordash/',
        },
      ],
    },
    {
      title: 'Meta',
      logo: Meta,
      description:
        '<strong>Meta</strong> uses eBPF to process and load balance every packet coming into their data centers',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZYBXZFKPS28',
        },
        {
          text: 'Blog',
          to: 'https://engineering.fb.com/2018/05/22/open-source/open-sourcing-katran-a-scalable-network-load-balancer/',
        },
        {
          text: 'Talk',
          to: 'https://lpc.events/event/16/contributions/1363/',
        },
      ],
    },
    {
      title: 'Datadog',
      logo: Datadog,
      description:
        '<strong>Datadog</strong> uses eBPF for networking and security in their SaaS product',
      links: [
        {
          text: 'Video',
          to: 'https://datadogon.datadoghq.com/episodes/datadog-on-ebpf/',
        },
        {
          text: 'Blog',
          to: 'https://www.datadoghq.com/blog/network-performance-monitoring/',
        },
        {
          text: 'Talk',
          to: ' https://www.youtube.com/watch?v=6nlv_VCsjpQ',
        },
      ],
    },
    {
      title: 'Alibaba',
      logo: Alibaba,
      description:
        '<strong>Alibaba</strong> uses eBPF through Cilium to provide networking in their cloud',
      links: [
        {
          text: 'Blog',
          to: 'https://www.alibabacloud.com/blog/how-does-alibaba-cloud-build-high-performance-cloud-native-pod-networks-in-production-environments_596590',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=Z4qxd5yYoP4',
        },
      ],
    },
    {
      title: 'Red Hat',
      logo: Redhat,
      description:
        '<strong>Red Hat</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/xxRAppnmirY?si=OSxhLJ8S1B2-Z-9T',
        },
      ],
    },
    {
      title: 'Isovalent',
      logo: Isovalent,
      description:
        "eBPF is the technlogy that powers <b>Isovalent</b>'s enterpise networking, observability and security solutions",
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=Xs3MBK17kCk',
        },
        {
          text: 'Blog',
          to: 'https://isovalent.com/blog/post/next-generation-observability-with-ebpf/?utm_source=website-ebpf&utm_medium=referral&utm_campaign=ebpf-blog',
        },
      ],
    },
    {
      title: 'Seznam',
      logo: Seznam,
      description: '<strong>Seznam</strong> uses eBPF for load balancing',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=xwjZF3alO7g',
        },
      ],
    },
    {
      title: 'Trip.com',
      logo: Trip,
      description: '<strong>Trip.com</strong> uses eBPF for load balancing',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/02/05/how-trip-com-uses-cilium/',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=NIsU4I950l4',
        },
      ],
    },
    {
      title: 'Bell',
      logo: Bell,
      description: '<strong>Bell</strong> Canada uses eBPF to moderize telco networking with SRv6',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=fNtG0iHYne4',
        },
      ],
    },
    {
      title: 'Wildlife Studios',
      logo: Wildlife,
      description:
        '<strong>Wildlife Studios</strong> uses eBPF through Cilium for high performance game networking',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/09/03/wildlife-studios-multi-cluster-gaming-platform',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=_1t3bXzptP0',
        },
      ],
    },
    {
      title: 'Capital One',
      logo: CapitalOne,
      description: '<strong>Capital One</strong> uses eBPF to secure their cloud infrastructure',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w&ab_channel=eBPFSummit',
        },
      ],
    },
    {
      title: 'Sky',
      logo: Sky,
      description: '<strong>Sky</strong> uses eBPF through Cilium for cloud networking',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=u-4naOMfs_w',
        },
      ],
    },
    {
      title: 'Walmart',
      logo: Walmart,
      description: '<strong>Walmart</strong> uses eBPF for edge cloud load balancing',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/thmAcyix8FM',
        },
        {
          text: 'Blog',
          to: 'https://medium.com/walmartglobaltech/introducing-walmarts-l3af-project-how-do-we-use-ebpf-to-provide-network-visibility-in-a-8b9ae4d26200',
        },
      ],
    },
    {
      title: 'Palantir',
      logo: Palantir,
      description: '<strong>Palantir</strong> uses eBPF to debug networking problems',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/0RDp1IPxbg0',
        },
      ],
    },
    {
      title: 'Cruise',
      logo: Cruise,
      description: '<strong>Cruise</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/7bdy2AkRjqE',
        },
      ],
    },
    {
      title: 'Digital Ocean',
      logo: DigitalOcean,
      description: '<strong>Digital Ocean</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/gcHxfhDT-I4',
        },
      ],
    },
    {
      title: 'Yahoo',
      logo: Yahoo,
      description: '<strong>Yahoo</strong> uses eBPF for load balancing and performance analysis',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/-C86fBMcp5Q',
        },
        {
          text: 'Talk',
          to: 'https://www.usenix.org/conference/lisa21/presentation/jones-zachary',
        },
      ],
    },
    {
      title: 'Bytedance',
      logo: Bytedance,
      description: '<strong>Bytedance</strong> uses eBPF for system tracing',
      links: [
        {
          text: 'Blog',
          to: 'https://inf.news/en/tech/3313635d67f796ae38e7ef64061bc7c4.html',
        },
      ],
    },
    {
      title: 'F5',
      logo: F5,
      description: '<strong>F5</strong> BIG-IP integration with Cilium VTEP feature',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/EfmdjrQLFFg',
        },
        {
          text: 'Guide',
          to: 'https://github.com/f5devcentral/f5-ci-docs/blob/master/docs/cilium/cilium-bigip-info.rst',
        },
      ],
    },
    {
      title: 'LinkedIn',
      logo: LinkedIn,
      description: '<strong>LinkedIn</strong> uses eBPF for Infrastructure Observability',
      links: [
        {
          text: 'Blog',
          to: 'https://engineering.linkedin.com/blog/2022/skyfall--ebpf-agent-for-infrastructure-observability',
        },
      ],
    },
    {
      title: 'The New York Times',
      logo: NYT,
      description: '<strong>The New York Times</strong> uses eBPF for networking',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=qmrHONqsV2M&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D',
        },
      ],
    },
    {
      title: 'SentinelOne',
      logo: SentinelOne,
      description:
        '<strong>SentinelOne</strong> uses eBPF to detect and to respond to runtime threats like ransomware and zero-day exploits in real time',
      links: [
        {
          text: 'Blog',
          to: 'https://www.sentinelone.com/blog/the-advantages-of-ebpf-for-cwpp-applications/',
        },
      ],
    },
    {
      title: 'Aqua Security',
      logo: Aqua,
      description:
        '<strong>Aqua Security</strong> uses eBPF to handle runtime detection and forensics',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/BF42-cl-8B0?si=FM6Mp2PfewzX7BnS',
        },
      ],
    },
    {
      title: 'Akita',
      logo: Akita,
      description: '<strong>Akita</strong> uses eBPF at scale for API observability.',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.akita.software/docs/how-akita-works#what-makes-akita-different',
        },
      ],
    },
    {
      title: 'groundcover',
      logo: groundcover,
      description:
        '<strong>groundcover</strong> uses eBPF to instantly monitor application performance in cloud native environments, at any scale.',
      links: [
        {
          text: 'Product',
          to: 'https://www.groundcover.com/how-it-works',
        },
        {
          text: 'Docs',
          to: 'https://www.groundcover.com/docs',
        },
        {
          text: 'Video',
          to: 'https://youtu.be/73wait5RR7c?si=vZKzrQpwHmyIeM3k',
        },
      ],
    },
    {
      title: 'Line Coporation',
      logo: LineCoporation,
      description:
        '<strong>Line Corporation</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=cxfVpBYlol4',
        },
      ],
    },
    {
      title: 'Exein',
      logo: Exein,
      description:
        '<strong>Exein</strong> uses eBPF in their open source runtime security framework for IoT',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/vmRQXRit-sY?si=WurbrS-lNCEsDWGS',
        },
      ],
    },
    {
      title: 'Ant Group',
      logo: AntGroup,
      description:
        '<strong>Ant Group</strong> uses eBPF in their cloud native security paltform for vulnerability live-patching, and system anomaly detection',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/TXlxgDvxcoY?si=iAsbxdWJLlt2p9SV',
        },
      ],
    },
    {
      title: 'Sysdig',
      logo: Sysdig,
      description:
        '<strong>Sysdig</strong> uses eBPF to enable high-performance system call tracing, facilitate container-aware troubleshooting, conduct security auditing, and provide rich insights and data from the kernel',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=BxoKztfHnYY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=28',
        },
        {
          text: 'Blog',
          to: 'https://sysdig.com/blog/sysdig-and-falco-now-powered-by-ebpf/',
        },
      ],
    },
    {
      title: 'Kodem',
      logo: Kodem,
      description:
        '<strong>Kodem</strong> uses eBPF for application visibilty and runtime intelligence',
      links: [
        {
          text: 'Blog',
          to: 'https://kodemsec.webflow.io/resources/deep-visibility-with-ebpf',
        },
      ],
    },
    {
      title: 'Cycode',
      logo: Cycode,
      description: '<strong>Cycode</strong> uses eBPF for CI/CD security',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=pcBGRFvSrvY',
        },
        {
          text: 'Blog',
          to: 'https://cycode.com/blog/introducing-cimon-build-hardening/',
        },
      ],
    },
    {
      title: 'Wiz',
      logo: Wiz,
      description:
        '<strong>Wiz</strong> uses eBPF to provide real-time threat detection and monitoring within cloud workloads',
      links: [
        {
          text: 'Blog',
          to: 'https://www.wiz.io/blog/wiz-expands-platform-with-the-runtime-sensor-to-provide-unified-cloud-security',
        },
      ],
    },
    {
      title: 'Core Tech',
      logo: CoreTech,
      description:
        '<strong>Core Tech</strong> uses eBPF to filter out unwanted traffic and mitigate DDoS attacks ',
      links: [
        {
          text: 'Blog',
          to: 'https://www.linkedin.com/pulse/coretechnologys-how-drop-1-tbps-ddos-traffic-coretechnolgys-rayif/',
        },
      ],
    },
    {
      title: 'FlowSecurity',
      logo: FlowSecurity,
      description:
        '<strong>Flow Security</strong> uses eBPF technology to analyze data in motion for data discovery, classification, risk management, and data violation detection and response',
      links: [
        {
          text: 'Blog',
          to: 'https://www.flowsecurity.com/ebpf-data-security-hype/',
        },
      ],
    },
    {
      title: 'Helios',
      logo: Helios,
      description:
        '<strong>Helios</strong> uses eBPF in their runtime analysis tool for observability and security',
      links: [
        {
          text: 'Blog',
          to: 'https://gethelios.dev/blog/introducing-helios-runtime-for-appsec/',
        },
      ],
    },
    {
      title: 'ThreatX',
      logo: Threatx,
      description:
        '<strong>ThreatX</strong> uses eBPF for securing their runtime environment and delivering real-time blocking for runtime threats',
      links: [
        {
          text: 'Blog',
          to: 'https://www.threatx.com/blog/cisco-acquires-isovalent-creator-of-ebpf-why-it-matters/',
        },
      ],
    },
    {
      title: 'Levo',
      logo: Levo,
      description: '<strong>Levo</strong> uses eBPF for API discovery and documentation',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.levo.ai/api-observability/concepts#ebpf-sensor',
        },
      ],
    },
    {
      title: 'Traceable',
      logo: Traceable,
      description: '<strong>Traceable</strong> uses eBPF for enhanced data collection',
      links: [
        {
          text: 'Blog',
          to: 'https://www.traceable.ai/blog-post/unlocking-the-power-of-ebpf-at-traceable',
        },
      ],
    },
    {
      title: 'Accuknox',
      logo: Accuknox,
      description: '<strong>Accuknox</strong> uses eBPF through KubeArmor for runtime security observability, container forensics and policy enforcement',
      links: [
        {
          text: 'Blog',
          to: 'https://www.accuknox.com/blog/runtime-security-and-the-role-of-ebpf-bpf-lsm',
        },
      ],
    },
  ],
  pt: [
    {
      title: 'Google',
      logo: Google,
      description:
        '<strong>O Google</strong> usa eBPF para auditoria de segurança, processamento de pacotes e monitoramento de desempenho.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=XFJw37Vwzcc&t=657s',
        },
        {
          text: 'Talk',
          to: 'https://legacy.netdevconf.info/0x14/session.html?talk-replacing-HTB-with-EDT-and-BPF',
        },
      ],
    },
    {
      title: 'Netflix',
      logo: Netflix,
      description: '<strong>A Netflix</strong> usa eBPF em escala para obter insights de rede.',
      links: [
        {
          text: 'Blog',
          to: 'https://netflixtechblog.com/how-netflix-uses-ebpf-flow-logs-at-scale-for-network-insight-e3ea997dca96',
        },
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=16slh29iN1g',
        },
      ],
    },
    {
      title: 'Android',
      logo: Android,
      description:
        '<strong>O Android</strong> usa eBPF para monitorar o uso da rede, energia e perfil de memória.',
      links: [
        {
          text: 'Docs',
          to: 'https://source.android.com/docs/core/architecture/kernel/bpf',
        },
      ],
    },
    {
      title: 'S&P Global',
      logo: Global,
      description:
        '<strong>S&P Global</strong> usa eBPF por meio do Cilium para rede em múltiplas nuvens e no local.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6CZ_SSTqb4g',
        },
      ],
    },
    {
      title: 'Shopify',
      logo: Shopify,
      description: '<strong>Shopify</strong> usa eBPF por meio do Falco para deteção de intrusões.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6pVci31Mb6Q',
        },
      ],
    },
    {
      title: 'Cloudflare',
      logo: Cloudflare,
      description:
        '<strong>Cloudflare</strong> usa eBPF para segurança de rede, monitoramento de desempenho e observabilidade de rede.',
      links: [
        {
          text: 'Blog',
          to: 'https://blog.cloudflare.com/tag/ebpf/',
        },
        {
          text: 'Talk',
          to: 'https://legacy.netdevconf.info/0x13/session.html?talk-XDP-based-DDoS-mitigation',
        },
      ],
    },
    {
      title: 'Microsoft',
      logo: Microsoft,
      description:
        '<strong>Microsot</strong> uses eBPF to enhance the observability and inspection of processes within Kubernetes',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=ilcYXPDSgu8&list=PLj6h78yzYM2Pm5nF_GmNQHMyt9CUZr2uQ&index=5',
        },
      ],
    },
    {
      title: 'Samsung',
      logo: Samsung,
      description: '<strong>Samsung</strong> uses eBPF in their android devices for networking',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/live/EViAho-6qoc?t=5220&si=shsfjYQ5X5lnL5cL',
        },
      ],
    },
    {
      title: 'Ikea',
      logo: Ikea,
      description:
        '<strong>Ikea</strong> uses eBPF through Cilium for networking and load balancing in their private cloud',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=sg-F_R-ZVNc',
        },
      ],
    },
    {
      title: 'Apple',
      logo: Apple,
      description: '<strong>Apple</strong> uses eBPF through Falco for kernel security monitoring',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZBlJSr6XkN8',
        },
      ],
    },
    {
      title: 'Meta',
      logo: Meta,
      description:
        '<strong>Meta</strong> uses eBPF to process and load balance every packet coming into their data centers',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZYBXZFKPS28',
        },
        {
          text: 'Blog',
          to: 'https://engineering.fb.com/2018/05/22/open-source/open-sourcing-katran-a-scalable-network-load-balancer/',
        },
        {
          text: 'Talk',
          to: 'https://lpc.events/event/16/contributions/1363/',
        },
      ],
    },
    {
      title: 'DoorDash',
      logo: DoorDash,
      description:
        '<strong>DoorDash</strong> uses eBPF through BPFAgent for kernel level monitoring',
      links: [
        {
          text: 'Blog',
          to: 'https://doordash.engineering/2023/08/15/bpfagent-ebpf-for-monitoring-at-doordash/',
        },
      ],
    },
    {
      title: 'Datadog',
      logo: Datadog,
      description:
        '<strong>Datadog</strong> uses eBPF for networking and security in their SaaS product',
      links: [
        {
          text: 'Video',
          to: 'https://datadogon.datadoghq.com/episodes/datadog-on-ebpf/',
        },
        {
          text: 'Blog',
          to: 'https://www.datadoghq.com/blog/network-performance-monitoring/',
        },
        {
          text: 'Talk',
          to: ' https://www.youtube.com/watch?v=6nlv_VCsjpQ',
        },
      ],
    },
    {
      title: 'Alibaba',
      logo: Alibaba,
      description:
        '<strong>Alibaba</strong> uses eBPF through Cilium to provide networking in their cloud',
      links: [
        {
          text: 'Blog',
          to: 'https://www.alibabacloud.com/blog/how-does-alibaba-cloud-build-high-performance-cloud-native-pod-networks-in-production-environments_596590',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=Z4qxd5yYoP4',
        },
      ],
    },
    {
      title: 'Red Hat',
      logo: Redhat,
      description:
        '<strong>Red Hat</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/xxRAppnmirY?si=OSxhLJ8S1B2-Z-9T',
        },
      ],
    },
    {
      title: 'Isovalent',
      logo: Isovalent,
      description:
        "eBPF is the technlogy that powers <b>Isovalent</b>'s enterpise networking, observability and security solutions",
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=Xs3MBK17kCk',
        },
        {
          text: 'Blog',
          to: 'https://isovalent.com/blog/post/next-generation-observability-with-ebpf/?utm_source=website-ebpf&utm_medium=referral&utm_campaign=ebpf-blog',
        },
      ],
    },
    {
      title: 'Seznam',
      logo: Seznam,
      description: '<strong>Seznam</strong> uses eBPF for load balancing',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=xwjZF3alO7g',
        },
      ],
    },
    {
      title: 'Trip.com',
      logo: Trip,
      description: '<strong>Trip.com</strong> uses eBPF for load balancing',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/02/05/how-trip-com-uses-cilium/',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=NIsU4I950l4',
        },
      ],
    },
    {
      title: 'Bell',
      logo: Bell,
      description: '<strong>Bell</strong> Canada uses eBPF to moderize telco networking with SRv6',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=fNtG0iHYne4',
        },
      ],
    },
    {
      title: 'Wildlife Studios',
      logo: Wildlife,
      description:
        '<strong>Wildlife Studios</strong> uses eBPF through Cilium for high performance game networking',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/09/03/wildlife-studios-multi-cluster-gaming-platform',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=_1t3bXzptP0',
        },
      ],
    },
    {
      title: 'Capital One',
      logo: CapitalOne,
      description: '<strong>Capital One</strong> uses eBPF to secure their cloud infrastructure',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w&ab_channel=eBPFSummit',
        },
      ],
    },
    {
      title: 'Sky',
      logo: Sky,
      description: '<strong>Sky</strong> uses eBPF through Cilium for cloud networking',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=u-4naOMfs_w',
        },
      ],
    },
    {
      title: 'Walmart',
      logo: Walmart,
      description: '<strong>Walmart</strong> uses eBPF for edge cloud load balancing',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/thmAcyix8FM',
        },
        {
          text: 'Blog',
          to: 'https://medium.com/walmartglobaltech/introducing-walmarts-l3af-project-how-do-we-use-ebpf-to-provide-network-visibility-in-a-8b9ae4d26200',
        },
      ],
    },
    {
      title: 'Palantir',
      logo: Palantir,
      description: '<strong>Palantir</strong> uses eBPF to debug networking problems',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/0RDp1IPxbg0',
        },
      ],
    },
    {
      title: 'Cruise',
      logo: Cruise,
      description: '<strong>Cruise</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/7bdy2AkRjqE',
        },
      ],
    },
    {
      title: 'Digital Ocean',
      logo: DigitalOcean,
      description: '<strong>Digital Ocean</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/gcHxfhDT-I4',
        },
      ],
    },
    {
      title: 'Yahoo',
      logo: Yahoo,
      description: '<strong>Yahoo</strong> uses eBPF for load balancing and performance analysis',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/-C86fBMcp5Q',
        },
        {
          text: 'Talk',
          to: 'https://www.usenix.org/conference/lisa21/presentation/jones-zachary',
        },
      ],
    },
    {
      title: 'Bytedance',
      logo: Bytedance,
      description: '<strong>Bytedance</strong> uses eBPF for system tracing',
      links: [
        {
          text: 'Blog',
          to: 'https://inf.news/en/tech/3313635d67f796ae38e7ef64061bc7c4.html',
        },
      ],
    },
    {
      title: 'F5',
      logo: F5,
      description: '<strong>F5</strong> BIG-IP integration with Cilium VTEP feature',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/EfmdjrQLFFg',
        },
        {
          text: 'Guide',
          to: 'https://github.com/f5devcentral/f5-ci-docs/blob/master/docs/cilium/cilium-bigip-info.rst',
        },
      ],
    },
    {
      title: 'LinkedIn',
      logo: LinkedIn,
      description: '<strong>LinkedIn</strong> uses eBPF for Infrastructure Observability',
      links: [
        {
          text: 'Blog',
          to: 'https://engineering.linkedin.com/blog/2022/skyfall--ebpf-agent-for-infrastructure-observability',
        },
      ],
    },
    {
      title: 'The New York Times',
      logo: NYT,
      description: '<strong>The New York Times</strong> uses eBPF for networking',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=qmrHONqsV2M&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D',
        },
      ],
    },
    {
      title: 'SentinelOne',
      logo: SentinelOne,
      description:
        '<strong>SentinelOne</strong> uses eBPF to detect and to respond to runtime threats like ransomware and zero-day exploits in real time.',
      links: [
        {
          text: 'Blog',
          to: 'https://www.sentinelone.com/blog/the-advantages-of-ebpf-for-cwpp-applications/',
        },
      ],
    },
    {
      title: 'Aqua Security',
      logo: Aqua,
      description:
        '<strong>Aqua Security</strong> uses eBPF to handle runtime detection and forensics',
      links: [
        {
          text: 'Blog',
          to: 'https://blog.aquasec.com/linux-vulnerabilitie-tracee',
        },
      ],
    },
    {
      title: 'Oligo Security',
      logo: Oligo,
      description:
        '<strong>Oligo Security</strong> uses eBPF for application security observability and protection',
      links: [
        {
          text: 'Blog',
          to: 'https://www.oligo.security/blog/scaling-runtime-security-how-ebpf-is-solving-decade-long-challenges',
        },
      ],
    },
    {
      title: 'Akita',
      logo: Akita,
      description: '<strong>Akita</strong> uses eBPF at scale for API observability',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.akita.software/docs/how-akita-works#what-makes-akita-different',
        },
      ],
    },
    {
      title: 'Line Coporation',
      logo: LineCoporation,
      description:
        '<strong>Line Corporation</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=cxfVpBYlol4',
        },
      ],
    },
    {
      title: 'Exein',
      logo: Exein,
      description:
        '<strong>Exein</strong> uses eBPF in their open source runtime security framework for IoT',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=vmRQXRit-sY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=16',
        },
      ],
    },
    {
      title: 'Ant Group',
      logo: AntGroup,
      description:
        '<strong>Ant Group</strong> uses eBPF in their cloud native security platform for vulnerability live-patching, and system anomaly detection',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/TXlxgDvxcoY?si=lvC1HqNl4jXNyfD0',
        },
      ],
    },
    {
      title: 'Sysdig',
      logo: Sysdig,
      description:
        '<strong>Sysdig</strong> uses eBPF to enable high-performance system call tracing, facilitate container-aware troubleshooting, conduct security auditing, and provide rich insights and data from the kernel',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=BxoKztfHnYY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=28',
        },
        {
          text: 'Blog',
          to: 'https://sysdig.com/blog/sysdig-and-falco-now-powered-by-ebpf/',
        },
      ],
    },
    {
      title: 'Kodem',
      logo: Kodem,
      description:
        '<strong>Kodem</strong> uses eBPF for application visibilty and runtime intelligence',
      links: [
        {
          text: 'Blog',
          to: 'https://kodemsec.webflow.io/resources/deep-visibility-with-ebpf',
        },
      ],
    },
    {
      title: 'Cycode',
      logo: Cycode,
      description: '<strong>Cycode</strong> uses eBPF for CI/CD security',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=pcBGRFvSrvY',
        },
        {
          text: 'Blog',
          to: 'https://cycode.com/blog/introducing-cimon-build-hardening/',
        },
      ],
    },
    {
      title: 'Wiz',
      logo: Wiz,
      description:
        '<strong>Wiz</strong> uses eBPF to provide real-time threat detection and monitoring within cloud workloads',
      links: [
        {
          text: 'Blog',
          to: 'https://www.wiz.io/blog/wiz-expands-platform-with-the-runtime-sensor-to-provide-unified-cloud-security',
        },
      ],
    },
    {
      title: 'Core Tech',
      logo: CoreTech,
      description:
        '<strong>Core Tech</strong> uses eBPF to filter out unwanted traffic and mitigate DDoS attacks ',
      links: [
        {
          text: 'Blog',
          to: 'https://www.linkedin.com/pulse/coretechnologys-how-drop-1-tbps-ddos-traffic-coretechnolgys-rayif/',
        },
      ],
    },
    {
      title: 'FlowSecurity',
      logo: FlowSecurity,
      description:
        '<strong>Flow Security</strong> uses eBPF technology to analyze data in motion for data discovery, classification, risk management, and data violation detection and response',
      links: [
        {
          text: 'Blog',
          to: 'https://www.flowsecurity.com/ebpf-data-security-hype/',
        },
      ],
    },
    {
      title: 'Helios',
      logo: Helios,
      description:
        '<strong>Helios</strong> uses eBPF in their runtime analysis tool for observability and security',
      links: [
        {
          text: 'Blog',
          to: 'https://gethelios.dev/blog/introducing-helios-runtime-for-appsec/',
        },
      ],
    },
    {
      title: 'ThreatX',
      logo: Threatx,
      description:
        '<strong>ThreatX</strong> uses eBPF for securing their runtime environment and delivering real-time blocking for runtime threats',
      links: [
        {
          text: 'Blog',
          to: 'https://www.threatx.com/blog/cisco-acquires-isovalent-creator-of-ebpf-why-it-matters/',
        },
      ],
    },
    {
      title: 'Levo',
      logo: Levo,
      description: '<strong>Levo</strong> uses eBPF for API discovery and documentation',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.levo.ai/api-observability/concepts#ebpf-sensor',
        },
      ],
    },
    {
      title: 'Traceable',
      logo: Traceable,
      description: '<strong>Traceable</strong> uses eBPF for enhanced data collection',
      links: [
        {
          text: 'Blog',
          to: 'https://www.traceable.ai/blog-post/unlocking-the-power-of-ebpf-at-traceable',
        },
      ],
    },
    {
      title: 'Accuknox',
      logo: Accuknox,
      description: '<strong>Accuknox</strong> uses eBPF through KubeArmor for runtime security observability, container forensics and policy enforcement',
      links: [
        {
          text: 'Blog',
          to: 'https://www.accuknox.com/blog/runtime-security-and-the-role-of-ebpf-bpf-lsm',
        },
      ],
    },
  ],
  'pt-br': [
    {
      title: 'Google',
      logo: Google,
      description:
        'O <strong>Google</strong> usa o eBPF para auditoria de segurança, processamento de pacotes e monitoramento de desempenho.',
      links: [
        {
          text: 'Video 1',
          to: 'https://www.youtube.com/watch?v=URm_q9ylxBk',
        },
        {
          text: 'Video 2',
          to: 'https://www.youtube.com/watch?v=XFJw37Vwzcc&t=657s',
        },
        {
          text: 'Talk 1',
          to: 'https://legacy.netdevconf.info/0x14/session.html?talk-replacing-HTB-with-EDT-and-BPF',
        },
        {
          text: 'Talk 2',
          to: 'https://lpc.events/event/11/contributions/954/',
        },
      ],
    },
    {
      title: 'Netflix',
      logo: Netflix,
      description: 'A <strong>Netflix</strong> usa o eBPF em escala para insights de rede.',
      links: [
        {
          text: 'Blog',
          to: 'https://netflixtechblog.com/how-netflix-uses-ebpf-flow-logs-at-scale-for-network-insight-e3ea997dca96',
        },
      ],
    },
    {
      title: 'Android',
      logo: Android,
      description:
        'O <strong>Android</strong> usa o eBPF para monitorar o uso de rede, consumo de energia e perfil de memória.',
      links: [
        {
          text: 'Docs',
          to: 'https://source.android.com/docs/core/architecture/kernel/bpf',
        },
      ],
    },
    {
      title: 'S&P Global',
      logo: Global,
      description:
        'A <strong>S&P Global</strong> usa o eBPF através do Cilium para redes em várias nuvens e localmente.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6CZ_SSTqb4g',
        },
      ],
    },
    {
      title: 'Shopify',
      logo: Shopify,
      description:
        'O <strong>Shopify</strong> usa o eBPF através do Falco para detecção de intrusões.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6pVci31Mb6Q',
        },
      ],
    },
    {
      title: 'Cloudflare',
      logo: Cloudflare,
      description:
        'A <strong>Cloudflare</strong> utiliza o eBPF para segurança de rede, monitoramento de desempenho e observabilidade de rede.',
      links: [
        {
          text: 'Blog',
          to: 'https://blog.cloudflare.com/tag/ebpf/',
        },
        {
          text: 'Talk',
          to: 'https://legacy.netdevconf.info/0x13/session.html?talk-XDP-based-DDoS-mitigation',
        },
      ],
    },
    {
      title: 'Ikea',
      logo: Ikea,
      description:
        '<strong>Ikea</strong> uses eBPF through Cilium for networking and load balancing in their private cloud.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=sg-F_R-ZVNc',
        },
      ],
    },
    {
      title: 'Apple',
      logo: Apple,
      description: '<strong>Apple</strong> uses eBPF through Falco for kernel security monitoring.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZBlJSr6XkN8',
        },
      ],
    },
    {
      title: 'Meta',
      logo: Meta,
      description:
        '<strong>Meta</strong> uses eBPF to process and load balance every packet coming into their data centers',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZYBXZFKPS28',
        },
        {
          text: 'Blog 1',
          to: 'https://engineering.fb.com/2018/05/22/open-source/open-sourcing-katran-a-scalable-network-load-balancer/',
        },
        {
          text: 'Blog 2',
          to: 'https://engineering.fb.com/2018/10/30/open-source/linux/',
        },
        {
          text: 'Talk 1',
          to: 'https://lpc.events/event/16/contributions/1363/',
        },
        {
          text: 'Talk 2',
          to: 'https://lpc.events/event/11/contributions/950/',
        },
      ],
    },
    {
      title: 'Datadog',
      logo: Datadog,
      description:
        '<strong>Datadog</strong> uses eBPF for networking and security in their SaaS product',
      links: [
        {
          text: 'Video',
          to: 'https://datadogon.datadoghq.com/episodes/datadog-on-ebpf/',
        },
      ],
    },
    {
      title: 'Alibaba',
      logo: Alibaba,
      description:
        '<strong>Alibaba</strong> uses eBPF through Cilium to provide networking in their cloud',
      links: [
        {
          text: 'Blog',
          to: 'https://www.alibabacloud.com/blog/how-does-alibaba-cloud-build-high-performance-cloud-native-pod-networks-in-production-environments_596590',
        },
      ],
    },
    {
      title: 'Red Hat',
      logo: Redhat,
      description:
        '<strong>Red Hat</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/xxRAppnmirY?si=OSxhLJ8S1B2-Z-9T',
        },
      ],
    },
    {
      title: 'Isovalent',
      logo: Isovalent,
      description:
        "eBPF is the technlogy that powers <b>Isovalent</b>'s enterpise networking, observability and security solutions",
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=Xs3MBK17kCk',
        },
        {
          text: 'Blog',
          to: 'https://isovalent.com/blog/post/next-generation-observability-with-ebpf/?utm_source=website-ebpf&utm_medium=referral&utm_campaign=ebpf-blog',
        },
      ],
    },
    {
      title: 'Seznam',
      logo: Seznam,
      description: '<strong>Seznam</strong> uses eBPF for load balancing',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/',
        },
      ],
    },
    {
      title: 'Trip.com',
      logo: Trip,
      description: '<strong>Trip.com</strong> uses eBPF for load balancing',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/02/05/how-trip-com-uses-cilium/',
        },
      ],
    },
    {
      title: 'Bell',
      logo: Bell,
      description: '<strong>Bell</strong> Canada uses eBPF to moderize telco networking with SRv6',
      links: [
        {
          text: 'Video 1',
          to: 'https://www.youtube.com/watch?v=fNtG0iHYne4',
        },
        {
          text: 'Video 2',
          to: 'https://www.youtube.com/watch?v=vJaOKGWiyvU',
        },
      ],
    },
    {
      title: 'Wildlife Studios',
      logo: Wildlife,
      description:
        '<strong>Wildlife Studios</strong> uses eBPF through Cilium for high performance game networking',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/09/03/wildlife-studios-multi-cluster-gaming-platform',
        },
      ],
    },
    {
      title: 'Capital One',
      logo: CapitalOne,
      description: '<strong>Capital One</strong> uses eBPF to secure their cloud infrastructure',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w&ab_channel=eBPFSummit',
        },
      ],
    },
    {
      title: 'Sky',
      logo: Sky,
      description: '<strong>Sky</strong> uses eBPF through Cilium for cloud networking',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=u-4naOMfs_w',
        },
      ],
    },

    {
      title: 'Walmart',
      logo: Walmart,
      description: '<strong>Walmart</strong> uses eBPF for edge cloud load balancing',
      links: [
        {
          text: 'Video 1',
          to: 'https://youtu.be/Fu4L8ewcO70',
        },
        {
          text: 'Video 2',
          to: 'https://youtu.be/thmAcyix8FM',
        },
      ],
    },
    {
      title: 'Palantir',
      logo: Palantir,
      description: '<strong>Palantir</strong> uses eBPF to debug networking problems',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/0RDp1IPxbg0',
        },
      ],
    },
    {
      title: 'Cruise',
      logo: Cruise,
      description: '<strong>Cruise</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/7bdy2AkRjqE',
        },
      ],
    },
    {
      title: 'Digital Ocean',
      logo: DigitalOcean,
      description: '<strong>Digital Ocean</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/gcHxfhDT-I4',
        },
      ],
    },
    {
      title: 'Yahoo',
      logo: Yahoo,
      description: '<strong>Yahoo</strong> uses eBPF for load balancing and performance analysis',
      links: [
        {
          text: 'Video 1',
          to: 'https://youtu.be/-C86fBMcp5Q',
        },
        {
          text: 'Video 2',
          to: 'https://www.usenix.org/conference/lisa21/presentation/jones-zachary',
        },
      ],
    },
    {
      title: 'Bytedance',
      logo: Bytedance,
      description: '<strong>Bytedance</strong> uses eBPF for system tracing',
      links: [
        {
          text: 'Blog',
          to: 'https://inf.news/en/tech/3313635d67f796ae38e7ef64061bc7c4.html',
        },
      ],
    },
    {
      title: 'F5',
      logo: F5,
      description: '<strong>F5</strong> BIG-IP integration with Cilium VTEP feature',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/EfmdjrQLFFg',
        },
        {
          text: 'Guide',
          to: 'https://github.com/f5devcentral/f5-ci-docs/blob/master/docs/cilium/cilium-bigip-info.rst',
        },
      ],
    },
    {
      title: 'LinkedIn',
      logo: LinkedIn,
      description: '<strong>LinkedIn</strong> uses eBPF for Infrastructure Observability',
      links: [
        {
          text: 'Blog',
          to: 'https://engineering.linkedin.com/blog/2022/skyfall--ebpf-agent-for-infrastructure-observability',
        },
      ],
    },
    {
      title: 'The New York Times',
      logo: NYT,
      description: '<strong>The New York Times</strong> uses eBPF for networking',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=qmrHONqsV2M&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D',
        },
      ],
    },
    {
      title: 'SentinelOne',
      logo: SentinelOne,
      description:
        '<strong>SentinelOne</strong> uses eBPF to detect and to respond to runtime threats like ransomware and zero-day exploits in real time.',
      links: [
        {
          text: 'Blog',
          to: 'https://www.sentinelone.com/blog/the-advantages-of-ebpf-for-cwpp-applications/',
        },
      ],
    },
    {
      title: 'Akita',
      logo: Akita,
      description: '<strong>Akita</strong> uses eBPF at scale for API observability.',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.akita.software/docs/how-akita-works#what-makes-akita-different',
        },
      ],
    },
    {
      title: 'groundcover',
      logo: groundcover,
      description:
        '<strong>groundcover</strong> uses eBPF to instantly monitor application performance in cloud native environments, at any scale.',
      links: [
        {
          text: 'Product',
          to: 'https://www.groundcover.com/how-it-works',
        },
        {
          text: 'Docs',
          to: 'https://www.groundcover.com/docs',
        },
        {
          text: 'Video',
          to: 'https://youtu.be/73wait5RR7c?si=vZKzrQpwHmyIeM3k',
        },
      ],
    },
    {
      title: 'Core Tech',
      logo: CoreTech,
      description:
        '<strong>Core Tech</strong> uses eBPF to filter out unwanted traffic and mitigate DDoS attacks ',
      links: [
        {
          text: 'Blog',
          to: 'https://www.linkedin.com/pulse/coretechnologys-how-drop-1-tbps-ddos-traffic-coretechnolgys-rayif/',
        },
      ],
    },
    {
      title: 'FlowSecurity',
      logo: FlowSecurity,
      description:
        '<strong>Flow Security</strong> uses eBPF technology to analyze data in motion for data discovery, classification, risk management, and data violation detection and response',
      links: [
        {
          text: 'Blog',
          to: 'https://www.flowsecurity.com/ebpf-data-security-hype/',
        },
      ],
    },
    {
      title: 'Helios',
      logo: Helios,
      description:
        '<strong>Helios</strong> uses eBPF in their runtime analysis tool for observability and security',
      links: [
        {
          text: 'Blog',
          to: 'https://gethelios.dev/blog/introducing-helios-runtime-for-appsec/',
        },
      ],
    },
    {
      title: 'ThreatX',
      logo: Threatx,
      description:
        '<strong>ThreatX</strong> uses eBPF for securing their runtime environment and delivering real-time blocking for runtime threats',
      links: [
        {
          text: 'Blog',
          to: 'https://www.threatx.com/blog/cisco-acquires-isovalent-creator-of-ebpf-why-it-matters/',
        },
      ],
    },
    {
      title: 'Levo',
      logo: Levo,
      description: '<strong>Levo</strong> uses eBPF for API discovery and documentation',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.levo.ai/api-observability/concepts#ebpf-sensor',
        },
      ],
    },
    {
      title: 'Traceable',
      logo: Traceable,
      description: '<strong>Traceable</strong> uses eBPF for enhanced data collection',
      links: [
        {
          text: 'Blog',
          to: 'https://www.traceable.ai/blog-post/unlocking-the-power-of-ebpf-at-traceable',
        },
      ],
    },
    {
      title: 'Accuknox',
      logo: Accuknox,
      description: '<strong>Accuknox</strong> uses eBPF through KubeArmor for runtime security observability, container forensics and policy enforcement',
      links: [
        {
          text: 'Blog',
          to: 'https://www.accuknox.com/blog/runtime-security-and-the-role-of-ebpf-bpf-lsm',
        },
      ],
    },
  ],
  'it-it': [
    {
      title: 'Google',
      logo: Google,
      description:
        '<strong>Google</strong> usa eBPF per l’auditing di sicurezza, l’elaborazione dei pacchetti di rete, e il monitoraggio delle performance.',
      links: [
        {
          text: 'Video 1',
          to: 'https://www.youtube.com/watch?v=URm_q9ylxBk',
        },
        {
          text: 'Video 2',
          to: 'https://www.youtube.com/watch?v=XFJw37Vwzcc&t=657s',
        },
        {
          text: 'Talk 1',
          to: 'https://legacy.netdevconf.info/0x14/session.html?talk-replacing-HTB-with-EDT-and-BPF',
        },
        {
          text: 'Talk 2',
          to: 'https://lpc.events/event/11/contributions/954/',
        },
      ],
    },
    {
      title: 'Netflix',
      logo: Netflix,
      description:
        '<strong>Netflix</strong> usa eBPF su larga scala per ottenere informazioni sulla rete.',
      links: [
        {
          text: 'Blog',
          to: 'https://netflixtechblog.com/how-netflix-uses-ebpf-flow-logs-at-scale-for-network-insight-e3ea997dca96',
        },
      ],
    },
    {
      title: 'Android',
      logo: Android,
      description:
        '<strong>Android</strong> usa eBPF per il monitoraggio dell’uso della rete, dell’energia e la profilazione della memoria.',
      links: [
        {
          text: 'Docs',
          to: 'https://source.android.com/docs/core/architecture/kernel/bpf',
        },
      ],
    },
    {
      title: 'S&P Global',
      logo: Global,
      description:
        '<strong>S&P Global</strong> usa eBPF attraverso Cilium per il networking su molteplici cloud e on-prem.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6CZ_SSTqb4g',
        },
      ],
    },
    {
      title: 'Shopify',
      logo: Shopify,
      description:
        '<strong>Shopify</strong> usa eBPF attraverso Falco per il rilevamento delle intrusioni.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6pVci31Mb6Q',
        },
      ],
    },
    {
      title: 'Cloudflare',
      logo: Cloudflare,
      description:
        '<strong>Cloudflare</strong> usa eBPF per la sicurezza di rete, monitoraggio delle prestazioni e l’osservabilità della rete.',
      links: [
        {
          text: 'Blog',
          to: 'https://blog.cloudflare.com/tag/ebpf/',
        },
        {
          text: 'Talk',
          to: 'https://legacy.netdevconf.info/0x13/session.html?talk-XDP-based-DDoS-mitigation',
        },
      ],
    },
    {
      title: 'Ikea',
      logo: Ikea,
      description:
        '<strong>Ikea</strong> usa eBPF attraverso Cilium per il networking e il bilanciamento del carico nel proprio cloud privato.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=sg-F_R-ZVNc',
        },
      ],
    },
    {
      title: 'Apple',
      logo: Apple,
      description:
        '<strong>Apple</strong> usa eBPF attraverso Falco per monitorare la sicurezza del kernel.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZBlJSr6XkN8',
        },
      ],
    },
    {
      title: 'Meta',
      logo: Meta,
      description:
        '<strong>Meta</strong> usa eBPF per elaborare e bilanciare il carico di ogni pacchetto di rete che arriva nei loro data center',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZYBXZFKPS28',
        },
        {
          text: 'Blog 1',
          to: 'https://engineering.fb.com/2018/05/22/open-source/open-sourcing-katran-a-scalable-network-load-balancer/',
        },
        {
          text: 'Blog 2',
          to: 'https://engineering.fb.com/2018/10/30/open-source/linux/',
        },
        {
          text: 'Talk 1',
          to: 'https://lpc.events/event/16/contributions/1363/',
        },
        {
          text: 'Talk 2',
          to: 'https://lpc.events/event/11/contributions/950/',
        },
      ],
    },
    {
      title: 'Datadog',
      logo: Datadog,
      description:
        '<strong>Datadog</strong> usa eBPF per la rete e la sicurezza del proprio prodotto SaaS',
      links: [
        {
          text: 'Video',
          to: 'https://datadogon.datadoghq.com/episodes/datadog-on-ebpf/',
        },
      ],
    },
    {
      title: 'Alibaba',
      logo: Alibaba,
      description:
        '<strong>Alibaba</strong> usa eBPF attraverso Cilium per fornire la rete nel proprio cloud',
      links: [
        {
          text: 'Blog',
          to: 'https://www.alibabacloud.com/blog/how-does-alibaba-cloud-build-high-performance-cloud-native-pod-networks-in-production-environments_596590',
        },
      ],
    },
    {
      title: 'Red Hat',
      logo: Redhat,
      description:
        '<strong>Red Hat</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/xxRAppnmirY?si=OSxhLJ8S1B2-Z-9T',
        },
      ],
    },
    {
      title: 'Isovalent',
      logo: Isovalent,
      description:
        "eBPF is the technlogy that powers <b>Isovalent</b>'s enterpise networking, observability and security solutions",
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=Xs3MBK17kCk',
        },
        {
          text: 'Blog',
          to: 'https://isovalent.com/blog/post/next-generation-observability-with-ebpf/?utm_source=website-ebpf&utm_medium=referral&utm_campaign=ebpf-blog',
        },
      ],
    },
    {
      title: 'Seznam',
      logo: Seznam,
      description: '<strong>Seznam</strong> usa eBPF per il bilanciamento del carico',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/',
        },
      ],
    },
    {
      title: 'Trip.com',
      logo: Trip,
      description: '<strong>Trip.com</strong> usa eBPF per il bilanciamento del carico',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/02/05/how-trip-com-uses-cilium/',
        },
      ],
    },
    {
      title: 'Bell',
      logo: Bell,
      description: '<strong>Bell</strong> Canada usa eBPF per modernizzare la rete telco con SRv6',
      links: [
        {
          text: 'Video 1',
          to: 'https://www.youtube.com/watch?v=fNtG0iHYne4',
        },
        {
          text: 'Video 2',
          to: 'https://www.youtube.com/watch?v=vJaOKGWiyvU',
        },
      ],
    },
    {
      title: 'Wildlife Studios',
      logo: Wildlife,
      description:
        '<strong>Wildlife Studios</strong> usa eBPF attraverso Cilium per il high performance game networking',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/09/03/wildlife-studios-multi-cluster-gaming-platform',
        },
      ],
    },
    {
      title: 'Capital One',
      logo: CapitalOne,
      description:
        '<strong>Capital One</strong> usa eBPF per proteggere la propria infrastruttura cloud',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w&ab_channel=eBPFSummit',
        },
      ],
    },
    {
      title: 'Sky',
      logo: Sky,
      description: '<strong>Sky</strong> usa eBPF tramite Cilium per la rete del cloud',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=u-4naOMfs_w',
        },
      ],
    },

    {
      title: 'Walmart',
      logo: Walmart,
      description:
        '<strong>Walmart</strong> usa eBPF per il bilanciamento del carico dell’edge cloud',
      links: [
        {
          text: 'Video 1',
          to: 'https://youtu.be/Fu4L8ewcO70',
        },
        {
          text: 'Video 2',
          to: 'https://youtu.be/thmAcyix8FM',
        },
      ],
    },
    {
      title: 'Palantir',
      logo: Palantir,
      description: '<strong>Palantir</strong> usa eBPF per il debug dei problemi di rete',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/0RDp1IPxbg0',
        },
      ],
    },
    {
      title: 'Cruise',
      logo: Cruise,
      description: '<strong>Cruise</strong> usa eBPF per monitorare le prestazioni della GPU',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/7bdy2AkRjqE',
        },
      ],
    },
    {
      title: 'Digital Ocean',
      logo: DigitalOcean,
      description:
        '<strong>Digital Ocean</strong> usa eBPF per monitorare le prestazioni della GPU',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/gcHxfhDT-I4',
        },
      ],
    },
    {
      title: 'Yahoo',
      logo: Yahoo,
      description:
        '<strong>Yahoo</strong> usa eBPF per il bilanciamento del carico e l’analisi delle prestazioni',
      links: [
        {
          text: 'Video 1',
          to: 'https://youtu.be/-C86fBMcp5Q',
        },
        {
          text: 'Video 2',
          to: 'https://www.usenix.org/conference/lisa21/presentation/jones-zachary',
        },
      ],
    },
    {
      title: 'Bytedance',
      logo: Bytedance,
      description: '<strong>Bytedance</strong> usa eBPF per il tracciamento del sistema',
      links: [
        {
          text: 'Blog',
          to: 'https://inf.news/en/tech/3313635d67f796ae38e7ef64061bc7c4.html',
        },
      ],
    },
    {
      title: 'F5',
      logo: F5,
      description: '<strong>F5</strong> integra BIG-IP con la funzione VTEP di Cilium',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/EfmdjrQLFFg',
        },
        {
          text: 'Guide',
          to: 'https://github.com/f5devcentral/f5-ci-docs/blob/master/docs/cilium/cilium-bigip-info.rst',
        },
      ],
    },
    {
      title: 'LinkedIn',
      logo: LinkedIn,
      description: '<strong>LinkedIn</strong> usa eBPF per l’osservabilità dell’infrastruttura',
      links: [
        {
          text: 'Blog',
          to: 'https://engineering.linkedin.com/blog/2022/skyfall--ebpf-agent-for-infrastructure-observability',
        },
      ],
    },
    {
      title: 'The New York Times',
      logo: NYT,
      description: '<strong>The New York Times</strong> usa eBPF per la rete.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=qmrHONqsV2M&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D',
        },
      ],
    },
    {
      title: 'SentinelOne',
      logo: SentinelOne,
      description:
        '<strong>SentinelOne</strong> usa eBPF per rilevare e rispondere in tempo reale a minacce runtime come ransomware e zero-day exploits.',
      links: [
        {
          text: 'Blog',
          to: 'https://www.sentinelone.com/blog/the-advantages-of-ebpf-for-cwpp-applications/',
        },
      ],
    },
    {
      title: 'Akita',
      logo: Akita,
      description: '<strong>Akita</strong> usa eBPF su larga scala per l’osservabilità delle API.',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.akita.software/docs/how-akita-works#what-makes-akita-different',
        },
      ],
    },
    {
      title: 'groundcover',
      logo: groundcover,
      description:
        '<strong>groundcover</strong> uses eBPF to instantly monitor application performance in cloud native environments, at any scale.',
      links: [
        {
          text: 'Product',
          to: 'https://www.groundcover.com/how-it-works',
        },
        {
          text: 'Docs',
          to: 'https://www.groundcover.com/docs',
        },
        {
          text: 'Video',
          to: 'https://youtu.be/73wait5RR7c?si=vZKzrQpwHmyIeM3k',
        },
      ],
    },
    {
      title: 'Core Tech',
      logo: CoreTech,
      description:
        '<strong>Core Tech</strong> uses eBPF to filter out unwanted traffic and mitigate DDoS attacks ',
      links: [
        {
          text: 'Blog',
          to: 'https://www.linkedin.com/pulse/coretechnologys-how-drop-1-tbps-ddos-traffic-coretechnolgys-rayif/',
        },
      ],
    },
    {
      title: 'FlowSecurity',
      logo: FlowSecurity,
      description:
        '<strong>Flow Security</strong> uses eBPF technology to analyze data in motion for data discovery, classification, risk management, and data violation detection and response',
      links: [
        {
          text: 'Blog',
          to: 'https://www.flowsecurity.com/ebpf-data-security-hype/',
        },
      ],
    },
    {
      title: 'Helios',
      logo: Helios,
      description:
        '<strong>Helios</strong> uses eBPF in their runtime analysis tool for observability and security',
      links: [
        {
          text: 'Blog',
          to: 'https://gethelios.dev/blog/introducing-helios-runtime-for-appsec/',
        },
      ],
    },
    {
      title: 'ThreatX',
      logo: Threatx,
      description:
        '<strong>ThreatX</strong> uses eBPF for securing their runtime environment and delivering real-time blocking for runtime threats',
      links: [
        {
          text: 'Blog',
          to: 'https://www.threatx.com/blog/cisco-acquires-isovalent-creator-of-ebpf-why-it-matters/',
        },
      ],
    },
    {
      title: 'Levo',
      logo: Levo,
      description: '<strong>Levo</strong> uses eBPF for API discovery and documentation',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.levo.ai/api-observability/concepts#ebpf-sensor',
        },
      ],
    },
    {
      title: 'Traceable',
      logo: Traceable,
      description: '<strong>Traceable</strong> uses eBPF for enhanced data collection',
      links: [
        {
          text: 'Blog',
          to: 'https://www.traceable.ai/blog-post/unlocking-the-power-of-ebpf-at-traceable',
        },
      ],
    },
    {
      title: 'Accuknox',
      logo: Accuknox,
      description: '<strong>Accuknox</strong> uses eBPF through KubeArmor for runtime security observability, container forensics and policy enforcement',
      links: [
        {
          text: 'Blog',
          to: 'https://www.accuknox.com/blog/runtime-security-and-the-role-of-ebpf-bpf-lsm',
        },
      ],
    },
  ],
  es: [
    {
      title: 'Google',
      logo: Google,
      description:
        '<strong>Google</strong> utiliza eBPF para las auditorías de seguridad, procesamiento de paquetes y monitoreo de rendimiento',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=XFJw37Vwzcc&t=657s',
        },
        {
          text: 'Talk',
          to: 'https://legacy.netdevconf.info/0x14/session.html?talk-replacing-HTB-with-EDT-and-BPF',
        },
      ],
    },
    {
      title: 'Netflix',
      logo: Netflix,
      description:
        '<strong>Netflix</strong> utiliza eBPF a gran escala para obtener información sobre su red',
      links: [
        {
          text: 'Blog',
          to: 'https://netflixtechblog.com/how-netflix-uses-ebpf-flow-logs-at-scale-for-network-insight-e3ea997dca96',
        },
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=16slh29iN1g',
        },
      ],
    },
    {
      title: 'Android',
      logo: Android,
      description:
        '<strong>Android</strong> utiliza eBPF para monitorear el uso de las redes, energía y perfilamiento de memoria',
      links: [
        {
          text: 'Docs',
          to: 'https://source.android.com/docs/core/architecture/kernel/bpf',
        },
      ],
    },
    {
      title: 'S&P Global',
      logo: Global,
      description:
        '<strong>S&P Global</strong> utiliza eBPF a través de Cilium para la conexión de redes en múltiples nubes y entornos locales',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6CZ_SSTqb4g',
        },
      ],
    },
    {
      title: 'Shopify',
      logo: Shopify,
      description:
        '<strong>Shopify</strong> utiliza eBFP a través de Falco para la detección de intrusiones',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6pVci31Mb6Q',
        },
      ],
    },
    {
      title: 'Cloudflare',
      logo: Cloudflare,
      description:
        '<strong>Cloudflare</strong> utiliza eBPF para la seguridad de la red, el monitoreo del rendimiento y la observabilidad de la red',
      links: [
        {
          text: 'Blog',
          to: 'https://blog.cloudflare.com/tag/ebpf/',
        },
        {
          text: 'Talk',
          to: 'https://legacy.netdevconf.info/0x13/session.html?talk-XDP-based-DDoS-mitigation',
        },
      ],
    },
    {
      title: 'Microsoft',
      logo: Microsoft,
      description:
        '<strong>Microsot</strong> uses eBPF to enhance the observability and inspection of processes within Kubernetes',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=ilcYXPDSgu8&list=PLj6h78yzYM2Pm5nF_GmNQHMyt9CUZr2uQ&index=5',
        },
      ],
    },
    {
      title: 'Samsung',
      logo: Samsung,
      description: '<strong>Samsung</strong> uses eBPF in their android devices for networking',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/live/EViAho-6qoc?t=5220&si=shsfjYQ5X5lnL5cL',
        },
      ],
    },
    {
      title: 'Ikea',
      logo: Ikea,
      description:
        '<strong>Ikea</strong> uses eBPF through Cilium for networking and load balancing in their private cloud',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=sg-F_R-ZVNc',
        },
      ],
    },
    {
      title: 'Apple',
      logo: Apple,
      description: '<strong>Apple</strong> uses eBPF through Falco for kernel security monitoring',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZBlJSr6XkN8',
        },
      ],
    },
    {
      title: 'Meta',
      logo: Meta,
      description:
        '<strong>Meta</strong> uses eBPF to process and load balance every packet coming into their data centers',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZYBXZFKPS28',
        },
        {
          text: 'Blog',
          to: 'https://engineering.fb.com/2018/05/22/open-source/open-sourcing-katran-a-scalable-network-load-balancer/',
        },
        {
          text: 'Talk',
          to: 'https://lpc.events/event/16/contributions/1363/',
        },
      ],
    },
    {
      title: 'DoorDash',
      logo: DoorDash,
      description:
        '<strong>DoorDash</strong> uses eBPF through BPFAgent for kernel level monitoring',
      links: [
        {
          text: 'Blog',
          to: 'https://doordash.engineering/2023/08/15/bpfagent-ebpf-for-monitoring-at-doordash/',
        },
      ],
    },
    {
      title: 'Datadog',
      logo: Datadog,
      description:
        '<strong>Datadog</strong> uses eBPF for networking and security in their SaaS product',
      links: [
        {
          text: 'Video',
          to: 'https://datadogon.datadoghq.com/episodes/datadog-on-ebpf/',
        },
        {
          text: 'Blog',
          to: 'https://www.datadoghq.com/blog/network-performance-monitoring/',
        },
        {
          text: 'Talk',
          to: ' https://www.youtube.com/watch?v=6nlv_VCsjpQ',
        },
      ],
    },
    {
      title: 'Alibaba',
      logo: Alibaba,
      description:
        '<strong>Alibaba</strong> uses eBPF through Cilium to provide networking in their cloud',
      links: [
        {
          text: 'Blog',
          to: 'https://www.alibabacloud.com/blog/how-does-alibaba-cloud-build-high-performance-cloud-native-pod-networks-in-production-environments_596590',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=Z4qxd5yYoP4',
        },
      ],
    },
    {
      title: 'Red Hat',
      logo: Redhat,
      description:
        '<strong>Red Hat</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/xxRAppnmirY?si=OSxhLJ8S1B2-Z-9T',
        },
      ],
    },
    {
      title: 'Isovalent',
      logo: Isovalent,
      description:
        "eBPF is the technlogy that powers <b>Isovalent</b>'s enterpise networking, observability and security solutions",
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=Xs3MBK17kCk',
        },
        {
          text: 'Blog',
          to: 'https://isovalent.com/blog/post/next-generation-observability-with-ebpf/?utm_source=website-ebpf&utm_medium=referral&utm_campaign=ebpf-blog',
        },
      ],
    },
    {
      title: 'Seznam',
      logo: Seznam,
      description: '<strong>Seznam</strong> uses eBPF for load balancing',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=xwjZF3alO7g',
        },
      ],
    },
    {
      title: 'Trip.com',
      logo: Trip,
      description: '<strong>Trip.com</strong> uses eBPF for load balancing',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/02/05/how-trip-com-uses-cilium/',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=NIsU4I950l4',
        },
      ],
    },
    {
      title: 'Bell',
      logo: Bell,
      description: '<strong>Bell</strong> Canada uses eBPF to moderize telco networking with SRv6',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=fNtG0iHYne4',
        },
      ],
    },
    {
      title: 'Wildlife Studios',
      logo: Wildlife,
      description:
        '<strong>Wildlife Studios</strong> uses eBPF through Cilium for high performance game networking',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/09/03/wildlife-studios-multi-cluster-gaming-platform',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=_1t3bXzptP0',
        },
      ],
    },
    {
      title: 'Capital One',
      logo: CapitalOne,
      description: '<strong>Capital One</strong> uses eBPF to secure their cloud infrastructure',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w&ab_channel=eBPFSummit',
        },
      ],
    },
    {
      title: 'Sky',
      logo: Sky,
      description: '<strong>Sky</strong> uses eBPF through Cilium for cloud networking',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=u-4naOMfs_w',
        },
      ],
    },
    {
      title: 'Walmart',
      logo: Walmart,
      description: '<strong>Walmart</strong> uses eBPF for edge cloud load balancing',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/thmAcyix8FM',
        },
        {
          text: 'Blog',
          to: 'https://medium.com/walmartglobaltech/introducing-walmarts-l3af-project-how-do-we-use-ebpf-to-provide-network-visibility-in-a-8b9ae4d26200',
        },
      ],
    },
    {
      title: 'Palantir',
      logo: Palantir,
      description: '<strong>Palantir</strong> uses eBPF to debug networking problems',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/0RDp1IPxbg0',
        },
      ],
    },
    {
      title: 'Cruise',
      logo: Cruise,
      description: '<strong>Cruise</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/7bdy2AkRjqE',
        },
      ],
    },
    {
      title: 'Digital Ocean',
      logo: DigitalOcean,
      description: '<strong>Digital Ocean</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/gcHxfhDT-I4',
        },
      ],
    },
    {
      title: 'Yahoo',
      logo: Yahoo,
      description: '<strong>Yahoo</strong> uses eBPF for load balancing and performance analysis',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/-C86fBMcp5Q',
        },
        {
          text: 'Talk',
          to: 'https://www.usenix.org/conference/lisa21/presentation/jones-zachary',
        },
      ],
    },
    {
      title: 'Bytedance',
      logo: Bytedance,
      description: '<strong>Bytedance</strong> uses eBPF for system tracing',
      links: [
        {
          text: 'Blog',
          to: 'https://inf.news/en/tech/3313635d67f796ae38e7ef64061bc7c4.html',
        },
      ],
    },
    {
      title: 'F5',
      logo: F5,
      description: '<strong>F5</strong> BIG-IP integration with Cilium VTEP feature',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/EfmdjrQLFFg',
        },
        {
          text: 'Guide',
          to: 'https://github.com/f5devcentral/f5-ci-docs/blob/master/docs/cilium/cilium-bigip-info.rst',
        },
      ],
    },
    {
      title: 'LinkedIn',
      logo: LinkedIn,
      description: '<strong>LinkedIn</strong> uses eBPF for Infrastructure Observability',
      links: [
        {
          text: 'Blog',
          to: 'https://engineering.linkedin.com/blog/2022/skyfall--ebpf-agent-for-infrastructure-observability',
        },
      ],
    },
    {
      title: 'The New York Times',
      logo: NYT,
      description: '<strong>The New York Times</strong> uses eBPF for networking',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=qmrHONqsV2M&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D',
        },
      ],
    },
    {
      title: 'SentinelOne',
      logo: SentinelOne,
      description:
        '<strong>SentinelOne</strong> uses eBPF to detect and to respond to runtime threats like ransomware and zero-day exploits in real time.',
      links: [
        {
          text: 'Blog',
          to: 'https://www.sentinelone.com/blog/the-advantages-of-ebpf-for-cwpp-applications/',
        },
      ],
    },
    {
      title: 'Aqua Security',
      logo: Aqua,
      description:
        '<strong>Aqua Security</strong> uses eBPF to handle runtime detection and forensics',
      links: [
        {
          text: 'Blog',
          to: 'https://blog.aquasec.com/linux-vulnerabilitie-tracee',
        },
      ],
    },
    {
      title: 'Oligo Security',
      logo: Oligo,
      description:
        '<strong>Oligo Security</strong> uses eBPF for application security observability and protection',
      links: [
        {
          text: 'Blog',
          to: 'https://www.oligo.security/blog/scaling-runtime-security-how-ebpf-is-solving-decade-long-challenges',
        },
      ],
    },
    {
      title: 'Akita',
      logo: Akita,
      description: '<strong>Akita</strong> uses eBPF at scale for API observability',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.akita.software/docs/how-akita-works#what-makes-akita-different',
        },
      ],
    },
    {
      title: 'groundcover',
      logo: groundcover,
      description:
        '<strong>groundcover</strong> uses eBPF to instantly monitor application performance in cloud native environments, at any scale.',
      links: [
        {
          text: 'Product',
          to: 'https://www.groundcover.com/how-it-works',
        },
        {
          text: 'Docs',
          to: 'https://www.groundcover.com/docs',
        },
        {
          text: 'Video',
          to: 'https://youtu.be/73wait5RR7c?si=vZKzrQpwHmyIeM3k',
        },
      ],
    },
    {
      title: 'Line Coporation',
      logo: LineCoporation,
      description:
        '<strong>Line Corporation</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=cxfVpBYlol4',
        },
      ],
    },
    {
      title: 'Exein',
      logo: Exein,
      description:
        '<strong>Exein</strong> uses eBPF in their open source runtime security framework for IoT',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=vmRQXRit-sY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=16',
        },
      ],
    },
    {
      title: 'Ant Group',
      logo: AntGroup,
      description:
        '<strong>Ant Group</strong> uses eBPF in their cloud native security platform for vulnerability live-patching, and system anomaly detection',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/TXlxgDvxcoY?si=lvC1HqNl4jXNyfD0',
        },
      ],
    },
    {
      title: 'Sysdig',
      logo: Sysdig,
      description:
        '<strong>Sysdig</strong> uses eBPF to enable high-performance system call tracing, facilitate container-aware troubleshooting, conduct security auditing, and provide rich insights and data from the kernel',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=BxoKztfHnYY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=28',
        },
        {
          text: 'Blog',
          to: 'https://sysdig.com/blog/sysdig-and-falco-now-powered-by-ebpf/',
        },
      ],
    },
    {
      title: 'Kodem',
      logo: Kodem,
      description:
        '<strong>Kodem</strong> uses eBPF for application visibilty and runtime intelligence',
      links: [
        {
          text: 'Blog',
          to: 'https://kodemsec.webflow.io/resources/deep-visibility-with-ebpf',
        },
      ],
    },
    {
      title: 'Cycode',
      logo: Cycode,
      description: '<strong>Cycode</strong> uses eBPF for CI/CD security',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=pcBGRFvSrvY',
        },
        {
          text: 'Blog',
          to: 'https://cycode.com/blog/introducing-cimon-build-hardening/',
        },
      ],
    },
    {
      title: 'Wiz',
      logo: Wiz,
      description:
        '<strong>Wiz</strong> uses eBPF to provide real-time threat detection and monitoring within cloud workloads',
      links: [
        {
          text: 'Blog',
          to: 'https://www.wiz.io/blog/wiz-expands-platform-with-the-runtime-sensor-to-provide-unified-cloud-security',
        },
      ],
    },
    {
      title: 'Core Tech',
      logo: CoreTech,
      description:
        '<strong>Core Tech</strong> uses eBPF to filter out unwanted traffic and mitigate DDoS attacks ',
      links: [
        {
          text: 'Blog',
          to: 'https://www.linkedin.com/pulse/coretechnologys-how-drop-1-tbps-ddos-traffic-coretechnolgys-rayif/',
        },
      ],
    },
    {
      title: 'FlowSecurity',
      logo: FlowSecurity,
      description:
        '<strong>Flow Security</strong> uses eBPF technology to analyze data in motion for data discovery, classification, risk management, and data violation detection and response',
      links: [
        {
          text: 'Blog',
          to: 'https://www.flowsecurity.com/ebpf-data-security-hype/',
        },
      ],
    },
    {
      title: 'Helios',
      logo: Helios,
      description:
        '<strong>Helios</strong> uses eBPF in their runtime analysis tool for observability and security',
      links: [
        {
          text: 'Blog',
          to: 'https://gethelios.dev/blog/introducing-helios-runtime-for-appsec/',
        },
      ],
    },
    {
      title: 'ThreatX',
      logo: Threatx,
      description:
        '<strong>ThreatX</strong> uses eBPF for securing their runtime environment and delivering real-time blocking for runtime threats',
      links: [
        {
          text: 'Blog',
          to: 'https://www.threatx.com/blog/cisco-acquires-isovalent-creator-of-ebpf-why-it-matters/',
        },
      ],
    },
    {
      title: 'Levo',
      logo: Levo,
      description: '<strong>Levo</strong> uses eBPF for API discovery and documentation',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.levo.ai/api-observability/concepts#ebpf-sensor',
        },
      ],
    },
    {
      title: 'Traceable',
      logo: Traceable,
      description: '<strong>Traceable</strong> uses eBPF for enhanced data collection',
      links: [
        {
          text: 'Blog',
          to: 'https://www.traceable.ai/blog-post/unlocking-the-power-of-ebpf-at-traceable',
        },
      ],
    },
    {
      title: 'ArvanCloud',
      logo: ArvanCloud,
      description: '<strong>ArvanCloud</strong> uses eBPF for their CDN product',
      links: [
        {
          text: 'Blog',
          to: 'https://medium.com/@amiremohamadi/we-removed-shared-memory-by-building-an-ebpf-load-balancer-394f9f1b344',
        },
      ],
    },
    {
      title: 'RAD Security',
      logo: RADSecurity,
      description:
        '<strong>RAD Security</strong> uses eBPF for runtime threat detection and supply chain verification',
      links: [
        {
          text: 'Blog',
          to: 'https://ksoc.com/blog/introducing-rad-security',
        },
      ],
    },
  ],
  'zh-hans': [
    {
      title: 'Google',
      logo: Google,
      description:
        '<strong>Google</strong> 在网络安全审计、网络数据包传输以及性能监控上应用了 eBPF。',
      links: [
        {
          text: '视频',
          to: 'https://www.youtube.com/watch?v=XFJw37Vwzcc&t=657s',
        },
        {
          text: '演讲',
          to: 'https://legacy.netdevconf.info/0x14/session.html?talk-replacing-HTB-with-EDT-and-BPF',
        },
      ],
    },
    {
      title: 'Netflix',
      logo: Netflix,
      description: '<strong>Netflix</strong> 在网络洞察领域大规模应用 eBPF。',
      links: [
        {
          text: '博客',
          to: 'https://netflixtechblog.com/how-netflix-uses-ebpf-flow-logs-at-scale-for-network-insight-e3ea997dca96',
        },
        {
          text: '视频',
          to: 'https://www.youtube.com/watch?v=16slh29iN1g',
        },
      ],
    },
    {
      title: 'Android',
      logo: Android,
      description: '<strong>Android</strong> 在网络使用率，电力情况以及内存分析中使用 eBPF。',
      links: [
        {
          text: '文档',
          to: 'https://source.android.com/docs/core/architecture/kernel/bpf',
        },
      ],
    },
    {
      title: 'S&P Global',
      logo: Global,
      description:
        '<strong>S&P Global</strong> 通过 Cilium 组件中的 eBPF 实现兼容多个云厂商和自建机房的网络架构。',
      links: [
        {
          text: '视频',
          to: 'https://www.youtube.com/watch?v=6CZ_SSTqb4g',
        },
      ],
    },
    {
      title: 'Shopify',
      logo: Shopify,
      description: '<strong>Shopify</strong> 通过 Falco 中的 eBPF 进行网络流量的入侵检测。',
      links: [
        {
          text: '视频',
          to: 'https://www.youtube.com/watch?v=6pVci31Mb6Q',
        },
      ],
    },
    {
      title: 'Cloudflare',
      logo: Cloudflare,
      description: '<strong>Cloudflare</strong> 在网络安全、性能监控和网络观测中应用了 eBPF',
      links: [
        {
          text: '博客',
          to: 'https://blog.cloudflare.com/tag/ebpf/',
        },
        {
          text: '演讲',
          to: 'https://legacy.netdevconf.info/0x13/session.html?talk-XDP-based-DDoS-mitigation',
        },
      ],
    },
    {
      title: 'Microsoft',
      logo: Microsoft,
      description: '<strong>Microsot</strong> 使用 eBPF 增强了 Kubernetes 内部的可观测性和洞察能力',
      links: [
        {
          text: '演讲',
          to: 'https://www.youtube.com/watch?v=ilcYXPDSgu8&list=PLj6h78yzYM2Pm5nF_GmNQHMyt9CUZr2uQ&index=5',
        },
      ],
    },
    {
      title: 'Samsung',
      logo: Samsung,
      description: '<strong>Samsung</strong> 在他们的安卓设备网络中使用了 eBPF',
      links: [
        {
          text: '演讲',
          to: 'https://www.youtube.com/live/EViAho-6qoc?t=5220&si=shsfjYQ5X5lnL5cL',
        },
      ],
    },
    {
      title: 'Ikea',
      logo: Ikea,
      description:
        '<strong>Ikea</strong> 在私有云中通过使用 Cilium 进行网络实现和负载均衡应用了 eBPF',
      links: [
        {
          text: '视频',
          to: 'https://www.youtube.com/watch?v=sg-F_R-ZVNc',
        },
      ],
    },
    {
      title: 'Apple',
      logo: Apple,
      description: '<strong>Apple</strong> 通过使用 Falco 监控内核安全性应用了 eBPF',
      links: [
        {
          text: '视频',
          to: 'https://www.youtube.com/watch?v=ZBlJSr6XkN8',
        },
      ],
    },
    {
      title: 'Meta',
      logo: Meta,
      description: '<strong>Meta</strong> 在数据中心中使用 eBPF 对每个数据包传输和负载均衡',
      links: [
        {
          text: '视频',
          to: 'https://www.youtube.com/watch?v=ZYBXZFKPS28',
        },
        {
          text: '博客',
          to: 'https://engineering.fb.com/2018/05/22/open-source/open-sourcing-katran-a-scalable-network-load-balancer/',
        },
        {
          text: '演讲',
          to: 'https://lpc.events/event/16/contributions/1363/',
        },
      ],
    },
    {
      title: 'DoorDash',
      logo: DoorDash,
      description: '<strong>DoorDash</strong> 通过使用 BPFAgent 实现了内核级别监控应用了 eBPF',
      links: [
        {
          text: '博客',
          to: 'https://doordash.engineering/2023/08/15/bpfagent-ebpf-for-monitoring-at-doordash/',
        },
      ],
    },
    {
      title: 'Datadog',
      logo: Datadog,
      description: '<strong>Datadog</strong> 在他们的 SaaS 产品的网络和安全功能中使用了 eBPF',
      links: [
        {
          text: '视频',
          to: 'https://datadogon.datadoghq.com/episodes/datadog-on-ebpf/',
        },
        {
          text: '博客',
          to: 'https://www.datadoghq.com/blog/network-performance-monitoring/',
        },
        {
          text: '演讲',
          to: ' https://www.youtube.com/watch?v=6nlv_VCsjpQ',
        },
      ],
    },
    {
      title: 'Alibaba',
      logo: Alibaba,
      description: '<strong>Alibaba</strong> 在云中使用 Cilium 实现网络功能应用了 eBPF',
      links: [
        {
          text: '博客',
          to: 'https://www.alibabacloud.com/blog/how-does-alibaba-cloud-build-high-performance-cloud-native-pod-networks-in-production-environments_596590',
        },
        {
          text: '演讲',
          to: 'https://www.youtube.com/watch?v=Z4qxd5yYoP4',
        },
      ],
    },
    {
      title: 'Red Hat',
      logo: Redhat,
      description: '<strong>Red Hat</strong> 在他们的私有云中大规模使用 eBPF 进行负载均衡和追踪',
      links: [
        {
          text: '演讲',
          to: 'https://youtu.be/xxRAppnmirY?si=OSxhLJ8S1B2-Z-9T',
        },
      ],
    },
    {
      title: 'Seznam',
      logo: Seznam,
      description: '<strong>Seznam</strong> 使用 eBPF 进行负载均衡',
      links: [
        {
          text: '博客',
          to: 'https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/',
        },
        {
          text: '演讲',
          to: 'https://www.youtube.com/watch?v=xwjZF3alO7g',
        },
      ],
    },
    {
      title: 'Trip.com',
      logo: Trip,
      description: '<strong>Trip.com</strong> 使用 eBPF 进行负载均衡',
      links: [
        {
          text: '博客',
          to: 'https://cilium.io/blog/2020/02/05/how-trip-com-uses-cilium/',
        },
        {
          text: '演讲',
          to: 'https://www.youtube.com/watch?v=NIsU4I950l4',
        },
      ],
    },
    {
      title: 'Bell',
      logo: Bell,
      description: '<strong>Bell</strong> Canada uses eBPF to moderize telco networking with SRv6',
      links: [
        {
          text: '演讲',
          to: 'https://www.youtube.com/watch?v=fNtG0iHYne4',
        },
      ],
    },
    {
      title: 'Wildlife Studios',
      logo: Wildlife,
      description:
        '<strong>Wildlife Studios</strong> uses eBPF through Cilium for high performance game networking',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/09/03/wildlife-studios-multi-cluster-gaming-platform',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=_1t3bXzptP0',
        },
      ],
    },
    {
      title: 'Capital One',
      logo: CapitalOne,
      description: '<strong>Capital One</strong> uses eBPF to secure their cloud infrastructure',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w&ab_channel=eBPFSummit',
        },
      ],
    },
    {
      title: 'Sky',
      logo: Sky,
      description: '<strong>Sky</strong> uses eBPF through Cilium for cloud networking',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=u-4naOMfs_w',
        },
      ],
    },
    {
      title: 'Walmart',
      logo: Walmart,
      description: '<strong>Walmart</strong> uses eBPF for edge cloud load balancing',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/thmAcyix8FM',
        },
        {
          text: 'Blog',
          to: 'https://medium.com/walmartglobaltech/introducing-walmarts-l3af-project-how-do-we-use-ebpf-to-provide-network-visibility-in-a-8b9ae4d26200',
        },
      ],
    },
    {
      title: 'Palantir',
      logo: Palantir,
      description: '<strong>Palantir</strong> uses eBPF to debug networking problems',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/0RDp1IPxbg0',
        },
      ],
    },
    {
      title: 'Cruise',
      logo: Cruise,
      description: '<strong>Cruise</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/7bdy2AkRjqE',
        },
      ],
    },
    {
      title: 'Digital Ocean',
      logo: DigitalOcean,
      description: '<strong>Digital Ocean</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/gcHxfhDT-I4',
        },
      ],
    },
    {
      title: 'Yahoo',
      logo: Yahoo,
      description: '<strong>Yahoo</strong> uses eBPF for load balancing and performance analysis',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/-C86fBMcp5Q',
        },
        {
          text: 'Talk',
          to: 'https://www.usenix.org/conference/lisa21/presentation/jones-zachary',
        },
      ],
    },
    {
      title: 'Bytedance',
      logo: Bytedance,
      description: '<strong>Bytedance</strong> uses eBPF for system tracing',
      links: [
        {
          text: 'Blog',
          to: 'https://inf.news/en/tech/3313635d67f796ae38e7ef64061bc7c4.html',
        },
      ],
    },
    {
      title: 'F5',
      logo: F5,
      description: '<strong>F5</strong> BIG-IP integration with Cilium VTEP feature',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/EfmdjrQLFFg',
        },
        {
          text: 'Guide',
          to: 'https://github.com/f5devcentral/f5-ci-docs/blob/master/docs/cilium/cilium-bigip-info.rst',
        },
      ],
    },
    {
      title: 'LinkedIn',
      logo: LinkedIn,
      description: '<strong>LinkedIn</strong> uses eBPF for Infrastructure Observability',
      links: [
        {
          text: 'Blog',
          to: 'https://engineering.linkedin.com/blog/2022/skyfall--ebpf-agent-for-infrastructure-observability',
        },
      ],
    },
    {
      title: 'The New York Times',
      logo: NYT,
      description: '<strong>The New York Times</strong> uses eBPF for networking',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=qmrHONqsV2M&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D',
        },
      ],
    },
    {
      title: 'SentinelOne',
      logo: SentinelOne,
      description:
        '<strong>SentinelOne</strong> uses eBPF to detect and to respond to runtime threats like ransomware and zero-day exploits in real time.',
      links: [
        {
          text: 'Blog',
          to: 'https://www.sentinelone.com/blog/the-advantages-of-ebpf-for-cwpp-applications/',
        },
      ],
    },
    {
      title: 'Aqua Security',
      logo: Aqua,
      description:
        '<strong>Aqua Security</strong> uses eBPF to handle runtime detection and forensics',
      links: [
        {
          text: 'Blog',
          to: 'https://blog.aquasec.com/linux-vulnerabilitie-tracee',
        },
      ],
    },
    {
      title: 'Akita',
      logo: Akita,
      description: '<strong>Akita</strong> uses eBPF at scale for API observability',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.akita.software/docs/how-akita-works#what-makes-akita-different',
        },
      ],
    },
    {
      title: 'Line Coporation',
      logo: LineCoporation,
      description:
        '<strong>Line Corporation</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=cxfVpBYlol4',
        },
      ],
    },
    {
      title: 'Exein',
      logo: Exein,
      description:
        '<strong>Exein</strong> uses eBPF in their open source runtime security framework for IoT',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=vmRQXRit-sY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=16',
        },
      ],
    },
    {
      title: 'Ant Group',
      logo: AntGroup,
      description:
        '<strong>Ant Group</strong> uses eBPF in their cloud native security platform for vulnerability live-patching, and system anomaly detection',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/TXlxgDvxcoY?si=lvC1HqNl4jXNyfD0',
        },
      ],
    },
    {
      title: 'Sysdig',
      logo: Sysdig,
      description:
        '<strong>Sysdig</strong> uses eBPF to enable high-performance system call tracing, facilitate container-aware troubleshooting, conduct security auditing, and provide rich insights and data from the kernel',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=BxoKztfHnYY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=28',
        },
        {
          text: 'Blog',
          to: 'https://sysdig.com/blog/sysdig-and-falco-now-powered-by-ebpf/',
        },
      ],
    },
    {
      title: 'Kodem',
      logo: Kodem,
      description:
        '<strong>Kodem</strong> uses eBPF for application visibilty and runtime intelligence',
      links: [
        {
          text: 'Blog',
          to: 'https://kodemsec.webflow.io/resources/deep-visibility-with-ebpf',
        },
      ],
    },
    {
      title: 'Cycode',
      logo: Cycode,
      description: '<strong>Cycode</strong> uses eBPF for CI/CD security',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=pcBGRFvSrvY',
        },
        {
          text: 'Blog',
          to: 'https://cycode.com/blog/introducing-cimon-build-hardening/',
        },
      ],
    },
    {
      title: 'Wiz',
      logo: Wiz,
      description:
        '<strong>Wiz</strong> uses eBPF to provide real-time threat detection and monitoring within cloud workloads',
      links: [
        {
          text: 'Blog',
          to: 'https://www.wiz.io/blog/wiz-expands-platform-with-the-runtime-sensor-to-provide-unified-cloud-security',
        },
      ],
    },
    {
      title: 'Core Tech',
      logo: CoreTech,
      description: '<strong>Core Tech</strong> 使用 eBPF 过滤不需要的流量和缓解 DDoS 攻击',
      links: [
        {
          text: '博客',
          to: 'https://www.linkedin.com/pulse/coretechnologys-how-drop-1-tbps-ddos-traffic-coretechnolgys-rayif/',
        },
      ],
    },
    {
      title: 'FlowSecurity',
      logo: FlowSecurity,
      description:
        '<strong>Flow Security</strong> 使用 eBPF 技术分析动态数据，用于数据发现、分类、风险管理以及数据违规检测和响应',
      links: [
        {
          text: '博客',
          to: 'https://www.flowsecurity.com/ebpf-data-security-hype/',
        },
      ],
    },
    {
      title: 'Helios',
      logo: Helios,
      description:
        '<strong>Helios</strong> 在他们的运行时分析工具可观测性和安全性功能中应用了 eBPF',
      links: [
        {
          text: 'Blog',
          to: 'https://gethelios.dev/blog/introducing-helios-runtime-for-appsec/',
        },
      ],
    },
    {
      title: 'ThreatX',
      logo: Threatx,
      description:
        '<strong>ThreatX</strong> uses eBPF for securing their runtime environment and delivering real-time blocking for runtime threats',
      links: [
        {
          text: 'Blog',
          to: 'https://www.threatx.com/blog/cisco-acquires-isovalent-creator-of-ebpf-why-it-matters/',
        },
      ],
    },
    {
      title: 'Levo',
      logo: Levo,
      description: '<strong>Levo</strong> uses eBPF for API discovery and documentation',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.levo.ai/api-observability/concepts#ebpf-sensor',
        },
      ],
    },
    {
      title: 'Traceable',
      logo: Traceable,
      description: '<strong>Traceable</strong> uses eBPF for enhanced data collection',
      links: [
        {
          text: 'Blog',
          to: 'https://www.traceable.ai/blog-post/unlocking-the-power-of-ebpf-at-traceable',
        },
      ],
    },
    {
      title: 'Accuknox',
      logo: Accuknox,
      description: '<strong>Accuknox</strong> uses eBPF through KubeArmor for runtime security observability, container forensics and policy enforcement',
      links: [
        {
          text: 'Blog',
          to: 'https://www.accuknox.com/blog/runtime-security-and-the-role-of-ebpf-bpf-lsm',
        },
      ],
    },
  ],

  sw: [
    {
      title: 'Google',
      logo: Google,
      description:
        '<strong>Google</strong> hutumia eBPF kwa ukaguzi wa usalama, usindikaji wa pakiti, na ufuatiliaji na ukaguzii wa utendaji',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=XFJw37Vwzcc&t=657s',
        },
        {
          text: 'Talk',
          to: 'https://legacy.netdevconf.info/0x14/session.html?talk-replacing-HTB-with-EDT-and-BPF',
        },
      ],
    },
    {
      title: 'Netflix',
      logo: Netflix,
      description:
        '<strong>Netflix</strong> hutumia eBPF kwa kiwango kikubwa kwa ufahamu wa mtandao',
      links: [
        {
          text: 'Blog',
          to: 'https://netflixtechblog.com/how-netflix-uses-ebpf-flow-logs-at-scale-for-network-insight-e3ea997dca96',
        },
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=16slh29iN1g',
        },
      ],
    },
    {
      title: 'Android',
      logo: Android,
      description:
        '<strong>Android</strong> hutumia eBPF kufuatilia na kukagua matumizi ya mtandao, nguvu la tarakilishi, na ufuatiliaji wa kumbukumbu',
      links: [
        {
          text: 'Docs',
          to: 'https://source.android.com/docs/core/architecture/kernel/bpf',
        },
      ],
    },
    {
      title: 'S&P Global',
      logo: Global,
      description:
        '<strong>S&P Global</strong> hutumia eBPF kupitia Cilium kwa mtandao katika “Cloud” na kwenye eneo la “Premise”',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6CZ_SSTqb4g',
        },
      ],
    },
    {
      title: 'Shopify',
      logo: Shopify,
      description: '<strong>Shopify</strong> hutumia eBPF kupitia Falco kwa ugunduzi wa kuingilia',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6pVci31Mb6Q',
        },
      ],
    },
    {
      title: 'Cloudflare',
      logo: Cloudflare,
      description:
        '<strong>Cloudflare</strong> hutumia eBPF kwa usalama wa mtandao, ufuatiliaji/ukaguzi wa utendezi, na ufuatiliaji/ukaguzi wa mtandao',
      links: [
        {
          text: 'Blog',
          to: 'https://blog.cloudflare.com/tag/ebpf/',
        },
        {
          text: 'Talk',
          to: 'https://legacy.netdevconf.info/0x13/session.html?talk-XDP-based-DDoS-mitigation',
        },
      ],
    },
    {
      title: 'Microsoft',
      logo: Microsoft,
      description:
        '<strong>Microsot</strong> uses eBPF to enhance the observability and inspection of processes within Kubernetes',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=ilcYXPDSgu8&list=PLj6h78yzYM2Pm5nF_GmNQHMyt9CUZr2uQ&index=5',
        },
      ],
    },
    {
      title: 'Samsung',
      logo: Samsung,
      description: '<strong>Samsung</strong> uses eBPF in their android devices for networking',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/live/EViAho-6qoc?t=5220&si=shsfjYQ5X5lnL5cL',
        },
      ],
    },
    {
      title: 'Ikea',
      logo: Ikea,
      description:
        '<strong>Ikea</strong> uses eBPF through Cilium for networking and load balancing in their private cloud',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=sg-F_R-ZVNc',
        },
      ],
    },
    {
      title: 'Apple',
      logo: Apple,
      description: '<strong>Apple</strong> uses eBPF through Falco for kernel security monitoring',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZBlJSr6XkN8',
        },
      ],
    },
    {
      title: 'Meta',
      logo: Meta,
      description:
        '<strong>Meta</strong> uses eBPF to process and load balance every packet coming into their data centers',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZYBXZFKPS28',
        },
        {
          text: 'Blog',
          to: 'https://engineering.fb.com/2018/05/22/open-source/open-sourcing-katran-a-scalable-network-load-balancer/',
        },
        {
          text: 'Talk',
          to: 'https://lpc.events/event/16/contributions/1363/',
        },
      ],
    },
    {
      title: 'DoorDash',
      logo: DoorDash,
      description:
        '<strong>DoorDash</strong> uses eBPF through BPFAgent for kernel level monitoring',
      links: [
        {
          text: 'Blog',
          to: 'https://doordash.engineering/2023/08/15/bpfagent-ebpf-for-monitoring-at-doordash/',
        },
      ],
    },
    {
      title: 'Datadog',
      logo: Datadog,
      description:
        '<strong>Datadog</strong> uses eBPF for networking and security in their SaaS product',
      links: [
        {
          text: 'Video',
          to: 'https://datadogon.datadoghq.com/episodes/datadog-on-ebpf/',
        },
        {
          text: 'Blog',
          to: 'https://www.datadoghq.com/blog/network-performance-monitoring/',
        },
        {
          text: 'Talk',
          to: ' https://www.youtube.com/watch?v=6nlv_VCsjpQ',
        },
      ],
    },
    {
      title: 'Alibaba',
      logo: Alibaba,
      description:
        '<strong>Alibaba</strong> uses eBPF through Cilium to provide networking in their cloud',
      links: [
        {
          text: 'Blog',
          to: 'https://www.alibabacloud.com/blog/how-does-alibaba-cloud-build-high-performance-cloud-native-pod-networks-in-production-environments_596590',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=Z4qxd5yYoP4',
        },
      ],
    },
    {
      title: 'Red Hat',
      logo: Redhat,
      description:
        '<strong>Red Hat</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/xxRAppnmirY?si=OSxhLJ8S1B2-Z-9T',
        },
      ],
    },
    {
      title: 'Seznam',
      logo: Seznam,
      description: '<strong>Seznam</strong> uses eBPF for load balancing',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=xwjZF3alO7g',
        },
      ],
    },
    {
      title: 'Trip.com',
      logo: Trip,
      description: '<strong>Trip.com</strong> uses eBPF for load balancing',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/02/05/how-trip-com-uses-cilium/',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=NIsU4I950l4',
        },
      ],
    },
    {
      title: 'Bell',
      logo: Bell,
      description: '<strong>Bell</strong> Canada uses eBPF to moderize telco networking with SRv6',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=fNtG0iHYne4',
        },
      ],
    },
    {
      title: 'Wildlife Studios',
      logo: Wildlife,
      description:
        '<strong>Wildlife Studios</strong> uses eBPF through Cilium for high performance game networking',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/09/03/wildlife-studios-multi-cluster-gaming-platform',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=_1t3bXzptP0',
        },
      ],
    },
    {
      title: 'Capital One',
      logo: CapitalOne,
      description: '<strong>Capital One</strong> uses eBPF to secure their cloud infrastructure',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w&ab_channel=eBPFSummit',
        },
      ],
    },
    {
      title: 'Sky',
      logo: Sky,
      description: '<strong>Sky</strong> uses eBPF through Cilium for cloud networking',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=u-4naOMfs_w',
        },
      ],
    },
    {
      title: 'Walmart',
      logo: Walmart,
      description: '<strong>Walmart</strong> uses eBPF for edge cloud load balancing',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/thmAcyix8FM',
        },
        {
          text: 'Blog',
          to: 'https://medium.com/walmartglobaltech/introducing-walmarts-l3af-project-how-do-we-use-ebpf-to-provide-network-visibility-in-a-8b9ae4d26200',
        },
      ],
    },
    {
      title: 'Palantir',
      logo: Palantir,
      description: '<strong>Palantir</strong> uses eBPF to debug networking problems',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/0RDp1IPxbg0',
        },
      ],
    },
    {
      title: 'Cruise',
      logo: Cruise,
      description: '<strong>Cruise</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/7bdy2AkRjqE',
        },
      ],
    },
    {
      title: 'Digital Ocean',
      logo: DigitalOcean,
      description: '<strong>Digital Ocean</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/gcHxfhDT-I4',
        },
      ],
    },
    {
      title: 'Yahoo',
      logo: Yahoo,
      description: '<strong>Yahoo</strong> uses eBPF for load balancing and performance analysis',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/-C86fBMcp5Q',
        },
        {
          text: 'Talk',
          to: 'https://www.usenix.org/conference/lisa21/presentation/jones-zachary',
        },
      ],
    },
    {
      title: 'Bytedance',
      logo: Bytedance,
      description: '<strong>Bytedance</strong> uses eBPF for system tracing',
      links: [
        {
          text: 'Blog',
          to: 'https://inf.news/en/tech/3313635d67f796ae38e7ef64061bc7c4.html',
        },
      ],
    },
    {
      title: 'F5',
      logo: F5,
      description: '<strong>F5</strong> BIG-IP integration with Cilium VTEP feature',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/EfmdjrQLFFg',
        },
        {
          text: 'Guide',
          to: 'https://github.com/f5devcentral/f5-ci-docs/blob/master/docs/cilium/cilium-bigip-info.rst',
        },
      ],
    },
    {
      title: 'LinkedIn',
      logo: LinkedIn,
      description: '<strong>LinkedIn</strong> uses eBPF for Infrastructure Observability',
      links: [
        {
          text: 'Blog',
          to: 'https://engineering.linkedin.com/blog/2022/skyfall--ebpf-agent-for-infrastructure-observability',
        },
      ],
    },
    {
      title: 'The New York Times',
      logo: NYT,
      description: '<strong>The New York Times</strong> uses eBPF for networking',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=qmrHONqsV2M&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D',
        },
      ],
    },
    {
      title: 'SentinelOne',
      logo: SentinelOne,
      description:
        '<strong>SentinelOne</strong> uses eBPF to detect and to respond to runtime threats like ransomware and zero-day exploits in real time.',
      links: [
        {
          text: 'Blog',
          to: 'https://www.sentinelone.com/blog/the-advantages-of-ebpf-for-cwpp-applications/',
        },
      ],
    },
    {
      title: 'Aqua Security',
      logo: Aqua,
      description:
        '<strong>Aqua Security</strong> uses eBPF to handle runtime detection and forensics',
      links: [
        {
          text: 'Blog',
          to: 'https://blog.aquasec.com/linux-vulnerabilitie-tracee',
        },
      ],
    },
    {
      title: 'Akita',
      logo: Akita,
      description: '<strong>Akita</strong> uses eBPF at scale for API observability',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.akita.software/docs/how-akita-works#what-makes-akita-different',
        },
      ],
    },
    {
      title: 'Line Coporation',
      logo: LineCoporation,
      description:
        '<strong>Line Corporation</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=cxfVpBYlol4',
        },
      ],
    },
    {
      title: 'Exein',
      logo: Exein,
      description:
        '<strong>Exein</strong> uses eBPF in their open source runtime security framework for IoT',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=vmRQXRit-sY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=16',
        },
      ],
    },
    {
      title: 'Ant Group',
      logo: AntGroup,
      description:
        '<strong>Ant Group</strong> uses eBPF in their cloud native security platform for vulnerability live-patching, and system anomaly detection',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/TXlxgDvxcoY?si=lvC1HqNl4jXNyfD0',
        },
      ],
    },
    {
      title: 'Sysdig',
      logo: Sysdig,
      description:
        '<strong>Sysdig</strong> uses eBPF to enable high-performance system call tracing, facilitate container-aware troubleshooting, conduct security auditing, and provide rich insights and data from the kernel',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=BxoKztfHnYY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=28',
        },
        {
          text: 'Blog',
          to: 'https://sysdig.com/blog/sysdig-and-falco-now-powered-by-ebpf/',
        },
      ],
    },
    {
      title: 'Kodem',
      logo: Kodem,
      description:
        '<strong>Kodem</strong> uses eBPF for application visibilty and runtime intelligence',
      links: [
        {
          text: 'Blog',
          to: 'https://kodemsec.webflow.io/resources/deep-visibility-with-ebpf',
        },
      ],
    },
    {
      title: 'Cycode',
      logo: Cycode,
      description: '<strong>Cycode</strong> uses eBPF for CI/CD security',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=pcBGRFvSrvY',
        },
        {
          text: 'Blog',
          to: 'https://cycode.com/blog/introducing-cimon-build-hardening/',
        },
      ],
    },
    {
      title: 'Wiz',
      logo: Wiz,
      description:
        '<strong>Wiz</strong> uses eBPF to provide real-time threat detection and monitoring within cloud workloads',
      links: [
        {
          text: 'Blog',
          to: 'https://www.wiz.io/blog/wiz-expands-platform-with-the-runtime-sensor-to-provide-unified-cloud-security',
        },
      ],
    },
    {
      title: 'Core Tech',
      logo: CoreTech,
      description:
        '<strong>Core Tech</strong> uses eBPF to filter out unwanted traffic and mitigate DDoS attacks ',
      links: [
        {
          text: 'Blog',
          to: 'https://www.linkedin.com/pulse/coretechnologys-how-drop-1-tbps-ddos-traffic-coretechnolgys-rayif/',
        },
      ],
    },
    {
      title: 'FlowSecurity',
      logo: FlowSecurity,
      description:
        '<strong>Flow Security</strong> uses eBPF technology to analyze data in motion for data discovery, classification, risk management, and data violation detection and response',
      links: [
        {
          text: 'Blog',
          to: 'https://www.flowsecurity.com/ebpf-data-security-hype/',
        },
      ],
    },
    {
      title: 'Helios',
      logo: Helios,
      description:
        '<strong>Helios</strong> uses eBPF in their runtime analysis tool for observability and security',
      links: [
        {
          text: 'Blog',
          to: 'https://gethelios.dev/blog/introducing-helios-runtime-for-appsec/',
        },
      ],
    },
  ],
  'zh-hant': [
    {
      title: 'Google',
      logo: Google,
      description: '<strong>Google</strong> 在安全審計、資料包處理和效能監控方面使用eBPF。',
      links: [
        {
          text: '影片',
          to: 'https://www.youtube.com/watch?v=XFJw37Vwzcc&t=657s',
        },
        {
          text: '演講',
          to: 'https://legacy.netdevconf.info/0x14/session.html?talk-replacing-HTB-with-EDT-and-BPF',
        },
      ],
    },
    {
      title: 'Netflix',
      logo: Netflix,
      description: '<strong>Netflix</strong> 在網絡洞察領域大規模使用 eBPF。',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.levo.ai/api-observability/concepts#ebpf-sensor',
        },
      ],
    },
    {
      title: 'Traceable',
      logo: Traceable,
      description: '<strong>Traceable</strong> uses eBPF for enhanced data collection',
      links: [
        {
          text: '文檔',
          to: 'https://source.android.com/docs/core/architecture/kernel/bpf',
        },
      ],
    },
    {
      title: 'S&P Global',
      logo: Global,
      description:
        '<strong>S&P Global</strong> 透過 Cilium 組件中的 eBPF 實現兼容多個雲端和本地化部署的網絡架構。',
      links: [
        {
          text: '影片',
          to: 'https://www.youtube.com/watch?v=6CZ_SSTqb4g',
        },
      ],
    },
    {
      title: 'Shopify',
      logo: Shopify,
      description: '<strong>Shopify</strong> 透過 Falco 中的 eBPF 進行入侵偵測。',
      links: [
        {
          text: '影片',
          to: 'https://www.youtube.com/watch?v=6pVci31Mb6Q',
        },
      ],
    },
    {
      title: 'Cloudflare',
      logo: Cloudflare,
      description: '<strong>Cloudflare</strong> 在網路安全、效能監控和網路可觀測性中使用eBPF。',
      links: [
        {
          text: '部落格',
          to: 'https://blog.cloudflare.com/tag/ebpf/',
        },
        {
          text: '演講',
          to: 'https://legacy.netdevconf.info/0x13/session.html?talk-XDP-based-DDoS-mitigation',
        },
      ],
    },
    {
      title: 'Microsoft',
      logo: Microsoft,
      description: '<strong>Microsot</strong> 使用 eBPF 增強 Kubernetes 內程序的可觀測性和洞察能力',
      links: [
        {
          text: '演講',
          to: 'https://www.youtube.com/watch?v=ilcYXPDSgu8&list=PLj6h78yzYM2Pm5nF_GmNQHMyt9CUZr2uQ&index=5',
        },
      ],
    },
    {
      title: 'Samsung',
      logo: Samsung,
      description: '<strong>Samsung</strong> 在他們的 Android 裝置中使用 eBPF 進行網路連接',
      links: [
        {
          text: '演講',
          to: 'https://www.youtube.com/live/EViAho-6qoc?t=5220&si=shsfjYQ5X5lnL5cL',
        },
      ],
    },
    {
      title: 'Ikea',
      logo: Ikea,
      description: '<strong>Ikea</strong> 在私有雲中透過 Cilium 使用 eBPF 進行網路實現和負載平衡',
      links: [
        {
          text: '影片',
          to: 'https://www.youtube.com/watch?v=sg-F_R-ZVNc',
        },
      ],
    },
    {
      title: 'Apple',
      logo: Apple,
      description: '<strong>Apple</strong> 透過 Falco 使用 eBPF 進行核心安全監控',
      links: [
        {
          text: '影片',
          to: 'https://www.youtube.com/watch?v=ZBlJSr6XkN8',
        },
      ],
    },
    {
      title: 'Meta',
      logo: Meta,
      description: '<strong>Meta</strong> 在資料中心中使用 eBPF 對每一個資料封包進行傳輸和負載平衡',
      links: [
        {
          text: '影片',
          to: 'https://www.youtube.com/watch?v=ZYBXZFKPS28',
        },
        {
          text: '部落格',
          to: 'https://engineering.fb.com/2018/05/22/open-source/open-sourcing-katran-a-scalable-network-load-balancer/',
        },
        {
          text: '演講',
          to: 'https://lpc.events/event/16/contributions/1363/',
        },
      ],
    },
    {
      title: 'DoorDash',
      logo: DoorDash,
      description: '<strong>DoorDash</strong> 透過 BPFAgent 使用 eBPF 進行核心級監控',
      links: [
        {
          text: '部落格',
          to: 'https://doordash.engineering/2023/08/15/bpfagent-ebpf-for-monitoring-at-doordash/',
        },
      ],
    },
    {
      title: 'Datadog',
      logo: Datadog,
      description: '<strong>Datadog</strong> 在其 SaaS 產品中使用 eBPF 實現網路和安全',
      links: [
        {
          text: '影片',
          to: 'https://datadogon.datadoghq.com/episodes/datadog-on-ebpf/',
        },
        {
          text: '部落格',
          to: 'https://www.datadoghq.com/blog/network-performance-monitoring/',
        },
        {
          text: '演講',
          to: ' https://www.youtube.com/watch?v=6nlv_VCsjpQ',
        },
      ],
    },
    {
      title: 'Alibaba',
      logo: Alibaba,
      description: '<strong>Alibaba</strong> 透過 Cilium 使用 eBPF 在雲端提供網路',
      links: [
        {
          text: '部落格',
          to: 'https://www.alibabacloud.com/blog/how-does-alibaba-cloud-build-high-performance-cloud-native-pod-networks-in-production-environments_596590',
        },
        {
          text: '演講',
          to: 'https://www.youtube.com/watch?v=Z4qxd5yYoP4',
        },
      ],
    },
    {
      title: 'Red Hat',
      logo: Redhat,
      description: '<strong>Red Hat</strong> 在他們的私有雲中大規模使用 eBPF 進行負載平衡和追蹤',
      links: [
        {
          text: '演講',
          to: 'https://youtu.be/xxRAppnmirY?si=OSxhLJ8S1B2-Z-9T',
        },
      ],
    },
    {
      title: 'Seznam',
      logo: Seznam,
      description: '<strong>Seznam</strong> 使用 eBPF 進行負載平衡',
      links: [
        {
          text: '部落格',
          to: 'https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/',
        },
        {
          text: '演講',
          to: 'https://www.youtube.com/watch?v=xwjZF3alO7g',
        },
      ],
    },
    {
      title: 'Trip.com',
      logo: Trip,
      description: '<strong>Trip.com</strong> 使用 eBPF 進行負載平衡',
      links: [
        {
          text: '部落格',
          to: 'https://cilium.io/blog/2020/02/05/how-trip-com-uses-cilium/',
        },
        {
          text: '演講',
          to: 'https://www.youtube.com/watch?v=NIsU4I950l4',
        },
      ],
    },
    {
      title: 'Bell',
      logo: Bell,
      description: '<strong>Bell</strong> Canada uses eBPF to moderize telco networking with SRv6',
      links: [
        {
          text: '演讲',
          to: 'https://www.youtube.com/watch?v=fNtG0iHYne4',
        },
      ],
    },
    {
      title: 'Wildlife Studios',
      logo: Wildlife,
      description:
        '<strong>Wildlife Studios</strong> uses eBPF through Cilium for high performance game networking',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/09/03/wildlife-studios-multi-cluster-gaming-platform',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=_1t3bXzptP0',
        },
      ],
    },
    {
      title: 'Capital One',
      logo: CapitalOne,
      description: '<strong>Capital One</strong> uses eBPF to secure their cloud infrastructure',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w&ab_channel=eBPFSummit',
        },
      ],
    },
    {
      title: 'Sky',
      logo: Sky,
      description: '<strong>Sky</strong> uses eBPF through Cilium for cloud networking',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=u-4naOMfs_w',
        },
      ],
    },
    {
      title: 'Walmart',
      logo: Walmart,
      description: '<strong>Walmart</strong> uses eBPF for edge cloud load balancing',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/thmAcyix8FM',
        },
        {
          text: 'Blog',
          to: 'https://medium.com/walmartglobaltech/introducing-walmarts-l3af-project-how-do-we-use-ebpf-to-provide-network-visibility-in-a-8b9ae4d26200',
        },
      ],
    },
    {
      title: 'Palantir',
      logo: Palantir,
      description: '<strong>Palantir</strong> uses eBPF to debug networking problems',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/0RDp1IPxbg0',
        },
      ],
    },
    {
      title: 'Cruise',
      logo: Cruise,
      description: '<strong>Cruise</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/7bdy2AkRjqE',
        },
      ],
    },
    {
      title: 'Digital Ocean',
      logo: DigitalOcean,
      description: '<strong>Digital Ocean</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/gcHxfhDT-I4',
        },
      ],
    },
    {
      title: 'Yahoo',
      logo: Yahoo,
      description: '<strong>Yahoo</strong> uses eBPF for load balancing and performance analysis',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/-C86fBMcp5Q',
        },
        {
          text: 'Talk',
          to: 'https://www.usenix.org/conference/lisa21/presentation/jones-zachary',
        },
      ],
    },
    {
      title: 'Bytedance',
      logo: Bytedance,
      description: '<strong>Bytedance</strong> uses eBPF for system tracing',
      links: [
        {
          text: 'Blog',
          to: 'https://inf.news/en/tech/3313635d67f796ae38e7ef64061bc7c4.html',
        },
      ],
    },
    {
      title: 'F5',
      logo: F5,
      description: '<strong>F5</strong> BIG-IP integration with Cilium VTEP feature',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/EfmdjrQLFFg',
        },
        {
          text: 'Guide',
          to: 'https://github.com/f5devcentral/f5-ci-docs/blob/master/docs/cilium/cilium-bigip-info.rst',
        },
      ],
    },
    {
      title: 'LinkedIn',
      logo: LinkedIn,
      description: '<strong>LinkedIn</strong> uses eBPF for Infrastructure Observability',
      links: [
        {
          text: 'Blog',
          to: 'https://engineering.linkedin.com/blog/2022/skyfall--ebpf-agent-for-infrastructure-observability',
        },
      ],
    },
    {
      title: 'The New York Times',
      logo: NYT,
      description: '<strong>The New York Times</strong> uses eBPF for networking',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=qmrHONqsV2M&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D',
        },
      ],
    },
    {
      title: 'SentinelOne',
      logo: SentinelOne,
      description:
        '<strong>SentinelOne</strong> uses eBPF to detect and to respond to runtime threats like ransomware and zero-day exploits in real time.',
      links: [
        {
          text: 'Blog',
          to: 'https://www.sentinelone.com/blog/the-advantages-of-ebpf-for-cwpp-applications/',
        },
      ],
    },
    {
      title: 'Aqua Security',
      logo: Aqua,
      description:
        '<strong>Aqua Security</strong> uses eBPF to handle runtime detection and forensics',
      links: [
        {
          text: 'Blog',
          to: 'https://blog.aquasec.com/linux-vulnerabilitie-tracee',
        },
      ],
    },
    {
      title: 'Akita',
      logo: Akita,
      description: '<strong>Akita</strong> uses eBPF at scale for API observability',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.akita.software/docs/how-akita-works#what-makes-akita-different',
        },
      ],
    },
    {
      title: 'Line Coporation',
      logo: LineCoporation,
      description:
        '<strong>Line Corporation</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=cxfVpBYlol4',
        },
      ],
    },
    {
      title: 'Exein',
      logo: Exein,
      description:
        '<strong>Exein</strong> uses eBPF in their open source runtime security framework for IoT',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=vmRQXRit-sY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=16',
        },
      ],
    },
    {
      title: 'Ant Group',
      logo: AntGroup,
      description:
        '<strong>Ant Group</strong> uses eBPF in their cloud native security platform for vulnerability live-patching, and system anomaly detection',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/TXlxgDvxcoY?si=lvC1HqNl4jXNyfD0',
        },
      ],
    },
    {
      title: 'Sysdig',
      logo: Sysdig,
      description:
        '<strong>Sysdig</strong> uses eBPF to enable high-performance system call tracing, facilitate container-aware troubleshooting, conduct security auditing, and provide rich insights and data from the kernel',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=BxoKztfHnYY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=28',
        },
        {
          text: 'Blog',
          to: 'https://sysdig.com/blog/sysdig-and-falco-now-powered-by-ebpf/',
        },
      ],
    },
    {
      title: 'Kodem',
      logo: Kodem,
      description:
        '<strong>Kodem</strong> uses eBPF for application visibilty and runtime intelligence',
      links: [
        {
          text: 'Blog',
          to: 'https://kodemsec.webflow.io/resources/deep-visibility-with-ebpf',
        },
      ],
    },
    {
      title: 'Cycode',
      logo: Cycode,
      description: '<strong>Cycode</strong> uses eBPF for CI/CD security',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=pcBGRFvSrvY',
        },
        {
          text: 'Blog',
          to: 'https://cycode.com/blog/introducing-cimon-build-hardening/',
        },
      ],
    },
    {
      title: 'Wiz',
      logo: Wiz,
      description:
        '<strong>Wiz</strong> uses eBPF to provide real-time threat detection and monitoring within cloud workloads',
      links: [
        {
          text: 'Blog',
          to: 'https://www.wiz.io/blog/wiz-expands-platform-with-the-runtime-sensor-to-provide-unified-cloud-security',
        },
      ],
    },
    {
      title: 'Core Tech',
      logo: CoreTech,
      description: '<strong>Core Tech</strong> 使用 eBPF 過濾掉不需要的流量並緩解 DDoS 攻擊',
      links: [
        {
          text: '部落格',
          to: 'https://www.linkedin.com/pulse/coretechnologys-how-drop-1-tbps-ddos-traffic-coretechnolgys-rayif/',
        },
      ],
    },
    {
      title: 'FlowSecurity',
      logo: FlowSecurity,
      description:
        '<strong>Flow Security</strong> 使用 eBPF 技術分析動態數據，以進行數據發現、分類、風險管理以及數據違規檢測和回應',
      links: [
        {
          text: '部落格',
          to: 'https://www.flowsecurity.com/ebpf-data-security-hype/',
        },
      ],
    },
    {
      title: 'Helios',
      logo: Helios,
      description:
        '<strong>Helios</strong> 在他們的運行時分析工具中使用 eBPF 以實現可觀測性和安全性',
      links: [
        {
          text: 'Blog',
          to: 'https://gethelios.dev/blog/introducing-helios-runtime-for-appsec/',
        },
      ],
    },
    {
      title: 'Google',
      logo: Google,
      description: '<strong>Google</strong> 在安全審計、資料包處理和效能監控方面使用eBPF。',
      links: [
        {
          text: '影片',
          to: 'https://www.youtube.com/watch?v=XFJw37Vwzcc&t=657s',
        },
        {
          text: '演講',
          to: 'https://legacy.netdevconf.info/0x14/session.html?talk-replacing-HTB-with-EDT-and-BPF',
        },
      ],
    },
    {
      title: 'Netflix',
      logo: Netflix,
      description: '<strong>Netflix</strong> 在網絡洞察領域大規模使用 eBPF。',
      links: [
        {
          text: '部落格',
          to: 'https://netflixtechblog.com/how-netflix-uses-ebpf-flow-logs-at-scale-for-network-insight-e3ea997dca96',
        },
        {
          text: '影片',
          to: 'https://www.youtube.com/watch?v=16slh29iN1g',
        },
      ],
    },
    {
      title: 'Android',
      logo: Android,
      description: '<strong>Android</strong> 在監控網路使用率、電力情況和內存分析中使用eBPF。',
      links: [
        {
          text: '文檔',
          to: 'https://source.android.com/docs/core/architecture/kernel/bpf',
        },
      ],
    },
    {
      title: 'S&P Global',
      logo: Global,
      description:
        '<strong>S&P Global</strong> 透過 Cilium 組件中的 eBPF 實現兼容多個雲端和本地化部署的網絡架構。',
      links: [
        {
          text: '影片',
          to: 'https://www.youtube.com/watch?v=6CZ_SSTqb4g',
        },
      ],
    },
    {
      title: 'Shopify',
      logo: Shopify,
      description: '<strong>Shopify</strong> 透過 Falco 中的 eBPF 進行入侵偵測。',
      links: [
        {
          text: '影片',
          to: 'https://www.youtube.com/watch?v=6pVci31Mb6Q',
        },
      ],
    },
    {
      title: 'Cloudflare',
      logo: Cloudflare,
      description: '<strong>Cloudflare</strong> 在網路安全、效能監控和網路可觀測性中使用eBPF。',
      links: [
        {
          text: '部落格',
          to: 'https://blog.cloudflare.com/tag/ebpf/',
        },
        {
          text: '演講',
          to: 'https://legacy.netdevconf.info/0x13/session.html?talk-XDP-based-DDoS-mitigation',
        },
      ],
    },
    {
      title: 'Microsoft',
      logo: Microsoft,
      description: '<strong>Microsot</strong> 使用 eBPF 增強 Kubernetes 內程序的可觀測性和洞察能力',
      links: [
        {
          text: '演講',
          to: 'https://www.youtube.com/watch?v=ilcYXPDSgu8&list=PLj6h78yzYM2Pm5nF_GmNQHMyt9CUZr2uQ&index=5',
        },
      ],
    },
    {
      title: 'Samsung',
      logo: Samsung,
      description: '<strong>Samsung</strong> 在他們的 Android 裝置中使用 eBPF 進行網路連接',
      links: [
        {
          text: '演講',
          to: 'https://www.youtube.com/live/EViAho-6qoc?t=5220&si=shsfjYQ5X5lnL5cL',
        },
      ],
    },
    {
      title: 'Ikea',
      logo: Ikea,
      description: '<strong>Ikea</strong> 在私有雲中透過 Cilium 使用 eBPF 進行網路實現和負載平衡',
      links: [
        {
          text: '影片',
          to: 'https://www.youtube.com/watch?v=sg-F_R-ZVNc',
        },
      ],
    },
    {
      title: 'Apple',
      logo: Apple,
      description: '<strong>Apple</strong> 透過 Falco 使用 eBPF 進行核心安全監控',
      links: [
        {
          text: '影片',
          to: 'https://www.youtube.com/watch?v=ZBlJSr6XkN8',
        },
      ],
    },
    {
      title: 'Meta',
      logo: Meta,
      description: '<strong>Meta</strong> 在資料中心中使用 eBPF 對每一個資料封包進行傳輸和負載平衡',
      links: [
        {
          text: '影片',
          to: 'https://www.youtube.com/watch?v=ZYBXZFKPS28',
        },
        {
          text: '部落格',
          to: 'https://engineering.fb.com/2018/05/22/open-source/open-sourcing-katran-a-scalable-network-load-balancer/',
        },
        {
          text: '演講',
          to: 'https://lpc.events/event/16/contributions/1363/',
        },
      ],
    },
    {
      title: 'DoorDash',
      logo: DoorDash,
      description: '<strong>DoorDash</strong> 透過 BPFAgent 使用 eBPF 進行核心級監控',
      links: [
        {
          text: '部落格',
          to: 'https://doordash.engineering/2023/08/15/bpfagent-ebpf-for-monitoring-at-doordash/',
        },
      ],
    },
    {
      title: 'Datadog',
      logo: Datadog,
      description: '<strong>Datadog</strong> 在其 SaaS 產品中使用 eBPF 實現網路和安全',
      links: [
        {
          text: '影片',
          to: 'https://datadogon.datadoghq.com/episodes/datadog-on-ebpf/',
        },
        {
          text: '部落格',
          to: 'https://www.datadoghq.com/blog/network-performance-monitoring/',
        },
        {
          text: '演講',
          to: ' https://www.youtube.com/watch?v=6nlv_VCsjpQ',
        },
      ],
    },
    {
      title: 'Alibaba',
      logo: Alibaba,
      description: '<strong>Alibaba</strong> 透過 Cilium 使用 eBPF 在雲端提供網路',
      links: [
        {
          text: '部落格',
          to: 'https://www.alibabacloud.com/blog/how-does-alibaba-cloud-build-high-performance-cloud-native-pod-networks-in-production-environments_596590',
        },
        {
          text: '演講',
          to: 'https://www.youtube.com/watch?v=Z4qxd5yYoP4',
        },
      ],
    },
    {
      title: 'Red Hat',
      logo: Redhat,
      description: '<strong>Red Hat</strong> 在他們的私有雲中大規模使用 eBPF 進行負載平衡和追蹤',
      links: [
        {
          text: '演講',
          to: 'https://youtu.be/xxRAppnmirY?si=OSxhLJ8S1B2-Z-9T',
        },
      ],
    },
    {
      title: 'Seznam',
      logo: Seznam,
      description: '<strong>Seznam</strong> 使用 eBPF 進行負載平衡',
      links: [
        {
          text: '部落格',
          to: 'https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/',
        },
        {
          text: '演講',
          to: 'https://www.youtube.com/watch?v=xwjZF3alO7g',
        },
      ],
    },
    {
      title: 'Trip.com',
      logo: Trip,
      description: '<strong>Trip.com</strong> 使用 eBPF 進行負載平衡',
      links: [
        {
          text: '部落格',
          to: 'https://cilium.io/blog/2020/02/05/how-trip-com-uses-cilium/',
        },
        {
          text: '演講',
          to: 'https://www.youtube.com/watch?v=NIsU4I950l4',
        },
      ],
    },
    {
      title: 'Bell',
      logo: Bell,
      description: '<strong>Bell</strong> Canada uses eBPF to moderize telco networking with SRv6',
      links: [
        {
          text: '演讲',
          to: 'https://www.youtube.com/watch?v=fNtG0iHYne4',
        },
      ],
    },
    {
      title: 'Wildlife Studios',
      logo: Wildlife,
      description:
        '<strong>Wildlife Studios</strong> uses eBPF through Cilium for high performance game networking',
      links: [
        {
          text: 'Blog',
          to: 'https://cilium.io/blog/2020/09/03/wildlife-studios-multi-cluster-gaming-platform',
        },
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=_1t3bXzptP0',
        },
      ],
    },
    {
      title: 'Capital One',
      logo: CapitalOne,
      description: '<strong>Capital One</strong> uses eBPF to secure their cloud infrastructure',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w&ab_channel=eBPFSummit',
        },
      ],
    },
    {
      title: 'Sky',
      logo: Sky,
      description: '<strong>Sky</strong> uses eBPF through Cilium for cloud networking',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=u-4naOMfs_w',
        },
      ],
    },
    {
      title: 'Walmart',
      logo: Walmart,
      description: '<strong>Walmart</strong> uses eBPF for edge cloud load balancing',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/thmAcyix8FM',
        },
        {
          text: 'Blog',
          to: 'https://medium.com/walmartglobaltech/introducing-walmarts-l3af-project-how-do-we-use-ebpf-to-provide-network-visibility-in-a-8b9ae4d26200',
        },
      ],
    },
    {
      title: 'Palantir',
      logo: Palantir,
      description: '<strong>Palantir</strong> uses eBPF to debug networking problems',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/0RDp1IPxbg0',
        },
      ],
    },
    {
      title: 'Cruise',
      logo: Cruise,
      description: '<strong>Cruise</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/7bdy2AkRjqE',
        },
      ],
    },
    {
      title: 'Digital Ocean',
      logo: DigitalOcean,
      description: '<strong>Digital Ocean</strong> uses eBPF to monitor GPU performance',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/gcHxfhDT-I4',
        },
      ],
    },
    {
      title: 'Yahoo',
      logo: Yahoo,
      description: '<strong>Yahoo</strong> uses eBPF for load balancing and performance analysis',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/-C86fBMcp5Q',
        },
        {
          text: 'Talk',
          to: 'https://www.usenix.org/conference/lisa21/presentation/jones-zachary',
        },
      ],
    },
    {
      title: 'Bytedance',
      logo: Bytedance,
      description: '<strong>Bytedance</strong> uses eBPF for system tracing',
      links: [
        {
          text: 'Blog',
          to: 'https://inf.news/en/tech/3313635d67f796ae38e7ef64061bc7c4.html',
        },
      ],
    },
    {
      title: 'F5',
      logo: F5,
      description: '<strong>F5</strong> BIG-IP integration with Cilium VTEP feature',
      links: [
        {
          text: 'Video',
          to: 'https://youtu.be/EfmdjrQLFFg',
        },
        {
          text: 'Guide',
          to: 'https://github.com/f5devcentral/f5-ci-docs/blob/master/docs/cilium/cilium-bigip-info.rst',
        },
      ],
    },
    {
      title: 'LinkedIn',
      logo: LinkedIn,
      description: '<strong>LinkedIn</strong> uses eBPF for Infrastructure Observability',
      links: [
        {
          text: 'Blog',
          to: 'https://engineering.linkedin.com/blog/2022/skyfall--ebpf-agent-for-infrastructure-observability',
        },
      ],
    },
    {
      title: 'The New York Times',
      logo: NYT,
      description: '<strong>The New York Times</strong> uses eBPF for networking',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=qmrHONqsV2M&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D',
        },
      ],
    },
    {
      title: 'SentinelOne',
      logo: SentinelOne,
      description:
        '<strong>SentinelOne</strong> uses eBPF to detect and to respond to runtime threats like ransomware and zero-day exploits in real time.',
      links: [
        {
          text: 'Blog',
          to: 'https://www.sentinelone.com/blog/the-advantages-of-ebpf-for-cwpp-applications/',
        },
      ],
    },
    {
      title: 'Aqua Security',
      logo: Aqua,
      description:
        '<strong>Aqua Security</strong> uses eBPF to handle runtime detection and forensics',
      links: [
        {
          text: 'Blog',
          to: 'https://blog.aquasec.com/linux-vulnerabilitie-tracee',
        },
      ],
    },
    {
      title: 'Akita',
      logo: Akita,
      description: '<strong>Akita</strong> uses eBPF at scale for API observability',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.akita.software/docs/how-akita-works#what-makes-akita-different',
        },
      ],
    },
    {
      title: 'Line Coporation',
      logo: LineCoporation,
      description:
        '<strong>Line Corporation</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=cxfVpBYlol4',
        },
      ],
    },
    {
      title: 'Exein',
      logo: Exein,
      description:
        '<strong>Exein</strong> uses eBPF in their open source runtime security framework for IoT',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=vmRQXRit-sY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=16',
        },
      ],
    },
    {
      title: 'Ant Group',
      logo: AntGroup,
      description:
        '<strong>Ant Group</strong> uses eBPF in their cloud native security platform for vulnerability live-patching, and system anomaly detection',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/TXlxgDvxcoY?si=lvC1HqNl4jXNyfD0',
        },
      ],
    },
    {
      title: 'Sysdig',
      logo: Sysdig,
      description:
        '<strong>Sysdig</strong> uses eBPF to enable high-performance system call tracing, facilitate container-aware troubleshooting, conduct security auditing, and provide rich insights and data from the kernel',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=BxoKztfHnYY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=28',
        },
        {
          text: 'Blog',
          to: 'https://sysdig.com/blog/sysdig-and-falco-now-powered-by-ebpf/',
        },
      ],
    },
    {
      title: 'Kodem',
      logo: Kodem,
      description:
        '<strong>Kodem</strong> uses eBPF for application visibilty and runtime intelligence',
      links: [
        {
          text: 'Blog',
          to: 'https://kodemsec.webflow.io/resources/deep-visibility-with-ebpf',
        },
      ],
    },
    {
      title: 'Cycode',
      logo: Cycode,
      description: '<strong>Cycode</strong> uses eBPF for CI/CD security',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=pcBGRFvSrvY',
        },
        {
          text: 'Blog',
          to: 'https://cycode.com/blog/introducing-cimon-build-hardening/',
        },
      ],
    },
    {
      title: 'Wiz',
      logo: Wiz,
      description:
        '<strong>Wiz</strong> uses eBPF to provide real-time threat detection and monitoring within cloud workloads',
      links: [
        {
          text: 'Blog',
          to: 'https://www.wiz.io/blog/wiz-expands-platform-with-the-runtime-sensor-to-provide-unified-cloud-security',
        },
      ],
    },
    {
      title: 'Core Tech',
      logo: CoreTech,
      description: '<strong>Core Tech</strong> 使用 eBPF 過濾掉不需要的流量並緩解 DDoS 攻擊',
      links: [
        {
          text: '部落格',
          to: 'https://www.linkedin.com/pulse/coretechnologys-how-drop-1-tbps-ddos-traffic-coretechnolgys-rayif/',
        },
      ],
    },
    {
      title: 'FlowSecurity',
      logo: FlowSecurity,
      description:
        '<strong>Flow Security</strong> 使用 eBPF 技術分析動態數據，以進行數據發現、分類、風險管理以及數據違規檢測和回應',
      links: [
        {
          text: '部落格',
          to: 'https://www.flowsecurity.com/ebpf-data-security-hype/',
        },
      ],
    },
    {
      title: 'Helios',
      logo: Helios,
      description:
        '<strong>Helios</strong> 在他們的運行時分析工具中使用 eBPF 以實現可觀測性和安全性',
      links: [
        {
          text: 'Blog',
          to: 'https://gethelios.dev/blog/introducing-helios-runtime-for-appsec/',
        },
      ],
    },
    {
      title: 'Accuknox',
      logo: Accuknox,
      description: '<strong>Accuknox</strong> uses eBPF through KubeArmor for runtime security observability, container forensics and policy enforcement',
      links: [
        {
          text: 'Blog',
          to: 'https://www.accuknox.com/blog/runtime-security-and-the-role-of-ebpf-bpf-lsm',
        },
      ],
    },
  ],
};

export default caseStudiesData;
