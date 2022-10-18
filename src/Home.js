import React, {Component} from "react";
import picture from "./me.JPG";
import brock from "./brock.jpg";
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
                    <div className="blockExp">
                        <img src={uoguelph} alt="University of Guelph Logo" className="logoExp"></img>
                        <div>
                            <h2 className="headerExp">University of Guelph</h2>
                            <h2 className="subheaderExp">Machine Vision and Robotics Research Assistant | May - August 2022</h2> 
                        </div>
                    </div>
                </div>

                <div className="About">
                    <div className="headerBox">
                        <h1 className="titleHeader">About Me</h1>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default Home;
