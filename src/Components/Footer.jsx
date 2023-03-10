import React from "react"
import {MdPhoneInTalk} from "react-icons/md";
import {FiMail} from "react-icons/fi";
import {BiLocationPlus} from "react-icons/bi";
import { Link } from "react-router-dom";
import {MdKeyboardDoubleArrowRight} from "react-icons/md"
const Footer = () =>{
    return (
        <>
            <footer>
               <section className = 'footer-content'>
                    <div>
                        <h3>Contact Info</h3>
                        <ul>
                            <li>
                                <span className = 'f-icon-side'>
                                    <MdPhoneInTalk />
                                </span>
                                <span className = 'f-text-side'>
                                <b>Hot line</b><p>
                                0856476468464
                                </p>
                                </span>
                                </li>
                            <li>
                            <span className = 'f-icon-side'>
                                    <FiMail />
                                </span>
                                <span className = 'f-text-side'><b>Email</b> <p>xxx@yyy.com</p></span>
                                </li>
                            <li>
                            <span className = 'f-icon-side'>
                                    <BiLocationPlus />
                                </span>
                                <span className = 'f-text-side'><b>Address</b><p>
                            123, Western Road, Melbourne Australia
                                </p></span>
                                </li>
                        </ul>
                    </div>

                    <div>
                        <h3>Service Links</h3>
                        <ul>
                            <li>
                            <span className = 'f-icon-side'>
                                    <MdKeyboardDoubleArrowRight />
                                </span>
                                Threat Hunter</li>
                            <li><span className = 'f-icon-side'>
                                    <MdKeyboardDoubleArrowRight />
                                </span>Incident Responder </li>
                            <li><span className = 'f-icon-side'>
                                    <MdKeyboardDoubleArrowRight />
                                </span>Secure Managed IT</li>
                            <li><span className = 'f-icon-side'>
                                    <MdKeyboardDoubleArrowRight />
                                </span>Compliance</li>
                            <li><span className = 'f-icon-side'>
                                    <MdKeyboardDoubleArrowRight />
                                </span>Cyber Security</li>
                            <li><span className = 'f-icon-side'>
                                    <MdKeyboardDoubleArrowRight />
                                </span>Disaster Planning</li>
                        </ul>
                    </div>    

                    <div>
                        <h3>Quick Support</h3>
                        <ul>
                            <li><span className = 'f-icon-side'>
                                    <MdKeyboardDoubleArrowRight />
                                </span>Contact Us</li>
                            <li><span className = 'f-icon-side'>
                                    <MdKeyboardDoubleArrowRight />
                                </span>Faq </li>
                            <li><span className = 'f-icon-side'>
                                    <MdKeyboardDoubleArrowRight />
                                </span>Privacy Policy</li>
                            <li><span className = 'f-icon-side'>
                                    <MdKeyboardDoubleArrowRight />
                                </span>Terms & Conditions</li>
                            <li><span className = 'f-icon-side'>
                                    <MdKeyboardDoubleArrowRight />
                                </span>Teams</li>
                        </ul>
                    </div> 


                    <div>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><span className = 'f-icon-side'>
                                    <MdKeyboardDoubleArrowRight />
                                </span><Link to = '/about'>About Us</Link></li>
                            <li><span className = 'f-icon-side'>
                                    <MdKeyboardDoubleArrowRight />
                                </span><Link to = '/pricing'>Services</Link></li>
                            <li><span className = 'f-icon-side'>
                                    <MdKeyboardDoubleArrowRight />
                                </span><Link to = '/testimonials'>Testimonials</Link></li>
                            <li><span className = 'f-icon-side'>
                                    <MdKeyboardDoubleArrowRight />
                                </span><Link to = '/contactus'>Contact Us</Link></li>
                            <li><span className = 'f-icon-side'>
                                    <MdKeyboardDoubleArrowRight />
                                </span><Link to = '/team'>Team</Link></li>
                        </ul>
                    </div>               
               </section>
            </footer>
            {/* <div className = 'post-footer'>
                <div className = 'pf-left'>
                Copyright @2023 Careful Watchers. All Rights Reserved.
                </div>
                <div className = 'pf-right'>
                Terms & Conditions &mdash; Privacy Policy
                </div>
            </div> */}
        </>
    )
}

export default Footer;