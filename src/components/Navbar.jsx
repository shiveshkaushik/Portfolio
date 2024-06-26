import React from 'react';
import './Navbar.css';

function Navbar() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToAboutMe = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToSkills = () => {
        document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToPortfolio = () => {
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToResume = () => {
        document.getElementById('resume').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <a className="name-class" onClick={scrollToTop}>Shivesh Kaushik</a>
                    <ul>
                        <li>
                            <a className="menu-item" onClick={scrollToAboutMe}>About Me</a>
                        </li>
                        <li>
                            <a className="menu-item" onClick={scrollToSkills}>Skills</a>
                        </li>
                        <li>
                            <a className="menu-item" onClick={scrollToPortfolio}>Portfolio</a>
                        </li>
                        <li>
                            <a className="menu-item" onClick={scrollToResume}>Resume</a>
                        </li>
                        <li>
                            <a className="menu-item" onClick={scrollToContact}>Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
