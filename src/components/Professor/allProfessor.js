import React, { Component } from 'react';
import Professon from './professor';
class allprofessor extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="container ">
                    <h1>Professor</h1>
                    <Professon />
                    
                </div>


            </React.Fragment >

        );
    }
}
export default allprofessor;