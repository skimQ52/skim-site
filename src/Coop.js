import roboticsPic from "./robotics_institute_logo.png"
import React from "react";
// import { Spring } from "react-spring/renderprops";
// import VisibilitySensor from "react-visibility-sensor";


const Coop = () => {
    return ( 
        <div className="Coop">
            <h1 className="header">Summer 2022 | University of Guelph</h1>
            <h2 className="subheader">Machine Vision and Robotics Reasearch Assistant</h2>

            <div className="chunk">
                <p className="text">Hello. This is an introduction yes it is hmm whjat should I write im not sure what I should write hmm that would be good wouldn't it okay sure I'll put that yeah</p>
            </div>
            
            <div className="chunk">
                <h2 className="subheader">About the Robotics Institute</h2>
                <div className="block">
                    <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <img src={roboticsPic} alt="Robotics Institute Logo" width="140vh" height="140vh" className="picture"></img>
                </div>
            </div>

            <div className="chunk">
                <h2 className="subheader">My Role and Contributions</h2>
                <div className="block">
                    <img src={roboticsPic} alt="Robotics Institute Logo" width="140vh" height="140vh" className="picture"></img>
                    <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                     ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                     in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </div>

            <div className="chunk">
                <h2 className="subheader">What I Learned</h2>
                <div className="block">
                    <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                     ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                     in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <img src={roboticsPic} alt="Robotics Institute Logo" width="140vh" height="140vh" className="picture"></img>
                </div>
            </div>

            <div className="chunk">
                <h2 className="subheader">Final Thoughts</h2>
                <div className="block">
                    <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                     ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Coop;