import React from "react";
import { useNavigate } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';

import ScrollToTop from './components/ScrollToTop'

import uoguelph from "./imgs/uoguelph.jpg";
import brock from "./imgs/brock.jpg";
import vehikl from "./imgs/vehikl.png";

const Coop = () => {

    let navigate = useNavigate();
    
    const goMachine = (e) => {
        navigate('/coop/machine', { replace: true })
    }
    const goBrock = (e) => {
        navigate('/coop/brock', { replace: true })
    }
    const goBrock2 = (e) => {
        navigate('/coop/brock2', { replace: true })
    }
    const goVehikl = (e) => {
        navigate('/coop/vehikl', { replace: true })
    }
    const goVehikl2 = (e) => {
        navigate('/coop/vehikl2', { replace: true })
    }
    return (
        <Bounce left cascade>
        <div className="Coop">
            <ScrollToTop />
            
            <div>
                <h1 className="header">Work Term Reports</h1>
                <hr className="hrCoop"></hr> 
            </div>
            
            <div class="item" onClick={goMachine}>
                <div className="blockCoop">
                    <img src={uoguelph} alt="University of Guelph Logo" className="logoExp"></img>
                    <div>
                        <h2 className="headerExp">University of Guelph</h2>
                        <h2 className="subheaderExp">Machine Vision and Robotics Research Assistant | Work Term 1</h2>
                    </div>
                </div>
            </div>

            <div class="item" onClick={goBrock}>
                <div className="blockCoop">
                    <img src={brock} alt="Brock Solutions Logo" className="logoExp"></img>
                    <div>
                        <h2 className="headerExp">Brock Solutions</h2>
                        <h2 className="subheaderExp">Software Developer (MG) | Work Term 2</h2>
                    </div>
                </div>
            </div>

            <div class="item" onClick={goBrock2}>
                <div className="blockCoop">
                    <img src={brock} alt="Brock Solutions Logo" className="logoExp"></img>
                    <div>
                        <h2 className="headerExp">Brock Solutions</h2>
                        <h2 className="subheaderExp">Software Developer (TL) | Work Term 3</h2>
                    </div>
                </div>
            </div>

            <div class="item" onClick={goVehikl}>
                <div className="blockCoop">
                    <img src={vehikl} alt="Vehikl Logo" className="logoExp"></img>
                    <div>
                        <h2 className="headerExp">Vehikl</h2>
                        <h2 className="subheaderExp">Software Developer (Co-op) | Work Term 4</h2>
                    </div>
                </div>
            </div>

            <div class="item" onClick={goVehikl2}>
                <div className="blockCoop">
                    <img src={vehikl} alt="Vehikl Logo" className="logoExp"></img>
                    <div>
                        <h2 className="headerExp">Vehikl</h2>
                        <h2 className="subheaderExp">Software Developer (Co-op) | Work Term 5</h2>
                    </div>
                </div>
            </div>
            
            
        </div>
        </Bounce>
    );
}
 
export default Coop;