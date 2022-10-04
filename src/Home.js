import React, {Component} from "react";
import picture from "./me.JPG";
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
                    <h1 className="titleHeader">Experience</h1>
                    <h2 className="header">Brock Solutions</h2>
                    <h2 className="subheader">Software Developer | Current Position</h2>
                </div>
            </div>
            
        </div>
    );
}
 
export default Home;
