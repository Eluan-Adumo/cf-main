import React, {useState, useEffect} from 'react'
import {CgWebsite} from 'react-icons/cg'
import {RiCustomerService2Line} from 'react-icons/ri'
import {BsFillBugFill, BsShieldPlus} from "react-icons/bs"
import {CgFileDocument} from "react-icons/cg"
import {FiSettings} from "react-icons/fi"
import lockImage from "../resources/images/electronic-img-1-1-1.png";
import watcher from "../resources/images/approach-img-1-1-1.jpg";
import {BsFillCheckCircleFill} from "react-icons/bs";
import {BiPhoneCall} from "react-icons/bi";
import Testimonials from './Testimonials';
import {VscTelescope} from "react-icons/vsc";
import { Link } from 'react-router-dom';
import {HiDocumentText} from "react-icons/hi";
import {AiOutlineMonitor} from "react-icons/ai";
import {MdKeyboardDoubleArrowRight} from "react-icons/md"
import {motion} from "framer-motion";

import client1 from "../resources/images/astro.png";
import client2 from "../resources/images/namecheap.png";
import client3 from "../resources/images/splunk.png";
import client4 from "../resources/images/cyber-ireland.png";
const SecondPage = ()=>{
    const [isNVisible, setNVisible] = useState(false);
    const [isTVisible, setIsTVisible] = useState(false);
    const [isPc, setIsPc] = useState(false);
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const [shouldSDisplay, setShouldSDisplay] = useState(false);
    useEffect(() => {
        if(window.innerWidth >=600 ){
            setIsPc(true);
        }
        window.addEventListener('scroll', listenScroll);
        return () => window.removeEventListener('scroll', listenScroll);
        
      }, []);
      const listenScroll = () => {
        const d = document;
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        
        //   console.log(winScroll);
        if (winScroll >= 1000) {
            setNVisible(true);
        }
        if(winScroll >= 3686){
            setIsTVisible(true);
        }
    
      };
    return(
        <>

            <section className = 'page-two'>
                <section className = 'page-two-content'>
                    <div className = 'page-two-slider'>

                    </div>

                    
                    {
                       
                        isNVisible
                        &&

                        <motion.div className = 'page-two-highlight'
                        initial = {{
                            // marginLeft: "-100%",
                            transform: "translateX(-100%)"
                        }}
                        animate = {{

                            
                            transform : isPc ?`translateX(0%)` : `translateX(0%)`
                        }}  
                        transition = {{
                            ease : "linear",
                            duration: 1
                        }}
                        
                        exit = {{
            
                        }}
                        >
                                <h1>What we do</h1>
                            <p className = 'frame-box'>
                            Careful Watchers offers comprehensive cyber 
                    security services to help Businesses, 
                    Organizations and Individuals protect 
                    themselves from digital threats Which Includes -                            </p>
                        </motion.div>
                    }

                    <div className = 'page-two-cards'>
                        <ul>
                            {/* <li>

                                <div className = 'grid-content-area'>
                                        <div>
                                            <span className = 'b-icon'>
                                                <RiCustomerService2Line />
                                            </span>
                                        </div>

                                    <div className = 'grid-content-area-content'>
                                    <h1>Security Consulting</h1>
                                    
                                       
                                            <p><span className = 'i-icons-side'>
                                                <MdKeyboardDoubleArrowRight />
                                                </span>
                                                
                                                <span className = 'i-t-side'>
                                                Consulting Service
                                                </span>
                                                </p>
                                            <p> 
                                            <span className = 'i-icons-side'>
                                                <MdKeyboardDoubleArrowRight />
                                                </span>
                                                <span>Identifies Problems</span></p>
                                            <p>
                                            <span className = 'i-icons-side'>
                                                <MdKeyboardDoubleArrowRight />
                                                </span>
                                                <span>Evaluates Security Issues</span></p>
                                        
                                            <p className = 'anim-btn' id = 'r-more'>      
                                                <Link to = '/services'>
                                                    <center>
                                                    Read more
                                                    </center>
                                                    </Link>
                                            </p>

                                    </div>
                                </div>
                            </li>

                            <li>

                                <div className = 'grid-content-area'>
                                <div>
                                <span className = 'b-icon'><CgWebsite /></span>

                                </div>
                                <div className = 'grid-content-area-content' id = 'cont-1'>
                                    <h1>Security Awareness Training</h1>
                                    <p>

                                    <span className = 'i-icons-side'>
                                                <MdKeyboardDoubleArrowRight />
                                                </span>

                                                <span>
                                                    Client awareness training.
                                                </span>

                                    </p>
                                    <p>
                                    <span className = 'i-icons-side'>
                                                <MdKeyboardDoubleArrowRight />
                                                </span>
                                       <span> Client&apos;s mitigation training</span>
                                    </p>
                                    <p className = 'anim-btn' id = 'r-more'> 
                                        <center>
                                        <Link to = '/services'> Read more</Link>
                                        </center>
                                        </p>
                                    
                                    
                                    </div>
                                </div>
                            </li> */}
                            <li>

                                <div className = 'grid-content-area'>
                                <div>
                                            <span className = 'b-icon'>
                                                <RiCustomerService2Line />
                                            </span>
                                        </div>
                                    <div className = 'grid-content-area-content' id = 'cont-2'>
                                    <h1>Security Consulting</h1>

                                    <p><span className = 'i-icons-side'>
                                                <MdKeyboardDoubleArrowRight />
                                                </span>
                                                
                                                <span className = 'i-t-side'>
                                                Consulting Service
                                                </span>
                                                </p>
                                            <p> 
                                            <span className = 'i-icons-side'>
                                                <MdKeyboardDoubleArrowRight />
                                                </span>
                                                <span>Identifies Problems</span></p>
                                            <p>
                                            <span className = 'i-icons-side'>
                                                <MdKeyboardDoubleArrowRight />
                                                </span>
                                                <span>Evaluates Security Issues</span>
                                         
                                    <p id = 'r-more' className = 'anim-btn'>
                                        <Link to = '/services' ><center>Read more</center></Link>
                                        </p>
                                 </p>
                                    </div>
                                </div>
                            </li>

                            <li>

<div className = 'grid-content-area'>
    <div>
    <span className = 'b-icon'><CgWebsite /></span>

    </div>
    <div className = 'grid-content-area-content' id = 'cont-2'>
    <h1>Security Awareness Training</h1>

                            
    <p>

<span className = 'i-icons-side'>
            <MdKeyboardDoubleArrowRight />
            </span>

            <span>
                Client awareness training.
            </span>

</p>
<p>
<span className = 'i-icons-side'>
            <MdKeyboardDoubleArrowRight />
            </span>
   <span> Client&apos;s mitigation training</span>
   <p><br /></p>
<p id = 'r-more' className = 'anim-btn'><Link to = '/services' ><center>Read more</center></Link></p>
 </p>
    </div>
</div>
                            </li>


<li>

<div className = 'grid-content-area'>
    <div>
    <span className = 'b-icon'><BsFillBugFill /></span>

    </div>
    <div className = 'grid-content-area-content' id = 'cont-2'>
    <h1>Business Information Security</h1>

    <p>
    <span className = 'i-icons-side'>
                <MdKeyboardDoubleArrowRight />
                </span>
       <span>Data Protection</span>
    </p>
    <p>
    <span className = 'i-icons-side'>
                <MdKeyboardDoubleArrowRight />
                </span>
       <span> Business Continuity Plan (BCP)</span>
    </p>
    <p>

    <span className = 'i-icons-side'>
                <MdKeyboardDoubleArrowRight />
                </span>

                <span>
                    Security Policies
                </span>
    
<p id = 'r-more' className = 'anim-btn'><Link to = '/services' ><center>Read more</center></Link></p>
 </p>
    </div>
</div>
</li>
                        </ul>
                        <center>
                            <Link to = '/services' style = {{
                                display: "block",
                                color: "white",
                                background: "crimson",
                                width: "150px",
                                marginTop: "20px",
                                padding: "1rem"
                            }}>More Services</Link>
                        </center>
                    </div>
                    

                    

                    <div className = 'pathed-area'>
                    <div className = 'area-right'>
                            <img src = {watcher} />
                        </div>



                        <div className = 'area-left'>
                            <h1>Our Approach to Security</h1>
                            <p>
                            In accordance with our methodology, the following techniques are utilized to safeguard digital assets from unauthorized access, theft, damage, or other types of cyberattacks:

                            </p>
                            <ul>
                                <li>
                                    <div className = 'list-content-side'>
                                            <h2>Conduct Regular Risk Assessments</h2>
                                            <p>
                                            Careful Watchers conduct's regular risk assessments to 
                                            identify potential security threats and vulnerabilities in the 
                                            <span style = {{
                                                display: shouldDisplay?`inline`: `none`
                                            }}>
                                            client's IT infrastructure. This can involve analyzing the client's network, software, hardware, and other 
                                            IT assets to identify potential security weaknesses.
                                            </span>

                                            </p>
                                    </div>
                                    <span className = 'list-icon-side' onClick = {()=>{
                                       setShouldDisplay(!shouldDisplay);
                                    }}>
                                        <BsShieldPlus />
                                    </span>
                                </li>

                                <li>
                                <div className = 'list-content-side'>
                                            <h2>Provide Security Training and Awareness</h2>
                                            <p clssName = 'aw-cont'>
                                            Training and education services to help clients 
                                            improve their security awareness and knowledge, 
                                            such as providing cybersecurity awareness training to employees
                                            </p>
                                    </div>
                                    <span className = 'list-icon-side'>
                                        <BsShieldPlus />
                                    </span>
                                </li> 

                                <li>
                                <div className = 'list-content-side'>
                                            <h2>Implement Robust Security Solutions</h2>
                                            <p>
                                            Careful Watchers implement robust security solutions to protect our client's IT infrastructure. 
                                            <span style = {{
                                                display : shouldSDisplay?`inline`: `none`
                                            }}>
                                            This can include installing firewalls, intrusion detection and prevention systems, antivirus software, and other security tools

                                            </span>
                                            </p>
                                    </div>
                                    <span className = 'list-icon-side'  onClick = {()=>{
                                        setShouldSDisplay(!shouldSDisplay);
                                    }}>
                                        <CgFileDocument />
                                    </span>
                                </li>                                
                            </ul>
                        </div>

                
                        

                    </div>


{/* {
                         
                                isTVisible
                                &&

                    <motion.div className = 'page-two-highlight'
                    
                    initial = {{
                        marginRight: "-100%"
                    }}
                    animate = {{
                        marginRight : isPc ?`20%` : `5%`
                        // marginRight: "5%"
                    }}  
                    transition = {{
                        ease : "linear",
                        duration: 1
                    }}
                    
                    exit = {{
        
                    }}
                    >
                            <h1>High-Performance Solutions</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Doloribus quam neque quibusdam corrupti aspernatur
                            corporis alias nisi dolorum expedita veritatis voluptates minima sapiente.
                        </p>
                    </motion.div>
                } */}
                    {/* <div className = 'page-two-grid-area'>
                        <ul className='f-1-ul'>
                            <li id = 'f11'>
                                <div className = 'p-t-g-a-text-area'>
                                    <h2>Secure Managed IT</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
                                    </p>
                                </div>
                            </li>

                            <li id = 'f12'>
                            <div className = 'p-t-g-a-text-area'>
                                    <h2>Incident Responder</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
                                    </p>
                                </div>
                            </li>

                            <li id = 'f13'>
                            <div className = 'p-t-g-a-text-area'>
                                    <h2>Threat Hunter</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
                                    </p>
                                </div>
                            </li>
                        </ul> */}

                        {/* <ul className = 'f-2-ul'>
                            <li id = 'f21'>
                            <div className = 'p-t-g-a-text-area'>
                                    <h2>Incident Responder</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
                                    </p>
                                </div>
                            </li>
                            <li id = 'f22'>
                            <div className = 'p-t-g-a-text-area'>
                                    <h2>Incident Responder</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
                                    </p>
                                </div>
                            </li>
                            <li id = 'f23'>
                            <div className = 'p-t-g-a-text-area'>
                                    <h2>Incident Responder</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
                                    </p>
                                </div>
                            </li>
                        </ul> */}
                    {/* </div> */}
                </section>
            </section>
            <DarkDiv />
            <ThirdDiv showRoller = {true} showAbout = {false} showInitial= {false} coreValues = {false} showCards = {true}/>
            <Testimonials />
        </>
    )
}


