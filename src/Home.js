import React from "react";

import ScrollToTop from './components/ScrollToTop'
import Profile from "./Profile";
import {About} from "./About";
import Skills from "./Skills";

const Home = () => {
    return ( 
        <div className={"outer-home"}>
            <ScrollToTop/>
            <div className="Home">
                <Profile/>

                <About/>

                <Skills/>
            </div>
        </div>
    );
}

export default Home;
