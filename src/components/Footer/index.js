import React, { Component } from 'react';
import SocialMedia from './../SocialMedia/'
import './../../css/footer.scss'

class index extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__content__wrapper">
                    
                    <div className="footer__left__side">
                        <p>buje</p>
                        <hr></hr>
                        <p><span>Buje.com</span> © 2014 Powered by <span>Wordpress</span></p>
                    </div>

                    <SocialMedia/>
                </div>
            </footer>
        );
    }
}

export default index;