import React, { Component } from 'react';
import './allprofessor.scss'
import moment from 'moment';
import MyClass from './my_class';
import MyJoinClass from './my_joinclass';
import { Link } from 'react-router-dom';

class professorId_about extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherId: this.props.id,
      start: [],
      // ation: this.props.ation,
      // c_room:{}
      th: this
    }
  }
  componentDidMount() {
    //ajax call
    this.getState()
    console.log('show', this.state.showV)
    // console.log('id', this.props.id)
  }
  // componentDidUpdate(prevProps){
  //   const{start}=this.props
  //   const status=(start>prevProps.start) ? 'better':'worse'
  //   // this.props.c_room=new c_room;

  // }
  // componentWillUnmount() {

  // }
  getState() {
    fetch('/professorId/user_start/' + this.props.id)
      // console.log(this.props.id)  
      //http://localhost:3000/professorId/user_start
      .then(res => res.json())
      .then(start => {
        this.props.proClick();
        // this.state.myClassClick();
      //   this.myClassClick=(data)=>{
      //     this.getState();
      // }
        this.setState({
          start: start
        })
      })
  }

  updateStatus(start, classid, teacherid, th, e) {
    //function的值跟api設定的值是反向執行(需再爬文)
    let data = {}
    data.start = start
    data.userid = teacherid
    data.cs_id = classid
    //api 更新上課狀態
    fetch('/allcroom/croom', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function checkStatus(response) {
      //console.log('response',response)
      //將資料傳給父元件
      th.getState()
    });
  }
    myClassClick=(data)=>{
      this.getState();
  }
//   myclick=()=>{
//     console.log("aaa")
    
// }

  render() {
    let items = this.props.professor;
    // let start = this.state.start;
    return (
      <React.Fragment>
        {/* {(display:this.props.ation ? true : false */}
        <div style={{ display: this.props.showV ? '' : 'none' }}>
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
          </div >
          <div className="tab-content profile-tab" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="row d-flex flex-column align-items-center pl0">
                <div className="ellen_hidbox2 ">
                  <img style={{ display: items.l_img1 ? '' : 'none' }} src={`/images/${items.l_img1} `} alt="" />
                </div>
                <div className="ellen_hidbox2 mt-3" style={{ display: items.l_img2 ? '' : 'none' }}>
                  <img src={`/images/${items.l_img2} `} alt="" />
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="row d-flex flex-column align-items-center">
                <h3 className="text-f">上架中</h3>
                <div className="row justify-content-between pl0">

                  <MyClass 
                  c_room={this.props.c_room}
                  id={this.props.id}
                  proClsClick = {this.state.myClassClick}
                  />
                </div>
                <h3 className="text-f">已參加</h3>
                <div className="row justify-content-between pl0">

                  <MyJoinClass 
                  c_room={this.props.c_room}
                  id={this.props.id}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col mt-5" style={{ display: this.props.showV ? 'none' : '' }}>
          <table className="table table-hover shopping-cart-wrap">
            <thead>
              <tr className=" text-w bg-first">
                <th scope="col">課程名稱</th>
                <th scope="col">課程狀態</th>
                <th scope="col">開課時間</th>
                <th scope="col">修改/上架</th>
              </tr>
            </thead>

            <tbody>
              {this.state.start.map(start =>
                <tr className=" " key={start.idx}>
                  <td className=" text-left" data-label="課程名稱">{start.c_title}</td>
                  <td data-label="課程狀態">{start.start_name}</td>
                  <td data-label="開課時間">{moment(start.c_opdate).format('YYYY-MM-DD  h:mm a')}</td>
                  <td data-label="修改/上架" className="d-flex justify-content-between">
                    <button className="btn mb-3 bg_mes text-w"
                      onClick={this.updateStatus.bind(this, 1, start.cs_id, this.state.teacherId, this.state.th)}
                      style={{ display: start.start === 2 ? '' : 'none' }}
                      >上架</button>

                    <button className="btn mb-3 bg-first text-w"
                      onClick={this.updateStatus.bind(this, 2, start.cs_id, this.state.teacherId, this.state.th)}
                      style={{ display: start.start === 1 ? '' : 'none' }}
                    >下架</button>

                    <Link to={`/class_from//put/${items.user_id}`} >
                      <button className="btn mb-3 bg_er-r text-w">修改</button>
                    </Link>

                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    )
  }
}
export default professorId_about;