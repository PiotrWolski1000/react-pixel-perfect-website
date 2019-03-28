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
                <Main/>
                <Service/>
                <Portfolio/>
                <Pricing/>
                <TwitterPost/>
                <ContactForm/>
            </>
        );
    }
}

export default index;