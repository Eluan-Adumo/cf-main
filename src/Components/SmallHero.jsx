import React from "react";
import {BsFillSquareFill} from "react-icons/bs";

const SmallHero =(props) =>{

    return(
        <>
            <section className = 'small-hero'>
                <section className = 'small-hero-content'>
                    <h1 className = 'small-hero-title'><span className = 'home-title'>HOME
                        &nbsp; <span className = 'square-fill'> <BsFillSquareFill /></span>&nbsp;&nbsp;
                    </span>{props.title}</h1>
                </section>
            </section>
        </>
    )
}


export default SmallHero;