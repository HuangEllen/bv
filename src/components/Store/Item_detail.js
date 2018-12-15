import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import Quantity from './Quantity';
import Classification from './Classification';
import { Tabs} from 'antd';

import $ from 'jquery';//按鈕小於零要設DISABLE
//保存記錄
//要控制modal出現的時機
//這個版本是每筆都寫進資料庫 比較好的做法是寫進session再一次送 shopping list只有sid userid productid qty created_at
class Item_detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item:[],
            cart:{},
            qty:0
           
        }
    }
    
    itemdetail (id) {
        fetch("http://localhost:3000/store/items/" + id)
            .then(res => res.json())
            .then(item => this.setState({
                item: item
            }))
    }
    
   
    AddCart = (item) =>{
        var cart = {};
        var user = JSON.parse(localStorage.getItem("member"));   
        cart['userid'] = user[0].id;
        cart['product_id'] = item.product_id;   
        cart["qty"] = this.state.qty;
        fetch('http://localhost:3000/cart/Addcart',{
            method:'POST',
            body:JSON.stringify(cart),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        var order = {}
        var num = getRandomNum(1,10,6);
        function getRandomNum(Min, Max, length) {  
            var num = '';  
            for (var i = 0; i < length; i++) {  
                var Range = Max - Min;  
                var Rand = Math.random();  
                num += (Min + Math.round(Rand * Range)) + '';  
            }  
            return num;  
        }
        order['orderid'] = num;
        order['product_id'] = item.product_id;   
        order["qty"] = this.state.qty;
        console.log(JSON.stringify(order));
        fetch('http://localhost:3000/cart/Addcart/orderdetail',{
            method:'POST',
            body:JSON.stringify(order),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        
    }

    qtyChange = (data) => {
        this.setState({qty:data}, function() {
        });
        
        
        
    }
    componentDidMount() {
        let id = this.props.match.params.id
        this.itemdetail(id);
    }
    
    render() {
        const TabPane = Tabs.TabPane;
        return (
           
        <React.Fragment>
            <div className="container">
                <Classification/>
                     {
                         this.state.item.map(item =>
                            <div key={item.product_id}>
                                <div  className="mt-5">
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
                                                <h3 className="product-title mt-2">NT {item.productprice}</h3>
                                                <p className="ellen-p ">{item.specification} mL</p>
                                            <div>
                                                <Quantity qtyChange={this.qtyChange}/>                        
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
                                <hr className="yuru-separation-line"/>
                                <div>
                                    <h3>產品說明</h3>
                                </div>
                                <div className="card-container">
                                    <Tabs type="card">
                                        <TabPane tab="使用方法" key="1" className="d-flex justify-content-center align-items-center">
                                            <img src={(`/images/${item.useway}`)}/>
                                        </TabPane>
                                        <TabPane tab="商品天然成分" key="2">
                                            <img src={(`/images/${item.origin}`)}/>
                                        </TabPane>
                                        <TabPane tab="商品明細" key="3" className="d-flex justify-content-center align-items-center">
                                            <p className="yuru-product-ingriedient mt-5">{item.ingredient}</p>
                                        </TabPane>
                                    </Tabs>
                                </div>
                                <hr className="yuru-separation-line"/>
                                <div>
                                    <h3>其他同系列商品</h3>
                                </div>
                        </div>
                                
                    </div>
             
                    )}
                    <div className="modal" id="AddCart1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">  
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            <div className="modal-body">
                               成功加入購物車
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">確定</button>
                               <button type="button" className="btn yuru-btn-cart text-white"  >結帳</button>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
    

         </React.Fragment>
        );
    }  
}

export default withRouter(Item_detail);