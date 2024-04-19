import React from 'react';
import './Footer.css';

function Footer(){
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                <p>Quick Links</p>
                    <a href="#intro">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#resume">Resume</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-info">
                    <p>Shivesh Kaushik &copy;2024</p>
                    <p>Email: shiveshkaushik04@gmail.com</p>
                    <p>Phone: +91 9887466666</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
