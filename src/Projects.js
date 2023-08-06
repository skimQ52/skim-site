import React from "react";
import Fade from 'react-reveal/Fade';
import Rainbar from './Rainbar';
import skimageMenu from "./skimageMenu.png";

const Projects = () => {

    return (
        <div className="Projects">
            {/* <div>
            <div className="NameContainer">
                <div className="Name">
                    <Rainbar/>
                </div>
            </div>
                <h1 className="header">Projects</h1>
                <hr className="hrCoop"></hr> 
                <Rainbar/>
            </div> */}
            <Fade left>
            <div className="itemProjects">
                <a href="https://github.com/skimQ52/skImage-processor" target="_blank" style={{textDecoration:"none", color: "inherit"}}>
                <div className="blockProjects">
                    <h2 className="headerProjects">The 'skImage' Processor</h2>
                    <h2 className="subheaderProjects">An Image Processing Toolbox capable of performing an array operations under various interpolations</h2>
                    <div className="columnProjects">
                        <h2 className="subsubheaderProjects">Python</h2>
                        <hr style={{color: "rgb(209, 209, 209)"}}></hr>
                        <h2 className="subsubheaderProjects">NumPy</h2>
                        <hr style={{color: "rgb(209, 209, 209)"}}></hr>
                        <h2 className="subsubheaderProjects">Tkinter</h2>
                        <hr style={{color: "rgb(209, 209, 209)"}}></hr>
                        <h2 className="subsubheaderProjects">Image Processing</h2>
                    </div>
                    <img className="picProjects" src={skimageMenu} alt="Main Menu of the skImage Processor" ></img>
                    <h2 className="linkProjects">Click to see more on GitHub →</h2>
                </div>
                </a>
            </div>
            </Fade>
            <Fade right>
            <div className="itemProjects">
                <div className="blockProjects">
                    <h2 className="headerExp">University of Guelph</h2>
                    <h2 className="subheaderExp">Machine Vision and Robotics Research Assistant | Work Term 1</h2>
                </div>
            </div>
            </Fade>
            <Fade left>
            <div className="itemProjects">
                <a href="https://github.com/skimQ52/skImage-processor" target="_blank" style={{textDecoration:"none", color: "inherit"}}>
                <div className="blockProjects">
                    <h2 className="headerProjects">The 'skImage' Processor</h2>
                    <h2 className="subheaderProjects">An Image Processing Toolbox capable of performing an array operations under various interpolations</h2>
                    <div className="columnProjects">
                        <h2 className="subsubheaderProjects">Python</h2>
                        <hr style={{color: "rgb(209, 209, 209)"}}></hr>
                        <h2 className="subsubheaderProjects">NumPy</h2>
                        <hr style={{color: "rgb(209, 209, 209)"}}></hr>
                        <h2 className="subsubheaderProjects">Tkinter</h2>
                        <hr style={{color: "rgb(209, 209, 209)"}}></hr>
                        <h2 className="subsubheaderProjects">Image Processing</h2>
                    </div>
                    <img className="picProjects" src={skimageMenu} alt="Main Menu of the skImage Processor" ></img>
                    <h2 className="linkProjects">Click to see more on GitHub →</h2>
                </div>
                </a>
            </div>
            </Fade>
            <div className="ghostProjects"></div>
            {/* <Fade right>
            <div className="itemProjects">
                <div className="blockProjects">
                    <h2 className="headerExp">University of Guelph</h2>
                    <h2 className="subheaderExp">Machine Vision and Robotics Research Assistant | Work Term 1</h2>
                </div>
            </div>
            </Fade> */}
        </div> 
    );
}
 
export default Projects;