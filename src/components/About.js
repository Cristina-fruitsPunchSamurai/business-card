import React from "react"

export default function About() {
    return (
        <section className="about">
            <h3 className="about--title"> About </h3>
            <p className="about--content">I'm a former Traffic Manager who decided to change my career path by becoming a frontend developer. 
            I love challenges <img src={process.env.PUBLIC_URL + '/images/force.png'} className="about--emoticon" /> ! My goal is to become an expert in JavaScript.
            </p>
        </section>
    )
}