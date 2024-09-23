import React from 'react';
import Fade from 'react-reveal/Fade';

import ScrollToTop from './components/ScrollToTop'
import Job from './components/Job';

import brock from "./imgs/brock.jpg";
import uoguelph from "./imgs/uoguelph.jpg";
import vehikl from "./imgs/vehikl.png";

const Jobs = () => {

    const vehiklDetails = [
        "Developed and integrated a RESTful API in PHP Laravel to interface with Machine Learning inferenced data",
        "Designed and integrated website front-ends in React and Vue and an iOS app with React Native Expo",
        "Leveraged Test-Driven-Development to create hundreds of tests with over 2000 assertions",
        "Optimized data flow through MongoDB and MySQL Databases",
        "Implemented iOS push notifications using Firebase Cloud Messaging, enhancing user engagement and real-time communication within the app"
    ];

    const brockDetails = [
        "Co-developed and configured the Austin-Bergstrom International Airport Baggage Handling System Map, enabling the real-time display and simulation of 10,000 to 12,000 bags daily",
        "Created, configured and populated databases using SQL Server Management Studio"
    ];

    const brockDetails2 = [
        "Implemented vital full stack features for a Manufacturing Execution System in Java Vaadin to aid hundreds of engineers",
        "Created and manipulated stored procedures for the large database with SQL Server Management Studio",
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
                    <Job jobTitle= "Software Developer Co-op" company="Vehikl" img={vehikl} startDate="Jan" endDate="Aug 2024" details={vehiklDetails}></Job>
                    <Job jobTitle= "Software Developer Co-op" company="Brock Solutions (Transportation & Logistics)" img={brock} startDate="May" endDate="Aug 2023" details={brockDetails}></Job>
                    <Job jobTitle= "Software Developer Co-op" company="Brock Solutions (Manufacturing)" img={brock} startDate="Sep" endDate="Dec 2022" details={brockDetails2}></Job>
                    <Job jobTitle= "Machine Vision and Robotics Research Assistant" company="University of Guelph" img={uoguelph} startDate="May" endDate="Aug 2022" details={machineDetails}></Job>
                </div>
            </div>
            </Fade>
        </div>
    );
}

export default Jobs;