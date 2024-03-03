"use client"
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTypewriter } from "react-simple-typewriter";
import Image from 'next/image'
import profilePic from './images/p.png'
import './home.css'
import Link from 'next/link';

const page = () => {

  const [text] = useTypewriter({
    words: ['Web Developer', 'Software Engineer', 'Photo Editor ', 'MERN Stack Developer'],
    loop: 0,
  });

  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h1 className="h1">Hi! I'm <span className="name">Muhammad Moin</span></h1>
          <div className="change-text">
            <h1>And I'm{' '}
              <span className="word">
                <span className='typewriter'>{text}{"!"}</span>
              </span>
            </h1>
          </div>
          <div><p className='description'>Note that the development build is not optimized.
            To create a production build, use npm run build.Note that the development build is not optimized.
          </p></div>
          <div className="info-box">
            <div className="email-info"><h3 className='e-text'>Email :</h3><span className='email-text'>moin123@gmail.com</span></div>
            <div className="email-info"><h3 className='e-text'>Email :</h3><span className='email-text'>moin123@gmail.com</span></div>
          </div>
          <div className="btn-box">
          <button className='btn-btn' id='btn1' ><Link className='dimage' href={'./images/ss.pdf'} target="_blank"  rel="noopener noreferrer" locale={false} download>Download CV</Link></button>
          <button className='btn-btn' id='btn2' ><a className='dimage' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox' target='a'>Hire Me Now!</a></button>
          
        </div>
          <div className="social-media">
            <a href='https://www.facebook.com/profile.php?id=100072828887127' target='as'><FacebookIcon className="i" /></a>
            <a href='https://twitter.com/home' target='asd'><TwitterIcon className="i" /></a>
            <a href="https://www.instagram.com/mm.photoediting098/" target="asd"><InstagramIcon className="i" /></a>
            <a href="https://www.linkedin.com/in/m-moin42" target='asd'><LinkedInIcon className="i" /></a>
          </div>
        </div>
        <div className="pic">
          <div className='picture'>
            <Image className='image' width={420}
              src={profilePic}
              alt="Picture of the author"></Image>
          </div>
        </div>
      </section>
    </>
  )
}
export default page
