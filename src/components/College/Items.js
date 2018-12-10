import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { totalmem } from 'os';

class Items extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    // console.log(this.professor)
    return (
      <React.Fragment>

        {this.props.items.map(items =>

          <div className="col-md-3  mb-5 mt-5" key={items.idx}>
            <div className=" product-new-label">
              <Link to={`/professor/${items.user_id}`}>
                <img className="ellen-teach-p1" src={`/images/${items.img} `} />
              </Link>
            </div>
            <div className="product-grid ">
              <div className="product-image">
                <Link to={`/openclass/${items.cs_id}`} className=" ellen_hidbox product-image">
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
                  <p className="ellen-p ">可報名人數:{items.total_pop ? items.total_pop : items.c_people}</p>
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