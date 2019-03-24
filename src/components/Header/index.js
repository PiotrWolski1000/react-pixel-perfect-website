import React, { Component } from 'react';
import './../../css/header.scss'

class index extends Component {
    render() {
        return (
            <div className="header__wrapper">
                <header className = "header">
                    <div className = "header__logo">
                        <a href="/">
                            buje
                        </a>
                    </div>

                    <nav className = "header__nav">
                        <ul>
                            <li><a href="/">home</a></li>
                            <li><a href="/">service</a></li>
                            <li><a href="/">portfolio</a></li>
                            <li><a href="/">pricing</a></li>
                            <li><a href="/">contact</a></li>
                        </ul>
                    </nav>

                </header>
            </div>
        );
    }
}

export default index;