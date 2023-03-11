import React from "react";
import Footer from "./Footer";


const GetQuot = ()=>{


    return(
<>
        <section className = 'g-quote'>

            <section className = 'g-quote-content'>

                <div className = 'page-two-content quotations'>
                    <input type = 'email' placeholder = 'Email address' />
                    <input type = 'text' placeholder = 'Company name' />
                    <input type = 'button' value = 'Submit' className = 'anim-btn' />
                </div>
            </section>
        </section>
        <Footer />
</>

    );
}




export default GetQuot;