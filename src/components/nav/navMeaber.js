import React, { Component } from 'react';

class navMeaber extends Component {

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
                            <a className="nav-link " href="#">註冊
                                    
                            </a>
                        </li>
                        <li className="nav-item ellen-span">
                            <a className="nav-link " href="#">登入  </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#"> <i className="fas fa-shopping-cart"> </i> 購物車</a>
                        </li>
                    </ul>
                </div>
            </React.Fragment>

        )
    }
}

export default navMeaber;