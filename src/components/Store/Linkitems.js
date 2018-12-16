import React, { Component } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";


export default class Linkitems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: [],
            display: true,
            width: 1100
        }
    }
    componentDidMount() {
        this.gettype();
    }
    gettype() {
        fetch("http://localhost:3000/classify/product")
            .then(res => res.json())
            .then(type => {
                this.setState({ type: type })
            })

    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <React.Fragment>
                <div className="container" style={{
                    width: this.state.width + "px",
                    display: this.state.display ? "block" : "none"
                }}>

                    <Slider {...settings}>
                        {this.state.type.map(type =>
                            <div className="col-sm  mb-2 mt-5" key={type.product_id}>
                                <div className="yuru-product-grid">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href={`/itemdetail/${type.product_id}`}>
                                            <img className="pic-1 ellen_classbox" src={`/images/${type.productimages} `} />
                                        </a>
                                        <ul className="social">
                                            <li className=''><a href="" onClick={this.checkHandler} data-tip="加入收藏"><i className="fas fa-bookmark"></i></a></li>
                                            <li className=''><a href="" onClick={this.addHandler} data-tip="加入購物車"><i className="fa fa-shopping-cart "></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="yuru_product-content text-center">
                                        <h4 className="text-f f_w400">{type.productname}</h4>
                                        <h4 className="text-f">NTD {type.productprice}</h4>
                                    </div>
                                    <div className="text-center">
                                        <a href={`/itemdetail/${type.product_id}`}><button value={type.product_id} onClick={this.checkHandler} className="btn btn-yuru-check">查看商品</button></a>
                                    </div>
                                </div>
                            </div>
                        )}</Slider>
                </div>

            </React.Fragment>
        );
    }
}
