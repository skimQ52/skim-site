import React from "react";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import ScrollToTop from './components/ScrollToTop'
import ProjectItem from "./components/ProjectItem";

import FridgeWise from "./imgs/FridgeWise.png";
import skimageMenu from "./imgs/skimageMenu.png";
import shellQ from "./imgs/shellQ.png";
import boneman from "./imgs/boneman.jpg";
import svg from "./imgs/svg.png";

const Projects = () => {

    const linkGithub = "Click to see more on GitHub →";

    const listFridgeWise = ['MERN Stack', 'OpenAI API', 'JavaScript', 'HTML/CSS'];
    const listSkimage = ['Python', 'NumPy', 'Tkinter', 'Image Processing'];
    const listSVG = ['C', 'Node.js', 'HTML/CSS', 'JQuery'];
    const listShellQ = ['C', 'Threading', 'Unix', 'Operating Systems'];
    const listBoneman = ['Arduino', 'IDE/C++', 'Circuitry'];
    return (
        <div className="Projects">
            <ScrollToTop />

            <Fade>
            <div className='inner-container'>
                <h2 className='rainbow pageheader' style={{marginLeft: '1%'}}>Personal Projects</h2> 
                
                <div className="projects-container">
                    
                    {/* FRIDGEWISE */}
                    <Slide left>
                        <div className="itemProjects">
                            <ProjectItem title="FridgeWise" desc="A Food and Meal tracking service with the ability to AI generate meals!"
                                list={listFridgeWise} pic={FridgeWise} link="https://github.com/skimQ52/fridgeQ" linkText={linkGithub}></ProjectItem>
                        </div>
                    </Slide>

                    {/* SKIMAGE PROCESSOR */}
                    <Slide right>
                        <div className="itemProjects">
                            <ProjectItem title="The 'skImage' Processor" desc="An Image Processing Toolbox capable of performing an array of operations under various interpolations."
                                list={listSkimage} pic={skimageMenu} link="https://github.com/skimQ52/skImage-processor" linkText={linkGithub}></ProjectItem>
                        </div>
                    </Slide>

                    {/* SVG PARSER */}
                    <Slide left>
                        <div className="itemProjects">
                            <ProjectItem title="SVG Parser" desc="A full-stack web application built to parse, display and edit existing Scalable Vector Graphics files."
                                list={listSVG} pic={svg} link="https://github.com/skimQ52/SVGParser" linkText={linkGithub}></ProjectItem>
                        </div>
                    </Slide>

                    {/* SHELLQ */}
                    <Slide right>
                        <div className="itemProjects">
                            <ProjectItem title="shellQ" desc="A command-line Unix shell which can access and manipulate the operating system's services, mimicing the notorious 'Bash'."
                                list={listShellQ} pic={shellQ} link="https://github.com/skimQ52/shellQ" linkText={linkGithub}></ProjectItem>
                        </div>
                    </Slide>

                    {/* BONEMAN STAN */}
                    <Slide left>
                        <div className="itemProjects">
                            <ProjectItem title="Boneman Stan" desc="A handheld Arduino game console that pairs a 16x2 LED module with a joystick to play the platformer game 'Boneman Stan'."
                                list={listBoneman} pic={boneman}></ProjectItem>
                        </div>
                    </Slide>

                    <div className="ghostProjects"></div>
                </div>
            </div>
            </Fade>
        </div> 
    );
}
 
export default Projects;