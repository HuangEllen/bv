import React, { Component } from 'react';
import './MemberOrder.css';

class MemberOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderlist: []
        };

    }

    getOrderList() {
        fetch('http://localhost:3000/deliver/order')
            .then(res => res.json())
            .then(orderlist => this.setState({
                orderlist: orderlist
            }))
    }
    componentDidMount() {
        this.getOrderList();
    }

    render() {

        return (
            <React.Fragment>
                <div className="container bg_xxx pt-4 pl-5 pr-5 pb-5">

                    <div className="yuruOrdermaintext ">
                        <h5 className="caOrdermaintext text-center textcolor ">我的訂單</h5>
                        <table className="table table-bordered mt-5 mb-5">
                            <thead>
                                <tr className="cart-list-txt">
                                    <th scope="col">訂單編號</th>
                                    <th scope="col">付款方式</th>
                                    <th scope="col">商品資訊</th>
                                    <th scope="col">售價</th>
                                    <th scope="col">數量</th>
                                    <th scope="col">總金額</th>
                                    <th scope="col">訂購時間</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.orderlist.map(orderlist =>

                                    <tr className="cart-list-txt" key={orderlist.orderid}>
                                        <td data-label="訂單編號" className="align-middle">{orderlist.orderid}</td>
                                        <td data-label="付款方式" className="align-middle">{orderlist.pay}</td>
                                        <td data-label="商品資訊" className="align-middle">{orderlist.productname}</td>
                                        <td data-label="售價" className="align-middle">{orderlist.productprice}</td>
                                        <td data-label="數量" className="align-middle">{orderlist.qty}</td>
                                        <td data-label="總金額" className="align-middle">{orderlist.total}</td>
                                        <td data-label="訂購時間" className="align-middle">{orderlist.order_date}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="caOrdermaintext ">
                        <h5 className="text-center textcolor ">我的收蔵</h5>
                    </div>


                </div>


            </React.Fragment>
        )
    }

}

export default MemberOrder;