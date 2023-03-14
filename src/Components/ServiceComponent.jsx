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
                    <h1 className = 'small-hero-title'>Services</h1>
                </section>
            </section>
            <section className = 'service-page'>
            <div className = 'page-two-highlight'>
            <h1>
                Our Services
            </h1>

            <p>
            we offer a comprehensive range of information security services designed to protect our clients' businesses from a wide range of cyber threats. Our team of experienced professionals has years of experience in the field of cybersecurity and is dedicated to helping our clients stay secure and compliant
            </p>

        </div>
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
                                marginTop: "10px",
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
                        Our certified cybersecurity consultants offer expert advice and guidance to help our clients build and maintain a strong cybersecurity posture. We work closely with clients to develop strategic plans and budgets around their unique 
                        capabilities, based on models with the highest impact.

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
                        Our certified cybersecurity consultants offer expert advice and guidance to help our clients build and maintain a strong cybersecurity posture. We work closely with clients to develop strategic plans and budgets 
                        around their unique capabilities, based on models with the highest impact.
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
                            Security Analysis
                        </h1>

                        <p className = 'frame-box'>
                        We process and access the security posture of an organization's digital assets, including networks, systems, and applications, to identify vulnerabilities, threats, and risks. The primary goal of our analysis is to determine whether an organization's security controls and measures are effective in protecting against cyber attacks and to recommend improvements where necessary.
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
                        Our network security services are designed to help our clients protect their critical infrastructure, data, and applications from cyber threats. We use a range of tools and technologies to monitor and protect our clients' networks from unauthorized access, malware, and other threats.
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
                        We offer complete security partners, dependable, and committed to urgently responding to all urgent requests. Our incident response services are designed to help our clients quickly and effectively respond to security incidents and minimize the impact on their business. We have a team of experts that can help clients investigate security 
                        incidents, contain the damage, and prevent future incidents.
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
                            Security Awareness Training
                        </h1>

                        <p className = 'frame-box'>
                        We offer tailored security awareness training programs to educate employees on how to identify and avoid cyber threats. Our training programs are designed to help our clients build a culture of cybersecurity within their organization and promote best practices to reduce the risk of a security breach.
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
                        Our mission is to protect our clients' company with strategic information security and data privacy services. We have an in-depth experience in cybersecurity and are equipped to locate, evaluate, and treat risks based on the client's business operations. We provide a range of services, including security program development, policy development, and security governance.


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
                            Penetration Testing
                        </h1>

                        <p className = 'frame-box'>
                        Our network security services are designed to help our clients protect their critical infrastructure, data, and applications from cyber threats. We use a range of tools and technologies to monitor and protect our clients' networks from unauthorized access, malware, and other threats.

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