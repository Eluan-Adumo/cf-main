import React from "react";
import {BsShieldCheck} from "react-icons/bs";
import {GiPadlock} from "react-icons/gi";
import {BiCertification} from "react-icons/bi";
import {BsFillPlayFill} from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = () =>{
    return (
        <>
            <section className = 'hero'>
                
                <ul className = 'animated'>
                    <li>
                        <div className='white-bar bar1'></div>
                    </li>
                    <li>
                        <div className='white-bar bar2'></div>
                    </li>
                    <li>
                        <div className='white-bar bar3'></div>
                    </li>
                </ul>
                <section className = 'hero-content'>

                
                <div className = 'hero-left'>
                    <span className = 'hero-left-top'>
                        Careful Watchers (CaaS)
                    </span>
                    <span className = 'hero-left-mid'>
                    PROTECTING YOUR BUSINESS STARTS WITH SECURING YOUR DIGITAL ASSETS
                    </span>
                    <span className = 'hero-left-bottom'>
                    Careful Watchers offers comprehensive cyber 
                    security services to help Businesses, 
                    Organizations and Individuals protect 
                    themselves from digital threats.                    
                    </span>
                    <span className = 'hero-left-buttons'>
                        <Link to = '/getquote'>
                        <input type = 'button' className = 'g-started' value = 'Get Quote' />

                        </Link>
                        <input type = 'button' value = 'About us' className = 'abt-us' />
                    </span>
                </div>

                <div className = 'hero-right'>
                    <div className = 'twt-btn-frame'>
                    
                        <div className = 'hero-btn-play-twitt'>
                            <button className = 'play-btn'> <BsFillPlayFill/> </button>

                        </div>
                        
                    </div>


                </div>



                </section>

                <div className = 'hero-bottom'>
                    <div className = 'hero-bottom-items'>
                        <span className = 'hbi-title'>
                        <span className = 'hbi-icon'><BsShieldCheck /></span> <span class = 'text-side'>Security</span>

                        </span>
                        <span className = 'hbi-content'>
                            We are dedicated to providing round-the-clock cyber security services to ensure that our clients are protected at all times.
                            <p>
                            <BsShieldCheck />
                            </p>
                        </span>
                    </div>

                    <div className = 'hero-bottom-items'>

                        <span className = 'hbi-title'>
                        <span className = 'hbi-icon'><GiPadlock /></span><span className='text-side'>Privacy</span>

                        </span>
                        <span className = 'hbi-content'>
                            Protecting your data is our top priority.
                            We are committed to providing our clients with the highest level
                            of data privacy, ensuring that their sensitive information is kept safe
                            and secure at all times.
                            <p>
                            <GiPadlock /> 
                            </p>
                        </span>
                    </div>


                    <div className = 'hero-bottom-items'>
                        {/*<div className = 'item-overlay'></div>*/}
                        <span className = 'hbi-title'>
                            <span className = 'hbi-icon'><BiCertification /></span><span className='text-side'>Industry Verified</span>
                        </span>
                        <span className = 'hbi-content'>
                            Our company is proudly registered in Ireland and is also a part of Cyber Ireland demonstrating our commitment to the grouth and development of the
                            Cybersecurity industry in Ireland.
                            <p>
                            <BiCertification /> 
                            </p>
                        </span>
                    </div>                                        
                </div>                
            </section>
        </>
    );
}


export default Hero;