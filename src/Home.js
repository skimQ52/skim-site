import React, {Component} from "react";
import picture from "./peter.jpeg"; //temp
import TextLoop from "react-text-loop"; 

const Home = () => {
    return ( 
        <div>
            <div className="Home">
                <div className="Name">
                    <h1 className="toptext">SKY</h1>
                    <h1 className="bottomtext">MAWLE</h1>
                    <hr className="titleBar"></hr>
                    <div className="intro">
                        <TextLoop delay='5000' mask='true' adjustingSpeed='300' springConfig={{ stiffness: 320, damping: 15 }}>
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
        </div>
    );
}
 
export default Home;