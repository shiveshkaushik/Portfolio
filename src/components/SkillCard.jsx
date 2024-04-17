import React from "react";
import './SkillCard.css';

function SkillCard(props)
{
    
    return(
        <div className="card">
                    <img className="card-image" src={props.icon} alt="skillLogo" />
                    <h3 className="card-title">{props.name}</h3>
        </div>
    )
}

export default SkillCard