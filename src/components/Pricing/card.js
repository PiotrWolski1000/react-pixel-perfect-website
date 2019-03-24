import React from 'react';
import './../../css/pricing.scss'
import './../../css/shared.scss'

const card = (props) => {
    return (
        <div className="card">
            <div className="card__top">
                <div className="card__top__left">
                    <h2>
                        {props.title}
                    </h2>
                    <p>
                        {props.subtitle}
                    </p>
                </div>
                <div className="card__top__right">
                    {props.price}
                </div>
            </div>

            <div className="card__bottom">
                <div className="card__bottom__list">
                    <ul>
                        {props.features.map((item, i)=>{
                            return(
                                <li key={`card_item_${i}`}>{item}</li>
                            )
                        })}
                    </ul>
                </div>

                <button className='btn primary'>
                    submit
                </button>
            </div>

        </div>
    );
};

export default card;