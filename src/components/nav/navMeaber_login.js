import React, { Component } from 'react';
import { Link } from 'react-router-dom'
var a = JSON.parse(localStorage.getItem("member"));




class navMeaber_login extends Component {

    logout = (evt) => {
        localStorage.setItem("isLogin", false);
        window.location.href ="http://localhost:3001/Home";
    }

    render() {
        return (
            <React.Fragment>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarText">
                    <ul className=" navbar-nav ml-md-auto d-md-flex">
                    <li className="nav-item">
                            <a className="nav-link " style={{cursor:'default'}}>你好，{a[0].name}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " onClick={this.logout} style={{cursor:'pointer'}}>登出 </a>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                                    <div><i className="fas fa-shopping-cart ml mr-2"></i>購物車</div>
                                </Link>
                        </li>
                    </ul>
                </div>
            </React.Fragment>

        )
    }
}

export default navMeaber_login;