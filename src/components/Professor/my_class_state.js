import React, { Component } from 'react';



class my_class_state extends React.Component {

    render() {

        return (
            <React.Fragment>
                <div ClassName="col">
                    <table class="table table-hover shopping-cart-wrap">
                        <thead>
                            <tr className=" text-w bg-first">
                                <th scope="col">編號</th>
                                <th scope="col">課程名稱</th>
                                <th scope="col">課程狀態</th>
                                <th scope="col">修改/上架</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>全球V.S.S活性水微粒子技術</td>
                                <td>上架中</td>
                                <td>
                                    <button className="btn mr-3 bg_mes text-w">上架</button>
                                    <button className="btn mr-3 bg-first text-w">下架</button>
                                    <button className="btn bg_er-r text-w">修改</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>吃出高中生的新陳代謝：關鍵1招，絕對窈‧窕‧瘦</td>
                                <td>上架中</td>
                                <td>
                                    <button className="btn mr-3 bg_mes text-w">上架</button>
                                    <button className="btn mr-3 bg-first text-w">下架</button>
                                    <button className="btn bg_er-r text-w">修改</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>臉部清潔不適當 容易引發臉部肌膚問題</td>
                                <td>下架中</td>
                                <td>
                                    <button className="btn mr-3 bg_mes text-w">上架</button>
                                    
                                    <button className="btn bg_er-r text-w">修改</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>
                                    <button className="btn mr-3 bg_mes text-w">上架</button>
                                    <button className="btn bg_er-r text-w">修改</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>


            </React.Fragment>
        );
    }
}

export default my_class_state;