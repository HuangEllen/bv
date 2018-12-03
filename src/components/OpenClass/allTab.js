import React, { Component } from 'react';
import moment from 'moment'; 


class allTab extends Component {
    // constructor(props) {
    //     super(props);

    // }
    render() {
        let items=this.props.items;
        return (
            
            <React.Fragment>
                <div className="container  col-10">
                    <h2 className=" mt-5">課程介紹</h2>

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

                    </div>
                </div>
                {/* <div className="container mt-5 col-10">
                    <h3 className=" mt-3">常見問題</h3>
                    <p>Only 7.8 kB gzipped, no dependencies<br />
                        Small API, small learning curve</p>
                </div> */}

            </React.Fragment >


        )
    }
}

export default allTab;