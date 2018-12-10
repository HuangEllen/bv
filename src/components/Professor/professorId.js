import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './allprofessor.scss';

class professorid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teacher: this.props.teacher,
            data: this.props.professor
        }
    }
    componentWillMount() {

        //console.log('this',this.props)
        // console.log('this', this.props)
        console.log('teacher', this.state.teacher)
    }
    render() {
        let items=this.props.professor;
        // console.log(this.props.professor)
        return (

            <React.Fragment>
                <div className="col-md-3 mt-5">
                    <div className="profile-img d-flex flex-column align-items-center ">
                        <div className="ellen_hidbox1 ">
                            <img src={`/images/${items.user_img} `}  alt="" />
                        </div>

                        <div className="profile-work ">
                            <h3 className="mt-4 mb-3">{items.teacher_name}</h3>
                            <div className='d-flex justify-content-center'>
                                <a href=""><img className="ellen_fs" src="/images/icons8-dog-house-filled-50.png" /></a><br />
                                <a href=""><img className="ellen_fs" src="/images/icons8-facebook-filled-50.png" /></a><br />
                                <a href=""><img className="ellen_fs" src="/images/icons8-instagram-filled-50.png" /></a>
                            </div>
                            <h4 className="mt-3 mb-3">我的專長</h4>
                            <h6 className="mt-1 mb-1">{items.link_name}</h6>
                            <div className="col mt-4" style={{ display: this.state.teacher ? 'none' : 'block' }}>
                                {/* <div className="col mt-4" style={{ display: 'none'}}> */}
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
                                <button className="btn profile-edit-btn text-w" style={{ display: this.state.teacher ? 'none' : 'block' }} >課程狀態</button>
                            </div>
                            <div className="col mt-4">
                                <Link to={`/class_from/${items.idx}`}><button className="btn profile-edit-btn text-w" style={{ display: this.state.teacher ? 'none' : 'block' }} >我要開課</button></Link>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default professorid;