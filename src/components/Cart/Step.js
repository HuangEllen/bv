import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Step extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <React.Fragment>
                
                <div className="container">
                    <div className="progressbar d-flex justify-content-between row">
                        <button className="btn text-white yuru-btn-cart mr-2">我的購物車</button>
                        <button type="submit" className="btn yuru-btn-pay text-white btn-size">選擇送貨及付款方式</button>
                        <button className="btn text-white yuru-btn-fill">填寫資料</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Step;