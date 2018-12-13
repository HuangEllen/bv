import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

class Paydeliver extends Component {
    constructor(props) {
        super(props);
        this.state = {
           userid: "",
           deliverplace:"",
           deliver:"",
           pay:""            
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.nextHandler = this.nextHandler.bind(this);
    }
    changeHandler(evt) {
        let key = evt.target.id;
        let value = evt.target.value;
        this.setState({
            [key]:value
        })
    }
    nextHandler(evt) {
         fetch('http://localhost:3000/deliver/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state),
        })  
    }
    render() {
        return (
            <div className="container">
                <div>
                    <div className="progressbar d-flex justify-content-between row">
                        <button className="btn text-white yuru-btn-cart mr-2">我的購物車</button>
                        <button type="submit" className="btn yuru-btn-cart text-white btn-size">選擇貨運及付款</button>
                        <button className="btn text-white yuru-btn-fill">填寫資料</button>
                    </div>
                </div>
                <div className="text-center yuru_cart"><h4 className="yuru-bb mb-4">貨運及付款方式</h4></div>
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="card ">
                            <div className="card-header text-left">
                                選擇送貨及付款方式
                </div>
                            <div className="card-body">
                                <form id="userorder">
                                    <div className="form-group text-left">
                                        <label htmlFor="place">送貨地點</label>
                                        <select id="deliverplace" value={this.state.deliverplace} onChange={this.changeHandler} name="deliverplace" className="form-control">
                                            <option value="Taiwan">台灣</option>
                                            <option value="Singapore">新加坡</option>
                                            <option value="JAPAN">日本</option>
                                            <option value="Maylasia">馬來西亞</option>
                                        </select>
                                    </div>
                                    <div className="form-group text-left">
                                        <label htmlFor="deliver">送貨方式</label>
                                        <select id="deliver" value={this.state.deliver} onChange={this.changeHandler} name="deliver" className="form-control">
                                            <option value="1" selected>超商取貨付款[推薦使用]</option>
                                            <option value="2">超商取貨不付款</option>
                                            <option value="3">海島-郵局包裹(金門/馬祖/澎湖)</option>
                                            <option value="4">海外-郵局包裹(台灣以外所有國家)</option>
                                        </select>
                                    </div>
                                    <div className="form-group text-left">
                                        <label htmlFor="pay">付款方式</label>
                                        <select id="pay" value={this.state.pay} onChange={this.changeHandler} name="pay" className="form-control">
                                            <option value="familyshop" selected>全家貨到付款</option>
                                            <option value="sevenshop">7-11貨到付款</option>
                                        </select>
                                    </div>
                                    <div className="yuru-cart-next">
                                        <Link to="/Payinformation"><button type="button" className="btn yuru-btn-cart text-white btn-size" onClick={this.nextHandler}>下一步</button></Link>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
       $("#deliver").change(function(){
           switch(parseInt($(this).val())){
               case 1:
               $("#pay option").remove();
               var array = ["全家貨到付款","7-11貨到付款"];
               $.each(array, function(i, val){
                   $("#pay").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
               });
               break;
               case 2:
               $("#pay option").remove();
               var array = ["信用卡","ATM"];
               $.each(array, function(i, val){
                $("#pay").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                
               })
               break;
           }
       })
       var user = JSON.parse(localStorage.getItem("member"));
       var userid = user[0].id;
       this.setState({
          userid:userid
      })
    }
}

export default Paydeliver;