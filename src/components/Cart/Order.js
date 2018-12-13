import React, { Component } from "react";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';



class Order extends Component {
    constructor(props) {
        super(props);
        
    }
   
    render() {
       
        return (

            <div className="container">
                <div className="text-center yuru_cart"><h4 className="yuru-bb mb-4">我的購物車</h4></div>
                <table className="table table-bordered">
                    <thead>
                        <tr className="cart-list-txt">
                            <th scope="col">訂單編號</th>
                            <th scope="col">訂購時間</th>
                            <th scope="col">付款方式</th>
                            <th scope="col">商品資料</th>
                            <th scope="col">售價</th>
                            <th scope="col">數量</th>
                            <th scope="col">總金額</th>
                            {/* <th scope="col">訂單狀態</th> */}
                        </tr>
                    </thead>
                    <tbody>
                            <tr className="cart-list-txt">  
                                <td data-label="訂單編號"><img width="80"/></td>
                                <td data-label="商品資訊" className="align-middle"></td>
                                <td data-label="訂購時間" className="align-middle"></td>
                                <td data-label="付款方式" className="align-middle"></td>
                                <td data-label="訂單金額" className="align-middle"></td>
                                <td data-label="商品名稱" className="align-middle"><a><i className="fas fa-trash"></i></a></td>
                            </tr>
                    </tbody>

                </table>
            </div>

        );
    }
}

export default Order;