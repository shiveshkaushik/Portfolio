import React from "react";
import './About.css'; 
import abu from '../assets/aboutimg1.png'

function About() {
    return (
        <section id="about">
            <div className="aboutContent">
                <h2>About Me</h2>
                <p>
                    Hello! I'm Shivesh Kaushik, currently pursuing my engineering degree in Computer Science from the Vellore Institute of Technology, Vellore.
                </p>
                <p>
                    As a travel enthusiast, I find joy in exploring new places, experiencing different cultures, and creating lasting memories.
                </p>
                <p>
                    Outside of coding and travel adventures, I enjoy playing tennis and constantly seek to learn and grow.
                </p>
                <p>
                    For more information, you can refer to my <a href="https://in.linkedin.com/in/shivesh-kaushik-1a919624a">LinkedIn</a> page.
                </p>
            </div>

            <img src={abu} alt="About" className="abu"/>
        </section>
    );
}

export default About;
