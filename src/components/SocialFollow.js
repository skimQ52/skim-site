import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faInstagram,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import {

} from "@fortawesome/free-solid-svg-icons"

export default function SocialFollow() {
    return (
        <div className="social-container">
            <a href="https://www.instagram.com/sky1611/" className="hover-shine instagram social">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/skimQ52" className="hover-shine github social">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/skylar-mawle-17b58422a/" className="hover-shine linkedin social">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
    );
}