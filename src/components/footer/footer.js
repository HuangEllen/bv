import React, { Component } from 'react';
import '../footer/footer.scss'
class footer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <section id="footer">
                    <div className="container">
                        <div className="row text-center text-xs-center text-sm-left text-md-left">
                            <div className="col-xs-12 col-sm-3 col-md-3">
                                <h5>關於我們</h5>
                                <ul className="list-unstyled quick-links">
                                    <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>關於BellaVia</a></li>
                                    <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>隱私權聲明</a></li>
                                    <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>版權及服務條款</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-3 col-md-3">
                                <h5>聯絡我們</h5>
                                <ul className="list-unstyled quick-links">
                                    <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>02-2222-6666</a></li>
                                    <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>ballavia@gmail.com</a></li>
                                    <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>業務合作洽談</a></li>
                                    <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-3 col-md-3">
                                <h5>顧客服務</h5>
                                <ul className="list-unstyled quick-links">
                                    <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>訂單說明</a></li>
                                    <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>退換貨說明</a></li>
                                    <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>發票說明</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-3 col-md-3">
                                <h5>社群媒體</h5>
                                <ul className="list-unstyled quick-links ">
                                    <li ><a href="javascript:void();"><i className="fa fa-facebook"></i>facebook</a></li>
                                    <li ><a href="javascript:void();"><i className="fa fa-twitter"></i>twitter</a></li>
                                    <li ><a href="javascript:void();"><i className="fa fa-instagram"></i>instagram</a></li>
                                    <li ><a href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i>E-mail</a></li>
                                </ul>
                            </div>
                        </div>

                            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white ellen-border-w">
                                <p className="ellentop">貝拉維亞© 版權所有2018</p>
                            </div>

                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default footer;