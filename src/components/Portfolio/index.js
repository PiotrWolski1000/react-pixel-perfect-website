import React from 'react';
import  {gallery} from './gallery.js'
import './../../css/shared.scss'
import './../../css/portfolio.scss'

const index = () => {
    return (
        <section class="project_main_container">
            <h1>Portfolio</h1>
            <ul>
                {gallery.map((item, i)=>{
                    return(
                        <li>
                            <div className = "project_container" key={`grid_item_wrapper_${i}`}>
                                <div className="project_media">
                                    <img 
                                        className="grid__image"
                                        key={`grid_item_${i}`}
                                        src={item.small} 
                                        srcSet={`${item.small} 326w, ${item.medium} 651, ${item.large} 977w`}
                                        alt = "alt"
                                        />
                                    <h1 className="grid__titleHover">
                                        {item.title}
                                    </h1>
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