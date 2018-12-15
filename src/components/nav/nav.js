import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Search from './search';
import NavMeaber from './navMeaber';
import Logo from './logo';
import NavMeaber_login from './navMeaber_login';

var isLogin = JSON.parse(localStorage.getItem("isLogin"))

class nav extends Component {
    chkLogin = () => {
        if (isLogin != true) {
            alert("請先登入");
            window.location.href = "http://localhost:3001/Login";

        }
    }
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg    flex-column bg-first fixed-top navbar-dark">
                    <div className="flex container  r">
                        <Search />
                        <Logo />
                        {isLogin ? <NavMeaber_login /> : <NavMeaber />}
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
                                    <Link to="/Store" className="dropdown-item">商品總覽</Link>
                                    <a href="#" className="dropdown-item">水妍潤澤系列</a>
                                    <a href="#" className="dropdown-item">毛孔淨化系列</a>
                                    <a href="#" className="dropdown-item">光感超淨白系列</a>
                                    <a href="#" className="dropdown-item">BV年輕肌密系列</a>
                                    <a href="#" className="dropdown-item">全方位防曬系列</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="College" id="navdrop" role="button" data-toggle="dropdown"
                                    data-hover="dropdown">教育學苑</a>
                                <div className="dropdown-menu" aria-labelledby="navdrop">
                                    <Link to="/College" className="dropdown-item">課程總攬</Link>
                                    <a href="#" className="dropdown-item">我要開課</a>
                                    <Link to="/Professor" className="dropdown-item">講師資群</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/article/articlelist">
                                    美肌情報
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#" className="nav-link" to="/MemberCenter/member" onClick={this.chkLogin}>會員中心</Link>
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