import React, { Component } from 'react';
import { Route, Link ,Switch } from "react-router-dom";

import './MemberCenter.css';

import Member from './Member';
import MemberOrder from './MemberOrder';
import MemberRecord from './MemberRecord';

class MemberCenter extends Component {
    // constructor(props){
    //     super(props)
    //     // console.log(props.match.url)  // /about
    // }

    // tabChange=()=>{
    //     console.log(this);
    //     var current = document.getElementsByClassName("active");
    //     current[0].className = current[0].className.replace(" active", "");
    //     this.className += " active";

    // }
    componentDidMount() {
        var header = document.getElementById("myTab");
        var btns = header.getElementsByClassName("caBtn");
        console.log(btns);
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("caactive");
                console.log(current[0])

                current[0].className = current[0].className.replace(" caactive", "");
                this.className += " caactive";
            });
        }
    }

    render() {
        return (

            <React.Fragment>
                <div className="container">
                    <h2 className="title text-f">會員中心</h2>
                    <div className="caBar row">
                        <div className="col-1">
                            <div className="caWhitebox "></div>
                        </div>
                        <h4 className="caMembertitle col-8">一般會員</h4>
                        <div className="col-3">
                            <div className="caDeletebox ">修改密碼</div>
                        </div>
                    </div>
                    <div className="container">
                        <ul className="nav nav-tabs catabs" id="myTab" role="tablist">
                            <li className="nav-item ">
                                <Link to={`${this.props.match.url}/Member`} style={{ textDecoration: 'none' }}><div className="nav-link caBtn caactive" >資訊管理</div></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`${this.props.match.url}/MemberOrder`} style={{ textDecoration: 'none' }}><div className="nav-link caBtn" >收藏/訂單</div></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`${this.props.match.url}/MemberRecord`} style={{ textDecoration: 'none' }}><div className="nav-link caBtn" >我的紀錄</div></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`${this.props.match.url}/organization`} style={{ textDecoration: 'none' }}><div className="nav-link caBtn" >我的課程</div></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                </div> */}
                {/* <Link to={`${this.props.match.url}/Member`}>會員管理</Link> |
                <Link to={`${this.props.match.url}/organization`}>收藏/訂單</Link> |
                <Link to={`${this.props.match.url}/organization`}>我的紀錄</Link> |
                <Link to={`${this.props.match.url}/organization`}>我的課程</Link> | */}


                {/* <hr /> */}
                <Switch>
                    {/* http://localhost:3000/about/Member */}
                    <Route exact path={`${this.props.match.path}/Member`} component={Member} />
                    <Route exact path={`${this.props.match.path}/MemberOrder`} component={MemberOrder} />
                    <Route exact path={`${this.props.match.path}/MemberRecord`} component={MemberRecord} />


                </Switch>
            </React.Fragment>

        );
    }
}

export default MemberCenter;