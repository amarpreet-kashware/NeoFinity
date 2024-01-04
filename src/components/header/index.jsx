import React from 'react'
import { useState } from 'react';
import logo from '../../assets/images/svgs/neoFinityLogo.svg'
import { navLinks } from '../../constants';
import styles from '../../styles';

const Header = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full h-24 flex py-6 justify-between items-center navbar">
      <img src={logo} alt="neoFinity" className="w-[148px] h-[64px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`${styles.normalText} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} cursor-pointer`}
            onClick={() => setActive(nav.title)}
          >
            {nav.title}
          </li>
        ))}
      </ul>
    </nav>
  );
} 

export default Header
