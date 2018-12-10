import React, { Component } from 'react';
import moment from 'moment';


class allTab extends Component {
  // constructor(props) {
  //     super(props);

  // }
  render() {
    let items = this.props.items;
    let croom = this.props.croom;
    return (

      <React.Fragment>
        <div className="container  col-10">
          {/* <h2 className=" mt-5">課程介紹</h2>

                    <h3 className=" mt-5">課程內容</h3>
                    <h4 className="mt-4">時間：{moment(this.props.items.c_opdate).format('YYYY-MM-DD  h:mm a')}</h4>
                    <h4 className="mt-4">地點：{items.c_address}{items.c_area}</h4>
                    <p className="mt-4">{items.c_detail}</p>
                </div>
                <div className="container mt-5 col-10">
                    <h3 className=" mt-3">關於講師</h3>
                    <div className="d-flex justify-content-center mt-5">
                        <div className="col-6 d-flex flex-column align-items-center">
                            <div className="ellen_hidbox1 ">
                                <img src="/images/5b4848b263849.png" alt="" />
                            </div>
                            <h3 className="mt-4 mb-3">張玉青</h3>
                        </div>
                        <div className="col-6 text-center">
                            <p>Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!</p>
                        </div>

                    </div>

                </div>
                <div className="container mt-5 col-10">
                    <h3 className=" mt-3">使用產品</h3>
                    <div className="d-flex justify-content-center mt-5">
                        <div className="col-6 d-flex flex-column align-items-center">
                            <div className="ellen_hidbox3 ">
                                <img src="/images/5b4848b263849.png" alt="" />
                            </div>
                            <h4 className="mt-4 mb-3">張玉青</h4>
                        </div>
                        <div className="col-6 text-center">
                            <p>Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!</p>
                        </div>

                    </div> */}
          <h3 className=" mt-5 mb-4">課程介紹</h3>

          <div className="profile-head">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="ellen_item ">
                <a className="my_link ellen_active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">課程內容</a>
              </li>
              <li className="ellen_item">
                <a className="my_link ellen_active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">講師資訊</a>
              </li>
              <li className="ellen_item">
                <a className="my_link ellen_active" id="ellen-tab" data-toggle="tab" href="#ellen" role="tab" aria-controls="ellen" aria-selected="false">使用產品</a>
              </li>
            </ul>
          </div>

          <div className="tab-content profile-tab " id="myTabContent">
            <div className="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="row d-flex flex-column align-items-center mb-5 ">
                <h4 className="review-no mt-3">課堂總人數： {items.c_people} 人</h4>
                <h4 className="mt-4">時間：{moment(this.props.items.c_opdate).format('YYYY-MM-DD  h:mm a')}</h4>
                <h4 className="mt-4">地點：{items.c_address}{items.c_area}</h4>
                <h3 className="review-no mt-5">課程大綱</h3>
                <p className="mt-2">{items.c_detail}</p>


              </div>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <h3 className=" ">講師資訊</h3>

              <div className="d-flex justify-content-center mt-4">
                <div className="col-6 d-flex flex-column align-items-center">
                  <div className="ellen_hidbox1 ">
                    <img src={`/images/${croom.user_img} `} alt="" />
                  </div>
                  <h3 className="mt-4 mb-3">{croom.teacher_name}</h3>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center">
                  <h4 className="review-no ">關於我</h4>
                  <p className="mb-5 ">{croom.my_inform}</p>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="ellen" role="tabpanel" aria-labelledby="ellen-tab">
              <h3 className=" mt-3">使用產品</h3>
              <div className="d-flex justify-content-center mt-4">
                <div className="col-6 d-flex flex-column align-items-center">
                  <div className="ellen_hidbox3 ">
                    <img src={`/images/${croom.img} `} alt="" />
                  </div>
                  <h3 className="mt-4 mb-3">{croom.name}</h3>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center">
                  <h4 className="review-no ">產品資訊</h4>
                  <p className="mb-5 ">{croom.text}</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container mt-5 col-10">
                    <h3 className=" mt-3">常見問題</h3>
                    <p>Only 7.8 kB gzipped, no dependencies<br />
                        Small API, small learning curve</p>*/}
        </div>

      </React.Fragment >


    )
  }
}

export default allTab;