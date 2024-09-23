import Fade from "react-reveal/Fade";
import picture from "./imgs/me.JPG";
import React from "react";

export function About() {
    return <div className="About">
        <Fade>
            <div className={"AboutImage"}>
                <img src={picture} alt="Ontop a mountain holding a bird" style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    filter: "blur(.4px)",
                    height: "auto",
                    maxWidth: "200px",
                    objectPosition: "0 80%",
                    boxShadow: "3px 3px 10px black"
                }}></img>
            </div>
            <div className={"AboutText"}>
                <p className="textAbout">
                                 <span style={{
                                     fontSize: "min(4.5vh, 6vw)",
                                     lineHeight: "0.01",
                                     color: "white"
                                 }}>Hi there! </span>
                    I am a fifth year student at the University of Guelph studying Computer Science.
                    I love to spend time outside, as well as hone my skills in various
                    sports. Equipped with a big smile and a positive mindset, I am a natural born leader.
                    As a competent programmer—and an even better learner, solving problems excites me. Let's get
                    to work!
                </p>
            </div>
        </Fade>
    </div>;
}