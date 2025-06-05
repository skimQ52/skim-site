import React from "react";
import Fade from 'react-reveal/Fade';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectItem from "./components/ProjectItem";

import pickTheBetterNumberImg from "./imgs/pickthebetternumber.png";
import FridgeWise from "./imgs/FridgeWise.png";
import skimageMenu from "./imgs/skimageMenu.png";
import shellQ from "./imgs/shellQ.png";
import boneman from "./imgs/boneman.jpg";
import svg from "./imgs/svg.png";


export default function Projects() {

    const listNumber = ['Laravel', 'Vue', 'SQLite'];
    const listFridgeWise = ['Laravel', 'OpenAI API', 'TypeScript React', 'MongoDB'];
    const listSkimage = ['Python', 'NumPy', 'Tkinter', 'D.I.P'];
    const listSVG = ['C', 'Node.js', 'HTML/CSS', 'JQuery'];
    const listShellQ = ['C', 'Threading', 'Unix', 'OS'];
    const listBoneman = ['Arduino', 'IDE/C++', 'Circuitry'];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return <div className={"Projects"} id={"Projects"}>
        <Fade>
            <div className={"Skills-text"}>
                <h1 className="rainbow">Projects</h1>
            </div>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                <ProjectItem title="Pick The Better Number"
                             desc="Make your pick, join the vote to find out the best numbers!"
                             list={listNumber} pic={pickTheBetterNumberImg} github="https://github.com/skimQ52/number-ranker"
                             ></ProjectItem>
                <ProjectItem title="FridgeWise"
                             desc="A Food and Recipe tracking service with the ability to AI generate recipes!"
                             list={listFridgeWise} pic={FridgeWise} github="https://github.com/skimQ52/fridgeQ"
                             ></ProjectItem>
                <ProjectItem title="The 'skImage' Processor"
                             desc="An Image Processing Toolbox capable of performing an array of operations under various interpolations."
                             list={listSkimage} pic={skimageMenu}
                             github="https://github.com/skimQ52/skImage-processor"
                             ></ProjectItem>
                <ProjectItem title="SVG Parser"
                             desc="A full-stack web application built to parse, display and edit existing Scalable Vector Graphics files."
                             list={listSVG} pic={svg} github="https://github.com/skimQ52/SVGParser"
                             ></ProjectItem>
                <ProjectItem title="shellQ"
                             desc="A command-line Unix shell which can access and manipulate the operating system's services, mimicing the notorious 'Bash'."
                             list={listShellQ} pic={shellQ} github="https://github.com/skimQ52/shellQ"
                             ></ProjectItem>
                <ProjectItem title="Boneman Stan"
                             desc="A handheld Arduino game console that pairs a 16x2 LED module with a joystick to play the original platformer game 'Boneman Stan'."
                             list={listBoneman} pic={boneman}></ProjectItem>
            </Carousel>
        </Fade>
    </div>;
}