import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './../../css/footer.scss'
import './../../css/socialMedia.scss'

const TwitterReversed = () => {
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
                <div className = "ooter__icon__addintional__wrapper__reversed"> 
                    <a href="/">
                        <FontAwesomeIcon className="footer__icon__reversed" icon={faTwitter}/>
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
        </div>
    );
};

export default TwitterReversed;