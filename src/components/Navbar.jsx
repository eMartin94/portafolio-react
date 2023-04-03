import React, { useState } from 'react'
import { AiFillCode } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { navLink } from '../constants'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  const handleMenu = () => {
    setToggle(!toggle)
  }
  return (
    <nav className='w-full bg-tertiary flex py-5 justify-center'>
      <div className='w-full flex justify-between items-center max-w-7xl px-5'>
        <Link 
          to='/'
          className='flex text-primary items-center'
          onClick={() => {
            setActive('')
            setToggle(!toggle)
          }}
        >
          <AiFillCode />
          <p>e<span>Martin</span></p>
        </Link>
        <ul className='sm:flex hidden gap-5'>
          {
            navLink.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? 'text-primary' : 'text-white'}  hover:text-primary cursor-pointer transition-all duration-500 ease-in-out`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))
          }
        </ul>

        <div className='sm:hidden'>
          <div 
            className={`menu ${toggle ? 'active' : ''}`}
            onClick={handleMenu}
          >
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          <ul className={`${toggle ? 'flex' : 'hidden'} flex-col mt-7 gap-5 absolute w-full left-0 bg-tertiary p-5 justify-center items-center`}>
          {
            navLink.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? 'text-primary' : 'text-white'}  hover:text-primary cursor-pointer transition-all duration-500 ease-in-out`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(!toggle)
                }}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))
          }
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar