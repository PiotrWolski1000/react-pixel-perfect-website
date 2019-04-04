import React from 'react';
import './../../css/twitter.scss'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class index extends React.Component{
    render() {
        return (
            <section className="twitter">
                <div className="twitter__wrapper">
                    <p className="twitter__last__post">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>


                    <div className="twitter_time"> 
                        <p>@cosa-<span>3 Hours ago</span></p>
        
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