import React, { Component } from 'react';

class aboutUs extends Component {

    render() {
        return (
            <React.Fragment>
                <h2 className="mt-4 mb-5">最新消息</h2>
                <div className="row border-f mb-5">
                    <div className="col-md-6  ellen-pdn  d-flex flex-column justify-content-center ">
                        <h3 className="mb-4">
                            Highly Skilled Volunteers
                        </h3>
                        <div>
                            <p className="ellen-pad">
                                Through its program, TopVolunteer™, GetLance partners with leading nonprofits and NGOs around the
                                world who need high-skilled talent for their volunteer initiatives. Members of the GetLance network
                                are encouraged to offer their skills and experience to these projects, whether to solve a timely
                                problem or to contribute on an ongoing basis.
                            </p>
                        </div>
                        <div className="more">
                            <button href="#" className="btn bg-first text-w">
                                觀看更多
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 ellen-pdn  ellen-hidd">
                        <img className="ellen-us" src="/images/27459562_456658361417569_7969213993944439229_n.jpg" alt="" />
                    </div>
                </div>

                <div className="row border-f mb-5">
                    <div className="col-md-6 ellen-pdn  ellen-hidd">
                        <img className="ellen-us" src="/images/35244520_515200892229982_5016013251830349824_n.jpg" alt="" />
                    </div>
                    <div className="col-md-6  ellen-pdn d-flex flex-column justify-content-center">
                        <h3 className="mb-4">
                            Highly Skilled Volunteers
                        </h3>
                        <div>
                            <p className="ellen-pad">
                                Through its program, TopVolunteer™, GetLance partners with leading nonprofits and NGOs around the
                                world who need high-skilled talent for their volunteer initiatives. Members of the GetLance network
                                are encouraged to offer their skills and experience to these projects, whether to solve a timely
                                problem or to contribute on an ongoing basis.
                            </p>
                        </div>
                        <div className="more">
                            <button href="#" className="btn bg-first text-w">
                                觀看更多
                            </button>
                        </div>
                    </div>

                </div>

            </React.Fragment>



        )
    }
}

export default aboutUs;