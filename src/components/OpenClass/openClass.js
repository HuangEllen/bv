import React, { Component } from "react";
import ClassText from './classText';
import ClassImg from './classImg';

class openClass extends Component {
    render() {
        return (
            <React.Fragment><h1>OpenClass</h1>
                <div className="container">
                    <div className="card">
                        <div className="wrapper row d-flex justify-content-around">
                            <ClassImg />
                            <ClassText />

                        </div>
                    </div>
                </div>


            </React.Fragment>

        )
    }
}

export default openClass;