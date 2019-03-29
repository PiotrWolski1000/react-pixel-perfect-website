import React from 'react';
import './../../css/service.scss'
import './../../css/shared.scss'
import {mData, pathCrosserImages} from './data'

const index = ({title, id}) => {
    return (
        <section className="service">
            <h1>{title}</h1>
            
            <img 
                className="service__path__crosser"
                src={pathCrosserImages.small}
                srcSet={`${pathCrosserImages.small} 300w, ${pathCrosserImages.medium} 768w, ${pathCrosserImages.large} 1280w`} 
                alt={pathCrosserImages.alt}
            />
     
            <div className="service__container">
                {mData.map((item, i)=>{
                    return(
                        <article 
                            className="service__feature"
                            key={`service__feature__${i}`}
                        >
                            <img 
                                className="service__feature__icon"
                                src={item.small} 
                                srcSet={`${item.small} 300w, ${item.medium} 768w, ${item.large} 1280w`} 
                                alt={item.alt}
                                width={item.width}
                                height={item.height}
                            />            
                            
                            <h2 className="service__feature__title">{item.title}</h2>
                            <p className="service__feature__text">{item.text}</p>

                        </article>
                    )
                })}
            </div>            
        </section>
    )
}

export default index