import React, { Component } from 'react';
import Main from '../components/Main/'
import Pricing from '../components/Pricing/'
import ContactForm from '../components/ContactForm/'
import Portfolio from '../components/Portfolio/'
import Service from '../components/Service/'
import TwitterPost from '../components/TwitterPost'
class index extends Component {
    render() {
        return (
            <>
                <Main title="We deliver" id="home"/>
                <Service title="Service" id="service"/>
                <Portfolio title="Portfolio" id="portfolio"/>
                <Pricing title="Pricing" id="pricing"/>
                <TwitterPost/>
                <ContactForm title="Contact" id="contact"/>
           
            </>
        );
    }
}

export default index;