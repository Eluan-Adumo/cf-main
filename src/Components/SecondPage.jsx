import React, {useState, useEffect} from 'react'
import {CgWebsite} from 'react-icons/cg'
import {RiCustomerService2Line} from 'react-icons/ri'
import {BsFillBugFill, BsShieldPlus} from "react-icons/bs"
import {CgFileDocument} from "react-icons/cg"
import {FiSettings} from "react-icons/fi"
import lockImage from "../resources/images/electronic-img-1-1-1.png";
import watcher from "../resources/images/approach-img-1-1-1.jpg";
import {BsFillCheckCircleFill} from "react-icons/bs";
import Testimonials from './Testimonials'
import { Link } from 'react-router-dom'
import {MdKeyboardDoubleArrowRight} from "react-icons/md"
import {motion} from "framer-motion";
const SecondPage = ()=>{
    const [isNVisible, setNVisible] = useState(false);
    const [isTVisible, setIsTVisible] = useState(false);
    const [isPc, setIsPc] = useState(false);
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
                            marginLeft: "-100%"
                        }}
                        animate = {{

                            
                            marginLeft : isPc ?`20%` : `5%`
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
                            <li>

                                <div className = 'grid-content-area'>
                                    <span className = 'b-icon'>
                                    <RiCustomerService2Line />
                                        </span>

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
                            {/* <li>

                                <div className = 'grid-content-area'>
                                    <span className = 'b-icon'><CgWebsite /></span>
                                    <div className = 'grid-content-area-content'>
                                        <h1>Risk Assessment</h1>
                                        <p>
                                        <span className = 'i-icons-side'>
                                                <MdKeyboardDoubleArrowRight />
                                                </span>

                                                <span>
                                                    Client Infrastructure
                                                </span>
                                            </p>
                                            <p>
                                            <span className = 'i-icons-side'>
                                                <MdKeyboardDoubleArrowRight />
                                                </span>

                                                <span>
                                                    Identify vulnerabilities
                                                </span>

                                            </p>
                                                     
                                    </div>
                                </div>
                            </li> */}
                            <li>

                                <div className = 'grid-content-area'>
                                <span className = 'b-icon'><CgWebsite /></span>
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
                            </li>
                            <li>

                                <div className = 'grid-content-area'>
                                    <span className = 'b-icon'><BsFillBugFill /></span>
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
                                            <p className = 'cond-reg'>
                                            Careful Watchers conduct's regular risk assessments to 
                                            identify potential security threats and vulnerabilities in the 
                                            client's IT infrastructure. This can involve analyzing the client's network, software, hardware, and other 
                                            IT assets to identify potential security weaknesses.
                                            </p>
                                    </div>
                                    <span className = 'list-icon-side' onClick = {()=>{
                                        document.querySelector(".cond-reg").style.minHeight = "220px";
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
                                    <span className = 'list-icon-side' onClick = {()=>{
                                        document.querySelector(".awt-cont").style.minHeight = "220px";
                                    }}>
                                        <BsShieldPlus />
                                    </span>
                                </li> 

                                <li>
                                <div className = 'list-content-side'>
                                            <h2>Implement Robust Security Solutions</h2>
                                            <p>
                                            Careful Watchers implement robust security solutions to protect our client's IT infrastructure. This can include installing firewalls, intrusion detection and prevention systems, antivirus software, and other security tools
                                            </p>
                                    </div>
                                    <span className = 'list-icon-side'>
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
            <ThirdDiv showAbout = {false} showInitial= {true} coreValues = {false} showCards = {true}/>
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
                                    >Access Control</li>
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
                                    >Physical Access</li>
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





                      <div className = 'page-two-highlight'>
                            <h1>About Us</h1>
                        <p>
                        At Careful Watchers, we have a unique pattern that sets us apart from other cyber security providers. We call it the "360-Degree Protection" approach.    

                        </p>
                                            </div>

{
    showAbout

    &&
    <MoreAbtContent />
}

                {
                    coreValues
                    &&
                    
                    <div className = 'page-cards'>
                        <div className = 'page-two-highlight'>
                            <h1>Our Core Values</h1>
                        </div>
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

<center>

                    
<Link to = '/getquote'>
            <input type ='button' value = 'Contact Us' className ='anim-btn'/>
</Link>

</center>
                    </div>


                }

                {
                    showCards
                    &&
                    <div className = 'page-cards'>
                        <div className = 'each-card'>
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
                        </div>
                        <div className = 'each-card'>
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
                        </div>
                        <div className = 'each-card'>
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
                        </div>
                        <div className = 'each-card'>
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
                        </div>
                    </div>
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
                        <p>
                        Our 360-Degree Protection approach includes training and awareness programs for employees, phishing simulations, and social engineering assessments to identify potential weaknesses in your organization's processes and policies. By addressing both technical and non-technical aspects of cyber security, we can provide a comprehensive solution that minimizes your risk of a breach or cyber attack.
                        </p>

                        <p>
                        With our team of certified cyber security consultants, we can help you identify, prioritize, and respond immediately to threats and vulnerabilities in your system. Our collaborative approach involves working closely with you to develop a clear risk management process tailored to your business operations. We provide simple, visual reporting that resonates clearly with business executives while speaking their language.
                        </p>


                         </div>

        </>
    )
}
export {SecondPage, ThirdDiv, DarkDiv, MoreAbtContent}