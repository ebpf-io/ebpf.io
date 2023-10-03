const headerMenu = [
  {
    title: {
      en: 'Learn',
      'fr-fr': 'Apprendre',
      pt: 'Learn',
    },
    items: [
      {
        title: {
          en: 'What is eBPF?',
          'fr-fr': 'Qu’est-ce qu’eBPF',
          pt: 'What is eBPF?',
        },
        to: {
          en: '/what-is-ebpf',
          'fr-fr': '/fr-fr/what-is-ebpf',
          pt: '/pt/what-is-ebpf',
        },
      },
      {
        title: {
          en: 'Get Started',
          'fr-fr': 'Commencer',
          pt: 'Get Started',
        },
        to: {
          en: '/get-started',
          'fr-fr': '/fr-fr/get-started',
          pt: '/pt/get-started',
        },
      },
      {
        title: {
          en: 'Case Studies',
          'fr-fr': 'Études de cas',
          pt: 'Case Studies',
        },
        to: {
          en: '/case-studies',
          'fr-fr': '/fr-fr/case-studies',
          pt: '/pt/case-studies',
        },
      },
      {
        title: {
          en: 'Labs',
          'fr-fr': 'Labs',
          pt: 'Labs',
        },
        to: {
          en: '/labs',
          'fr-fr': '/fr-fr/labs',
          pt: '/pt/labs',
        },
      },
    ],
  },
  {
    title: {
      en: 'Project Landscape',
      'fr-fr': 'Paysage du projet',
      pt: 'Project Landscape',
    },
    items: [
      {
        title: {
          en: 'Applications',
          'fr-fr': 'Applications',
          pt: 'Applications',
        },
        to: {
          en: '/applications',
          'fr-fr': '/fr-fr/applications',
          pt: '/pt/applications',
        },
      },
      {
        title: {
          en: 'Infrastructure',
          'fr-fr': 'Infrastructure',
          pt: 'Infrastructure',
        },
        to: {
          en: '/infrastructure',
          'fr-fr': '/fr-fr/infrastructure',
          pt: '/pt/infrastructure',
        },
      },
    ],
  },

  {
    title: {
      en: 'Events',
      'fr-fr': 'Événements',
      pt: 'Events',
    },
    items: [
      {
        title: {
          en: 'All Events',
          'fr-fr': 'Tous les évènements',
          pt: 'All Events',
        },
        to: {
          en: '/events?overview',
          'fr-fr': '/fr-fr/events?overview',
          pt: '/pt/events?overview',
        },
      },
      {
        title: {
          en: 'eBPF Summit',
          'fr-fr': 'eBPF Summit',
          pt: 'eBPF Summit',
        },
        to: {
          en: '/events?conference=eBPF%20Summit',
          'fr-fr': '/fr-fr/events?conference=eBPF%20Summit',
          pt: '/pt/events?conference=eBPF%20Summit',
        },
      },
      {
        title: {
          en: 'eBPF Track (LPC)',
          'fr-fr': 'eBPF Track (LPC)',
          pt: 'eBPF Track (LPC)',
        },
        to: {
          en: '/events?conference=eBPF%20Track%20%28LPC%29',
          'fr-fr': '/fr-fr/events?conference=eBPF%20Track%20%28LPC%29',
          pt: '/pt/events?conference=eBPF%20Track%20%28LPC%29',
        },
      },
      {
        title: {
          en: 'bpfconf (LSF/MM/BPF)',
          'fr-fr': 'bpfconf (LSF/MM/BPF)',
          pt: 'bpfconf (LSF/MM/BPF)',
        },
        to: {
          en: '/events?conference=bpfconf%20%28LSF%2FMM%2FBPF%29',
          'fr-fr': '/fr-fr/events?conference=bpfconf%20%28LSF%2FMM%2FBPF%29',
          pt: '/pt/events?conference=bpfconf%20%28LSF%2FMM%2FBPF%29',
        },
      },
    ],
  },
  {
    title: {
      en: 'Community',
      'fr-fr': 'Communauté',
      pt: 'Community',
    },
    items: [
      {
        title: {
          en: 'Get Started',
          'fr-fr': 'Commencer',
          pt: 'Get Started',
        },
        to: {
          en: '/get-started/#docs',
          'fr-fr': '/fr-fr/get-started/#docs',
          pt: '/pt/get-started/#docs',
        },
      },
      {
        title: {
          en: 'Slack',
          'fr-fr': 'Slack',
          pt: 'Slack',
        },
        to: 'https://ebpf.io/slack',
      },
      {
        title: {
          en: 'Stack Overflow',
          'fr-fr': 'Stack Overflow',
          pt: 'Stack Overflow',
        },
        to: 'https://stackoverflow.com/questions/tagged/ebpf+or+bpf+or+xdp-bpf+or+xdp-ebpf+or+bcc-bpf+or+libbpf+or+bpftrace',
        target: '_blank',
      },
      {
        title: {
          en: 'r/eBPF',
          'fr-fr': 'r/eBPF',
          pt: 'r/eBPF',
        },
        to: 'https://www.reddit.com/r/eBPF/',
        target: '_blank',
      },
      {
        title: {
          en: 'Wikipedia',
          'fr-fr': 'Wikipedia',
          pt: 'Wikipedia',
        },
        to: 'https://en.wikipedia.org/wiki/EBPF',
        target: '_blank',
      },
      {
        title: {
          en: 'eCHO',
          'fr-fr': 'eCHO',
          pt: 'eCHO',
        },
        to: 'https://github.com/isovalent/eCHO',
        target: '_blank',
      },
      {
        title: {
          en: 'Newsletter',
          'fr-fr': 'Newsletter',
          pt: 'Newsletter',
        },
        to: '/newsletter',
      },
      {
        title: {
          en: 'Contribute',
          'fr-fr': 'Contribuer',
          pt: 'Contribute',
        },
        to: {
          en: '/contribute',
          'fr-fr': '/fr-fr/contribute',
          pt: '/pt/contribute',
        },
      },
    ],
  },
  {
    title: {
      en: 'Blog',
      'fr-fr': 'Blog',
      pt: 'Blog',
    },
    to: '/blog',
  },
  {
    title: {
      en: 'Foundation',
      'fr-fr': 'Fondation',
      pt: 'Foundation',
    },
    to: 'https://ebpf.foundation/',
  },
];

export default headerMenu;
