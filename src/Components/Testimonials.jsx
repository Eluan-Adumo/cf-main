import React from "react"
import {ImQuotesLeft} from "react-icons/im";
import {AiFillStar} from "react-icons/ai"
import test1 from "../resources/images/client1-1-1-1-1.jpg";
import hacker from "../resources/images/hacker_1-1-1-1-1.jpg";
import {BsFillCheckSquareFill} from "react-icons/bs";

const Testimonials = ()=>{
    return (

        <>
        <section className = 'testimonials'>
            <section className = 'testimonials-content'>
                <div className = 'testimonials-title-area'>
                    <h1>What Client Say About Us</h1>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Doloribus quam neque quibusdam corrupti aspernatur 
                    corporis alias nisi dolorum expedita veritatis voluptates minima.
                    </p>
                </div>

                <div className = 'testimonials-main-area'>
                    <ul>
                        {/* <li>
                            <div className = 'each-test'>
                               
                                <div className = 'each-test-main'>
                                <center>
                                    <div className = 'quots'>
                                    <ImQuotesLeft />
                                    </div>
                                </center>
                                <div className = 'each-test-main-content'>
                                            <div className = 'each-text-main-content-text'>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi 
                                            .
                                            </div>
                                            <div className = 'each-text-main-content-stars'>
                                                <AiFillStar /><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                                            </div>
                                        </div>
                                </div>
                                <div className = 'each-test-triangle'>

                                </div>
                                <div className = 'each-test-holder'>
                                <img src = {test1} />
                                    <div className = 'each-test-name-area'>
                                        <h2>JOHN DOE</h2>
                                        <p className = 'role'>CEO</p>
                                    </div>
                                </div>
                            </div>
                        </li> */}

                        {/* <li>
                            <div className = 'each-test'>
                                <div className = 'each-test-main'>
                                 <center><span className = 'quots'><ImQuotesLeft /></span></center>

                                <div className = 'each-test-main-content'>
                                            <div className = 'each-text-main-content-text'>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi 
                                            .
                                            </div>
                                            <div className = 'each-text-main-content-stars'>
                                                <AiFillStar /><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                                            </div>
                                        </div>
                                </div>
                                <div className = 'each-test-triangle'>

                                </div>
                                <div className = 'each-test-holder'>
                                    <img src = {test1} />
                                    <div className = 'each-test-name-area'>
                                        <h2>JOHN DOE</h2>
                                        <p className = 'role'>CEO</p>
                                    </div>
                                </div>
                            </div>
                        </li> */}

                        <li>
                            <div className = 'each-test'>
                                <div className = 'each-test-main'>
                                <center><span className = 'quots'><ImQuotesLeft /></span></center>

                                        <div className = 'each-test-main-content'>
                                            <div className = 'each-text-main-content-text'>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi 
                                             .
                                            </div>
                                            <div className = 'each-text-main-content-stars'>
                                                <AiFillStar /><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                                            </div>
                                        </div>
                                </div>
                                <div className = 'each-test-triangle'>

                                </div>
                                <div className = 'each-test-holder'>
                                <img src = {test1} />
                                    <div className = 'each-test-name-area'>
                                        <h2>JOHN DOE</h2>
                                        <p className = 'role'>CEO</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className = 'each-test'>
                                <div className = 'each-test-main'>
                                <center><span className = 'quots'><ImQuotesLeft /></span></center>

                                <div className = 'each-test-main-content'>
                                            <div className = 'each-text-main-content-text'>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi 
                                            .
                                            </div>
                                            <div className = 'each-text-main-content-stars'>
                                                <AiFillStar /><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                                            </div>
                                        </div>
                                </div>
                                <div className = 'each-test-triangle'>

                                </div>
                                <div className = 'each-test-holder'>
                                <img src = {test1} />
                                    <div className = 'each-test-name-area'>
                                        <h2>JOHN DOE</h2>
                                        <p className = 'role'>CEO</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className = 'each-test'>
                                <div className = 'each-test-main'>
                                <center><span className = 'quots'><ImQuotesLeft /></span></center>

                                <div className = 'each-test-main-content'>
                                            <div className = 'each-text-main-content-text'>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi 
                                            .
                                            </div>
                                            <div className = 'each-text-main-content-stars'>
                                                <AiFillStar /><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                                            </div>
                                        </div>
                                </div>
                                <div className = 'each-test-triangle'>

                                </div>
                                <div className = 'each-test-holder'>
                                <img src = {test1} />
                                    <div className = 'each-test-name-area'>
                                        <h2>JOHN DOE</h2>
                                        <p className = 'role'>CEO</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* <li>
                            <div className = 'each-test'>
                                <div className = 'each-test-main'>
                                <center><span className = 'quots'><ImQuotesLeft /></span></center>

                                <div className = 'each-test-main-content'>
                                            <div className = 'each-text-main-content-text'>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi 
                                            .
                                            </div>
                                            <div className = 'each-text-main-content-stars'>
                                                <AiFillStar /><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                                            </div>
                                        </div>
                                </div>
                                <div className = 'each-test-triangle'>

                                </div>
                                <div className = 'each-test-holder'>
                                <img src = {test1} />
                                    <div className = 'each-test-name-area'>
                                        <h2>JOHN DOE</h2>
                                        <p className = 'role'>Developer</p>
                                    </div>
                                </div>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </section>
        </section>
        <FourthPath />
        </>
    )
}


