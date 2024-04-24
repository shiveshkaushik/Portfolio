import React from 'react';
import './Portfolio.css';
import sd from '../assets/swift-roll-dice.jpeg';
import pd from '../assets/1.png';
import td from '../assets/todo.png';
import rd from '../assets/resco.png';

function Portfolio(){
    return (
        <section id="portfolio">
        <div className="portfolio-container">
            <h2 className="title">Projects I've Worked On</h2>

            <div className="project">
                <div className="project-details">
                    <h4>1. iOS App Development</h4>
                    <p>During this iOS application development workshop, I learned Swift UI and its application in creating iOS apps.</p>
                    <p>The workshop also taught me Storyboard UI and various beautification features present in Xcode.</p>
                    <a href="https://github.com/shiveshkaushik/Swift"  target='_blank' class="code-link">Code</a>
                </div>
                <img src={sd} alt="App Roll dice" className="project-img" />
            </div>

            <div className="project">
                <div className="project-details">
                    <h4>2. Pawsome Adoptions</h4>
                    <p>I participated in my first Hackathon - DEVSOC conducted in June 2023.</p>
                    <p>My teammates and I worked on the idea of launching a non-profit pet adoption website where people can adopt their choice of animal.</p>
                    <p>The website also provided information on the animals' health conditions and mentioned any disabilities if present.</p>
                    <a href="https://github.com/shiveshkaushik/Pawsome" target='_blank' class="code-link">Code</a>
                </div>
                <img src={pd} alt="Pawsome Adop" className="project-img" />
            </div>

            <div className="project">
                <div className="project-details">
                    <h4>3. TO DO LIST</h4>
                    <p>I made a to-do list backend using vanila javascript and Express JS module.</p>
                    <p>The porduct uses Mongo DB for database management and storing tasks.</p>
                    <a href="https://github.com/shiveshkaushik/ToDo"  target='_blank' class="code-link">Code</a>
                </div>
                <img src={td} alt="To Do list" className="project-img" />
            </div>
            <div className="project">
                <div className="project-details">
                    <h4>4. Solar Energy Bill Generator</h4>
                    <p>I made a bill generator using HTML,CSS and vanila Javascrip.</p>
                    <p>The bill generator lets the user add/edit/delete a client and generates monthly solar bill.All the bills get stored in the localstorage.</p>
                    <a href="https://github.com/shiveshkaushik/RESCO"  target='_blank' class="code-link">Code</a>
                </div>
                <img src={rd} alt="Resco Bill generator" className="project-img" />
            </div>
        </div>
        </section>
    );
}

export default Portfolio;
