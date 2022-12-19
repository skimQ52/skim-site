import React, {Component} from "react";
import picture from "./me.JPG";
import meandbird from "./meandbird.jpg";
import brock from "./brock.jpg";
import rugby from "./rugby.JPG";
import uoguelph from "./uoguelph.jpg";
import TextLoop from "react-text-loop"; 
import HeaderText from "./HeaderText";
import Fade from 'react-reveal/Fade';

const Home = () => {
    return ( 
        <div>
            <div className="Home">
                <div className="NameContainer">
                    <Fade top>
                    <div className="Name">
                        <HeaderText/>
                        <div className="intro">
                            I'm a 
                            {" "}<TextLoop delay='1000' mask='true' adjustingSpeed='300' springConfig={{ stiffness: 320, damping: 15 }}>
                                <p>Software Developer</p>
                                <p>Student of Computing</p>
                                <p>Leader</p>
                                <p>Teammate</p>
                            </TextLoop>
                        </div>
                        <div className="Picture">
                            <img src={picture} alt="A picture of myself" className="profilePic"></img>
                        </div>  
                    </div>
                    </Fade>
                </div>
                
                <div className="Exp">
                    <Fade left>
                    <div className="headerBox">
                        <h1 className="titleHeader">Experience</h1>
                    </div>
                    </Fade>
                    <Fade left>
                    <div className="chunkExp">
                        <div className="blockExp">
                            <img src={brock} alt="Brock Solutions Logo" className="logoExp"></img>
                            <div>
                                <h2 className="headerExp">Brock Solutions</h2>
                                <h2 className="subheaderExp">Software Developer (CO-OP) | September - December 2022</h2> 
                            </div>
                        </div>
                        <ul className="listExp">
                            <li className="elementExp">Developed software in Java for a large-scale Manufacturing Execution System</li>
                            <li className="elementExp">Designed and implemented user interfaces among other features to be used by engineers daily</li>
                            <li className="elementExp">Created and manipulated SQL stored procedures for database interaction</li>
                            <li className="elementExp">Collaborated via DevOps in a small development team of software engineers to produce efficient code</li>
                        </ul>
                    </div>
                    <hr className="hrExp"></hr>

                    <div className="chunkExp">
                        <div className="blockExp">
                            <img src={uoguelph} alt="University of Guelph Logo" className="logoExp"></img>
                            <div>
                                <h2 className="headerExp">University of Guelph</h2>
                                <h2 className="subheaderExp">Machine Vision and Robotics Research Assistant | May - August 2022</h2>
                            </div>
                        </div>
                        <ul className="listExp">
                            <li className="elementExp">Implemented and evaluated various Machine Learning Object Detection libraries for use in several projects</li>
                            <li className="elementExp">Developed an array of Python scripts which interacted with the models under different contexts</li>
                            <li className="elementExp">Created tutorial-like documentation along with GitLab repositories for future use in the lab</li>
                        </ul>
                    </div>
                    </Fade>
                </div>
                
                <div className="About">

                    <div className="headerBox">
                        <Fade left>
                        <h1 className="titleHeader">About Me</h1>
                        </Fade>
                    </div>
                    <Fade left>
                    <div className="chunkAbout">
                        <div className="blockAbout">
                            <p className="textAbout">
                                <span style={{fontSize: "min(4.5vh, 6vw)", lineHeight: "0.01", color: "white"}}>Hi there!</span> I'm a third year Computer Science student studying at the University of Guelph.
                                Aside from programming, I love to spend time outside, as well as hone my skills in various 
                                sports like skateboarding. I have also played basketball, hockey and even wrestled for some time.
                                Equipped with a big smile and a positive mindset, I am a natural born leader.
                                Some leadership roles I've taken on include the class of 2020's
                                Valedictorian at Erin District High School, as well as team captain of the school's rugby team.
                                I am a valuable asset due to my technical skills,
                                experience in the field, and my leadership and interpersonal aptitude. 
                            </p>
                            <div style={{padding: "min(3vh, 2vw)", paddingTop: "0", display: "flex", justifyContent: "space-evenly"}}>
                                <img src={rugby} alt="Rugby lineout!" style={{borderRadius: "10%", marginLeft: "0vw", marginRight: "2vw", height: "min(30vw, 30vh)", width: "min(30vw, 30vh)", boxShadow: "0.1vw 0.1vw 8px black"}}></img>
                                <img src={meandbird} alt="Ontop a mountain holding a bird" style={{borderRadius: "10%", marginLeft: "0vw", marginRight: "2vw", objectFit: "cover", height: "min(30vw, 30vh)", width: "min(30vw, 30vh)", objectPosition: "0 80%", boxShadow: "0.1vw 0.1vw 8px black"}}></img>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}
 
export default Home;
