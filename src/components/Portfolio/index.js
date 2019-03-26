import React from 'react';
import './../../css/shared.scss'
import './../../css/portfolio.scss'
import  {gallery} from './gallery.js'


const index = () => {
    return (
        <section className="portfolio">
            
            <h1>Portfolio</h1>
            
            <div className="portfolio__grid__container">
                {gallery.map((item, i)=>{
                    return(
                        <div className = "grid__item__wrapper" key={`grid_item_wrapper_${i}`}>
                            <img 
                                className="grid__image"
                                key={`grid_item_${i}`}
                                src={item.small} 
                                srcSet={`${item.small} 326w, ${item.medium} 651, ${item.large} 977w`}
                                alt="alt"
                            />

                            <div className="grid__image__hover">
                                <p>project title</p>
                                <div className="grid__hover__plus"> + </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};
export default index;