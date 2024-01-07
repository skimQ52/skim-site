import React from "react";
import Fade from 'react-reveal/Fade';
import TextLoop from "react-text-loop"; 

import ScrollToTop from './components/ScrollToTop'
import HeaderText from "./components/HeaderText";

import picture from "./imgs/me.JPG";
import meandbird from "./imgs/meandbird.jpg";
import brock from "./imgs/brock.jpg";
import vehikl from "./imgs/vehikl.png";
import rugby from "./imgs/rugby.JPG";
import uoguelph from "./imgs/uoguelph.jpg";


const Home = () => {
    return ( 
        <div>
            <ScrollToTop />
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
                            <img src={picture} alt="Me hiking" className="profilePic"></img>
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
                                <img src={vehikl} alt="Vehikl Logo" className="logoExp"></img>
                                <div>
                                    <h2 className="headerExp">Vehikl | <i>Current Position</i></h2>
                                    <h2 className="subheaderExp">Software Developer</h2> 
                                </div>
                            </div>
                        </div>
                        <hr className="hrExp"></hr>

                        <div className="chunkExp">
                            <div className="blockExp">
                                <img src={brock} alt="Brock Solutions Logo" className="logoExp"></img>
                                <div>
                                    <h2 className="headerExp">Brock Solutions</h2>
                                    <h2 className="subheaderExp">Software Developer | May - August 2023</h2> 
                                </div>
                            </div>
                            <ul className="listExp">
                                <li className="elementExp">Spearheaded the development and configuration of software for the Austin-Bergstrom International Airport</li>
                                <li className="elementExp">As the sole developer, implemented a Baggage Handling System Map, enabling the real-time display and simulation of 10,000 to 12,000 bags daily</li>
                                <li className="elementExp">Performed Integrated Testing to ensure all pieces of the large project were functional</li>
                                <li className="elementExp">Created and populated databases using SQL Server Management Studio</li>
                            </ul>
                        </div>
                        <hr className="hrExp"></hr>

                        <div className="chunkExp">
                            <div className="blockExp">
                                <img src={brock} alt="Brock Solutions Logo" className="logoExp"></img>
                                <div>
                                    <h2 className="headerExp">Brock Solutions</h2>
                                    <h2 className="subheaderExp">Software Developer | September - December 2022</h2> 
                                </div>
                            </div>
                            <ul className="listExp">
                                <li className="elementExp">Implemented vital features in Java Vaadin for a Manufacturing Execution System to be used by hundreds of engineers daily</li>
                                <li className="elementExp">Demonstrated efficient Object Oriented Programming principles resulting in faster loading and query times</li>
                                <li className="elementExp">Created and manipulated stored procedures for the large database with SQL Server Management Studio</li>
                                <li className="elementExp">Performed Unit Testing of my own and others code to ensure flawless functionality</li>
                                <li className="elementExp">Collaborated via Azure DevOps (TFS) in an agile environment of a small team of developers</li>
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
                                <li className="elementExp">Trained Machine Learning Object Detection models to be employed in 3 different Master thesis projects</li>
                                <li className="elementExp">Evaluated several Object Detection libraries, such as YOLOv5, YOLACT, Detectron2 and Single-Shot Detector</li>
                                <li className="elementExp">Developed an array of Python scripts to manipulate datasets and ensure compatibility with models</li>
                                <li className="elementExp">Created tutorial documentation paired with GitLab repositories to easily get models up and running on custom datasets</li>
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
                                <span style={{fontSize: "min(4.5vh, 6vw)", lineHeight: "0.01", color: "white"}}>Hi there!</span> I'm a fourth year Computer Science student studying at the University of Guelph.
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
                                <img src={meandbird} alt="Ontop a mountain holding a bird" style={{borderRadius: "10%", marginLeft: "0vw", marginRight: "0vw", objectFit: "cover", height: "min(30vw, 30vh)", width: "min(30vw, 30vh)", objectPosition: "0 80%", boxShadow: "0.1vw 0.1vw 8px black"}}></img>
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
