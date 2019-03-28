import React from 'react';
import  {gallery} from './gallery.js'
import './../../css/shared.scss'
import './../../css/portfolio.scss'

const index = () => {
    return (
        <section className="project_main_container">
            <h1>Portfolio</h1>
            <ul>
                {gallery.map((item, i)=>{
                    return(
                        <li key={`portfolio_item_list_${i}`}>
                            <div className = "project_container" key={`grid_item_wrapper_${i}`}>
                                <div className="project_media">
                                    <img 
                                        className="grid__image"
                                        key={`grid_item_${i}`}
                                        src={item.small} 
                                        srcSet={`${item.small} 320w, ${item.medium} 768w, ${item.large} 1440w`}
                                        alt = {item.title}
                                    />
                                    
                                    <div className="grid__hover__image">
                                        <h1 className="grid__title__hover">
                                            {item.title}
                                            <a href="/"><span>+</span></a>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
};
export default index;