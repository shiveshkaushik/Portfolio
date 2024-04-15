import React from "react";
import './Home.css';
import dp from '../assets/profilepic.jpg';
import gitP from '../assets/icons8-github-48.png';
import insP from '../assets/icons8-instagram-48.png';
import likP from '../assets/icons8-linkedin-48.png';
import twiP from '../assets/icons8-twitter-48.png';

function Home() {
    

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hi,</span>
                <span className="introtext">I'm <span className="introname">Shivesh</span><br />An enthusiastic Web Developer</span><br />
                <div className="home-sci">
                    <a href="#"><img src= {gitP}alt="" /></a>
                    <a href="#"><img src={insP} alt="" /></a>
                    <a href="#"><img src={likP} alt="" /></a>
                    <a href="#"><img src={twiP}alt="" /></a>
                </div>
            </div>
            <img src={dp} alt="profilePic" className="bg" />
           
        </section>
    );
}

export default Home;
