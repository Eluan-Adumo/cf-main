import React from "react";
import Footer from "./Footer";
import SmallHero from "./SmallHero";
import {MdOutlineSecurity}  from "react-icons/md";
import {RiSkull2Fill, RiCustomerService2Fill} from "react-icons/ri"
import {MdNetworkLocked}  from "react-icons/md"
import {SiMicrosoftaccess} from "react-icons/si"
import {HiDocumentSearch} from "react-icons/hi"
import {HiBriefcase} from "react-icons/hi"
import {CgWebsite} from "react-icons/cg"
import {FaBookOpen} from "react-icons/fa";
import { Link } from "react-router-dom";


const ServiceComponent = () =>{

    return (

        <>
            <section className = 'small-hero' id = 'serv'>
                <section className = 'small-hero-content'>
                    <h1 className = 'small-hero-title'>Our Services</h1>
                </section>
            </section>
            <section className = 'service-page'>
                <section className = 'service-page-content'>
                    <div className = 'page-two-highlight'>
                        <center>
                            <div  style = {{
                                display: "block",
                                width: "40px",
                                height: "40px",
                                background: "crimson",
                                color: "white",
                                border: "0px solid white",
                                borderRadius: "25px",
                                textAlign: "center",
                                marginTop: "200px",
                                fontSize: "25px",
                                lineHeight: "45px"
                            }}>
                            <HiBriefcase />
                            </div>
                        </center>



                        <h1>
                            Security Consulting
                        </h1>

                        <p className = 'frame-box'>
                        Careful Watchers Consulting service Identifies problems,
evaluates security issues, assesses risk, and implements solutions to address
threats to a Clients computer networks and computer system.

                        </p>
                       
<center>
<Link to = '/getquote'>
              <input type = 'button' value = 'Get A Quote' className = 'quote-btn-2' />
</Link>
</center>
                    </div>

<div className = 'page-two-highlight'>
                        <center>
                            <span className = 's-icons-side'>
                            <HiDocumentSearch />
                            </span>
                            
                        </center>

                        <h1>
                           Risk Assessment
                        </h1>

                        <p className = 'frame-box'>
                        Careful Watchers will assess Client's IT infrastructure and
identify vulnerabilities and risks.
<br />

                        </p>
                        <center>
<Link to = '/getquote'>
              <input type = 'button' value = 'Get A Quote' className = 'quote-btn-2' />
</Link>
</center>
</div>

<div className = 'page-two-highlight'>

                        <center>
                            <span className = 's-icons-side'>
                            <MdNetworkLocked />
                            </span>
                            
                        </center>

                        <h1>
                            Network Security
                        </h1>

                        <p className = 'frame-box'>
                        Careful Watchers will configure firewalls, intrusion detection
and prevention systems to protect Client's network from external and internal
threats.
<br />

                        </p>
                        <center>
<Link to = '/getquote'>
              <input type = 'button' value = 'Get A Quote' className = 'quote-btn-2' />
</Link>
</center>
</div>


<div className = 'page-two-highlight'>
                        <center>
                            <span className = 's-icons-side'>
                            <RiCustomerService2Fill />
                            </span>
                            
                        </center>
                        <h1>
                            Incident Response
                        </h1>

                        <p className = 'frame-box'>
                        Careful Watchers will provide 24/7 incident response services
to mitigate the impact of any cyber security incidents that may occur.
<br />

                        </p>
                        <center>
<Link to = '/getquote'>
              <input type = 'button' value = 'Get A Quote' className = 'quote-btn-2' />
</Link>
</center>
</div>



<div className = 'page-two-highlight'>


                        <center>
                            <span className = 's-icons-side'>
                            <FaBookOpen />
                            </span>
                            
                        </center>
                        <h1>
                            Service Awareness Training
                        </h1>

                        <p className = 'frame-box'>
                        Careful Watchers will provide 24/7 incident response services
to mitigate the impact of any cyber security incidents that may occur.
<br />

                        </p>
                        <center>
<Link to = '/getquote'>
              <input type = 'button' value = 'Get A Quote' className = 'quote-btn-2' />
</Link>
</center>

                        </div>

                        <div className = 'page-two-highlight'>

                        <center>
                            <span className = 's-icons-side'>
                            <CgWebsite />
                            </span>
                            
                        </center>
                        <h1>
                            Business Information Security
                        </h1>

                        <p className = 'frame-box'>
                        Careful Watchers is develops and implement an
organization's information security policies, procedures, and best practices to protect its
sensitive information assets.
<br />

                        </p>
                        <center>
<Link to = '/getquote'>
              <input type = 'button' value = 'Get A Quote' className = 'quote-btn-2' />
</Link>
</center>
</div>


<div className = 'page-two-highlight'>

                        <center>
                            <span className = 's-icons-side'>
                            <MdOutlineSecurity />
                            </span>
                            
                        </center>

                        <h1>
                            Penetration Tester
                        </h1>

                        <p className = 'frame-box'>
                        Careful Watchers is develops and implement an
organization's information security policies, procedures, and best practices to protect its
sensitive information assets.
<br />

                        </p>
                        <center>
<Link to = '/getquote'>
              <input type = 'button' value = 'Get A Quote' className = 'quote-btn-2' />
</Link>
</center>





                    </div>
                </section>
            </section>

            <div className='cl-content'>
            <div className='c11'>
              <input type='text' placeholder='Your Name' className='u-name' />
              <input type='text' placeholder='Your Email' className='u-mail' />
            </div>

            <div className='c12'>
              <input type='text' placeholder='Your Number' className='u-name' />
              <input
                type='text'
                placeholder='Your Subject'
                className='u-mail'
              />
            </div>

            <div className='c13'>
              <textarea placeholder='Your Message'></textarea>
            </div>

            <div className='c14'>
              <input type='checkbox' /> Terms and Privacy Policy
            </div>
            <div className='c15'>
              <center>
                <button className='anim-btn'>Send Message</button>
              </center>
            </div>
          </div>
            <Footer />
        </>
    )
}

export default ServiceComponent