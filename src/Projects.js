import React from "react";
import ScrollToTop from './ScrollToTop'
import Fade from 'react-reveal/Fade';
import FridgeWise from "./FridgeWise.png";
import skimageMenu from "./skimageMenu.png";
import shellQ from "./shellQ.png";
import boneman from "./boneman.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {

    const linkGithub = "Click to see more on GitHub →";

    const listFridgeWise = ['MERN Stack', 'OpenAI API', 'JavaScript', 'HTML/CSS']
    const listSkimage = ['Python', 'NumPy', 'Tkinter', 'Image Processing'];
    const listSVG = ['C', 'Node.js', 'HTML/CSS', 'JQuery'];
    const listShellQ = ['C', 'Threading', 'Unix', 'Operating Systems']
    const listBoneman = ['Arduino', 'IDE/C++', 'Circuitry'];
    return (
        <div className="Projects">
            <ScrollToTop />

            {/* FRIDGEWISE */}
            <Fade left>
                <div className="itemProjects">
                    <ProjectItem title="FridgeWise" desc="A Food and Meal tracking service with the ability to AI generate meals!"
                        list={listFridgeWise} pic={FridgeWise} link="https://github.com/skimQ52/fridgeQ" linkText={linkGithub}></ProjectItem>
                </div>
            </Fade>

            {/* SKIMAGE PROCESSOR */}
            <Fade right>
                <div className="itemProjects">
                    <ProjectItem title="The 'skImage' Processor" desc="An Image Processing Toolbox capable of performing an array of operations under various interpolations."
                        list={listSkimage} pic={skimageMenu} link="https://github.com/skimQ52/skImage-processor" linkText={linkGithub}></ProjectItem>
                </div>
            </Fade>

            {/* SVG PARSER */}
            <Fade left>
                <div className="itemProjects">
                    <ProjectItem title="SVG Parser" desc="A full-stack web application built to parse, display and edit existing Scalable Vector Graphics files."
                        list={listSVG} pic={boneman} link="https://github.com/skimQ52/SVGParser" linkText={linkGithub}></ProjectItem>
                </div>
            </Fade>

            {/* SHELLQ */}
            <Fade right>
                <div className="itemProjects">
                    <ProjectItem title="shellQ" desc="A command-line Unix shell which can access and manipulate the operating system's services, mimicing the notorious 'Bash'."
                        list={listShellQ} pic={shellQ} link="https://github.com/skimQ52/shellQ" linkText={linkGithub}></ProjectItem>
                </div>
            </Fade>

            {/* BONEMAN STAN */}
            <Fade left>
                <div className="itemProjects">
                    <ProjectItem title="Boneman Stan" desc="A handheld Arduino game console that pairs a 16x2 LED module with a joystick to play the platformer game 'Boneman Stan'."
                        list={listBoneman} pic={boneman}></ProjectItem>
                </div>
            </Fade>

            <div className="ghostProjects"></div>
        </div> 
    );
}
 
export default Projects;