import React from "react";
import Footer from "./Footer";


const GetQuot = ()=>{


    return(
<>



{/* <form   method = "POST" action =  "https://formsubmit.co/support@carefulwatchers.co.uk" className = 'page-right'>
            <div className = 'name-area'>
                <input type = 'text' placeholder = 'First name' id = 'f-name' onChange={(e)=>{
                     setUFName(e.target.value);
                }
                }/>
                <input type = 'text' placeholder = 'Last Name' id = 'l-name' onChange = {(e)=>{
                    setULName(e.target.value);
                }
                }/>
            </div>
            <div className = 'email-area'>
                <input type = 'Email' placeholder = 'email address' id = 'email-main' onChange={(e)=>{
                    setUEmail(e.target.value);
                }
                }/>
            </div>
            <div className = 'company-area'>
                <input type = 'text' placeholder="Company" id = 'company-main' onChange={(e)=>{
                setUCompany(e.target.value);
                }
                }/>

            </div>

               <input type="hidden" name="_autoresponse" value="Thank you for your interest in our service and for signing up for our waitlist! We are thrilled to have you on board and look forward to offering you our best services.

                                            As you know, we have limited availability and high demand for our offerings, and we appreciate your patience and understanding as we work to accommodate everyone on our waitlist.

                                            Rest assured that we will keep you updated on your status and notify you as soon as a spot becomes available.
                                            In the meantime, please feel free to reach out to us if you have any questions or concerns. We appreciate your trust in us and are confident that you will find our service worth the wait.

                                            Thank you again for your interest in our cyber security service!

                                            Best regards,
                                            Careful Watchers" />
               <input type = 'hidden' name = '_captcha' value = 'false' />
               <input type = 'hidden' name = '_template' value = 'table' />
            <div>
               
                <input type = 'submit'  value ='Join The Waitlist' id = 'join-btn' />
            </div>
</form> */}
        <section className = 'g-quote'>

            <section className = 'g-quote-content'>

                <form action = 'https://formsubmit.co/support@carefulwatchers.co.uk' className = 'page-two-content quotations'>
                    <input type = 'email' name = 'email' placeholder = 'Email address' />
                    <input type = 'text' name = 'name' placeholder = 'Company name' />

                    
               <input type="hidden" name="_autoresponse" 
               
               value="Thank you for your interest in our service and for signing up for our waitlist! We are thrilled to have you on board and look forward to offering you our best services.

                    As you know, we have limited availability and high demand for our offerings, and we appreciate your patience and understanding as we work to accommodate everyone on our waitlist.

                    Rest assured that we will keep you updated on your status and notify you as soon as a spot becomes available.
                    In the meantime, please feel free to reach out to us if you have any questions or concerns. We appreciate your trust in us and are confident that you will find our service worth the wait.

                    Thank you again for your interest in our cyber security service!

                    Best regards,
                    Careful Watchers"
 />
<input type = 'hidden' name = '_captcha' value = 'false' />
<input type = 'hidden' name = '_template' value = 'table' />
                    <input type = 'submit' value = 'Submit' className = 'anim-btn' />
                </form>
            </section>
        </section>
        <Footer />
</>

    );
}




export default GetQuot;