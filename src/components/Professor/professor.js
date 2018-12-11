import React, { Component } from 'react';
import './allprofessor.scss';
import ProfessorIdAbout from './professorId_about';
import { Link } from 'react-router-dom';





class professor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      professor: {},
      teacher: false,//true  使用者是否為講師本人的按鈕顯示
      myclsnb:{},
      showV:true,
      th:this,
    }
  }
  
  componentWillMount() {
    //ajax call
    this.getClass()
    this.getNumber()
    console.log('id', this.state.id)
    console.log(this.props.match.params.id)
    
  }
  updateShowV(th,e){
    const showStutas = !th.state.showV
    // console.log('showStutas',showStutas)
    th.setState({showV:showStutas})
  }
  getClass() {
    const th = this
    fetch('/professorId/professor/' + th.state.id)  //http://localhost:3000/professor/api
      .then(res => res.json())
      .then(professor => {
        // console.log(professor)
        this.setState({ professor: professor[0] })
      })
  }
  getNumber() {
    const th = this
      fetch('/allcategory/order/' + th.state.id+ "/1")  //http://localhost:3000/professor/api
      .then(res => res.json())
      .then(myclsnb => {
        // console.log(myclsnb)
        this.setState({
          myclsnb: myclsnb[0]
        })
      })
  }
//經由事件結尾再次呼叫API達到即時重新渲染
  handleClick = (data)=>{
    //setState();
    // this.setState({
    //   myclsnb: myclsnb[0]
    // })
   // alert(data)
   this.getNumber();
  }
  render() {
    let items = this.state.professor;
    let myclsnb = this.state.myclsnb;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">

            <div className="col-md-3 mt-5">
              <div className="profile-img d-flex flex-column align-items-center ">
                <div className="ellen_hidbox1 ">
                  <img src={`/images/${items.user_img} `} alt="" />
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
                      <a href="">{myclsnb.upclass} 堂課</a>
                    </div>
                    <div>
                      <h5>已參加</h5>
                      <a href="">{myclsnb.c_order} 堂課</a>
                    </div>

                  </div>
                  <div className="col mt-4">
                    <button className="btn profile-edit-btn text-w" onClick={this.updateShowV.bind(this,this.state.th)} style={{ display: this.state.teacher ? 'none' : 'block' }} >{this.state.showV?'課程狀態':'返回關於講師 '}</button>
                  </div>
                  <div className="col mt-4">
                    <Link to={`/class_from/${items.user_id}`}><button className="btn profile-edit-btn text-w" style={{ display: this.state.teacher ? 'none' : 'block' }} >我要開課</button></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 mt-5">
              <ProfessorIdAbout 
              professor={this.state.professor} 
              id={this.props.match.params.id} 
              showV={this.state.showV} 
              proClick = {this.handleClick} />
              
              

            </div>


          </div>

        </div>

      </React.Fragment>
    )
  }
}
export default professor;