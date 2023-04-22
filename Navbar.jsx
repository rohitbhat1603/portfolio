import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
          }}
        >
          <img src={logo} alt="logo" className='w-15 h-9 object-contain' />
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white" /* If link is active,  then text-white, else text-secondary */
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`} /* When we hover, the text becomes white */
              onClick={() => setActive(link.title)} /* When we click on {About, Work, Contact}, it is navigated to that particular page */
            >
              <a href={`#${link.id}`}>{link.title}</a> {/* This is a loop for displaying About, Work and Contact */}
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] 
            object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute 
          top-20 right-0 mx-4 my-2 min-w-[140px] 
          z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'> 
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white" /* If link is active,  then text-white, else text-secondary */
                      : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`} /* When we hover, the text becomes white */
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                  /* When we click on {About, Work, Contact}, it is navigated to that particular page */
                >
                  <a href={`#${link.id}`}>{link.title}</a> {/* This is a loop for displaying About, Work and Contact */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar