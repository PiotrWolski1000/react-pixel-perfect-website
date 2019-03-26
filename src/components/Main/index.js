import React from 'react';
import './../../css/main.scss'
import './../../css/shared.scss'

import {background, phone} from './mainSectionImages' 


const index = () => {
    return (
        <section className="mainSection">
                <img 
                    src={background.small} 
                    srcSet={`${background.small} 326w, ${background.medium} 651w, ${background.large} 977w`} 
                    alt={background.alt}
                    width="100%"
                    height="100%"
                />
                {/* <img 
                    className="mainSection__phone"
                    src={phone.small} 
                    srcSet={`${phone.small} 300w, ${phone.medium} 768w, ${phone.large} 1280w`} 
                    alt={phone.alt}
                />  */}
                 
            <div className="mainSection__container">
                
            </div>
        </section>
    );
};

export default index;