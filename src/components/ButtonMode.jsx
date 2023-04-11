import React from 'react';
import classNames from 'classnames';

const ButtonMode = ({ isDarkMode, onClick, children }) => {
  const buttonClass = classNames(
    'rounded-full',
    // 'py-[2px]',
    // 'px-[2px]',
    'w-[30px]',
    'h-[30px]',
    // 'border',
    'transition-all',
    'duration-200',
    'flex',
    'justify-center',
    // {
    //   'bg-white text-tertiary hover:bg-secondary border-secondary': !isDarkMode,
    //   'bg-white text-tertiary hover:bg-yellow-50 border-secondary': isDarkMode,
    // }
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonMode;
