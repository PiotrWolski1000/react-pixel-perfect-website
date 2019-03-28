import React from 'react';
import './../../css/twitter.scss'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class index extends React.Component{
    render() {
        return (
            <section className="twitter">
                <div className="twitter__wrapper">
                    <h1>
                        Spent some time working on estabilishing a look and feel for our case studies, today!
                    </h1>


                    <div className="twitter_time"> 
                        <p>@buje-<span>4 Hours ago</span></p>
        
                        <a href="/">
                            <div className="twitter_icon_wrapper">
                                    <FontAwesomeIcon className="twitter_icon" icon={faTwitter}/>
                            </div>
                        </a>
                    </div>

                </div>
            </section>
        );
    }
}

export default index;