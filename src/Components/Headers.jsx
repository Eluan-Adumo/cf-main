import React, { useState, useEffect } from 'react';
// import FaFacebook from "react-icons/fa";
// import BsTwitter from "react-icons/fa";
// import BsInstagram from "react-icons/fa";
// import FaLinkedinIn from "react-icons/fa";
import { MdPhoneInTalk } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { BiLocationPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { TfiLinkedin } from 'react-icons/tfi';

import logo from "../resources/images/logo.png";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

// Install react-router-dom and react icons..

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
        <nav className='navbar'>
      <SmallHeader />
      <BiggerHeader
        setShowMobileNav={setShowMobileNav}
        showMobileNav={showMobileNav}
      />
      <div className = 'dyn-header'>
          <DynamicHeader  
           setShowMobileNav={setShowMobileNav}
           showMobileNav={showMobileNav}/>
      </div>
    </nav>

    </>


  );
};

const SmallHeader = () => {
  return (
    <>
      <header className='small-header'>
        <div className='smh-left'>
          <ul>
            <li>
              <span className = 'h-icon-side'>
              <FiMail />
                </span>
              &nbsp;Email: info@carefulwatchers.com
            </li>
            <li>
            <span className = 'h-icon-side'>
            <BiLocationPlus />
                </span>
              
              &nbsp;Tyyrelstown County, Dublin.
            </li>
            <li>
            <span className = 'h-icon-side'>
            <MdPhoneInTalk />
            </span>
              
              &nbsp;+353 (0)89 262 1986
            </li>
          </ul>
        </div>
        <div className='smh-right'>
          <Link to={'https://www.facebook.com/carefulwatchers'}>
            <FaFacebookSquare />
          </Link>
          <Link to={'https://twitter.com/carefulwatchers'}>
            <FaTwitter />
          </Link>
          <Link to={'https://www.linkedin.com/company/92740567/admin/'}>
            <TfiLinkedin />
          </Link>
          <Link to={'https://www.instagram.com/carefulwatcher/'}>
            <FaInstagram />
          </Link>
        </div>
      </header>
    </>
  );
};

const BiggerHeader = ({ setShowMobileNav, showMobileNav }) => {
  return (
    <>
      <nav className='bigger-header'>
        <div className='left-nav'>
          <Link to='/'><img src = {logo} className = 'cf-logo'/></Link>
        </div>
        <div className='right-nav'>
          <div className='nav-pc'>
            <HeaderNav />
          </div>
          <button onClick={() => setShowMobileNav(!showMobileNav)} className='mob-btn'>
            <span className='bars bar11'></span>
            <span className='bars bar12'></span>
            <span className='bars bar13'></span>
          </button>
        </div>
        <div className='end-nav'>
          <input type='button' value='Get A Quote' className='quote-btn' />
        </div>
      </nav>

      <nav className='mobile-navigation' style={{ display: showMobileNav ? `block` : `none` }}>
        <HeaderNav setShowMobileNav={setShowMobileNav} />
      </nav>

      <DynamicHeader />
    </>
  );
};

const HeaderNav = ({ setShowMobileNav }) => {
  const handleClick = () => {
    setShowMobileNav(false);
  };

  return (
    <>
      <ul>
        <li>
          <Link to='/' onClick={handleClick}>Home</Link>
        </li>
        <li>
          <Link to='/about' onClick={handleClick}>About</Link>
        </li>
        <li>
          <Link to='/team' onClick={handleClick}>Team</Link>
        </li>
        <li>
          <Link to='/Services' onClick={handleClick}>Services</Link>
        </li>

        {/* <li>
          <Link to='/testimonies' onClick={handleClick}>Testimonies</Link>
        </li> */}

        <li>
          <Link to='/contactus'  onClick={handleClick}>Contact Us</Link>
        </li>
      </ul>
    </>
  );
};

const DynamicHeader = ({ setShowMobileNav, showMobileNav }) => {
  // console.log(setShowMobileNav);
  const [showN, setShowN] = useState(false);
  const [itemHeight, setHeight] = useState(null);
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', listenScroll);
    return () => window.removeEventListener('scroll', listenScroll);
  }, []);
  const listenScroll = () => {
    const d = document;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);
    if (winScroll >= 500) {
          
          if(window.innerWidth >=600){
            d.querySelector(".dynamic-header-pc").style.marginTop = "0px";
            d.querySelector(".dynamic-header-mobile").style.display = "none";
          } else {
            d.querySelector(".dynamic-header-pc").style.display = "none";
            d.querySelector(".dynamic-header-mobile").style.marginTop = "0px";
            
          }

      }else{
          
        if(window.innerWidth >=600){
          d.querySelector(".dynamic-header-pc").style.marginTop = "-60px";
          d.querySelector(".dynamic-header-mobile").style.display = "none";
        } else {
          d.querySelector(".dynamic-header-pc").style.display = "none";
          d.querySelector(".dynamic-header-mobile").style.marginTop = "-60px";
          
        }

        }

  };

  // const toggleMenu = () => {
  //   let item = document.querySelector('.mobile-navigation');
  //   if (item.style.display == 'none') {
  //     item.style.display = 'block';
  //   } else {
  //     item.style.display = 'none';
  //   }
  // };

  return (
    <>

        <nav className = 'dynamic-header-pc'>
        <div className = 'left-nav'>
        <Link to = '/'>
          <img src = {logo} className = 'logo' />
        </Link>
        </div>
        <div className = 'right-nav'>
            <HeaderNav />
        </div>
        <div className = 'end-nav'>
            <Link to = '/getquote'>
              <input type = 'button' value = 'Get A Quote' className = 'quote-btn' />
            </Link>
        </div>
        </nav>

         <div className='dynamic-header-mobile'>
           <div className='left-nav'>
             <Link to='/'><img src = {logo} className = 'logo' /></Link>
           </div>

          <div>

           <Link to = '/getquote'>
            <input type = 'button' value = 'Get A Quote' className = 'quote-btn' />
            </Link>

          </div>
           
           <div className = 'button-area'>
           <button onClick={() => {
            setShowN(!showN);
             }}
              className='mob-btn'>
             <span className='bars bar11'></span>
             <span className='bars bar12'></span>
             <span className='bars bar13'></span>
           </button>
            </div>

           <nav className='mobile-navigation' id = 'mob-nav' 
           style={{ display: showN ? `block` : `none` }}>
        <HeaderNav setShowMobileNav={setShowN} />
      </nav>
         </div>
 
    </>
  );
};

export default Navbar;

export { SmallHeader, BiggerHeader, DynamicHeader };
