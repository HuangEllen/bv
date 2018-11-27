import React, { Component } from 'react';
// import $ from 'jquery';


class linkclass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            c_room: []
        }
    }
    componentDidMount() {
        //ajax call
        this.getClass();
    }
    getClass() {
        fetch("/allcroom/croom")  //http://localhost:3000/professor/api
            .then(res => res.json())
            .then(c_room => {
                console.log(c_room)
                this.setState({ c_room: c_room })
            })

    }
    render() {

        return (
            <React.Fragment>
                <div className="owl-carousel owl-theme d-flex">
                    {this.state.c_room.map(c_room =>

                        <div className="col-md-3  mb-5 mt-5 " key={c_room.idx}>
                            <div className="product-grid ">
                                <div className="product-image">
                                    <a href="#" className=" ellen_hidbox">
                                        <img className="pic-1" src={`/images/${c_room.c_img1} `} />
                                    </a>
                                    <ul className="social ">
                                        <li><a href="" onClick={this.checkHandler} data-tip="加入收藏"><i className="fas fa-bookmark"></i></a></li>
                                        <li><a href="" onClick={this.addHandler} data-tip="加入購物車"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                    <div className="product-discount-label "><img src="/images/tag-1.svg" /></div>
                                </div>
                                <div className="product-content">
                                    <h4>{c_room.c_title}</h4>
                                    <div className="d-flex justify-content-between ">
                                        <p className="ellen-p ">人數:{c_room.c_people}</p>
                                        <p className="ellen-p ">類型:{c_room.c_category}</p>
                                    </div>
                                    <div className="d-flex justify-content-between ">
                                        <p className="ellen-p ">課時{c_room.c_total_time}分鐘 </p>
                                        <h4 className="text-f">NT {c_room.amount} </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </React.Fragment>
        );
    }
}

export default linkclass;