const DarkDiv = ()=>{
    const [pwd, setPwd] = useState(true);
    const[ac, setAc] = useState(false);
    const[encrypt, setEncrypt] = useState(false);
    const[pacd, setPAc] = useState(false);
    const [backup, setBackup] = useState(false);
// useEffect(()=>{
//     focusItem();
// }, [])
    const focusItem = () =>{
        document.querySelector(".dd-scrolls-header ul li").onClick((e)=>{
            document.querySelector(".dd-scrolls-header ul li").style.color = "white";
            e.target.style.color = "crimson";
        });
    }

    
    return(
        <>
            <section className = 'dark-div'>
                <section className = 'dark-div-content'>

                    <div className = 'dark-div-right'>
                        <h1>

                        Our Security Proceedures

                        </h1>
                        <div className = 'dd-scrolls'>
                            <div className = 'dd-scrolls-header'>
                                <ul>
                                    <li onClick={()=>{
                                        setPwd(true);
                                        setAc(false);
                                        setEncrypt(false);
                                        setBackup(false);
                                        setPAc(false);

                                    }}>Password</li>
                                    <li
                                    onClick={()=>{
                                        setPwd(false);
                                        setAc(true);
                                        setEncrypt(false);
                                        setBackup(false);
                                        setPAc(false);
                                    }}
                                    >Control</li>
                                    <li 
                                    onClick={()=>{
                                        setPwd(false);
                                        setAc(false);
                                        setEncrypt(true);
                                        setBackup(false);
                                        setPAc(false);

                                    }}
                                    >Encryption</li>
                                    <li onClick={()=>{
                                        setPwd(false);
                                        setAc(false);
                                        setEncrypt(false);
                                        setBackup(true);
                                        setPAc(false);

                                    }}>Backup</li>
                                    <li
                                    onClick={()=>{
                                        setPwd(true);
                                        setAc(false);
                                        setEncrypt(false);
                                        setBackup(false);
                                        setPAc(true);

                                    }}
                                    >Access</li>
                                </ul>
                                
                            </div>
                            <div className = 'text-side'>
                                {

                                    pwd
                                    &&
                                    <p className = 'pwd'>
                                    Implementing strong password policies, such as requiring passwords to be complex and changed regularly, can help prevent unauthorized access.
                                    </p>
                                }
                                    

{
    backup
    &&
    <p className = 'backups'>
    Limiting access to sensitive information to authorized personnel only can help prevent unauthorized access or disclosure.                                    
    </p>
}
                                    

                                    
                                    {
                                        ac

                                        &&
                                        <p className = 'a-cont'>

                                    Regular data backups can help ensure that data can be recovered in the event of a cybersecurity incident.
                                    </p>

                                    }
                                    
{
    encrypt
    &&
                                        <p className = 'encrypt'>
                                        Encrypting sensitive data can help protect it from unauthorized access or disclosure.                                    
                                        </p>
}
                                </div>
                        </div>
                    </div>

                    <div className = 'dark-div-left'>
                        <img src = {lockImage} />
                    </div>
                </section>
            </section>
        </>
    )

}



