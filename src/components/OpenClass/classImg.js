import React, { Component } from 'react';
import $ from 'jquery';

class classImg extends Component {

    render() {
        return (

            <section id="default" className="padding-top0 col d-flex justify-content-center ml-5 mr-5">
                <div className="row">
                    <div className="large-5 column">
                        <div className="xzoom-container">
                            <img className="xzoom" id="xzoom-default" width="500" src="/images/a.jpg" />
                            <div className="xzoom-thumbs mt-3">
                                <a href="#">
                                    <img className="xzoom-gallery" width="80"  src="/images/a.jpg"  title="The description goes here" /></a>

                                <a href="#">
                                    <img className="xzoom-gallery" width="80" src="/images/1387938109-1593935606.jpg" title="The description goes here" /></a>

                            </div>
                        </div>
                    </div>
                    <div className="large-7 column"></div>
                </div>
            </section>
        )
    }
}

export default classImg;