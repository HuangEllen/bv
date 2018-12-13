import React, { Component } from "react";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

//counter 因為用迴圈跑出來 所以會連動

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoplist: [],
            listsize: 0,
            sum: 0,
            modal: false,
            setdelItem:null
        };
        this.toggle = this.toggle.bind(this);
    }

    setdelHandler = (data) => {
        this.setState({
            setdelItem:data
        },function(){this.toggle()}) 
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    delItem = () =>{
        fetch('http://localhost:3000/cart/Addcart/'+this.state.setdelItem,{
        method:'DELETE',
        }).then(() => {
            this.getShoppingList();
            this.toggle();
        })
    
    }

    componentDidMount = (evt) => {
        this.getShoppingList();
    }
    getShoppingList() {
        fetch('http://localhost:3000/cart/Addcart')
            .then(res => res.json())
            .then(shoplist => {
                console.log(shoplist)
                const listsize = Object.keys(shoplist).length;
                var tmpsum = 0;
                Object.keys(shoplist).forEach(function (key) {
                    tmpsum = tmpsum + shoplist[key].total;
                })

                this.setState({
                    shoplist: shoplist,
                    listsize: listsize,
                    sum: tmpsum

                })
            })
    }
    checkoutHandler = (evt) => {
        var tbody = document.getElementById('shoplist');
        var user = JSON.parse(localStorage.getItem("member"));
        var userid = user[0].id;
        for(var i=0;i<tbody.childElementCount-1;i++){
            var product_id = tbody.rows[i].children[1].id;
            var qty = tbody.rows[i].children[2].children[0].children[1].value;
            var data = {};
            data.userid = userid;
            data.product_id = product_id;
            data.qty = qty;
            console.log(data)
            fetch('http://localhost:3000/cart/Addcart/',{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data),
            })
        }
    }

    render() {
        return (

            <div className="container">
                <div className="text-center yuru_cart"><h4 className="yuru-bb mb-4">我的購物車</h4></div>
                <table className="table table-bordered">
                    <thead>
                        <tr className="cart-list-txt">
                            <th scope="col">品項</th>
                            <th scope="col">商品資訊</th>
                            <th scope="col">數量</th>
                            <th scope="col">售價</th>
                            <th scope="col">總金額</th>
                            <th scope="col">刪除</th>
                        </tr>
                    </thead>

                    <tbody id="shoplist">
                        {this.state.shoplist.map(shoplist =>

                            <tr className="cart-list-txt" key={shoplist.product_id}>
                              
                                <td data-label="品項"><img width="80" src={(`/images/${shoplist.productimages}`)} /></td>
                                <td id={shoplist.product_id} data-label="商品資訊" className="align-middle">{shoplist.productname}</td>
                                <td data-label="數量" className="align-middle">
                                    <div class="qty d-inline-flex yuru_qty">
                                        <span className="minus">-</span>
                                        <input type="number" onChange={this.countHandler} className="count" name="qty" value={shoplist.amount}/>
                                        <span className="plus">+</span>
                                    </div>
                                </td>
                                <td data-label="售價" className="align-middle">{shoplist.productprice}</td>
                                <td data-label="總金額" className="align-middle">{shoplist.total}</td>
                                <td data-label="刪除" className="align-middle"><a><i onClick={() => this.setdelHandler(shoplist.product_id)} className="fas fa-trash"></i></a></td>
                            </tr>
                        )}

                        <tr className="cart-list-txt">
                            <td className="text-left yuru-total-product" colSpan="4">本次結帳{this.state.listsize}項商品</td>
                            <td className="text-left yuru-total-product" colSpan="2">結帳金額{this.state.sum}</td>
                        </tr>
                    </tbody>

                </table>

                <div className="yuru-cart-next">
                    <Link to="/Paydeliver"><button type="submit" className="btn yuru-btn-cart text-white btn-size" onClick={this.checkoutHandler}>下一步</button></Link>
                    <hr className="yuru-separation-line" />
                </div>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>我的購物車</ModalHeader>
                        <ModalBody>
                           拜託不要
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.delItem}>確定刪除</Button>
                            <Button color="secondary" onClick={this.toggle}>取消</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>

        );
    }
   
    componentDidUpdate() {
        $(document).ready(function () { 
            $(document).on('click', '.plus', function (shoplist) {
                var inp = $(this).prev('input');
                var count = parseInt(inp.val()) + 1;
                inp.val(count) 
            });
            $(document).on('click', '.minus', function () {
                var inp = $(this).next('input');
                var count = parseInt(inp.val()) - 1;
                if (count <= 0) {
                    count = 1;
                }
                inp.val(count)
            });
        });
    }

}

export default ShoppingList;