import React from 'react';
import './Resume.css';
import cl from '../assets/college.jpeg';
import sl from '../assets/school.jpeg';
import myres from '../assets/Shivesh-Resume.pdf';

const Resume = () => {
    return (
        <section id="resume">
        <div className="resume-container">
            <h2 className="section-title">Professional Profile</h2>
            
            <div className="resume-content">
                <div className="text-section">
                    <div className="section">
                        <h4>Education:</h4>
                        <ul>
                            <li>
                                <span className="education-details">B.Tech CSE - VIT VELLORE (2022-2026)</span>
                                <ul>
                                    <li className="education-details">CGPA - 9.08</li>
                                </ul>
                            </li>
                            <li>
                                <span className="education-details">High School - Jayshree Periwal High School (2018-2022)</span>
                                <ul className="education-sublist">
                                    <li>CBSE X - 94%</li>
                                    <li>CBSE XII - 93.2%</li>
                                </ul>
                            </li>
                            <li><span className="education-details">Secondary School - MSMSV (2010-2018)</span></li>
                        </ul>
                    </div>

                    <div className="section">
                        <h4>Experience:</h4>
                        <p>No formal work experience yet, but actively seeking internships to apply theoretical knowledge in practical scenarios.</p>
                    </div>

                    <p className='res'>For more information download my resume</p>

                    <div className="resume-download">
                        <a href={myres} target='_blank' className="download-link">Download Resume</a>
                    </div>
                </div>

                <div className="images-section">
                    <img src={cl} alt="College" className="resume-image" />
                    <img src={sl} alt="School" className="resume-image" />
                </div>
            </div>
        </div>
        </section>
    );
}

export default Resume;