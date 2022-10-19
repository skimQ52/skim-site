import React, {Component} from "react";
import picture from "./me.JPG";
import meandbird from "./meandbird.jpg";
import brock from "./brock.jpg";
import rugby from "./rugby.JPG";
import uoguelph from "./uoguelph.jpg";
import TextLoop from "react-text-loop"; 
import HeaderText from "./HeaderText";

const Home = () => {
    return ( 
        <div>
            <div className="Home">
                <div className="NameContainer">
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
                </div>
                <div className="Exp">
                    <div className="headerBox">
                        <h1 className="titleHeader">Experience</h1>
                    </div>
                    <div className="blockExp">
                        <img src={brock} alt="Brock Solutions Logo" className="logoExp"></img>
                        <div>
                            <h2 className="headerExp">Brock Solutions</h2>
                            <h2 className="subheaderExp">Software Developer (Co-op) | Current Position</h2> 
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
                    
                </div>

                <div className="About">
                    <div className="headerBox">
                        <h1 className="titleHeader">About Me</h1>
                    </div>
                    <div className="block">
                        <p className="text" style={{marginLeft: "0vw", marginRight: "2vw", width: "65%"}}>
                            My greatest contribution over the summer was researching, studying and developing documentation on new (for the lab) 
                            object detection libraries. In the past, the Robotics Institute has mainly been using only one object detection library, 
                            Facebook Architecture’s ‘Detectron2’. While Detectron2 is great, it is not always sufficient or the most optimal for a given 
                            problem and it’s useful to have information and understanding of other libraries and be able to get them up and running with 
                            little hassle. I acted as the ‘Guinea Pig’, delving into 3 new object detection libraries, YOLOv5, SSD and YOLACT. I got 
                            comfortable with the implementations, tested their capabilities, created tutorial-like documentation and even refactored 
                            code and constructed repositories so that anyone working in the Robotics Institute who needed access to any of the libraries 
                            could use them, specifically, train and detect with a custom dataset. Additionally, if anyone needed any extra assistance in 
                            setting up and running the models, I was there to help. Delving into new sizable libraries with little direction and aid like 
                            the ones I did can be extremely tedious. The contributions I made make that grueling experience significantly smoother.
                            <br></br>
                            <br></br>
                        </p>
                        <img src={meandbird} alt="Ontop a mountain holding a bird" style={{marginLeft: "0vw", marginRight: "2vw", width: "25%"}}></img>
                    </div>
                    <img src={rugby} alt="Rugby lineout!" style={{marginLeft: "0vw", marginRight: "2vw", width: "25%"}}></img>
                </div>
            </div>
            
        </div>
    );
}
 
export default Home;