const FourthPath = ()=>{
    return (
        <>
            <section className = 'fourth-page'>
                    <section className = 'fourth-page-content'>
                                <div className = 'fourth-up'>
                                    <div className = 'left-fourth'>
                                        <h1>
                                        24/7 Cybersecurity Operation Center
                                        </h1>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                        dolore magna aliqua. Quis ipsum suspendisse.
                                        </p>
                                        <ul>
                                            <li>
                                               <span className = 'c-icon-side'><BsFillCheckSquareFill /></span> Managed Web Applications
                                            </li>
                                            <li>
                                                <span className = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>Instant Malware Removal</span>
                                            </li>
                                            <li>
                                                <span className = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>SIEM Threat Detection</span>
                                            </li>
                                            <li>
                                                <span className = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>Content Delivery Network</span>
                                            </li>
                                            <li>
                                                <span className = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>24/7 Hours Services</span>
                                            </li>
                                            <li>
                                                <span className = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>Security Management</span>
                                            </li>
                                            <li>
                                                <span className = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>Instant Malware Removal</span>
                                            </li>
                                            <li>
                                                <span className = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>Free Delivery Services</span>
                                            </li>
                                            <li>
                                                <span className = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>Website Hack Repair</span>
                                            </li>
                                            <li>
                                                <span class = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>Provide Security Services</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className = 'right-fourth'>
                                        <img src = {hacker} />
                                    </div>
                                </div>

                                {/* <div className = 'fourth-down'>
                                    <div className = 'fourth-title'>
                                        <h1>
                                        Latest News From Blog
                                        </h1>
                                        <p>
Comming Soon
                                        </p>
                                    </div>

                                    <div className = 'f-d-cards'>
                                        <div className = 'f-d-cards-each c1'>
                                            
                                            <div className = 'fdcards-text'>
                                                <h1>Secure Managed IT</h1>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                sed do eiusmod tempor incididunt ut labore
                                                </p>
                                            </div>
                                        </div>

                                        <div className = 'f-d-cards-each c2'>
                                                                                        <div className = 'fdcards-text'>
                                                <h1>Secure Managed IT</h1>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                sed do eiusmod tempor incididunt ut labore
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className = 'f-d-cards-each c3'>
                                                                                        <div className = 'fdcards-text'>
                                                <h1>Secure Managed IT</h1>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                sed do eiusmod tempor incididunt ut labore
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                    </section>
            </section>
        </>
    )
}

export default Testimonials;