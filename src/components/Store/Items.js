import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
var isLogin = JSON.parse(localStorage.getItem("isLogin"))
class Items extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: {},
            qty: "1"
        }

    }

    AddCart = (type) => {
        if (isLogin == false) {
            alert("請先登入");
            window.location.href = "http://localhost:3001/Login";
        }
        var cart = {};
        var user = JSON.parse(localStorage.getItem("member"));
        cart['userid'] = user[0].id;
        cart['product_id'] = type.product_id;
        cart["qty"] = this.state.qty;
        cart["created_at"] = new Date();
        var test = JSON.stringify(cart);
        console.log(test);  
        fetch('http://localhost:3000/cart/Addcart', {
            method: 'POST',
            body: JSON.stringify(cart),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })

    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps")
    }
    
    render() {
        return (
            <React.Fragment>
                {this.props.type.map(type =>
                    <div className="col-md-3 mt-4" key={type.product_id}>
                        <div className="yuru-product-grid">
                            <div className="d-flex justify-content-center align-items-center">
                                <a href={`/itemdetail/${type.product_id}`}>
                                    <img className="pic-1 ellen_classbox" src={(`/images/${type.productimages}`)} />
                                </a>
                                <ul className="social yuru-social-position">
                                    <li><a className="mr-4" href="" onClick={this.collectHandler} data-tip="加入收藏"><i className="fas fa-bookmark"></i></a></li>
                                    <li><a href="#" onClick={() => this.AddCart(type)} value={type.product_id} data-tip="加入購物車"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="yuru_product-content text-center">
                                <h4 className="text-f f_w400">{type.productname}</h4>
                                <h4 className="text-f">NTD {type.productprice}</h4>
                            </div>
                            <div className="text-center">
                                <Link to={(`/itemdetail/${type.product_id}`)}> <button value={type.product_id} onClick={this.checkHandler} className="btn btn-yuru-check">查看商品</button></Link>
                            </div>
                        </div>
                    </div>
                )}


            </React.Fragment>
        );
    }
}

export default withRouter(Items);