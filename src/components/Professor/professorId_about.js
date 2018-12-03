import React, { Component } from 'react';
import './allprofessor.scss'
import MyClass from './my_class';

class professorId_about extends Component {
    render() {
        return (
            <React.Fragment>

                    <div className="profile-head">
                        <h3 className="text-f">
                            關於我
                                    </h3>
                        <h6 className="p-4">一個做任何事都需要先有說服自己理由才願意去做的固執者。一個習慣用反向思考模式看待生命與人事物的人。一個認為自己很普通但是只用天分做事的設計者。一個不喜歡跟隨潮流與被動接受產業現況的美學講師。這就是我，只想做我認為對的事。
                                    </h6>
                        <h3 className="text-f">
                            我的經歷
                                    </h3>
                        <h6 className="p-4 text-left">整體造型學院護膚spa講師
                                                        1998年英國Tisserand Aromatherapy學院進修
                                                        鄉村國際有限公司芳療講師
                                                        2001年澳洲Spaing Fiecds芳療學院進修
                                                        澳洲春天精油芳療講師
                                                        中華美容美體促進協會理監事
                                                        許莉伶美容教育總監
                                                        妮頓絲美容教育講師
                                                        絲翠兒專任美容講師
                                                        溫州美泰公司施諾雅專任講師
                                                        spa網美容美體教育總監

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
                                    <img src="/images/b72c10f8f973442cbddf15b21a8c046c.jpg" alt="" />
                                </div>
                                <div className="ellen_hidbox2 mt-3">
                                    <img src="/images/pic.jpg" alt="" />
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