import React, { Component } from 'react';
import Main from '../components/Main/'
import Pricing from '../components/Pricing/'
import ContactForm from '../components/ContactForm/'
import Portfolio from '../components/Portfolio/'
import Service from '../components/Service/'
import TwitterPost from '../components/TwitterPost'
import {Helmet} from 'react-helmet'
class index extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Cosa</title>
                    <meta name="description" content="Cosa, mordern software hause." />
                </Helmet>
                <Main title="Lorem" id="home"/>
                <Service title="Service" id="service"/>
                <Pricing title="Pricing" id="pricing"/>
                <TwitterPost/>
                <Portfolio title="Portfolio" id="portfolio"/>
                <ContactForm title="Contact" id="contact"/>
           
            </>
        );
    }
}

export default index;