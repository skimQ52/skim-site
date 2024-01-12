import React from 'react';

export default function ProjectItem(props) {
    let list = [];
    props.list.forEach((item, index)=>{
        list.push(<h2 className="subsubheaderProjects">{item}</h2>)
        if (index !== props.list.length-1) {
            list.push(<hr style={{color: "rgb(209, 209, 209)"}}></hr>)
        }
    })
    return (
        <a href={props.link} target="_blank" style={{textDecoration:"none", color: "inherit"}}>
        <div className="blockProjects">
            <h2 className="headerProjects">{props.title}</h2>
            <h2 className="subheaderProjects">{props.desc}</h2>
            <div className="columnProjects">
                {list}
            </div>
            <img className="picProjects" src={props.pic}></img>
            <h2 className="linkProjects">{props.linkText}</h2>
        </div>
        </a>
    );
}