const ThirdDiv = (props)=>{
    const showAbout = props.showAbout;
    const showInitial = props.showInitial;
    const coreValues = props.coreValues;
    const showCards = props.showCards;
    const showRoller = props.showRoller;
    return(
        <>
            <section className = 'third-div'>
                <section className = 'third-div-content'>
                <div className = 'page-two-highlight'style = {{
                display: showInitial?`block` : `none`
            }}>
                            <h1>
                            Complete And Effective 
                            Protection For Your Home And Office
                            </h1>
                            <p>
                            Careful Watchers offers comprehensive cyber security solutions to help Businesses, Organizations and Individuals protect themselves from digital threats.
                            </p>
                    </div>



{
    showInitial
    &&

        <div className = 'page-two-highlight'>
            <h1>
            The Problem
            </h1>
            <p>
            Cyber attacks are becoming more prevalent, which might have far-reaching effects on individuals, companies, and society at large. It is crucial to take preventative measures to safeguard against cyber threats, such as investing in cybersecurity, raising public awareness and educating people about cyber threats, 
            and creating plans for defending against cyberattacks.                            
            </p>
        </div>

        // <div className = 'page-two-highlight'>
        //     <h1>
        //     Our Solution
        //     </h1>
        //     <p>
        //     Careful Watchers solve a range of problems related to protecting digital systems and data from unauthorized access, theft, damage, and other forms of cyber threats. These threats can come in various forms, such as hacking, malware, phishing, ransomware, and social engineering attacks.                            </p>
        // </div>

}

{
    showInitial
    &&

            <div className = 'page-two-highlight'>
            <h1>
            Our Solution
            </h1>
            <p>
            Careful Watchers solve a range of problems related to protecting digital systems and data from unauthorized access, theft, damage, and other forms of cyber threats. These threats can come in various forms, such as hacking, malware, phishing, ransomware, and social engineering attacks.                            </p>
        </div>

}

{
    showRoller

    &&

    <ThemesRoller />
}

                    


                      <div className = 'page-two-highlight'>
                            <h1>About Us</h1>
                        <p>
                        At Careful Watchers, we have a unique pattern that sets us apart from other cyber security providers. We call it the "360-Degree Protection" approach.    

                        </p>
                        <center>
                            <Link to = '/about' style = {{
                                color: "crimson",
                                display: showAbout? `none` : `inline`
                            }}>Read more</Link>
                        </center>
                                            </div>

{
    showAbout

    &&
    <MoreAbtContent />
}

                {
                    coreValues
                    &&
                    
                    <>
                    <div className = 'page-two-highlight'>
                            <h1>Our Core Values</h1>
                        </div>
                    <div className = 'page-cards'>
                        
                        <div className = 'each-card'>
                                <span className = 'card-icon'>
                                <BsFillCheckCircleFill />
                                </span>
                                <div className = 'card-contents'>
                                    <h1>
                                    Confidentiality

                                    </h1>
                                    <p>
                                    This refers to the protection of sensitive information from unauthorized access or disclosure
                                    </p>
                                </div>
                        </div>
                        <div className = 'each-card'>
                                <span className = 'card-icon'>
                                <BsFillCheckCircleFill />
                                </span>
                                <div className = 'card-contents'>
                                    <h1>
                                    Integrity

                                    </h1>
                                    <p>
                                    This refers to the accuracy and consistency of data or information. Cybersecurity measures are put in place to ensure that data is not altered, destroyed, or tampered with, whether intentionally or accidentally
                                    </p>
                                </div>
                        </div>
                        <div className = 'each-card'>
                                <span className = 'card-icon'>
                                <BsFillCheckCircleFill />
                                </span>
                                <div className = 'card-contents'>
                                    <h1>
                                    Availability

                                    </h1>
                                    <p>
                                    This refers to the ability of authorized users to access the information or resources they need when they need them
                                    </p>
                                </div>
                        </div>
                        {/* <div className = 'each-card'>
                                <span className = 'card-icon'>
                                <FiSettings />
                                </span>
                                <div className = 'card-contents'>
                                    <h1>
                                    24/7 Support And Remote Admit

                                    </h1>
                                    <p>
                                    Lorem ipsum dolor sit 
                                    amet, consectetur 
                                    adipiscing elit, 
                                    sed do eiusmod tempor
                                    </p>
                                </div>
                        </div> */}


                    </div>
                    <center>

                    
<Link to = '/contactus'>
            <input type ='button' value = 'Contact Us' className ='anim-btn'/>
</Link>

</center>

                    </>
                }

                {
                    showCards
                    &&
                    <>
                    <div className = 'page-two-hightlight'>
                                <center>
                                <h1 style = {{
                                    fontSize: "25px"
                                }}>How We Work...</h1>
                                </center>
                         </div>
                   
                    <div className = 'page-cards'>
                        
                        <div className = 'each-card'>
                                <span className = 'card-icon'>
                                <VscTelescope />
                                </span>
                                <div className = 'card-contents'>
                                    <h1>
                                    Service Identification

                                    </h1>
                                    <p>
                                    Our prestigious customers are able to connect to a service that meets their needs.
                                    </p>
                                </div>
                        </div>
                        <div className = 'each-card'>
                                <span className = 'card-icon'>
                                <BiPhoneCall />
                                </span>
                                <div className = 'card-contents'>
                                    <h1>
                                    Personalized Onboarding

                                    </h1>
                                    <p>
                                    our clients interact with a member of our team during a live Zoom onboarding. We respond to any questions you may have and adjust the service
                                     to meet your specific security requirements.
                                    </p>
                                </div>
                        </div>
                        <div className = 'each-card'>
                                <span className = 'card-icon'>
                                <HiDocumentText />
                                </span>
                                <div className = 'card-contents'>
                                    <h1>
                                    Terms & Agreement

                                    </h1>
                                    <p>
                                    Our Clients are presented with friendly and standardized terms to guide all operations and business relationships with us.
                                    </p>
                                </div>
                        </div>
                        <div className = 'each-card'>
                                <span className = 'card-icon'>
                                <AiOutlineMonitor />
                                </span>
                                <div className = 'card-contents'>
                                    <h1>
                                    Monitoring &amp; Support

                                    </h1>
                                    <p>
                                    After all requirements have been met, our team of professionals will engage with the client's request and begin security operations.
                                    </p>
                                </div>
                        </div>
                    </div>

                    <center>
                                        <Link to = '/getquote' className = 'anim-btn-2' style = {{
                                            width: "150px",
                                            height: "40px"

                                        }}> Get Started</Link>
                                        </center>
                     </>
                }

                    
                </section>
            </section>
        </>
    )
}

