import React, { Component } from 'react';
import Layout from '../components/Layout/'
import MainSection from '../components/mainSection/'
class index extends Component {
    render() {
        return (
            <>
                <MainSection/>
                <section>
                    service
                </section>
                <section>
                    portfolio
                </section>
                <section>
                    pricing
                </section>
            </>
        );
    }
}

export default index;