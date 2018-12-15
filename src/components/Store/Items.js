import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

//樣式寫好了 再套到Items 圖片要調小張 或是用CSS再做調整
class Items extends Component {
    constructor(props) {
        super(props)
        this.state = {
           cart:{},
           qty:"1"
        }

    }
  
    AddCart = (items) =>{
        console.log(items.productimages)
        var cart = {};
        //cart = this.state.item;
        //console.log(cart[0]);
        var user = JSON.parse(localStorage.getItem("member"));
        cart['userid'] = user[0].id;
        cart['product_id'] = items.product_id;   
        cart["qty"] = this.state.qty;
        cart["created_at"] = new Date();
        var test = JSON.stringify(cart);
        console.log(test);
       //console.log(cart[0]);
        
       // console.log("addcart qty:" +this.state.qty)     
        fetch('http://localhost:3000/cart/Addcart',{
            method:'POST',
            body:JSON.stringify(cart),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        
    }
    render() {
        return (
            <React.Fragment>
                 {this.props.items.map(items =>

                    <div className="col-md-3" key={items.product_id}>
                        <div className="yuru-product-grid ">
                            <div className="d-flex justify-content-center align-items-center">
                                <a href="#">
                                    <img className="pic-1 ellen_classbox" src={(`/images/${items.productimages}`)}/>
                                </a>
                                <ul className="social yuru-social-position ">
                                    <li><a className="mr-4" href="" onClick={this.collectHandler} data-tip="加入收藏"><i className="fas fa-bookmark"></i></a></li>
                                    <li><a href="#" onClick={() => this.AddCart(items)} value={items.product_id}  data-tip="加入購物車"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="product-content text-center">
                                <h4 className="text-f f_w400">{items.productname}</h4>
                                <h4 className="text-f">NT {items.productprice}</h4>  
                            </div>
                            <div className="text-center">
                            <Link to={(`/itemdetail/${items.product_id}`)}> <button value={items.product_id} onClick={this.checkHandler}className="btn btn-yuru-check">查看商品</button></Link>
                            </div>
                        </div>
                    </div> 
)}               


            </React.Fragment>
        );
    }
}

export default withRouter(Items);