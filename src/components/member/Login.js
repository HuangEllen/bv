import React, { Component } from 'react';
//import { exists } from 'fs';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {

            email: "",
            password: ""
        };


    }
    handleChange = (evt) => {
        let key = evt.target.id;
        let data = evt.target.value;
        let emailOk = document.getElementById('emailOk');
        let emailWrong = document.getElementById('emailWrong');
        var email = document.getElementById('email').value;
        // console.log(email)
        if (email === '') {
            emailOk.style.display = 'none';
            emailWrong.style.display = 'none';
            // alert('null')
        }
        else if (email.search(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) == -1) {
            // alert('emailWrong')
            emailOk.style.display = 'none';
            emailWrong.style.display = 'block';
            // alert('emailWrong')
        } else {
            emailOk.style.display = 'block';
            emailWrong.style.display = 'none';
            // alert('emailOk')
        }
        this.setState({
            [key]: data,
        })
        // console.log(this.state)
    }

    // add = (evt) => {
    //     this.props.add(this.state);
    //     evt.preventDefault();

    // }
    // var emailRule = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    login = (evt) => {
        // var form01 = document.getElementById('form01');
        var resultSuccess = true;
        // delete member.id;
        evt.preventDefault();

        console.log(this.state)


        // console.log(JSON.stringify(this.state))
        delete this.state.emailWrong;
        delete this.state.emailOk;
        delete this.state.nameWrong;
        delete this.state.passwordWrong;
        fetch('http://localhost:3000/api/members_login', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.message == "帳號不存在") {
                    alert(data.message);
                }else if(data.message == "密碼錯誤"){
                    alert(data.message);
                }else{
                // console.log(data.rows[0])
                alert(data.message);
                localStorage.setItem("member", JSON.stringify(data.rows));
                localStorage.setItem("isLogin", true);

                var a = JSON.parse(localStorage.getItem("member"));
                console.log(a[0].id)
                window.location.href = "http://localhost:3001/home"
                }
            })
        // .then(data => {
        //     window.location.href = "http://localhost:3001/member"
        // })



    }


    render() {

        return (
            <React.Fragment>
            <div className="container">
                <div className="login-form">
                    <div className="main-div mt-5">
                        <div className="panel mb-4">
                            <h2 className="text-f ">會員登入</h2>
                            <p>請填入您的帳號密碼</p>
                            {/* <form id='form01'> */}
                        </div>
                        <form id='form01' action=" http://localhost:3000/api/members_login" method="POST">
                    {/* <div className="form-group">
                        <label htmlFor="id">編號</label>
                        <span>{this.state.id}</span> 
                    </div> */}
                    {/* <input type="hidden" value={this.state.id} id="id" /> */}

                    <div className=" form-group ellen_form text-left">
                        <label htmlFor="email">電子郵件**</label>
                        <input name="email" type="text" value={this.state.email} onChange={this.handleChange} className="form-control" id="email" placeholder="Enter Email" />
                        <div id="emailOk" style={{ color: 'blue', display: 'none' }}>Email符合格式</div>
                        <div id="emailWrong" style={{ color: 'lightcoral', display: 'none' }}>Email格式不符</div>
                    </div>
                    <div className=" form-group ellen_form text-left">
                        <label htmlFor="password">密碼**</label>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="password" placeholder="Enter password" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4" id="submitBtn" onClick={this.login}>
                        登入
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

export default Login;