import React from 'react';
import Fade from 'react-reveal/Fade';

import ScrollToTop from './components/ScrollToTop'
import Job from './components/Job';

import brock from "./imgs/brock.jpg";
import uoguelph from "./imgs/uoguelph.jpg";
import vehikl from "./imgs/vehikl.png";

const Jobs = () => {

    const vehiklDetails = [
        "Just getting started! :D"
    ];

    const brockDetails = [
        "Spearheaded the development and configuration of software for the Austin-Bergstrom International Airport",
        "As the sole developer, implemented a Baggage Handling System Map, enabling the real-time display and simulation of 10,000 to 12,000 bags daily",
        "Performed Integrated Testing to ensure all pieces of the large project were functional",
        "Created and populated databases using SQL Server Management Studio"
    ];

    const brockDetails2 = [
        "Implemented vital features in Java Vaadin for a Manufacturing Execution System to be used by hundreds of engineers daily",
        "Demonstrated efficient Object Oriented Programming principles resulting in faster loading and query times",
        "Created and manipulated stored procedures for the large database with SQL Server Management Studio",
        "Performed Unit Testing of my own and others code to ensure flawless functionality",
        "Collaborated via Azure DevOps (TFS) in an agile environment of a small team of developers"
    ];  

    const machineDetails = [
        "Trained Machine Learning Object Detection models to be employed in 3 different Master thesis projects",
        "Evaluated several Object Detection libraries, such as YOLOv5, YOLACT, Detectron2 and Single-Shot Detector",
        "Developed an array of Python scripts to manipulate datasets and ensure compatibility with models",
        "Created tutorial documentation paired with GitLab repositories to easily get models up and running on custom datasets"
    ];

    return (
        <div className="outer-container">
            <ScrollToTop />
            <Fade>
            <div className='inner-container'>
                <h1 className='rainbow pageheader'>Work Experience</h1> 
                <div className='jobs-container'>
                    <Job jobTitle= "Software Developer Co-op" company="Vehikl - Current Position" img={vehikl} startDate="Jan" endDate="August 2024" details={vehiklDetails}></Job>
                    <Job jobTitle= "Software Developer Co-op" company="Brock Solutions (Transportation & Logistics)" img={brock} startDate="May" endDate="August 2023" details={brockDetails}></Job>
                    <Job jobTitle= "Software Developer Co-op" company="Brock Solutions (Manufacturing)" img={brock} startDate="September" endDate="December 2022" details={brockDetails2}></Job>
                    <Job jobTitle= "Machine Vision and Robotics Research Assistant" company="University of Guelph" img={uoguelph} startDate="May" endDate="August 2022" details={machineDetails}></Job>
                </div>
            </div>
            </Fade>
        </div>
    );
}

export default Jobs;