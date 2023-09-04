import clsx from 'clsx';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useCallback, useRef, useState } from 'react';

import Link from 'components/shared/link';
import useClickOutside from 'hooks/use-click-outside';

import { languages } from '../../../../config/languages';

const ANIMATION_DURATION = 0.2;

const dropdownVariants = {
  hidden: { opacity: 0, y: '0', height: 0, pointerEvents: 'none', visibility: 'hidden' },
  visible: {
    opacity: 1,
    y: '0',
    height: 'auto',
    pointerEvents: 'auto',
    visibility: 'visible',
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const LanguageSelect = ({ lang }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };
  const handleClickOutside = useCallback(() => {
    setShowDropdown(false);
  }, [setShowDropdown]);

  useClickOutside([dropdownRef], handleClickOutside);
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative h-10 w-[136px]">
        <div
          className={clsx(
            'absolute bottom-0 right-0 w-[136px] items-center rounded border border-gray-40 bg-black text-sm leading-none transition-[shadow,border-color] duration-200 hover:border-gray-70'
          )}
          ref={dropdownRef}
        >
          <m.ul
            className="flex flex-col"
            initial="hidden"
            animate={showDropdown ? 'visible' : 'hidden'}
            variants={dropdownVariants}
          >
            {Object.values(languages)
              .filter(({ code }) => code !== lang)
              .map(({ name, code }) => (
                <m.li className="flex" key={name}>
                  <Link
                    className="px-[13px] py-3"
                    theme="white"
                    to={code === 'en' ? '/' : `/${code}/`}
                  >
                    {name}
                  </Link>
                </m.li>
              ))}
          </m.ul>
          <button
            className="flex h-10 w-full items-center justify-between px-[13px] py-3 text-sm font-medium leading-none"
            type="button"
            aria-label="Select language"
            onClick={handleDropdown}
          >
            <span>{languages[lang].name}</span>
            <span className="relative">
              <span
                className={clsx(
                  'absolute -left-1 top-1/2 h-[7px] w-[1.5px] -translate-y-1/2 bg-white transition-transform duration-200',
                  showDropdown ? 'rotate-45' : 'rotate-[135deg]'
                )}
              />
              <span
                className={clsx(
                  'absolute top-1/2 h-[7px] w-[1.5px] -translate-y-1/2  bg-white transition-transform duration-200',
                  showDropdown ? '-rotate-45' : '-rotate-[135deg]'
                )}
              />
            </span>
          </button>
        </div>
      </div>
    </LazyMotion>
  );
};

LanguageSelect.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default LanguageSelect;
