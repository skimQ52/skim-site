import React from "react";

import ScrollToTop from './components/ScrollToTop'
import Profile from "./Profile";
import {About} from "./About";

const Home = () => {
    return ( 
        <div className={"outer-home"}>
            <ScrollToTop/>
            <div className="Home">
                <Profile/>

                <About/>
            </div>
        </div>
    );
}

export default Home;
