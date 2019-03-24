import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const index = () => {
    return (
        <div className="footer__icons">  
            <div className = "footer__icon__wrapper">  
                <div className = "footer__icon__addintional__wrapper"> 
                    <a href="/">                
                        <FontAwesomeIcon className="footer__icon" icon={faFacebookF} />
                    </a>
                </div>
            </div>
            <div className = "footer__icon__wrapper">
                <div className = "footer__icon__addintional__wrapper"> 
                    <a href="/">
                        <FontAwesomeIcon className="footer__icon"icon={faLinkedinIn}/>
                    </a>
                </div>
            </div>
            <div className = "footer__icon__wrapper">
                <div className = "footer__icon__addintional__wrapper"> 
                    <a href="/">
                        <FontAwesomeIcon className="footer__icon" icon={faTwitter}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default index;