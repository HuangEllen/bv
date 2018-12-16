import React, { Component } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";


export default class linkclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c_room: [],
      display: true,
      width: 1100

    }
  }
  componentDidMount() {
    //ajax call
    this.getClass();
  }
  getClass() {
    fetch("/allcategory/slider_page")  //http://localhost:3000/professor/api
      .then(res => res.json())
      .then(c_room => {
        // console.log(c_room)
        this.setState({ c_room: c_room })
      })

  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <React.Fragment>
        <div className="container  " style={{
          width: this.state.width + "px",
          display: this.state.display ? "block" : "none"
        }}>

          <Slider {...settings}>
            {this.state.c_room.map(c_room =>

              <div className="col-sm  mb-2 mt-5" key={c_room.idx}>
                <div className=" product-new-label">
                  <Link to={`/professor/${c_room.user_id}`}>
                    <img className="ellen-teach-p1" src={`/images/${c_room.img} `} />
                  </Link>
                </div>
                <div className="product-grid ">
                  <div className="product-image">
                    <a href={`/openclass/${c_room.idx}`} className=" ellen_hidbox product-image">
                      <img className="pic-1 ellen_classbox" src={`/images/${c_room.c_img1} `} />
                    </a>
                    <ul className="social ">
                      <li className='mr-4'><a href="" onClick={this.checkHandler} data-tip="加入收藏"><i className="fas fa-bookmark"></i></a></li>
                      <li className=''><a href="" onClick={this.addHandler} data-tip="加入購物車"><i className="fa fa-shopping-cart "></i></a></li>
                    </ul>
                    <div className="product-discount-label "><img src={`/images/${c_room.img_url} `} /></div>
                  </div>
                  <div className="product-content d-flex justify-content-between flex-column">
                    <h4 className="text-f f_w400">{c_room.c_title}</h4>

                    <div className="d-flex justify-content-between ">
                      <p className="ellen-p ">可報名人數:{c_room.total_pop ? c_room.total_pop : c_room.c_people}</p>
                      <p className="ellen-p ">類型:{c_room.link_name}</p>
                    </div>
                    <div className="d-flex justify-content-between ">
                      <p className="ellen-p ">課時{c_room.c_total_time}分鐘 </p>
                      <h4 className="text-f">NT {c_room.amount} </h4>
                    </div>
                  </div>
                </div>
              </div>
            )}</Slider>
        </div>

      </React.Fragment>
    );
  }
}
