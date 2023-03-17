import React, {useState, useEffect} from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import SmallHero from "../Components/SmallHero";
import Spinner from "../Components/Spinner";


const Register = ()=>{
    const [formInfo, setFormInfo] = useState({firstName : "",
    lastName : "",
    email: "", password : ""});
    const [defaultState, setDefaultState] = useState("Register");
    const [isLoading, setLoading] = useState(false);

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

    async function handleLogin(e){
        e.preventDefault();
        if(formInfo.email === "" || formInfo.password === ""){
            alert("Please Enter correct values");
        }else{
            setLoading(true);

            const url = "http://localhost:1337/api/login-user";

            const data = {
                emailField : formInfo.email,
                passwordField : formInfo.password
            }
            await axios.post(url, {data}).then(function(response){
                if(response !== "null"){
                    console.log(response.data);
                    localStorage.setItem("UserName", response.data.name);
                    localStorage.setItem("UserEmail", response.data.email);
                    navigate("/dashboard");
                    setLoading(false);
                }
                else{

                    setLoading(false);
                    alert("Your Login information is not correct, please re-check");
                }

                console.log(response);
            });
        }

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

        if(formInfo.firstName === "" || formInfo.lastName === "" || formInfo.email === "" || formInfo.password === ""){
            alert("Please fill out all fields")
        }else{

        setLoading(true);

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
                <button type = 'submit' className = 'anim-btn'>
                Register
                {
                    isLoading
                    &&
                    <Spinner />
                }
                    </button>
            </form>

            <br />

                <center>
                    <p>
                        <h3>OR</h3>
                    </p>
                    <input type = 'button' value = 'Login' onClick = {()=>{
                        setDefaultState("Login");
                    }} className = 'link-btn' />
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

        
            <form className = 'signup-form' action = '' method = 'post' onSubmit = {handleLogin}>

                <input type = 'email'  onChange={setFD} placeholder = 'Email Address' name = 'email' value = {formInfo.email} />
                <input type = 'password' onChange={setFD}  placeholder="Password" name = 'password' value = {formInfo.password} />
                <button type = 'submit' className = 'anim-btn'>

                        Login {isLoading && <Spinner />}
                    </button>
            </form>

                <br />
                <center>
                    <p>
                        <h3>OR</h3>
                    </p>
                    <input type = 'button' value = 'Register' onClick = {()=>{
                        setDefaultState("Register");
                    }} className = 'link-btn' />
                </center>
            </section>

            </section>


            <Footer />
        </>
    );
}
export {Register};