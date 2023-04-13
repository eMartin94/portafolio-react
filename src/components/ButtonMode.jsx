import React from 'react';
import classNames from 'classnames';

const ButtonMode = ({ onClick, children }) => {
  const buttonClass = classNames(
    'rounded-full',
    'w-[30px]',
    'h-[30px]',
    'transition-all',
    'duration-200',
    'flex',
    'justify-center'
    // {
    //   'bg-white text-tertiary hover:bg-secondary border-secondary': !isDarkMode,
    //   'bg-white text-tertiary hover:bg-yellow-50 border-secondary': isDarkMode,
    // }
  );

  return (
    <div className={buttonClass} onClick={onClick}>
      {children}
    </div>
  );
};

export default ButtonMode;
