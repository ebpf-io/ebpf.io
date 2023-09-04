/* eslint-disable react/prop-types */
import React from 'react';

import EventList from 'components/pages/events/event-list';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const title = {
  en: 'eBPF Conferences and Meetups',
  'fr-fr': 'Conférences et Meetups eBPF',
};

const EventsPage = ({ pageContext: { postEvents, totalCount, language } }) => (
  <Layout lang={language}>
    <div className="container flex flex-col pt-20 lg:pt-16">
      <h1 className="heading-9xl mx-auto max-w-[890px] text-center font-semibold leading-tight">
        {title[language]}
      </h1>
    </div>
    <EventList allEvents={postEvents} totalCount={totalCount} />
  </Layout>
);

export default EventsPage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
