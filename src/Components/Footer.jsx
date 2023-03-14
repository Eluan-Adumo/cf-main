import React, {useState} from "react"
import {MdPhoneInTalk} from "react-icons/md";
import {FiMail} from "react-icons/fi";
import {BiLocationPlus} from "react-icons/bi";
import { Link } from "react-router-dom";
import {MdKeyboardDoubleArrowRight} from "react-icons/md"
import {BiArrowBack} from "react-icons/bi"


const PrivacyPolicy = ()=>{
    return(

        <>
        
        <h1 style = {{
            fontSize: "30px"
        }}>Privacy Policy</h1>
        <p>

        This Privacy Policy describes how we collect, use, and disclose information through our website. By accessing or using our 
        website, you agree to the terms of this Privacy Policy.
        </p><br />


        <h3>
        Information Collection and Use
        </h3>

        <p>

        We may collect personal information from you, such as your name and email address, when you voluntarily submit it to us through our website. We may use this information to communicate with you, respond to your inquiries, to process payment, to comply with legal requirements and provide you with the products or services you request. We may also use your personal information to send you marketing and promotional materials that we think may be of interest to you.        
        </p><br />
        <p>
        We may collect personal information from you, such as your name and email address, when you voluntarily submit it to us through our website. We may use this information to communicate with you, respond to your inquiries, to process payment, to comply with legal requirements and provide you with the products or services you request. We may also use your personal information to send you marketing and promotional materials that we think may be of interest to you.

        </p><br />

<h3>
Cookies and Other Technologies
</h3>

<p>
We may use cookies and other technologies, such as web beacons, to collect information about your use of our website. Cookies are small data files that are stored on your device when you visit a website. Web beacons are small graphic images that may be included on our website usage.  We may use this information to personalize your experience.
</p><br />


<h3>Data Security</h3>

<p>We may use cookies and other technologies, such as web beacons, to collect information about your use of our website. Cookies are small data files that are stored on your device when you visit a website. Web beacons are small graphic images that may be included on our website usage.  We may use this information to personalize your experience.
</p><br />

<h3>Data Retention</h3>

<p>

We retain your personal information for as long as necessary to provide our services to you or as required by law. We may retain your personal information for a longer period if necessary for legal or regulatory reasons, such as tax or accounting requirements.
</p><br />


<h3>Disclosure of Information</h3>
<p>
We do not share your personal information with third parties, except as necessary to provide our services to you or as required by law.  We may also disclose your personal information if required to do so by law or if we believe that such disclosure is necessary to protect our rights or the rights of others, to prevent fraud, or to respond to a government request.

</p><br />
<h3>

Your rights
</h3>


<p>
We do not share your personal information with third parties, except as necessary to provide our services to you or as required by law.  We may also disclose your personal information if required to do so by law or if we believe that such disclosure is necessary to protect our rights or the rights of others, to prevent fraud, or to respond to a government request.

</p><br />

<h3>

Changes to this Privacy Policy
</h3>


<p>
We may update this Privacy Policy from time to time. We will post any changes to this Privacy Policy on our website. If we make any material changes to this Privacy Policy, we will notify you by email or by posting a notice on our website.
</p><br />



<h3>

Contact Us
</h3>


<p>
If you have any questions or concerns about our privacy policy or our use of your personal information, please contact us at:
carefulwatchers
Tyrrelstown County, Dublin
info@carefulwatchers.co.uk
https://carefulwatchers.co.uk/
</p>



    
    
        </>
    )
}



