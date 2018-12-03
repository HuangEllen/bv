import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Items extends Component {
    constructor(props) {
        super(props);
    }
    // componentDidMount() {
    //     console.log('props', this.props)
    // }
    // <img className="pic-1" src={require(`../../../public/images/${items.c_img1}`)}/>
    render() {
        return (
            <React.Fragment>

                {this.props.items.map(items =>

                    <div className="col-md-3  mb-5 mt-5" key={items.idx}>
                        <div className=" product-new-label">
                            <a href="#">
                                <img className="ellen-teach-p1" src={`/images/${items.img} `} />
                            </a>
                        </div>
                        <div className="product-grid ">
                            <div className="product-image">
                                <Link to={`/openclass/${items.idx}`} className=" ellen_hidbox product-image">
                                    <img className="pic-1 ellen_classbox" src={`/images/${items.c_img1} `} />
                                </Link>
                                <ul className="social ">
                                    <li><a href="" onClick={this.checkHandler} data-tip="加入收藏"><i className="fas fa-bookmark"></i></a></li>
                                    <li><a href="" onClick={this.addHandler} data-tip="加入購物車"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                                <div className="product-discount-label "><img src={`/images/${items.img_url} `} /></div>
                            </div>
                            <div className="product-content d-flex justify-content-between flex-column">
                                <h4 className="text-f f_w400">{items.c_title}</h4>

                                <div className="d-flex justify-content-between ">
                                    <p className="ellen-p ">人數:{items.c_people}</p>
                                    <p className="ellen-p ">類型:{items.link_name}</p>
                                </div>
                                <div className="d-flex justify-content-between ">
                                    <p className="ellen-p ">課時{items.c_total_time}分鐘 </p>
                                    <h4 className="text-f">NT {items.amount} </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }

}

export default Items;