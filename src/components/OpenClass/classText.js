import React, { Component } from 'react';

class classText extends Component {

    render() {
        return (
            <div className="details col-md-4">
                <div className="card">
                    <h3 className="product-title">業界講師的勸戒</h3>
                    <h3 className="review-no">NT 1,800</h3>
                    <div>
                            <div class="btn-minus"><span class="glyphicon glyphicon-minus"></span></div>
                            <input value="1" />
                            <div class="btn-plus"><span class="glyphicon glyphicon-plus"></span></div>
                        </div>
                    <h4 className="price">current price: <span>$180</span></h4>
                    <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                    <h5 className="sizes">sizes:
							<span className="size" data-toggle="tooltip" title="small">s</span>
                        <span className="size" data-toggle="tooltip" title="medium">m</span>
                        <span className="size" data-toggle="tooltip" title="large">l</span>
                        <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                    </h5>
                    <h5 className="colors">colors:
							<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                        <span className="color green"></span>
                        <span className="color blue"></span>
                    </h5>
                    <div className="action">
                        <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                        <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default classText;