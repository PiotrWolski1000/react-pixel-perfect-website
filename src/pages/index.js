import React, { Component } from 'react';
import Main from '../components/Main/'
import Pricing from '../components/Pricing/'
import ContactForm from '../components/ContactForm/'

class index extends Component {
    render() {
        return (
            <>
                <Main/>
                <section>
                    service
                </section>
                <section>
                    portfolio
                </section>
                <Pricing/>
                <ContactForm/>
            </>
        );
    }
}

export default index;