import React from 'react';
import classNames from 'classnames';

const ButtonMode = ({ isDarkMode, onClick, children }) => {
  const buttonClass = classNames(
    'rounded-full',
    'py-1',
    'px-1',
    'w-[60px]',
    // 'h-[25px]',
    'border',
    'transition-all',
    'duration-200',
    {
      'bg-white text-tertiary hover:bg-secondary border-secondary': !isDarkMode,
      'bg-white text-tertiary hover:bg-yellow-50 border-secondary ': isDarkMode,
    }
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonMode;
