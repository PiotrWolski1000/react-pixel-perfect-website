import React, { Component } from 'react';
import './../../css/header.scss'
import {mNav} from './mNav'
import { Link, animateScroll as scroll } from "react-scroll";


class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        }
    }

    handleCollapseMenu = () => this.setState(prevState => ({collapsed: !prevState.collapsed}))

    render() {
        const { collapsed } = this.state
        return (
            <header className="header__wrapper">
                <div className = "header">
                    <div className = "header__logo">
                        <a href="/" onClick= {scroll.scrollToTop}>
                            COSA
                        </a>
                    </div>

                    <div
                        className={collapsed ? 'header__menu isOpen' : 'header__menu'}
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
                                        <Link 
                                            to={item.path}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration= {500}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                </div>

                <nav 
                    className={collapsed?'header_mobile_menu':'header_mobile_menu_close'}
                >
                    <ul>

                        {mNav.map((item, i) => {  
                                return (
                                    <li key={`header_mobile_li_${i}`}> 
                                        <Link 
                                            to={item.path}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration= {500}
                                            onClick={this.handleCollapseMenu}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                                }
                            )}
                    </ul>
              </nav>
            </header>
        )
    }
}

export default index