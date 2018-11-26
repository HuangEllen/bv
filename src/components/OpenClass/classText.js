import React, { Component } from 'react';
import Quantity from './quantity';

class classText extends Component {

    render() {
        return (
            <div className="details col-md-4">
                <div className="card">
                    <h3 className="product-title">業界講師的勸戒</h3>
                    <h3 className="review-no">NT 1,800</h3>
                    <div>
                        <Quantity />                        </div>
                    <div className="action">
                        <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                        <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                    </div>
                    <h4 className="sizes">加入收藏清單</h4>
                    <h4 className="sizes">分享此商品</h4>
                    <div className="action">
                        <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                        <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                    </div>
                    <p>預計開課時間:2018/12/23</p>
                </div>
            </div>
        )
    }
}

export default classText;