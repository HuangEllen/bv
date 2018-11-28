import React, { Component } from "react";
import ClassText from './classText';
import ClassImg from './classImg';
import AllTab from './allTab';
import LinkClass from '../OpenClass/link';

class openClass extends Component {
    render() {
        return (
            <React.Fragment><h1>OpenClass</h1>
                <div className="container mt-5">
                    <div className="card p-3 bg-s2 border-f">
                        <div className="wrapper row d-flex justify-content-around">
                            <ClassImg />
                            <ClassText />
                        </div>
                        <hr/>
                        <div className="wrapper row d-flex justify-content-around flex-column">
                            <AllTab />
                        </div>

                    </div>
                    <div className="d-flex justify-content-around row">
                        <LinkClass />
                    </div>
                </div>


            </React.Fragment>

        )
    }
}

export default openClass;