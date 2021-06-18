import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

/**
 * Collect all of Ada's Team social media platforms and their icons
 * @returns Social Media buttons
 */

function SocialMedia() {
    library.add(fab, faEnvelope); //importing brand icons for social-media

    return (
        <div
            className="space-x-3 text-3xl ">
            <a href="https://www.facebook.com/AdasTeamFB/"
                alt="Ada's" aria-label="Ada's facebook link">
                <FontAwesomeIcon icon={['fab', 'facebook']}/>
            </a>
            <a href="https://twitter.com/adas_team?lang=en" aria-label="Ada's twitter link">
                <FontAwesomeIcon icon={['fab', 'twitter']}/>
            </a>
            <a href="https://www.instagram.com/adas_team/" aria-label="Ada's instagram link">
                <FontAwesomeIcon icon={['fab', 'instagram']}/>
            </a>
            <a href="https://www.linkedin.com/company/adas-team/" aria-label="Ada's linkedin link">
                <FontAwesomeIcon icon={['fab', 'linkedin']}/>
            </a>
            <a href="https://github.com/adas-team" aria-label="Ada's github link">
                <FontAwesomeIcon icon={['fab', 'github']}/>
            </a>
            <a href="mailto:adasteam@ualberta.ca" aria-label="Ada's mail link">
                <FontAwesomeIcon icon={faEnvelope}/>
            </a>
        </div>
    );
}

export default SocialMedia;
