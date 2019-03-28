import React from 'react';
import Card from './card'
import './../../css/pricing.scss'//redundant? look card component
import './../../css/shared.scss'
import mData from './mData.json'


const index = () => {
    return (
        <section className="pricing clear_both">
            <h1>Pricing</h1>
            <div className="pricing__cards__wrapper">
                {mData.map((item, i)=>{
                    return(
                        <Card 
                            key={`pricing_card_${i}`}
                            title={item.title}
                            subtitle={item.subtitle}
                            price={item.price}
                            features= {item.features}
                        />
                    )
                })}
            </div>
        </section>
    );
};

export default index;