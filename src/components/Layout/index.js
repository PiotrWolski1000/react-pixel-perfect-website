import React, { Component } from 'react';
import Header from '../Header/'
import Footer from '../Footer/'

class index extends Component {
    constructor(props){
        super(props)
    }

    render() {

        return (
            <div>
                <Header></Header>
                    {this.props.children}
                <Footer></Footer>
            </div>
        )
    }
}

export default index;