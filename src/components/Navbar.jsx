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
                            <a className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item">Portfolio</a>
                        </li>
                        <li>
                            <a className="menu-item">Resume</a>
                        </li>
                        <li>
                            <a className="menu-item">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
