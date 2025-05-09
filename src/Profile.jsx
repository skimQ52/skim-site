import Fade from "react-reveal/Fade";
import HeaderText from "./components/HeaderText";
import TextLoop from "react-text-loop";
import picture from "./imgs/profile.jpg";
import React from "react";

export default function Profile() {
    return <div className="NameContainer">
        <Fade top>
            <div className="Name">
                <HeaderText/>
                <div className="intro">
                    Hey, I'm a
                    {" "}
                    <TextLoop delay="1000" mask="true" adjustingSpeed="300"
                              springConfig={{stiffness: 320, damping: 15}}>
                        <p>Software Developer</p>
                        <p>Web Developer</p>
                        <p>Student of Computing</p>
                        <p>Leader</p>
                        <p>Teammate</p>
                    </TextLoop>
                </div>
                <div className="Picture">
                    <img src={picture} alt="Me hiking" className="profilePic"></img>
                </div>
            </div>
        </Fade>
    </div>;
}