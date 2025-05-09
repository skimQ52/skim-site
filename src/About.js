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
                    I'm a recent Computer Science graduate from the University of Guelph.
                    Outside of tech, I love to hike, travel, and play a few different sports.
                    As a competent programmer—and an even better learner, solving problems excites me.
                    Let’s build something great together!
                </p>
            </div>
        </Fade>
    </div>;
}