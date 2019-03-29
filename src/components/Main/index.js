import React from 'react';
import './../../css/main.scss'
import './../../css/shared.scss'
import SocialMedia from './../../components/SocialMedia'

import {background, phone} from './mainSectionImages' 


const index = () => {
    return (
        <section className="mainSection">
            <div className="mainSection_wrapper">
                <img 
                    className="mainSection_background"
                    src={background.small} 
                    srcSet={`${background.small} 320w, ${background.medium} 768w, ${background.large} 1440w`} 
                    sizes="(max-width: 320px) 280px,
                    (max-width: 768px) 768px,
                    1440px"
                    alt={background.alt}
                    width="100%"
                    height="100%"
                />
                <img 
                    className="mainSection__phone"
                    src={phone.small} 
                    srcSet={`${phone.small} 300w, ${phone.medium} 768w, ${phone.large} 1280w`} 
                    alt={phone.alt}
                /> 
                <div className="mainSection__container">
                    <h3 className="we__deliver">We deliver</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est 
                        laborum.
                    </p>
                    <button className="btn primary">
                        contact us
                    </button>

                    <SocialMedia/>

                </div>
            </div>
        </section>
    );
};

export default index;