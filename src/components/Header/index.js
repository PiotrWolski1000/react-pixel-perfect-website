import React, { Component } from 'react';
import './../../css/header.scss'
import {mNav} from './mNav'

class index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            collapsed: false
        }
    }

    handleCollapseMenu = () => this.setState(prevState => ({collapsed: !prevState.collapsed}))

    render() {
        const { collapsed } = this.state
        return (
            <header className="header__wrapper">
                <div className = "header">
                    <div className = "header__logo">
                        <a href="/">
                            buje
                        </a>
                    </div>

                    <div
                        className={collapsed ? 'header__menu isOpen' : 'header__menu'}
                        // className='header__menu__open'
                        onClick={this.handleCollapseMenu}
                    >
                        <div />
                        <div />
                        <div />
                    </div>

                    <nav className = "header__horizontal__nav">
                        <ul>
                            {mNav.map((item, i)=>{
                                return(
                                    <li key={`header_horizontal_menu_${i}`}>
                                        <a href={item.path}>
                                            {item.label}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                </div>

                <nav 
                    className={collapsed?'header_mobile_menu':'header_mobile_menu_close'}
                    // className={collapsed?'header_mobile_menu open_mobile_menu':'header_mobile_menu'}
                    // className="header_mobile_menu"
                >
                    <ul>

                        {
                            mNav.map((item, i) => {  
                                return (
                                    <li key={`header_mobile_li_${i}`}> 
                                        <a href={item.path}>
                                            {item.label}
                                        </a>
                                    </li>
                                )
                                }
                            )
                        }
                    </ul>
              </nav>


            </header>
        );
    }
}

export default index;