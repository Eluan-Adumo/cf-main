import React, {useEffect} from "react"
import {ImQuotesLeft} from "react-icons/im";
import {AiFillStar} from "react-icons/ai"
import test1 from "../resources/images/client1-1-1-1-1.jpg";
import hacker from "../resources/images/hacker_1-1-1-1-1.jpg";
import {BsFillCheckSquareFill} from "react-icons/bs";
import {Link} from "react-router-dom"
import BlogComponent from './BlogComponent'

const Testimonials = ()=>{

    const ScrollAnimation = ()=>{
        const _d = document;
        _d.querySelector(".testimonials-main-area");
    }
    useEffect(() => {
        window.addEventListener('scroll', windowScrolling);
        return () => window.removeEventListener('scroll', windowScrolling);
      }, []);
      const windowScrolling = () => {
        const d = document;
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        console.log(winScroll);
        if (winScroll >= 500) {
              
              
      }
    }
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
                    <ul className = 'animate-scroll'>
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
                                        24/7 Cybersecurity Operations
                                        </h1>
                                        <p style = {{
                                            fontSize: "80%"
                                        }}>
                                        Our goal of 24/7 cybersecurity operations is to provide a layered defense approach to protect against cyber threats and to minimize the impact of security incidents. With these operations in place, organizations can detect and respond to security incidents quickly, minimize damage, and prevent potential breaches, data theft, or unauthorized access to their systems and data.                       
                                        </p>
                                        <ul>
                                            <li style = {{
                                            fontSize: "80%"
                                        }}>
                                               <span className = 'c-icon-side'><BsFillCheckSquareFill /></span>24/7 Hours Services
                                            </li>
                                            <li style = {{
                                            fontSize: "80%"
                                        }}>
                                                <span className = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>Human Support</span>
                                            </li>
                                            <li style = {{
                                            fontSize: "80%"
                                        }}>
                                                <span className = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>SIEM Threat Detection</span>
                                            </li>
                                            <li style = {{
                                            fontSize: "80%"
                                        }}>
                                                <span className = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>Managed Security for SMEs</span>
                                            </li>
                                            <li style = {{
                                            fontSize: "80%"
                                        }}>
                                                <span className = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>Security Management</span>
                                            </li>
                                            <li style = {{
                                            fontSize: "80%"
                                        }}>
                                                <span className = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>Manual Website Penetration</span>
                                            </li>
                                            <li style = {{
                                            fontSize: "80%"
                                        }}>
                                                <span className = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>Encryption of Sensitive data.</span>
                                            </li>
                                            <li style = {{
                                            fontSize: "80%"
                                        }}>
                                                <span className = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>Provide Security Services</span>
                                            </li>
                                            <li style = {{
                                            fontSize: "80%"
                                        }}>
                                                <span className = 'c-icon-side'><BsFillCheckSquareFill /></span><span className = 'c-text-side'>System Updates</span>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className = 'right-fourth'>
                                        <img src = {hacker} />
                                    </div>
                                </div>

                                <div className = 'fourth-down'>
                                    <div className = 'fourth-title'>
                                        <h1>
                                        Latest News From Blog
                                        </h1>

                                    </div>

                                    <div className = 'f-d-cards'>

                                            <BlogComponent blogType = "summary" />
                                    
                                    </div>
                                </div>

                                <center><br />
                                <p style ={{
                                    display: "block",
                                    marginTop: "10px"
                                }}>
                                        <Link to = '/blog#blog1' className = 'quote-btn-2'>Our Blog</Link>
                                </p>
                                    </center> 
                    </section>
            </section>
        </>
    )
}

export default Testimonials;