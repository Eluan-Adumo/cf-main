import React from "react";
import BlogComponent from "../Components/BlogComponent";
import SmallHero from "../Components/SmallHero";
import Footer from "../Components/Footer";
const BlogPage = () =>{

    return (

        <>
            <SmallHero title = 'Blog' />
            <BlogComponent blogType = "detail" />
            <Footer />
        </>
    )
}

export default BlogPage