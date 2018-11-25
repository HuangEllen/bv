import React, { Component } from 'react';
import Hero from './hero';
import About from './about';
import AboutUs from './aboutUs'

class home extends Component {

    render() {
        return (
            <React.Fragment>
                <Hero/>
                <div className="container">
                
                <About/>
                <AboutUs/>
                </div>
                
            </React.Fragment>



        )
    }
}

export default home;