import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import FormModal from 'components/shared/form-modal';
import { hubspotFormId } from 'data/summit-2023/summit-2023-navigation';
import SlackIcon from 'icons/slack.inline.svg';

import illustration from './images/illustration.svg';

const icons = {
  slack: SlackIcon,
};

const Hero = ({ date, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const ctaButtons = [
    {
      onClick: openModal,
      url: '',
      title: 'Register here',
      theme: 'orange',
    },
    {
      onClick: null,
      url: 'https://ebpf.io/slack',
      title: 'Join Summit Slack',
      theme: 'gray',
      iconName: 'slack',
    },
  ];

  return (
    <section className="relative lg:overflow-hidden">
      <div className="absolute right-0 -top-20 w-[200px] lg:block md:-right-4 sm:-top-[120px] sm:hidden">
        <StaticImage src="./images/drop-1.jpg" alt="" loading="eager" aria-hidden />
      </div>
      <div className="absolute -top-3 left-0 w-[128px] 2xl:-left-4 2xl:top-12 xl:-left-8 lg:-top-3 md:-left-4 sm:-left-14 sm:-top-[28px] sm:hidden">
        <StaticImage src="./images/drop-2.jpg" alt="" loading="eager" aria-hidden />
      </div>
      <div className="absolute top-96 -left-10 w-[330px] 2xl:top-[450px] 2xl:-left-20 2xl:w-[280px] lg:top-80 lg:left-0 lg:block md:top-64 md:-left-20 sm:hidden">
        <StaticImage src="./images/honey.jpg" alt="" loading="eager" aria-hidden />
      </div>
      <div className="container relative pt-28 pb-6 lg:w-[95%] lg:pt-16 lg:pb-0 md:pt-8 ">
        <div className="max-w-[644px] lg:max-w-full lg:text-center">
          <time
            className="with-orange-highlight inline-block rounded-md border-2 border-primary-orange border-opacity-30 bg-white p-2 text-center font-bold uppercase leading-none text-black"
            dangerouslySetInnerHTML={{ __html: date }}
          />

          <h1 className="mt-7 text-11xl font-bold leading-tight sm:text-7xl">{title}</h1>
          <div
            className="with-link-primary mt-4 max-w-lg space-y-4 font-sans text-xl font-normal lg:mx-auto lg:max-w-xl md:max-w-lg md:space-y-4 md:text-lg sm:max-w-sm"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="mt-9 flex space-x-5 lg:justify-center sm:flex-col sm:space-x-0 sm:space-y-3 xs:w-full">
            {ctaButtons.map(({ title, url, theme, iconName, onClick }, index) => {
              const Icon = icons[iconName];
              return (
                <Button
                  className="flex items-center space-x-3 rounded-lg px-6 leading-none sm:flex-1 xs:px-3.5"
                  size="sm"
                  to={url}
                  theme={theme}
                  key={index}
                  onClick={onClick}
                >
                  {Icon && <Icon className="mr-2.5 h-5 w-auto" />}
                  {title}
                </Button>
              );
            })}
          </div>
        </div>
        <img
          src={illustration}
          className="absolute right-8 top-24 h-auto w-[648px] lg:static lg:mt-12 lg:w-full"
          alt="Illustration"
          width={648}
          height={431}
          loading="eager"
          aria-hidden
        />
      </div>
      <FormModal
        title="Register for eBPF Summit"
        isOpen={isOpen}
        closeModal={closeModal}
        hubspotFormId={hubspotFormId}
      />
    </section>
  );
};

Hero.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;
