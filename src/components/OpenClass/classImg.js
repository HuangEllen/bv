import React, { Component } from 'react';
import $ from 'jquery';

class classImg extends Component {

  render() {
    let items = this.props.items;
    return (

      <section id="default" className="padding-top0 col-md d-flex justify-content-center ml-5 mr-5">
        <div className="row">
          <div className="large-5 column">
            <div className="xzoom-container">
              <img className="xzoom"
                id="xzoom-default"
                width="500"
                src={`/images/${items.c_img1} `} />
              <div className="xzoom-thumbs mt-3">
                <a href="#">
                  <img className="xzoom-gallery" width="80" src={`/images/${items.c_img1} `} title="課程照片" /></a>

                <a href="#">
                  <img className="xzoom-gallery" width="80" style={{ display: items.c_img2 ? '' : 'none' }} src={`/images/${items.c_img2} `} title="課程照片" /></a>

              </div>
            </div>
          </div>
          <div className="large-7 column"></div>
        </div>
      </section>
    )
  }
}

export default classImg;