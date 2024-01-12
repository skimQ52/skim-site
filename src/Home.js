import React from "react";
import Fade from 'react-reveal/Fade';
import TextLoop from "react-text-loop"; 

import ScrollToTop from './components/ScrollToTop'
import HeaderText from "./components/HeaderText";

import picture from "./imgs/me.JPG";
import meandbird from "./imgs/meandbird.jpg";
import rugby from "./imgs/rugby.JPG";


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
                            {" "}
                            <TextLoop delay='1000' mask='true' adjustingSpeed='300' springConfig={{ stiffness: 320, damping: 15 }}>
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
                
                {/* <div className="About">
                    <div className="headerBox">
                        <Fade left>
                        <h1 className="titleHeader rainbow">About Me</h1>
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
                </div> */}
            </div>
        </div>
    );
}
 
export default Home;
