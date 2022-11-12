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
                    <Fade>
                    <div className="headerBox">
                        <h1 className="titleHeader">Experience</h1>
                    </div>
                    </Fade>
                    <Fade left>
                    <div className="blockExp">
                        <img src={brock} alt="Brock Solutions Logo" className="logoExp"></img>
                        <div>
                            <h2 className="headerExp">Brock Solutions</h2>
                            <h2 className="subheaderExp">Software Developer (CO-OP) | Current Position</h2> 
                        </div>
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
                    <Fade>
                    <div className="block">
                    <img src={meandbird} alt="Ontop a mountain holding a bird" style={{marginLeft: "0vw", marginRight: "2vw", height: "min(40vw, 40vh)", width: "min(30vw, 30vh)"}}></img>
                        <p className="text" style={{marginLeft: "0vw", marginRight: "2vw", width: "45%", fontSize: "min(2.5vh, 2.4vw)"}}>
                            I'm Sky, a third year Computer Science student at the University of Guelph.
                            Aside from programming, I love to spend time outside, as well as hone my skills in various 
                            sports like skateboarding. Equipped with a big smile and a positive mindset, I've always been 
                            seen as and taken the role of a leader.
                            <br></br>
                            <br></br>
                            At Erin District Highschool, where I studied between the years of 2016 and 2020, 
                            I played rugby as team captain. I graduated in 2020 during the early stages of COVID-19 as Class 
                            Valedictorian. I also played basketball, hockey and even wrestled for some time.
                        </p>
                    </div>
                    <div className="block">
                        <p className="text" style={{marginLeft: "0vw", marginRight: "2vw", width: "45%", fontSize: "min(2.5vh, 2.4vw)"}}>
                            As a programmer I believe I am a valuable asset not only because of my aptitude and 
                            and experience in the field, but also due to my leadership and interpersonal skills. 
                            <br></br>
                            <br></br>
                        </p>
                        <img src={rugby} alt="Rugby lineout!" style={{marginLeft: "0vw", marginRight: "2vw", height: "min(30vw, 30vh)", width: "min(30vw, 30vh)"}}></img>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}
 
export default Home;
