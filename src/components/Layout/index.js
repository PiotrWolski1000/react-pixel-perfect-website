import React, { Component } from 'react';
import Header from '../Header/'
import Footer from '../Footer/'

class index extends Component {
    render() {

        return (
            <>
                <Header></Header>
                    {this.props.children}
                <Footer></Footer>
            </>
        )
    }
}

export default index;