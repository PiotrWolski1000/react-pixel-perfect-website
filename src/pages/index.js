import React, { Component } from 'react';
import Main from '../components/Main/'
import Pricing from '../components/Pricing/'
import ContactForm from '../components/ContactForm/'
import Portfolio from '../components/Portfolio/'
import Service from '../components/Service/'
class index extends Component {
    render() {
        return (
            <>
                <Main/>
                <Service/>
                <Portfolio/>
                <Pricing/>
                <ContactForm/>
            </>
        );
    }
}

export default index;