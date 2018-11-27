import React, { Component } from 'react';
import './allprofessor.scss'

class professor extends Component {
    render() {
        return (
            <React.Fragment>
                <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src="/images/tpic1.jpg" alt="" />
                                <div className="profile-work">
                                    <h3 className="mt-4 mb-3">張玉青</h3>
                                    <div className='d-flex justify-content-center'>
                                        <a href=""><img className="ellen_fs" src="/images/icons8-dog-house-filled-50.png" /></a><br />
                                        <a href=""><img className="ellen_fs" src="/images/icons8-facebook-filled-50.png" /></a><br />
                                        <a href=""><img className="ellen_fs" src="/images/icons8-instagram-filled-50.png" /></a>
                                    </div>
                                    <h4 className="mt-3 mb-3">我的專長</h4>
                                    <p className="mt-1 mb-1">........</p>
                                    <div className="col mt-4">
                                        <input type="submit" className="profile-edit-btn text-w" name="btnAddMore" value="修改履歷" />
                                    </div>
                                    <hr />
                                    <h4 className="mt-3 mb-3">我的課程</h4>
                                    <div className="d-flex justify-content-around">
                                        <div>
                                            <h5>已開課</h5>
                                            <a href="">N堂課</a>
                                        </div>
                                        <div>
                                            <h5>已參加</h5>
                                            <a href="">N堂課</a>
                                        </div>

                                    </div>
                                    <div className="col mt-4">
                                        <input type="submit" className="profile-edit-btn text-w" name="btnAddMore" value="修改課程" />
                                    </div>
                                    <div className="col mt-4">
                                        <input type="submit" className="profile-edit-btn text-w" name="btnAddMore" value="我要上架" />
                                    </div>
                                    <div className="col mt-4">
                                        <input type="submit" className="profile-edit-btn text-w" name="btnAddMore" value="我要開課" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="profile-head">
                                <h3 className="text-f">
                                    關於我
                                    </h3>
                                <h6 className="p-4">一個做任何事都需要先有說服自己理由才願意去做的固執者。
一個習慣用反向思考模式看待生命與人事物的人。
一個認為自己很普通但是只用天分做事的設計者。
一個不喜歡跟隨潮流與被動接受產業現況的美學講師。
這就是我，只想做我認為對的事。
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
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Kshiti123</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Kshiti Ghelani</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>kshitighelani@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>123 456 7890</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Web Developer and Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        
                                        <div className="col-md-6">
                                            <p>230</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Availability</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </form>

            </React.Fragment>
        )
    }
}
export default professor;