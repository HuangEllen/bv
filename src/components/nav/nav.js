import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Search from './search';
import NavMeaber from './navMeaber';
import Logo from './logo';

class nav extends Component {

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg    flex-column bg-first fixed-top navbar-dark">
                    <div className="flex container  r">
                        <Search />
                        <Logo />
                        <NavMeaber />
                    </div>
                    <div className=" container  ">
                        <ul className="navbar-nav container justify-content-around  ">
                            <li className="nav-item nav-link.active">
                                <a href="#" className="nav-link ">關於我們</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navdrop" role="button" data-toggle="dropdown"
                                    data-hover="dropdown">商品列表</a>
                                <div className="dropdown-menu" aria-labelledby="navdrop">
                                    <a href="#" className="dropdown-item">Service1</a>
                                    <a href="#" className="dropdown-item">Service2</a>
                                    <a href="#" className="dropdown-item">Service3</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="College" id="navdrop" role="button" data-toggle="dropdown"
                                    data-hover="dropdown">教育學苑</a>
                                <div className="dropdown-menu" aria-labelledby="navdrop">
                                    <Link to="/College" className="dropdown-item">課程總攬</Link>
                                    <Link to="/OpenClass" className="dropdown-item">我要開課</Link>
                                    <Link to="/Professor" className="dropdown-item">講師資群</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">美肌情報</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">FQA</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                

                {/* <Row /> */}
            </React.Fragment>
        )
    }
}

export default nav;