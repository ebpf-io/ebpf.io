import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const Label = ({ theme, children, className }) => (
  <mark
    className={clsx(
      'inline-block w-fit rounded px-1.5 pb-[4.5px] pt-[3.5px] text-xs font-semibold uppercase leading-none tracking-wide',
      { 'bg-secondary-green-light text-[#008015]': theme === 'green' },
      { 'bg-secondary-red-light text-[#CC3333]': theme === 'red' },
      { 'bg-secondary-blue-light text-[#00779E]': theme === 'blue' },
      className
    )}
  >
    {children}
  </mark>
);

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['green', 'red', 'blue']),
};

Label.defaultProps = {
  className: null,
  theme: 'blue',
};

export default Label;
