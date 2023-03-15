import React, {useState, useEffect} from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import SmallHero from "../Components/SmallHero";


const Register = ()=>{
    const [formInfo, setFormInfo] = useState({firstName : "",
    lastName : "",
    email: "", password : ""});
    const [defaultState, setDefaultState] = useState("Register");

    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("UserInfo") !==null)
        {
            navigate("/dashboard");
        }

        console.log(localStorage.getItem("UserInfo"));
    }, []);


    function setFD(e){
        setFormInfo({...formInfo, [e.target.name] : e.target.value});
    }

    async function handleSubmit(e){
        e.preventDefault();
        console.log(formInfo);

        // const formD = JSON.stringify(formInfo);
        

        let userName = `${formInfo.firstName} ${formInfo.lastName}`;
        let data = {
            signupEmail : formInfo.email,
            signupPassword : formInfo.password,
            signupName : userName
        };

        await axios.post("http://localhost:1337/api/register", {data}).then((response)=>{
            // response.data.status == "ok" ? localStorage.setItem("userInfo", formD): console.log(response);
            if(response.data.status == "ok"){
                localStorage.setItem("UserName", userName);
                localStorage.setItem("UserEmail", formInfo.email);
                navigate("/dashboard");
            }else{
                console.log(response);
            }
        });
    }

    return defaultState == "Register"? (
        <>
        <SmallHero title = 'Accounts' />
        <section className = 'page-two'>
            <section className = 'page-two-highlight'>

            <div className = 'page-two-highlight'>
                <h1>CREATE AN ACCOUNT</h1>
                <p>Create an account to post articles and blog posts</p>
            </div>

        
            <form className = 'signup-form' action = '' method = 'post' onSubmit = {handleSubmit}>
                <input type = 'text' onChange={setFD}  placeholder="First Name" name = 'firstName' value = {formInfo.firstName} />
                <input type = 'text'  onChange={setFD} placeholder="Last Name" name = 'lastName' value = {formInfo.lastName} />
                <input type = 'email'  onChange={setFD} placeholder = 'Email Address' name = 'email' value = {formInfo.email} />
                <input type = 'password' onChange={setFD}  placeholder="Password" name = 'password' value = {formInfo.password} />
                <input type = 'submit' value = 'Register' className = 'anim-btn' />
            </form>

                <center>
                    <input type = 'button' Value = 'Login' onClick = {()=>{
                        setDefaultState("Login");
                    }} />
                </center>
            </section>

            </section>


            <Footer />
        </>
    ):(
        <>
        <SmallHero title = 'Accounts' />
        <section className = 'page-two'>
            <section className = 'page-two-highlight'>

            <div className = 'page-two-highlight'>
                <h1>LOG INTO AN ACCOUNT</h1>
                <p>Login to an account to post articles and blog posts</p>
            </div>

        
            <form className = 'signup-form' action = '' method = 'post' onSubmit = {handleSubmit}>

                <input type = 'email'  onChange={setFD} placeholder = 'Email Address' name = 'email' value = {formInfo.email} />
                <input type = 'password' onChange={setFD}  placeholder="Password" name = 'password' value = {formInfo.password} />
                <input type = 'submit' value = 'Login' className = 'anim-btn' />
            </form>

                <center>
                    <input type = 'button' Value = 'Register' onClick = {()=>{
                        setDefaultState("Register");
                    }} />
                </center>
            </section>

            </section>


            <Footer />
        </>
    );
}
export {Register};