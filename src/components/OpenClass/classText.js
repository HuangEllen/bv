import React, { Component } from 'react';
import Quantity from './quantity';
import moment from 'moment';

class classText extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let items = this.props.items;
    // console.log(items.total_pop)
    return (

      <React.Fragment>
        <div className="ellen_menue_box details col d-flex flex-column justify-content-center ml-5 mr-5 ml-5 mr-5" >
          <div className="card ellen_menue p-4">
            <h3 className="product-title mt-2">{items.c_title}</h3>

            <h3 className="review-no mt-3">NT {items.amount}</h3>
            <div>
              <Quantity />
            </div>
            <h3 className="review-no mt-3">報名餘額： {items.total_pop ? items.total_pop : items.c_people} 人</h3>
            <div className="action mt-3">
              <button className="btn col-11 bg-first text-w " type="button">放入購物車</button>

            </div>
            <div className="d-flex mt-3 justify-content-center">
              <a href=""><i className="fas fa-bookmark mr-3 mb-2 txt_mes"></i></a><h5 className="sizes">加入至收藏</h5>
            </div>
            <div className="d-flex mt-3 justify-content-center">
              <a href=""><i className="fa fa-heart mr-3 mb-2 txt_mes"></i></a><h5 className="sizes">分享此商品</h5>
            </div>
            <p className="ellen-p ">預計開課時間:{moment(this.props.items.c_opdate).format('YYYY-MM-DD')}</p>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default classText;