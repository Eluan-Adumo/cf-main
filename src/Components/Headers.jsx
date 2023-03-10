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
    <nav className='navbar'>
      <SmallHeader />
      <BiggerHeader
        setShowMobileNav={setShowMobileNav}
        showMobileNav={showMobileNav}
      />
    </nav>
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
              
              &nbsp;658 Lane Drive St. St. Carolina
            </li>
            <li>
            <span className = 'h-icon-side'>
            <MdPhoneInTalk />
            </span>
              
              &nbsp;+234 (0)81 6454 7373
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
          <button onClick={() => setShowMobileNav(true)} className='mob-btn'>
            <span className='bars bar11'></span>
            <span className='bars bar12'></span>
            <span className='bars bar13'></span>
          </button>
        </div>
        <div className='end-nav'>
          <input type='button' value='Get A Quote' className='quote-btn' />
        </div>
      </nav>

      <nav
        className='mobile-navigation'
        style={{ display: showMobileNav ? `block` : `none` }}
      >
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
        <li onClick={handleClick}>
          <Link to='/'>Home</Link>
        </li>
        <li onClick={handleClick}>
          <Link to='/about'>About</Link>
        </li>
        <li onClick={handleClick}>
          <Link to='/team'>Team</Link>
        </li>
        <li onClick={handleClick}>
          <Link to='/pricing'>Pricing</Link>
        </li>

        <li onClick={handleClick}>
          <Link to='/testimonies'>Testimonies</Link>
        </li>

        <li onClick={handleClick}>
          <Link to='/contactus'>Contact Us</Link>
        </li>
      </ul>
    </>
  );
};

const DynamicHeader = () => {
  const [itemHeight, setHeight] = useState(null);
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', listenScroll);
    return () => window.removeEventListener('scroll', listenScroll);
  }, []);
  const listenScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);
    if (itemHeight > 500) {
      setVisible(true);
    } else {
      !isVisible && setVisible(false);
    }
  };

  const toggleMenu = () => {
    let item = document.querySelector('.mobile-navigation');
    if (item.style.display === 'none') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  };

  return (
    <>
      {isVisible && (
        // <nav className = 'dynamic-header-pc'>
        // <div className = 'left-nav'>
        // <Link to = '/'>CAREFUL WATCHERS</Link>
        // </div>
        // <div className = 'right-nav'>
        //     <HeaderNav />
        // </div>
        // <div className = 'end-nav'>
        //     <input type = 'button' value = 'Get A Quote' className = 'quote-btn' />
        // </div>
        // </nav>

        <div className='dynamic-header-mobile'>
          <div className='left-nav'>
            <Link to='/'>CAREFUL WATCHERS</Link>
          </div>

          <button onClick={toggleMenu} className='mob-btn'>
            <span className='bars bar11'></span>
            <span className='bars bar12'></span>
            <span className='bars bar13'></span>
          </button>

          <nav className='mobile-navigation'>
            <HeaderNav />
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;

export { SmallHeader, BiggerHeader, DynamicHeader };
