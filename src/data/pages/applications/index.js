import emergingApplications from 'data/pages/applications/emerging';
import majorApplications from 'data/pages/applications/major';

const data = {
  pageUrls: {
    en: '/applications/',
    'fr-fr': '/fr-fr/applications/',
    pt: '/pt/applications/',
    'pt-br': '/pt-br/applications/',
    'it-it': '/it-it/applications/',
    es: '/es/applications/',
    'zh-hans': '/zh-hans/applications/',
    sw: '/sw/applications/',
    'zh-hant': '/zh-hant/applications/',
  },
  en: {
    title: 'Applications',
    hero: {
      items: [
        {
          text: 'Applications',
          to: '/applications/',
        },
        {
          text: 'Infrastructure',
          to: '/infrastructure/',
        },
      ],
    },
    majorApplicationsProps: {
      titleTag: 'h2',
      title: 'Major Applications',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: 'Emerging',
      items: emergingApplications,
    },
  },
  'fr-fr': {
    title: 'Applications',
    hero: {
      items: [
        {
          text: 'Applications',
          to: '/fr-fr/applications/',
        },
        {
          text: 'Infrastructure',
          to: '/fr-fr/infrastructure/',
        },
      ],
    },
    majorApplicationsProps: {
      titleTag: 'h2',
      title: 'Applications majeures',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: 'Émergentes',
      items: emergingApplications,
    },
  },
  pt: {
    title: 'Aplicação',
    hero: {
      items: [
        {
          text: 'Aplicação',
          to: '/pt/applications/',
        },
        {
          text: 'A infraestrutura',
          to: '/pt/infrastructure/',
        },
      ],
    },
    majorApplicationsProps: {
      titleTag: 'h2',
      title: 'Principais aplicações',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: 'Emergindo',
      items: emergingApplications,
    },
  },
  'pt-br': {
    title: 'Aplicações',
    hero: {
      items: [
        {
          text: 'Aplicações',
          to: '/pt-br/applications/',
        },
        {
          text: 'Infraestrutura',
          to: '/pt-br/infrastructure/',
        },
      ],
    },
    majorApplicationsProps: {
      titleTag: 'h2',
      title: 'Aplicações Principais',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: 'Emergentes',
      items: emergingApplications,
    },
  },
  'it-it': {
    title: 'Applicazioni',
    hero: {
      items: [
        {
          text: 'Applicazioni',
          to: '/it-it/applications/',
        },
        {
          text: 'Infrastruttura',
          to: '/it-it/infrastructure/',
        },
      ],
    },
    majorApplicationsProps: {
      titleTag: 'h2',
      title: 'Applicazioni Principali',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: 'Emergenti',
      items: emergingApplications,
    },
  },
  es: {
    title: 'Aplicaciones',
    hero: {
      items: [
        {
          text: 'Aplicaciones',
          to: '/es/applications/',
        },
        {
          text: 'Infraestructura',
          to: '/es/infrastructure/',
        },
      ],
    },
    majorApplicationsProps: {
      titleTag: 'h2',
      title: 'Aplicaciones principales',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: 'Emergente',
      items: emergingApplications,
    },
  },
  'zh-hans': {
    title: '应用项目',
    hero: {
      items: [
        {
          text: '应用项目',
          to: '/zh-hans/applications/',
        },
        {
          text: '基础设施',
          to: '/zh-hans/infrastructure/',
        },
      ],
    },
    majorApplicationsProps: {
      titleTag: 'h2',
      title: '主要项目',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: '新兴项目',
      items: emergingApplications,
    },
  },
  sw: {
    title: 'Programu',
    hero: {
      items: [
        {
          text: 'Programu',
          to: '/sw/applications/',
        },
        {
          text: 'Miundombinu',
          to: '/sw/infrastructure/',
        },
      ],
    },
    majorApplicationsProps: {
      titleTag: 'h2',
      title: 'Matumizi Makubwa',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: 'Inayojitokeza',
      items: emergingApplications,
    },
  },
  'zh-hant': {
    title: '應用專案',
    hero: {
      items: [
        {
          text: '應用專案',
          to: '/zh-hant/applications/',
        },
        {
          text: '基礎設施',
          to: '/zh-hant/infrastructure/',
        },
      ],
    },
    majorApplicationsProps: {
      titleTag: 'h2',
      title: '主要專案',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: '新興專案',
      items: emergingApplications,
    },
  },
};

export default data;
