import React, { Component } from 'react';

class Register2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      password: "",
      id: "",
      emailOk: '',
      emailWrong: '',
      nameWrong: '',
      passwordWrong: '',
      mobile: "",
      address: "",
      birthday: "",
      resultSuccess: ""
    };


  }
  handleChange = (evt) => {
    let key = evt.target.id;
    let data = evt.target.value;
    let emailOk = document.getElementById('emailOk');
    let emailWrong = document.getElementById('emailWrong');
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    let nameWrong = document.getElementById('nameWrong');
    let passwordWrong = document.getElementById('passwordWrong');
    var resultSuccess_name = true;
    var resultSuccess_email = true;
    var resultSuccess_password = true;
    var resultSuccess = true;


    // console.log(email)
    if (name === '') {
      nameWrong.style.display = 'none';
      resultSuccess_name = false;
      // alert('null')
    }
    else if (name.length <= 2) {
      // alert('nameWrong')
      nameWrong.style.display = 'block';
      resultSuccess_name = false;

      // alert('nameWrong')
    } else {
      nameWrong.style.display = 'none';
      resultSuccess_name = true
      // alert('emailOk')
    }
    if (email === '') {
      emailOk.style.display = 'none';
      emailWrong.style.display = 'none';
      resultSuccess_email = false;

      // alert('null')
    }
    else if (email.search(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) == -1) {
      // alert('emailWrong')
      emailOk.style.display = 'none';
      emailWrong.style.display = 'block';
      resultSuccess_email = false;

      // alert('emailWrong')
    } else {
      emailOk.style.display = 'block';
      emailWrong.style.display = 'none';
      resultSuccess_email = true
      // alert('emailOk')
    }
    if (password === '') {
      passwordWrong.style.display = 'none';
      resultSuccess_password = false;
      // alert('null')
    }
    else if (password.length < 6) {
      // alert('passwordWrong')
      passwordWrong.style.display = 'block';
      resultSuccess_password = false;

      // alert('passwordWrong')
    } else {
      passwordWrong.style.display = 'none';
      resultSuccess_password = true
      // alert('emailOk')
    }
    if (resultSuccess_name && resultSuccess_email && resultSuccess_password) {
      resultSuccess = true;
    } else {
      resultSuccess = false;

    }
    this.setState({
      [key]: data,
      resultSuccess: resultSuccess
    })
    // console.log(this.state)
  }

  // add = (evt) => {
  //     this.props.add(this.state);
  //     evt.preventDefault();

  // }
  // var emailRule = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  register = (member) => {
    // var form01 = document.getElementById('form01');
    var resultSuccess = this.state.resultSuccess;
    // delete member.id;
    // evt.preventDefault();

    console.log(this.state)
    // if (this.state.name.length < 2) {
    //     resultSuccess = false;
    //     alert("暱稱太短請大於二個字")
    // }
    // if (this.state.email.search(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) == -1) {
    //     resultSuccess = false;
    //     alert("email格式不符");

    // }

    // if (this.state.password.length < 6) {
    //     resultSuccess = false;
    //     alert("密碼太短請大於六個字")
    // }

    if (resultSuccess) {
      // form01.submit();
      delete this.state.id;
      delete this.state.emailWrong;
      delete this.state.emailOk;
      delete this.state.nameWrong;
      delete this.state.passwordWrong;
      delete this.state.resultSuccess;

      console.log(JSON.stringify(this.state))
      fetch('http://localhost:3000/api/members', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(this.state),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(res => res.json())
        .then(data => {
          alert(data.message)
          localStorage.setItem("member", JSON.stringify(data.rows));
          localStorage.setItem("isLogin", true);

          var a = JSON.parse(localStorage.getItem("member"));
        })
        .then(data => {
          window.location.href = "http://localhost:3001/home"
        })



    } else {
      alert("註冊失敗:輸入資料有誤")
    }
  }

  // componentDidMount() {
  //     var submitBtn = document.getElementById('submitBtn');
  //     var form01 = document.getElementById('form01');
  //     var name = this.state;


  //     submitBtn.addEventListener('click', function (e) {
  //         e.preventDefault();
  //         console.log(name)
  //         // if (this.state.name < 4) {
  //         //    console.log("暱稱")
  //         // }

  //         // form01.submit();
  //     })
  // }
  // static getDerivedStateFromProps(props, state) {
  //     if (props.modifyData.id !== state.id) {
  //         return {
  //             name: props.modifyData.name,
  //             email: props.modifyData.email,
  //             age: props.modifyData.age,
  //             id: props.modifyData.id
  //         }
  //     }
  //     return null;
  // }
  render() {

    return (
      <React.Fragment>
        <div className="container">
          <div className="login-form">
          <div className="main-div mt-5">
          <div className="panel ">
            <h2 className="text-f ">會員註冊</h2>
            <p>請填入您的基本資料</p>
            </div>
            <form id='form01'>
              {/* <form id='form01' action=" http://localhost:3000/api/members" method="POST"> */}
              {/* <div className="form-group">
                        <label htmlFor="id">編號</label>
                        <span>{this.state.id}</span> 
                    </div> */}
              {/* <input type="hidden" value={this.state.id} id="id" /> */}
              <div className="form-group ellen_form text-left">
                <label htmlFor="name">暱稱**</label>
                <input name="name" type="text" value={this.state.name} onChange={this.handleChange} className="form-control" id="name" placeholder="Enter Name" />
                <div id="nameWrong" style={{ color: 'lightcoral', display: 'none' }}>暱稱過短</div>
              </div>
              <div className="form-group ellen_form text-left">
                <label htmlFor="email">電子郵件**</label>
                <input name="email" type="text" value={this.state.email} onChange={this.handleChange} className="form-control" id="email" placeholder="Enter Email" />
                <div id="emailOk" style={{ color: 'blue', display: 'none' }}>Email符合格式</div>
                <div id="emailWrong" style={{ color: 'lightcoral', display: 'none' }}>Email格式不符</div>
              </div>
              <div className="form-group ellen_form text-left">
                <label htmlFor="password">密碼**</label>
                <input name="password" type="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="password" placeholder="Enter password" />
              </div>
              <div id="passwordWrong" style={{ color: 'lightcoral', display: 'none' }}>密碼過短</div>
              <div className="form-group ellen_form text-left">
                <label htmlFor="mobile">手機</label>
                <input name="mobile" type="number" value={this.state.mobile} onChange={this.handleChange} className="form-control" id="mobile" placeholder="Enter mobile" />
              </div>
              <div className="form-group ellen_form text-left">
                <label htmlFor="address">地址</label>
                <input name="address" type="text" value={this.state.address} onChange={this.handleChange} className="form-control" id="address" placeholder="Enter address" />
              </div>
              <div className="form-group ellen_form text-left">
                <label htmlFor="birthday">生日</label>
                <input name="birthday" type="text" value={this.state.birthday} onChange={this.handleChange} className="form-control" id="birthday" placeholder="Enter birthday" />
              </div>
              <button type="button" className="btn btn-primary mt-4" id="submitBtn" onClick={this.register}>
                註冊
            </button>
              {/* {this.props.modifyType === "add" ? <button type="submit" onClick={this.add} className="btn btn-primary">
                        註冊
            </button>
                        : <button type="button" onClick={this.update} className="btn btn-secondary">
                            修改
            </button>} */}
            </form>
            </div>
            </div>
        </div>
      </React.Fragment>
    )
  }

}

export default Register2;