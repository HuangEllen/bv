import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class navMeaber extends Component {

    render() {
        return (
            <React.Fragment>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarText">
                    <ul className=" navbar-nav ml-md-auto d-md-flex">
                        <li className="nav-item">
                            <Link className="nav-link " to="/Register2">註冊
                                    
                            </Link>
                        </li>
                        <li className="nav-item ellen-span">
                            <Link className="nav-link " to="/login">登入 </Link>
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

export default navMeaber;