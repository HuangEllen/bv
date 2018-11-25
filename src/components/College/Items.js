import React, { Component } from 'react';


class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            c_room: []
        }
    }
    addHandler = (evt) => {
        evt.preventDefault();
        const c_room = this.state.c_room;
        c_room.push(evt);
        this.setState({
            c_room
        })
    }
    checkHandler = (evt) => {
        evt.preventDefault();

    }
    render() {
        const { college, modal } = this.state;
        return (
            <React.Fragment>
                {this.props.items.map(items =>
                    <div className="col-md-3  mb-5 mt-5" key={items.idx}>
                        <div className=" product-new-label">
                            <a href="#">
                                <img className="ellen-teach-p1" src="/images/tpic1.jpg" />
                            </a>
                        </div>
                        <div className="product-grid ">
                            <div className="product-image">
                                <a href="#">
                                    <img className="pic-1" src={require(`../../../public/images/${items.c_img1}`)} />
                                </a>
                                <ul className="social ">
                                    <li><a href="" onClick={this.checkHandler} data-tip="加入收藏"><i className="fas fa-bookmark"></i></a></li>
                                    <li><a href="" onClick={this.addHandler} data-tip="加入購物車"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                                <div className="product-discount-label "><img src="/images/tag-1.svg" /></div>
                            </div>
                            <div className="product-content">
                                <span className=""><h4>{items.c_title}</h4></span>
                                <div className="d-flex justify-content-between ">
                                    <p className="ellen-p ">地區:{items.prople}</p>
                                    <p className="ellen-p ">類型:{items.c_category}</p>
                                </div>

                                <div className="d-flex justify-content-between ">
                                    <p className="ellen-p ">課時{items.c_total_time}分鐘 </p>
                                    <h4 className="text-f">NT {items.amount} </h4>
                                </div>
                            </div>
                        </div>









                    </div>

                )
                }


            </React.Fragment>
        );
    }
}

export default Items;