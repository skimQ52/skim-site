import React from "react";
import Bounce from 'react-reveal/Bounce';
import { useNavigate } from 'react-router-dom';
import uoguelph from "./uoguelph.jpg";

const Coop = () => {

    let navigate = useNavigate();
    
    const goMachine = (e) => {
        navigate('/coop/machine', { replace: true })
    }
    const goBrock = (e) => {
        navigate('/coop/brock', { replace: true })
    }
    return (
        <Bounce left cascade>
        <div className="Coop">
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
                    <img src={uoguelph} alt="Brock Solutions Logo" className="logoExp"></img>
                    <div>
                        <h2 className="headerExp">Brock Solutions</h2>
                        <h2 className="subheaderExp">Software Developer | Work Term 2</h2>
                    </div>
                </div>
            </div>
            
            
        </div>
        </Bounce>
    );
}
 
export default Coop;