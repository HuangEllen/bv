import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
class logo extends Component {

    render() {
        return (
            <h1 className=" logo">
                <Link className="navbar-brand" to="/Home"><img src="/images/logo.svg" alt="Home" /></Link>
            </h1>

        )
    }
}

export default logo;