import React, {useState, useEffect, useRef} from "react"
import { useNavigate } from "react-router-dom";
import SmallHero from "../Components/SmallHero";
import {RiImageAddFill} from "react-icons/ri";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import Spinner from "../Components/Spinner";
import Footer from "../Components/Footer";
import axios from "axios";
import {Link} from "react-router-dom";
import { BlogPageAdmin } from "./BlogPage";

 function Dashboard(){
    const nav = useNavigate();
    const [userInfo, setUserInfo] = useState({
        userName : "",
        userEmail : ""
    });
    
    useEffect(()=>{
        if(localStorage.getItem("UserName") !== null){
            // setUserInfo({
            //     userName : localStorage.getItem("UserName"),
            //     userEmail : localStorage.getItem("UserEmail")
            // });
        }else{
            nav("/accounts");
        }
    });

    return(
        <>
        <SmallHero title = "Dashboard"/>
        <section className = 'dashboard'>
            <DashboardNavigation />
            <div className = 'dashboard-right'>
                    

                    <DashboardUploadArea />
            </div>
        </section>
        <Footer />
        </>
    );

}


const BlogAdminView =()=>{
    return(
        <>
        <SmallHero title = "Dashboard"/>
        <section className = 'dashboard'>
            <DashboardNavigation />
            <div className = 'dashboard-right'>
                    <BlogPageAdmin />
            </div>
        </section>
        <Footer />
        </>
    );
}

function DashboardUploadArea(){
    const [sendingItems, setSendingItems] = useState({articleTitle : "", articleContent : "", imageToSend : null});
    const [imagePreview, setImagePreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const uploadRef = useRef(null);



    function setUploadItems(e){
        setSendingItems({...sendingItems, [e.target.name] :e.target.value})
    }

    function setImage(e){

        
        if(e.target.files.length == 0){
            alert("Please select an Image");
        }else{
            let imageMain = URL.createObjectURL(e.target.files[0]);
            setImagePreview(imageMain);
            setSendingItems({...sendingItems, articleTitle : sendingItems.articleTitle, articleContent : sendingItems.articleContent, imageToSend : e.target.files[0]});
        }

        
    }
    function triggerUpload(){
        uploadRef.current.click();
    }


    async function submitArticle(e){
        e.preventDefault();

        const fd = new FormData();
        fd.append("form-image", sendingItems.imageToSend);
        fd.append("articleTitle", sendingItems.articleTitle);
        fd.append("articleContent", sendingItems.articleContent);
        const data = {
            image: sendingItems.imageToSend,
            title: sendingItems.articleTitle,
            content: sendingItems.articleContent
        };

        if(sendingItems.articleContent === "" || sendingItems.articleTitle === "" || sendingItems.imageToSend === null){
                console.log("Invalid values");
        }else{
            setIsLoading(true);
            await axios.post("http://localhost:1337/api/multer-photo-upload", fd).then(function(response){
                console.log(response);
                setIsLoading(false);
            });
        }

        
        // console.log(data);
    }
    return(
        <>
    <form action = '' name = 'upload-article-form' onSubmit={submitArticle} className = 'upload-form'>
        <input type = 'text' placeholder = 'Article Title' name = 'articleTitle' className = 'art-title' onChange = {setUploadItems}/>
    <br />
        <textarea placeholder = 'Article Content' name = 'articleContent' className = 'art-content' onChange = {setUploadItems}></textarea>
    <br />

        <div className='image-preview'>
            {
                imagePreview && <img src = {imagePreview} style = {{maxWidth: "100%"}}/>
            }
            
        </div>
        <br />

        <button type = 'button' title = "Add an image to your post" id = 'add-img' value = 'Add Image' className = 'act-btn secondary-bg-colored' onClick = {triggerUpload}>
                <RiImageAddFill />
            </button>

        <input type = 'file'  name = 'image' id = "img-upload" className = 'img-upload' ref = {uploadRef} onChange = {setImage} />
        <br />
        <button type = 'submit' title = 'Done? Upload your article' value = 'Upload' className = 'act-btn secondary-bg-colored'>
                Submit  
                {
                    isLoading
                    &&
                    <Spinner />
                }
                
        </button>

        
    </form>
        </>
    )
}

function DashboardNavigation(){

    const nav = useNavigate();
    function signoutUser(){
        localStorage.removeItem("UserName");
        localStorage.removeItem("UserEmail");
        nav("/accounts");
    }
    return(
        <>
                    <div className = 'dashboard-left'>
                <ul>
                    <li>
                       <Link to= '/admin-blog'>Articles</Link> 
                    </li>
                    <li>
                        Messages
                    </li>
                    <li>
                        <Link to = '/dashboard'>Upload</Link>
                    </li>
                    <li onClick={signoutUser}>
                        Logout
                    </li>
                </ul>
            </div>
        </>
    )
}

// function Spinner(){
//     const spin = <span className = 'rotate-this'><AiOutlineLoading3Quarters  /> </span>

//     return (
//         <>
//            {spin}
//         </>
//     );
// }



export {Dashboard, BlogAdminView};