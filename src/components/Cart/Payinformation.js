import React, { Component } from "react";
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Payinformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: '',
            orderid: '',
            customername: '',
            customermail: '',
            customermobile: '',
            receivename: '',
            receivemobile: '',
            receiveaddress: '',
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.checkHandler = this.checkHandler.bind(this);
    }
    changeHandler(evt) {
        let key = evt.target.id;
        let value = evt.target.value;
        this.setState({
            [key]: value
        })
    }
    checkHandler() {
        console.log(JSON.stringify(this.state))
        fetch('http://localhost:3000/deliver/order', {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(this.state)
        })
            .then(res => console.log("status:" + res.status))
        var orderdetail = {}
        var orderid = localStorage.getItem('orderid')
        fetch('http://localhost:3000/cart/Addcart')
            .then(res => res.json())
            .then(function (rows) {
                console.log("rows:" + JSON.stringify(rows))
                for (var i = 0, max = rows.length; i < max; i++) {
                    var product_id = rows[i].product_id;
                    var qty = rows[i].amount;
                    orderdetail.product_id = product_id;
                    orderdetail.qty = qty;
                    orderdetail.orderid = orderid
                }
                console.log("我是" + JSON.stringify(orderdetail))
            })
            .then(()=>{
                fetch('http://localhost:3000/cart/Addcart/orderdetail',{
                    method:'POST',
                    body:JSON.stringify(orderdetail),
                    headers: new Headers({
                        'Content-Type':'application/json'
                    })   
                })
            })
        .then(res => console.log("status:" + JSON.stringify(orderdetail)))
        .catch(error => console.error(error))
    }


    render() {
        console.log("render!!")
        return (
            <div className="container">
                <div>
                    <div className="progressbar d-flex justify-content-between row">
                        <button className="btn text-white yuru-btn-cart mr-2">我的購物車</button>
                        <button type="submit" className="btn yuru-btn-cart text-white btn-size">選擇送貨及付款方式</button>
                        <button className="btn text-white yuru-btn-cart">填寫資料</button>
                    </div>
                </div>
                <div className="text-center yuru_cart"><h4 className="yuru-bb mb-4">填寫資料</h4></div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card ">
                            <div className="card-header text-left">
                                顧客資料
                </div>
                            <div className="card-body text-left">

                                <div className="text-left">
                                    <label htmlFor="name">顧客名稱</label>
                                    <input type="text" className="form-control" name="customername" id="customername" onChange={this.changeHandler} />
                                </div>
                                <div className="text-left">
                                    <label htmlFor="customermail">電子信箱</label>
                                    <p>{this.state.customermail}</p>
                                </div>
                                <div className="text-left">
                                    <label htmlFor="customermobile">電話號碼</label>
                                    <select id="customermobile" onChange={this.changeHandler} name="customermobile" className="form-control">
                                        <option>{this.state.customermobile}</option>
                                        <option>新增</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card ">
                            <div className="card-header text-left">
                                送貨資料
                </div>
                            <div className="card-body">
                                <form id="userorder">
                                    <div className="form-group text-left">
                                        <p>已選擇的送貨方式:</p>
                                        <div className="custom-control custom-checkbox text-left">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">收件人資料與顧客資料相同</label>
                                        </div>
                                    </div>
                                    <div className="form-group text-left">
                                        <label htmlFor="receivename">收件人名稱</label>
                                        <input type="text" className="form-control" name="receivename" id="receivename" onChange={this.changeHandler} value={this.state.receivename} />
                                    </div>
                                    <div className="form-group text-left">
                                        <label htmlFor="receivemobile">收件人電話號碼</label>
                                        <input type="text" className="form-control" name="receivemobile" id="receivemobile" onChange={this.changeHandler} value={this.state.receivemobile} />
                                    </div>
                                    <div className="form-group text-left">
                                        <label htmlFor="receiveaddress">地址</label>
                                        <input type="text" className="form-control" name="receiveaddress" id="receiveaddress" onChange={this.changeHandler} />
                                    </div>
                                    <div className="yuru-cart-next">
                                        <Link to="/finish"><button type="button" className="btn yuru-btn-cart text-white btn-size" onClick={this.checkHandler}>提交訂單</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        var orderid = localStorage.getItem('orderid')
        var me = this;
        var user = JSON.parse(localStorage.getItem("member"));
        var userid = user[0].id;
        var useremail = user[0].email;
        var mobile = user[0].mobile
        this.setState({
            userid: userid,
            customermail: useremail,
            customermobile: mobile,
            orderid: orderid

        })
        $("#customCheck1").change(function () {
            if (this.checked) {
                var customername = $('#customername').val()
                var customermobile = $('#customermobile').val()
                me.setState({
                    receivename: customername,
                    receivemobile: customermobile
                })
            } else {
                me.setState({
                    receivename: '',
                    receivemobile: ''
                })
            }
        });
    }

    componentWillUpdate() {
        console.log("willupdate")
    }

    componentDidUpdate() {
        console.log("didupdate")
    }
}

export default Payinformation;