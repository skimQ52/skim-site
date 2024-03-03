import React, {useState} from 'react';
import Fade from "react-reveal/Fade";
import {SiGithub} from "react-icons/si";

export default function ProjectItem(props) {

    const [isHovered, setIsHovered] = useState(false);

    let list = [];
    props.list.forEach((item, index)=>{
        list.push(<h3 className="subheaderProjects">{item}</h3>)
        if (index !== props.list.length-1) {
            list.push(<hr style={{color: "rgb(209, 209, 209)"}}></hr>)
        }
    });

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className={"Project"}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
        >
            <div className='project-header'>
                <h2 className>{props.title}</h2>
                <h3 className="subheaderProjects">{props.desc}</h3>
            </div>
            <div className='project-body'>
                <div className="columnProjects">
                    {list}
                </div>
                <img className="picProjects" src={props.pic}></img>
            </div>
            {isHovered && <div className="overlay"></div>}
            {isHovered && props.github &&  (
                <Fade>
                    <a href={props.github} target="_blank" style={{textDecoration:"none", color: "inherit", padding: '-25px'}}>
                        <SiGithub className={"overlay-button"}/>
                    </a>
                </Fade>
            )}
        </div>
    );
}