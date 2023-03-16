import React from "react";
import BlogComponent from "../Components/BlogComponent";
import SmallHero from "../Components/SmallHero";
import Footer from "../Components/Footer";
const BlogPage = () =>{

    return (

        <>
            <SmallHero title = 'Blog' />
            <BlogComponent blogType = "detail" editable = {false} />
            <Footer />
        </>
    )
}


const BlogPageAdmin = () =>{

    return(
        <>
        <BlogComponent blogType = "detail" editable = {true} />
        </>
        
    )
    
}
export  {BlogPage, BlogPageAdmin}