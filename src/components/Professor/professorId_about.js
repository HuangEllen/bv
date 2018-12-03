import React, { Component } from 'react';
import './allprofessor.scss'
import MyClass from './my_class';

class professorId_about extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let items=this.props.professor;
        // console.log(<img src={`/images/${items.l_img1} `}  alt="" />)
        return (
            <React.Fragment>

                    <div className="profile-head">
                        <h3 className="text-f ">
                            關於我
                                    </h3>
                        <h6 className="p-4 text-left">{items.my_inform}
                                    </h6>
                        <h3 className="text-f">
                            我的經歷
                                    </h3>
                        <h6 className="p-4 text-left">{items.experience}

                                    </h6>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="ellen_item ">
                                <a className="my_link ellen_active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">證書圖片</a>
                            </li>
                            <li className="ellen_item">
                                <a className="my_link ellen_active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">我的課程</a>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row d-flex flex-column align-items-center">
                                <div className="ellen_hidbox2 ">
                                    <img src={`/images/${items.l_img1} `}  alt="" />
                                </div>
                                <div className="ellen_hidbox2 mt-3">
                                    {/* <img src={`/images/${items.l_img2} `}  alt="" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="row d-flex flex-column align-items-center">
                                <div className="row justify-content-center">
                                    <h3 className="text-f">上架中</h3>
                                    <MyClass />
                                </div>
                                <div className="row justify-content-center">
                                    <h3 className="text-f">已參加</h3>

                                    <MyClass />

                                </div>
                            </div>


                        </div>
                    </div>

            </React.Fragment>
        )
    }
}
export default professorId_about;