import React from "react";
import {
    SiCss3, SiGit, SiGithub,
    SiHtml5,
    SiJavascript,
    SiLaravel,
    SiMongodb, SiMysql,
    SiNodedotjs, SiPython,
    SiReact,
    SiTypescript
} from "react-icons/si";
import {FaJava} from "react-icons/fa";
import Fade from "react-reveal/Fade";

export default function Skills() {
    return <div className={"Skills"}>
        <Fade up>
        <div className={"Skills-text"}>
            <h1 className="rainbow">My Tech Stack</h1>
        </div>

        <div className={"Skills-inner"}>
            <SiReact className={"Skills-icon"}/>
            <SiHtml5 className={"Skills-icon"}/>
            <SiCss3 className={"Skills-icon"}/>
            <SiTypescript className={"Skills-icon"}/>
            <SiJavascript className={"Skills-icon"}/>
            <FaJava className={"Skills-icon"}/>
            <SiLaravel className={"Skills-icon"}/>
            <SiMongodb className={"Skills-icon"}/>
            <SiPython className={"Skills-icon"}/>
            <SiGit className={"Skills-icon"}/>
            <SiGithub className={"Skills-icon"}/>
            <SiNodedotjs className={"Skills-icon"}/>
            <SiMysql className={"Skills-icon"}/>
        </div>
        </Fade>
    </div>;
}