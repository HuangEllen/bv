import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Quantity from './Quantity';
import { Tabs } from 'antd';
import Linkitems from '../Store/Linkitems'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import $ from 'jquery';

var isLogin = JSON.parse(localStorage.getItem("isLogin"))

class Item_detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: [],
            cart: {},
            id: this.props.match.params.id,
            qty: 0,
            modal: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    itemdetail(id) {
        fetch("http://localhost:3000/store/items/" + this.state.id)
            .then(res => res.json())
            .then(item => this.setState({
                item: item
            }))
    }


    AddCart = (item) => {
        // var body = document.getElementsByTagName('body').remove.className('modal-open');
        
        // console.log(body)
        if (isLogin == false) {
            alert("請先登入");
            window.location.href = "http://localhost:3001/Login";

        }else{
            this.toggle();
            var cart = {};
            var user = JSON.parse(localStorage.getItem("member"));
            //console.log(a[0].id)
            cart['userid'] = user[0].id;
            cart['product_id'] = item.product_id;
            cart["qty"] = this.state.qty;
            fetch('http://localhost:3000/cart/Addcart', {
                method: 'POST',
                body: JSON.stringify(cart),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
        }
          

       

    }

    qtyChange = (data) => {
        this.setState({ qty: data }, function () {
        });



    }
    componentDidMount() {
        let id = this.props.match.params.id
        this.itemdetail(id);
    }
   
    componentWillUpdate() {
        console.log("willupdate")
    }

    componentDidUpdate() {
        console.log("didupdate")
    }
    render() {
        console.log('render!!')
        const TabPane = Tabs.TabPane;
        return (

            <React.Fragment>
                <div className="container">
                    {
                        this.state.item.map(item =>
                            <div key={item.product_id}>
                                <div className="mt-5" >
                                    <div className="wrapper row d-flex justify-content-around">
                                        <div className="col-4 mt-5">
                                            <h3 >{item.productname}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                        <section id="default" className="padding-top0 col d-flex justify-content-center">
                                            <div className="row">
                                                <div className="large-1 column">
                                                    <div className="xzoom-container">
                                                        <img id="xzoom-default" width="300" src={(`/images/${item.productimages}`)} />  
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <div className="details col d-flex flex-column justify-content-center mr-3">
                                            <div className="card ellen_menue p-4">
                                                <h3 className="product-title mt-2">NTD {item.productprice}</h3>
                                                <p className="ellen-p ">{item.specification} mL</p>
                                                <div>
                                                    <Quantity qtyChange={this.qtyChange} />
                                                </div>
                                                <div className="action mt-3">
                                                    <button onClick={() => this.AddCart(item)} value={item.product_id} className="btn col-11 bg-first text-w " data-toggle="modal" data-target="#AddCart1">放入購物車</button>
                                                </div>
                                                <div className="d-flex mt-3 justify-content-center">
                                                    <a href=""><i className="fas fa-bookmark mr-3 mb-2 txt_mes"></i></a><h5 className="sizes">加入至收藏</h5>
                                                </div>
                                                <div className="d-flex mt-3 justify-content-center">
                                                    <a href=""><i className="fa fa-heart mr-3 mb-2 txt_mes"></i></a><h5 className="sizes">分享此商品</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="yuru-separation-line" />
                                    <div>
                                        <h3>產品說明</h3>
                                    </div>
                                    <div className="card-container">
                                        <Tabs type="card">
                                            <TabPane tab="使用方法" key="1" className="d-flex justify-content-center align-items-center">
                                                <img src={(`/images/${item.useway}`)} />
                                            </TabPane>
                                            <TabPane tab="商品天然成分" key="2">
                                                <img src={(`/images/${item.origin}`)} />
                                            </TabPane>
                                            <TabPane tab="商品明細" key="3" className="d-flex justify-content-center align-items-center">
                                                <p className="yuru-product-ingriedient mt-5">{item.ingredient}</p>
                                            </TabPane>
                                        </Tabs>
                                    </div>
                                    <hr className="yuru-separation-line" />
                                    <div className="d-flex justify-content-around row">
                                        <h3 className="mb-4 text-f">推薦商品</h3>
                                        <Linkitems />
                                    </div>
                                </div>

                            </div>

                        )}
                    <div>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>我的購物車</ModalHeader>
                            <ModalBody>
                                成功加入購物車
                        </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>確定</Button>
                                <Link to="/cart"><Button color="secondary" onClick={this.toggle}>結帳</Button></Link>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>


            </React.Fragment>
        );
    }


}

export default withRouter(Item_detail);