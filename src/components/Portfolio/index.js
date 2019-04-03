import React from 'react';
import  {gallery} from './gallery.js'
import './../../css/shared.scss'
import './../../css/portfolio.scss'

const index = ({title, id}) => {
    return (
        <section className="portfolio">
            <div className="project_main_container">
                <h1>{title}</h1>
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
                                            srcSet={`${item.small} 326w, ${item.medium} 651w, ${item.large} 977w`}
                                            sizes="(max-width: 320px) 280px,
                                            (max-width: 768px) 651px,
                                            (max-width: 1024px) 977px"
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

            </div>
        </section>
    )
};
export default index;