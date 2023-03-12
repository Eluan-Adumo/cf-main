import React from "react";
import Footer from "./Footer";
import SmallHero from "./SmallHero";
import {MdOutlineSecurity}  from "react-icons/md";


const ServiceComponent = () =>{

    return (

        <>
            <SmallHero title = 'Our Services' />
            <section className = 'service-page'>
                <section className = 'service-page-content'>
                    <div className = 'page-two-highlight'>
                        <center>
                            <span className = 's-icons-side'>
                            <MdOutlineSecurity />
                            </span>
                            
                        </center>

                        <h1>
                            Security Consulting
                        </h1>

                        <p>
                        Careful Watchers Consulting service Identifies problems,
evaluates security issues, assesses risk, and implements solutions to address
threats to a Clients computer networks and computer system
                        </p>


                        <center>
                            <span className = 's-icons-side'>
                            <MdOutlineSecurity />
                            </span>
                            
                        </center>

                        <h1>
                           Risk Assessment
                        </h1>

                        <p>
                        Careful Watchers will assess Client's IT infrastructure and
identify vulnerabilities and risks
                        </p>.


                        <center>
                            <span className = 's-icons-side'>
                            <MdOutlineSecurity />
                            </span>
                            
                        </center>

                        <h1>
                            Network Security
                        </h1>

                        <p>
                        Careful Watchers will configure firewalls, intrusion detection
and prevention systems to protect Client's network from external and internal
threats.
                        </p>

                        <center>
                            <span className = 's-icons-side'>
                            <MdOutlineSecurity />
                            </span>
                            
                        </center>
                        <h1>
                            Incident Response
                        </h1>

                        <p>
                        Careful Watchers will provide 24/7 incident response services
to mitigate the impact of any cyber security incidents that may occur.
                        </p>



                        <center>
                            <span className = 's-icons-side'>
                            <MdOutlineSecurity />
                            </span>
                            
                        </center>
                        <h1>
                            Service Awareness Training
                        </h1>

                        <p>
                        Careful Watchers will provide 24/7 incident response services
to mitigate the impact of any cyber security incidents that may occur.
                        </p>

                        <center>
                            <span className = 's-icons-side'>
                            <MdOutlineSecurity />
                            </span>
                            
                        </center>
                        <h1>
                            Business Information Security
                        </h1>

                        <p>
                        Careful Watchers is develops and implement an
organization's information security policies, procedures, and best practices to protect its
sensitive information assets.
                        </p>


                        <center>
                            <span className = 's-icons-side'>
                            <MdOutlineSecurity />
                            </span>
                            
                        </center>

                        <h1>
                            Penetration Tester
                        </h1>

                        <p>
                        Careful Watchers is develops and implement an
organization's information security policies, procedures, and best practices to protect its
sensitive information assets.
                        </p>





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