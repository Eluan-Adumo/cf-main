import React from "react";

const SmallHero =(props) =>{

    return(
        <>
            <section className = 'small-hero'>
                <section className = 'small-hero-content'>
                    <h1 className = 'small-hero-title'>{props.title}</h1>
                </section>
            </section>
        </>
    )
}


export default SmallHero;