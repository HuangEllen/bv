import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            password: "",
            id: ""
        };


    }
    handleChange = (evt) => {
        let key = evt.target.id;
        let data = evt.target.value;
        this.setState({
            [key]: data
        })
        // console.log(this.state)
    }
    update = (evt) => {
        this.props.update(this.state);
        evt.preventDefault();
    }
    add = (evt) => {
        this.props.add(this.state);
        evt.preventDefault();

    }
    // var emailRule = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    register = (evt) => {
        var form01 = document.getElementById('form01');
        var resultSuccess = true;

        evt.preventDefault();

        console.log(this.state.name)
        if (this.state.name.length < 2) {
            resultSuccess = false;
            alert("暱稱太短請大於二個字")
        }
        if (this.state.email.search(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) == -1) {
            resultSuccess = false;
            alert("email格式不符");
        }

        if (this.state.password.length < 6) {
            resultSuccess = false;
            alert("密碼太短請大於六個字")
        }

        if (resultSuccess) {
            // form01.submit();
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
                    alert(data)
                })


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
                <h2>會員註冊</h2>
                {/* <form id='form01'> */}
                    <form id='form01' action=" http://localhost:3000/api/members" method="POST">
                    {/* <div className="form-group">
                        <label htmlFor="id">編號</label>
                        <span>{this.state.id}</span> 
                    </div> */}
                    {/* <input type="hidden" value={this.state.id} id="id" /> */}
                    <div className="form-group">
                        <label htmlFor="name">暱稱**</label>
                        <input name="name" type="text" value={this.state.name} onChange={this.handleChange} className="form-control" id="name" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">電子郵件**</label>
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="email" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">密碼**</label>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="password" placeholder="Enter password" />
                    </div>
                    <button type="button" className="btn btn-primary" id="submitBtn" onClick={this.register}>
                        註冊
            </button>
                    {/* {this.props.modifyType === "add" ? <button type="submit" onClick={this.add} className="btn btn-primary">
                        註冊
            </button>
                        : <button type="button" onClick={this.update} className="btn btn-secondary">
                            修改
            </button>} */}
                </form>
            </React.Fragment>
        )
    }

}

export default Register;