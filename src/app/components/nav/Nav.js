"use client"
import React, { useState } from 'react'
import Link from "next/link";
import { ImCross } from 'react-icons/im'
import { CgMenuRightAlt } from 'react-icons/cg'
import './nav.css'
const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    setNavbar(!navbar);
  }
  return (
    <>
      <div className='header'>
        <div className='logo'><span className='logofirst-letter'>M</span>oin.</div>
        <nav className='nav'>
          <ul className={navbar ? "navbar mobile-menu" : "navbar"}>
            <li><Link className="a" href={"/"} onClick={handleClick}>Home</Link></li>
            <li><Link className="a" href={"about"} onClick={handleClick}>About</Link></li>
            <li><Link className="a" href={"services"} onClick={handleClick}>Services</Link></li>
            <li><Link className="a" href={"skills"} onClick={handleClick}>Skills</Link></li>
            <li><Link className="a" href={"portfolio"} onClick={handleClick}>Portfolio</Link></li>
            <Link className="a" href={"contact"} onClick={handleClick}><button className='btn-contact' id='mobile-btn'>Contact</button></Link>
          </ul>
        </nav>
        <Link href={"contact"} id='navBtn' onClick={handleClick}><button className='btn-contact' id='nav-btn'>Contact</button></Link>
        {!clicked ? <CgMenuRightAlt className='toggle' onClick={handleClick} /> : <ImCross className='toggle' id='cross' onClick={handleClick} />}
      </div>
    </>
  )
}

export default Nav
