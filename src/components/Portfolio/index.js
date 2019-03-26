import React from 'react';
import './../../css/shared.scss'
import './../../css/portfolio.scss'
import  {gallery} from './gallery.js'

// import '/images/portfolio/1/large.jpg'

const index = () => {
    return (
        <section className="portfolio">
            
            <h1>Portfolio</h1>
            
            <div className="portfolio__grid__container">
                {gallery.map((item, i)=>{
                    return(
                        <div key={`grid_item_wrapper_${i}`}>
                            <img 
                                key={`grid_item_${i}`}
                                src={item.small} 
                                srcSet={`${item.small} 942w, ${item.medium} 1440w, ${item.large} 1920w`}
                                // width='50' 
                                // height="50" 
                                alt="alt"
                                className="grid__item"
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    );
};
export default index;