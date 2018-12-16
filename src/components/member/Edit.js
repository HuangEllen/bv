import React, { Component } from 'react';
import './Show.css';
var a = JSON.parse(localStorage.getItem("member"));


class Edit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: a[0].id,
            name: a[0].name,
            nameWrong: '',
            email: a[0].email,
            password: a[0].password,
            mobile: a[0].mobile,
            address: a[0].address,
            birthday: a[0].birthday,
            memberLevel:a[0].memberLevel,
            created_at:a[0].created_at,
            resultSuccess: ""


        };


    }
    handleChange = (evt) => {
        let key = evt.target.id;
        let data = evt.target.value;
        var name = document.getElementById('name').value;
        let nameWrong = document.getElementById('nameWrong');
        var resultSuccess_name = true;
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

        if (resultSuccess_name) {
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
    edit = (evt) => {
        // var form01 = document.getElementById('form01');
        var resultSuccess = this.state.resultSuccess;
        // delete member.id;
        // evt.preventDefault();

        evt.preventDefault();
        var id = this.state.id;

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

        // if (resultSuccess) {
        //     // form01.submit();
        localStorage.setItem("member", JSON.stringify([this.state]));

        delete this.state.nameWrong;
        delete this.state.resultSuccess;
        // console.log("http://localhost:3000/api/members/" + id)
        var member=this.state;
        console.log(member)


        fetch("http://localhost:3000/api/members/" + id, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(member),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .then(data => {
                this.setState({
                    member: data[0],
                })
                alert(data.message);
                window.location.href = "http://localhost:3001/MemberCenter/Member"

            });
        //     console.log(JSON.stringify(this.state))
        //     fetch('http://localhost:3000/api/members', {
        //         method: 'POST',
        //         mode: 'cors',
        //         body: JSON.stringify(this.state),
        //         headers: new Headers({
        //             'Content-Type': 'application/json'
        //         })
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             alert(data.message)
        //             localStorage.setItem("member", JSON.stringify(data.rows));
        //             localStorage.setItem("isLogin", true);

        //             var a = JSON.parse(localStorage.getItem("member"));
        //         })
        //         .then(data => {
        //             window.location.href = "http://localhost:3002/MemberCenter/Member"
        //         })



        // }else{
        //     alert("修改失敗:輸入資料有誤")
        // }
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
                <div className="caMainbox_edit container">
                    <h3 className="">修改會員資料</h3>
                    <form id='form01'>
                        {/* <form id='form01' action=" http://localhost:3000/api/members" method="POST"> */}
                        {/* <div className="form-group">
                        <label htmlFor="id">編號</label>
                        <span>{this.state.id}</span> 
                    </div> */}
                        {/* <input type="hidden" value={this.state.id} id="id" /> */}
                        <div className="form-group">
                            <label htmlFor="name">暱稱**</label>
                            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} className="form-control" id="name" placeholder="Enter Name" />
                            <div id="nameWrong" style={{ color: 'lightcoral', display: 'none' }}>暱稱過短</div>
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="email">電子郵件**</label>
                            <input name="email" type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="email" placeholder="Enter Email" />
                            <div id="emailOk" style={{ color: 'blue', display: 'none' }}>Email符合格式</div>
                            <div id="emailWrong" style={{ color: 'lightcoral', display: 'none' }}>Email格式不符</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">密碼**</label>
                            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="password" placeholder="Enter password" />
                        </div>
                        <div id="passwordWrong" style={{ color: 'lightcoral', display: 'none' }}>密碼過短</div> */}
                        <div className="form-group">
                            <label htmlFor="mobile">手機</label>
                            <input name="mobile" type="number" value={this.state.mobile} onChange={this.handleChange} className="form-control" id="mobile" placeholder="Enter mobile" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">地址</label>
                            <input name="address" type="text" value={this.state.address} onChange={this.handleChange} className="form-control" id="address" placeholder="Enter address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthday">生日</label>
                            <input name="birthday" type="text" value={this.state.birthday} onChange={this.handleChange} className="form-control" id="birthday" placeholder="Enter birthday" />
                        </div>
                        <button type="button" className="btn bg_mes" id="submitBtn" onClick={this.edit}>
                            確認修改
            </button>
                        {/* {this.props.modifyType === "add" ? <button type="submit" onClick={this.add} className="btn btn-primary">
                        註冊
            </button>
                        : <button type="button" onClick={this.update} className="btn btn-secondary">
                            修改
            </button>} */}
                    </form>
                </div>
            </React.Fragment>
        )
    }

}

export default Edit;