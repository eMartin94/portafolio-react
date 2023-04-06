import React from 'react';
import classNames from 'classnames';

const ButtonMode = ({ mode, onClick, children }) => {
  const buttonClass = classNames(
    'rounded-full',
    'py-2',
    'px-2',
    'border',
    'transition-all',
    'duration-200',
    'active:animation-spin',
    'active:rotate-180',
    {
      'bg-yellow-100 text-tertiary border-secondary': mode === 'dark',
      'bg-secondary text-secondary border-secondary ': mode === 'light',
    }
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonMode;