const Terms = ()=>{
    return(

        <>
        
        <h1 style = {{
            fontSize: "30px"
        }}>Terms &amp; Conditions</h1>
        <p>

        These terms and conditions (Terms) govern your use of the services  provided by Careful Watchers Careful Watchers  a cyber security company registered in Ireland with its principal place of business at [address].
        </p><br />


        <h3>
        Acceptance of Terms
        </h3>

        <p>

        By accessing or using the Services, you agree to be bound by these Terms, including any additional terms and conditions and policies referenced herein or available by hyperlink.       
         </p><br />


<h3>
Services
</h3>

<p>
The Company offers a variety of cyber security services to its clients, including but not limited to, vulnerability assessments, penetration testing, security assessments, incident response, and managed security services. The Services may be subject to change or discontinuation at any time, with or without notice.</p><br />


<h3>Client Obligations</h3>

<p>
Clients must provide the Company with accurate and complete information about their organization and systems that will be the subject of the Services. Clients are responsible for ensuring that their systems and networks comply with applicable laws and regulations. Clients must cooperate with the Company during the provision of the Services, including providing necessary access and permissions
</p><br />

<h3>Confidentiality</h3>

<p>

The Company will maintain the confidentiality of all information provided by clients and will only use such information for the purpose of providing the Services. The Company will not disclose any client information to third parties without the prior written consent of the client, except as required by law.
</p><br />


<h3>Intelectual Property</h3>
<p>
The Company retains all intellectual property rights in the Services, including all reports and other deliverables. Clients are granted a non-exclusive, non-transferable license to use the deliverables for internal purposes only.
</p><br />
<h3>

Limitation of Liability
</h3>


<p>
The Company will not be liable for any damages, including but not limited to, direct, indirect, incidental, special, or consequential damages arising from or in connection with the Services. The liability of the Company to any client shall be limited to the amount paid by the client for the Services.

</p><br />

<h3>

Indemnification
</h3>


<p>
Clients agree to indemnify and hold the Company harmless from any and all claims, damages, losses, and expenses, including reasonable attorneys' fees, arising from or in connection with their use of the Services.
</p><br />



<h3>

Governing Law
</h3>


<p>
These Terms shall be governed by and construed in accordance with the laws of Ireland. Any disputes arising from or in connection with these Terms shall be resolved in the courts of Ireland.

</p>
<br />

<h3>

Entire Agreement
</h3>


<p>
These Terms constitute the entire agreement between the Company and clients and supersede all prior or contemporaneous communications and proposals, whether oral, written or electronic
</p>
<br />

<h3>

Modifications
</h3>


<p>
The Company reserves the right to modify these Terms at any time, with or without notice. Clients are responsible for regularly reviewing these Terms. Continued use of the Services after any modification constitutes acceptance of the modified Terms.
</p>
<br />
<h3>

Contact Information
</h3>


<p>
If you have any questions or concerns about these Terms or the Services provided by the Company, please contact us at  
+353 (0)89 262 1986
info@caerfulwatchers.co.uk
</p>



    
    
        </>
    )
}
const Footer = () =>{
    const [showPP, setShowPP] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [showBox, setShowBox] = useState(false);

   
    return (
        <>
        {
            showBox
            &&
        
         <section className = 'pop-up'>
                    <section className = 'pop-up-content'>
                        
                    <div className = 'pop-upheader'>
                        <div className = 'pop-up-header-text'>

                        </div>
                        <button className = 'b-arr' onClick = {()=>{
                            setShowPP(false);
                            setShowTerms(false);
                            setShowBox(false);
                        }}>
                            <BiArrowBack />
                        </button>
                        
                    </div>
                    <div className = 'pop-up-body'
                        style = {{
                            display: showPP ? `block` : `none`
                        }}
                    >

                        
                           <PrivacyPolicy />
                    </div>


                    <div className = 'pop-up-body'
                        style = {{
                            display: showTerms ? `block` : `none`
                        }}
                    >

                        
                           <Terms />
                    </div>
                    </section>
                </section>

}
            <footer>
               
               <section className = 'footer-content'>

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

                    <div>
                        <h3>Contact Info</h3>
                        <ul>
                            <li>
                                <span className = 'f-icon-side'>
                                    <MdPhoneInTalk />
                                </span>
                                <span className = 'f-text-side'>
                                <p>
                                +353 (0) 89 262 1986
                                </p>
                                </span>
                                </li>
                            <li>
                            <span className = 'f-icon-side'>
                                    <FiMail />
                                </span>
                                
                                <span className = 'f-text-side'> <p>info@carefulwatchers.com</p></span>
                                </li>
                            <li>
                            <span className = 'f-icon-side'>
                                    <BiLocationPlus />
                                </span>
                                <span className = 'f-text-side'><p>
                                <Link to = '/contactus#f-map'>
                                Tyyrelstown County, Dublin.
                                </Link>
                                </p></span>
                                </li>
                        </ul>
                    </div>
{/* 
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
                    </div>     */}

  
                    <div>
                        
                        <ul>

                           

                        </ul>
                    </div> 


           
               </section>

               <div className = 'post-footer'>
                <div className = 'pf-left'>
                Copyright @2023 Careful Watchers. All Rights Reserved.
                </div>
                <div className = 'pf-right'>
                <span onClick={()=>{
                                setShowBox(true);
                                setShowTerms(true);
                                setShowPP(false);
                            }}>Terms & Conditions</span> &mdash; 
                <span onClick = {()=>{
                    setShowBox(true);
                    setShowPP(true);
                    setShowTerms(false);
                }}>Privacy Policy</span>
                </div>
            </div> 
            </footer>
            
        </>
    )
}

export default Footer;