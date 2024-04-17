import React from "react";
import './Skills.css';
import SkillCard from "./SkillCard";
import hIcon from '../assets/icons8-html-5-48.png'
import cIcon from '../assets/icons8-css-48.png'
import jIcon from '../assets/icons8-javascript-48.png'
import rIcon from '../assets/icons8-react-native-48.png'
import sIcon from '../assets/icons8-swift-48.png'
import nIcon from '../assets/icons8-node-js-48.png'
import eIcon from '../assets/icons8-express-js-64.png'
import mIcon from '../assets/icons8-mongo-db-64.png'
import gIcon from '../assets/icons8-git-48.png'
import gtIcon from '../assets/icons8-github-48.png'
import fIcon from '../assets/icons8-figma-48.png'


function Skills()
{
    return(
        <section id="skills" className="skill">
    <div className="inner">
        <div className="header">
            <h1>Skills</h1>
        </div>
        <h2 className="headings">FrontEnd</h2>
        <div className="my-grid">
        <SkillCard icon={hIcon} name="HTML"></SkillCard>
        <SkillCard icon={cIcon} name="CSS"></SkillCard>
        <SkillCard icon={jIcon} name="JAVASCRIPT"></SkillCard>
        <SkillCard icon={sIcon} name="REACT"></SkillCard>
        <SkillCard icon={rIcon} name="SWIFT"></SkillCard>
        </div>
        <br /><br /><br />
        <h2 className="headings">BackEnd</h2>
        <div className="my-grid">
        <SkillCard icon={nIcon} name="NODE JS"></SkillCard>
        <SkillCard icon={eIcon} name="EXPRESS JS"></SkillCard>
        <SkillCard icon={mIcon} name="MONGO DB"></SkillCard>
        </div>
        <br /><br /><br />
        <h2 className="headings">Other</h2>
        <div className="my-grid">
        <SkillCard icon={gIcon} name="GIT"></SkillCard>
        <SkillCard icon={gtIcon} name="GITHUB"></SkillCard>
        <SkillCard icon={fIcon} name="FIGMA"></SkillCard>
        </div>
    </div>
    </section>
)
}


export default Skills