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



const FAQComponent = () =>{

    return (

        <>
            <section className = 'small-hero' id = 'serv'>
                <section className = 'small-hero-content'>
                    <h1 className = 'small-hero-title'>Careful Watchers FAQ</h1>
                </section>
            </section>
            <section className = 'service-page'>
                <section className = 'service-page-content'>
                    <div className = 'page-two-highlight'>




                        <h3>
                        What is cyber security?
                        </h3>

                        <p className = 'frame-box'>
                        Cyber security refers to the protection of computer systems, networks, and sensitive data from theft, damage, or unauthorized access.

                        </p>
                       

                    </div>

<div className = 'page-two-highlight'>


                        <h3>
                            What does Careful Watchers Offer
                        </h3>

                        <p className = 'frame-box'>
                        Careful Watchers offers comprehensive information security and data privacy services to protect client companies. Our services include risk assessments, threat and vulnerability identification and mitigation, risk management processes, and strategic planning and budgeting.
                        <br />

                        </p>

</div>

<div className = 'page-two-highlight'>



                        <h3>
                            How can your company help Protect My Business?
                        </h3>

                        <p className = 'frame-box'>
                        We offer a range of services to help protect your business, including vulnerability assessments, penetration testing, security audits, employee training, and incident response planning.
threats.
<br />

                        </p>

</div>


<div className = 'page-two-highlight'>

                        <h3>
                        Can your company help me comply with data protection regulations?
                        </h3>

                        <p className = 'frame-box'>
                        Yes, we can help you comply with data protection regulations such as GDPR and the Data Protection Act 2018. We can assist with data mapping, risk assessments, policy development, and other compliance-related activities
<br />

                        </p>

</div>



<div className = 'page-two-highlight'>



                        <h3>
                        What kind of businesses do you work with?
                        </h3>

                        <p className = 'frame-box'>
                        We work with businesses of all sizes and across all industries, including finance, healthcare, retail, and manufacturing. We also provide services to individuals who want to protect their personal data and devices.

                        </p>


                        </div>

                        <div className = 'page-two-highlight'>


                        <h3>
                        How do I know if my business needs cyber security services?                        
                        </h3>

                        <p className = 'frame-box'>
                        Every business that uses computers and stores data is at risk of cyber threats. If you want to protect your business from data breaches, ransomware attacks, and other cyber threats, then cyber security services are essential.
<br />

                        </p>

</div>


<div className = 'page-two-highlight'>



                        <h3>
                        How do I know if my business needs cyber security services?
                        </h3>

                        <p className = 'frame-box'>
                        How do I know if my business needs cyber security services?
<br />

                        </p>




                        <h3>
                        How experienced are Careful Watchers' cybersecurity consultants?
                        </h3>

                        <p className = 'frame-box'>
                        Our certified cybersecurity consultants have over 5 years of experience in key disciplines. They are highly skilled in locating, evaluating, and treating risks based on the client’s business operations.
<br />

                        </p>








                        <h3>
                        What sets Careful Watchers apart from other cybersecurity companies?
                        </h3>

                        <p className = 'frame-box'>
                        Careful Watchers is dedicated to building strong, long-term relationships with our clients. We prioritize collaboration and communication, and we offer simple, visual reporting that speaks the language of business executives. We are committed to exceptional service and support, and we are continuously improving our services based on updated information and innovative solutions.
<br />

                        </p>






                        <h3>
                        How does Careful Watchers approach cybersecurity?
                        </h3>

                        <p className = 'frame-box'>
                        At Careful Watchers, we believe that cybersecurity is not just about technology, but about people and processes as well. We take a proactive approach to cybersecurity by constantly monitoring the threat landscape and working to identify and mitigate potential risks before they can cause harm. Our solutions are designed to be flexible and scalable, allowing us to meet the unique needs of businesses and organizations of all sizes and industries.

<br />

                        </p>





                        





                        <h3>
                        What should I do if I suspect a cyber attack?                        
                        </h3>
                       

                        <p className = 'frame-box'>
                        If you suspect a cyber attack, you should immediately contact our incident response team. We can help you contain the attack, investigate the incident, and restore your systems and data. It is important to act quickly to minimize the damage caused by a cyber attack.
<br />

                        </p>









                        <h3>
                        How can I get started with Careful Watchers?
                        </h3>

                        <p className = 'frame-box'>
                        If you are interested in learning more about how Careful Watchers can help protect your business or organization from cyber threats, please contact us through our website or by phone. We will be happy to discuss your specific needs and provide a customized solution

<br />

                        </p>                        




                    </div>
                </section>
            </section>


            <Footer />
        </>
    )
}

export default FAQComponent;