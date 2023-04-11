import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLink } from '../constants';
import { styles } from '../styles';
import { logo, moon, sun } from '../assets';
import ButtonMode from './ButtonMode';
import "@theme-toggles/react/css/Within.css"
import { Within } from "@theme-toggles/react"

const Navbar = ({ isDarkMode, onToggleMode }) => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenu = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full  flex py-5 justify-center fixed top-0 z-20 transition-all duration-500 ${
        scrolled
          ? `${isDarkMode ? 'bg-tertiary' : 'bg-white'} shadow-md`
          : `${isDarkMode ? 'bg-transparent' : 'bg-transparent'} `
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl px-0 md:px-5'>
        <Link
          to='/'
          className='flex text-primary items-center gap-1'
          onClick={() => {
            setActive('');
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} width={20} height={20} /> */}
          <p className='text-[20px] tracking-wider drop-shadow-md'>
            e<span className='font-bold'>Martin</span>
          </p>
        </Link>
        <div className='flex flex-row items-center gap-5'>
          <div className='flex flex-row items-center justify-center gap-5'>
            <ul className='sm:flex hidden gap-4 md:gap-8'>
              {navLink.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title
                      ? `${isDarkMode ? 'text-primary' : 'text-primary'}`
                      : `${
                          isDarkMode
                            ? `${scrolled ? 'text-white' : 'text-white'}`
                            : `${!scrolled ? 'text-white' : 'text-tertiary'}`
                        }`
                  }  hover:text-primary cursor-pointer transition-all duration-500 ease-in-out`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            <ButtonMode isDarkMode={isDarkMode} onClick={onToggleMode}>
              {/* {isDarkMode ? (
                <div
                  className='flex flex-row w-full items-center justify-evenly'
                  id='dark-span'
                >
                  <img src={sun} alt='light' width={15} height={15} />
                  <span className='text-tertiary text-[10px] transition-all duration-300'>
                    Light
                  </span>
                </div>
              ) : (
                <div
                  className='flex flex-row w-full items-center justify-evenly'
                  id='light-span'
                >
                  <img src={moon} alt='dark' width={15} height={15} />
                  <span className='text-tertiary text-[10px] transition-all duration-300'>
                    Dark
                  </span>
                </div>
              )} */}
              <Within 
                duration={750} 
                className={`w-full h-full flex justify-center items-center ${
                  isDarkMode ? `${scrolled ? 'text-white' : 'text-white'}`
                  : `${!scrolled ? 'text-white' : 'text-tertiary'}`
                }`} 
              />
            </ButtonMode>
          </div>

          <div className='sm:hidden'>
            <div
              className={`menu ${toggle ? 'active' : ''} ${
                isDarkMode ? 'dark' : scrolled ? 'light' : ''
              }`}
              onClick={handleMenu}
            >
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
            </div>
            <ul
              className={`${
                toggle ? 'flex' : 'hidden'
              } bg-tertiary bg-opacity-90 backdrop-blur-sm flex-col mt-7 gap-5 absolute w-full left-0 p-5 justify-center items-center h-screen`}
            >
              {navLink.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? 'text-primary' : 'text-white'
                  }  hover:text-primary text-[20px] cursor-pointer transition-all duration-500 ease-in-out`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