const MoreAbtContent = ({props})=>{


    return (
        <>

        <div className = 'page-two-highlight'>

        
        <p>
        What does this mean? We believe that cyber security is not just about protecting your systems from external threats, but it's also about protecting your organization from internal vulnerabilities. That's why our services go beyond technical solutions and also address the human factor.

                        </p>
                        <p>
                        Our 360-Degree Protection approach includes training and awareness programs for employees, phishing simulations, and social engineering assessments to identify potential weaknesses in your organization's processes and policies. By addressing both technical and non-technical aspects of cyber security, we can provide a comprehensive solution that minimizes your risk of a breach or cyber attack.                        
                        </p>
                        {/* <p>
                        Our 360-Degree Protection approach includes training and awareness programs for employees, phishing simulations, and social engineering assessments to identify potential weaknesses in your organization's processes and policies. By addressing both technical and non-technical aspects of cyber security, we can provide a comprehensive solution that minimizes your risk of a breach or cyber attack.
                        </p> */}

                        <p>
                        With our team of certified cyber security consultants, we can help you identify, prioritize, and respond immediately to threats and vulnerabilities in your system. Our collaborative approach involves working closely with you to develop a clear risk management process tailored to your business operations. We provide simple, visual reporting that resonates clearly with business executives while speaking their language.
                        </p>


                         </div>

        </>
    )
}


const ThemesRoller = ()=>{
    const RollerData = [{
                icon : client1,
                companyName : "AstroSoft Groups",
    },
    {
        icon : client2,
        companyName : "Name Cheap"
    },
        {
            icon : client3,
            companyName : 'Splunk'
        },

        {
            icon : client4,
            companyName: "Cyber Ireland"
        }
];


const RollerItems = RollerData.map(item=>{
    const iconUrl =  `${item.icon}`;
        return<>
            <li>
                <div className = 'roller-icons-side'>
                    <center><img src = {iconUrl} /></center>
                </div>
                <div className = 'roller-text-side'>
                    <center>
                        {item.companyName}
                    </center>
                </div>
            </li>
        </>
});


    return(
        <>
        <div className = 'rollers'>

        <ul>
                {RollerItems}
            </ul>
        </div>

        </>
    );
}
export {SecondPage, ThirdDiv, DarkDiv, ThemesRoller, MoreAbtContent}