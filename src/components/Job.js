import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const Job = ({ jobTitle, img, company, startDate, endDate, details }) => {

    const [isFlyoutOpen, setFlyoutOpen] = useState(false);

    const toggleFlyout = () => {
        setFlyoutOpen(!isFlyoutOpen);
    };

    return (
        <Slide left>
            <div className='Job'>
                <div className="job-content">
                    <img src={img} alt={jobTitle + " Logo"} className="logoExp"></img>
                    <div className="jobHeader">
                        <span className='jobTitle'>{jobTitle}</span>
                        <span className='jobCompany'>{company}</span>
                    </div>

                    <span className='jobDate'>{startDate} - {endDate}</span>

                    <div className="jobFlyoutIcon rainbow" onClick={toggleFlyout}>
                        <FontAwesomeIcon icon={isFlyoutOpen ? faChevronUp : faChevronDown} />
                    </div>
                </div>
                {isFlyoutOpen && (

                    <Slide top>
                        <div className="jobFlyout">
                            <ul className=''>
                                {details.map((detail, index) => (
                                    <li className='jobDetailsText' key={index}>{detail}</li>
                                ))}
                            </ul>
                        </div>  
                    </Slide>
                )}
            </div>
        </Slide>
    );
};

export default Job;