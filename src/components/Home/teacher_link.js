import React, { Component } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";


export default class linkclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      professor: [],
      display: true,
      width: 1100

    }
  }
  componentDidMount() {
    //ajax call
    this.getClass();
  }
  getClass() {
    // var a=this.state.page,
    //     b=this.state.c_category;
    fetch("/professorId/professor")  //http://localhost:3000/professor/api
      .then(res => res.json())
      .then(professor => {
        console.log(professor)
        this.setState({
          professor: professor
        })
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
            {this.state.professor.map(professor =>
              <div className="col mt-4 text-center" key={professor.user_id}>
                <div className="d-flex justify-content-center flex-column text-center border-f">
                  <Link to={`/professor/${professor.user_id}`} className="slide ">
                    <img className=" mt-3 ellen_hidbox1" src={`/images/${professor.user_img} `} alt="" />
                  </Link>

                  <h3 className="mt-4">{professor.teacher_name}</h3>
                  <p>專長：{professor.link_name}</p>
                </div>
              </div>
            )}
            </Slider>
        </div>

      </React.Fragment>
    );
  }
}
