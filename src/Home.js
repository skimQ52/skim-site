import React from "react";

import ScrollToTop from './components/ScrollToTop'
import Profile from "./Profile";
import {About} from "./About";
import Skills from "./Skills";

import "react-multi-carousel/lib/styles.css";
import Projects from "./Projects";

const Home = () => {
    return ( 
        <div className={"outer-home"}>
            <ScrollToTop/>
            <div className="Home">
                <Profile/>

                <About/>

                <Skills/>

                <Projects/>
            </div>
        </div>
    );
}

export default Home;
