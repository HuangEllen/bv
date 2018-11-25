import React, { Component } from 'react';

class classImg extends Component {

    render() {
        return (

            <div className="preview col-md-6">
                <div className="img-big-wrap">
                    <div>
                        <a href="#">
                            <img src="https://via.placeholder.com/450x450 " />
                        </a>
                    </div>
                    <div className="img-small-wrap d-flex justify-content-center mt-4">
                        <div className="item-gallery mr-3">
                            <a href="#"> <img src="https://via.placeholder.com/100x100" /> </a>
                        </div>
                        <div className="item-gallery mr-3">
                            <a href="#"> <img src="https://via.placeholder.com/100x100" /> </a>
                        </div>
                        <div className="item-gallery ">
                            <a href="#"> <img src="https://via.placeholder.com/100x100" /> </a>
                        </div>
                    </div>
                    {/*  <ul className="preview-thumbnail nav nav-tabs">
                                    <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                </ul> */}
                </div>
            </div>

        )
    }
}

export default classImg;