import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useRef } from 'react';

const Navbar = () => {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='navMobopen' />
      <ul ref={menuRef} className="navMenu">
        <img src={menu_close} onClick={closeMenu} alt="" className="navMobclose" />
        <li><AnchorLink className='anchorLink' href='#home'><p>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchorLink' offset={50} href='#about'><p>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchorLink' offset={50} href='#projects'><p>Projects</p></AnchorLink></li>
        <li className="mobOnly">
          <AnchorLink className="anchorLink" offset={50} href="#contact">
            <p>Contact Me</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="navContact">
        <AnchorLink className='anchorLink' offset={50} href='#contact'>
          Contact Me
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar

