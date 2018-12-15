import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import moment from 'moment'

class class_from extends Component {
    constructor(props) {
        super(props)
        this.initState = {
            // id:null,
            user_id: this.props.match.params.id,
            c_category: "",
            c_title: "",
            c_address: "",
            c_area: "",
            c_people: "",
            amount: "",
            c_total_time: "",
            c_opdate: "",
            c_detail: "",
            product_1: "",
            start: 1,
            c_img1: "",

        }
        this.state = Object.assign({ id: this.props.match.params.id, professor: {}, }, this.initState)
        // console.log('id', this.data)
    }

    componentDidMount() {
        //ajax call
        this.getClass()
        // this.getState()

        console.log(this.props.match.params.id)
    }
    //抓到輸入欄位得值
    handleChange = (evt) => {
        let key = evt.target.id;
        let data = evt.target.value;
        console.log(data)
        this.setState({
            [key]: data,
        })

    }
    //點擊按钮後的事件處理
    add = (evt) => {
        const th = this
        const {
            user_id,
            c_category,
            c_title,
            c_address,
            c_area,
            c_people,
            amount,
            c_total_time,
            c_opdate,
            c_detail,
            product_1,
            c_img1,
            start
        } = this.state;
        let formData = new FormData();
        formData.append("user_id", user_id);
        formData.append("c_category", c_category);
        formData.append("c_title", c_title);
        formData.append("c_address", c_address);
        formData.append("c_area", c_area);
        formData.append("c_people", c_people);
        formData.append("amount", amount);
        formData.append("c_total_time", c_total_time);
        formData.append("c_opdate", c_opdate);
        formData.append("c_detail", c_detail);
        formData.append("product_1", product_1);
        formData.append("c_img1", c_img1);
        formData.append("start", start);
        console.log(this.initState)
        fetch('http://localhost:3000/allcroom/newcroom', {
            method: 'POST',
            body: formData,
        }).then(res => res.json())
            .then(data => {
                console.log(data.message);
                alert("恭喜您完成開課申請");
                evt.preventDefault();
                window.location.href = "/professor/"+th.state.id;
            })
        evt.preventDefault();
    }
    img_onChange = (evt) => {
        evt.preventDefault();

        this.setState({ c_img1: evt.target.files[0] });

    };
    getClass() {
        const th = this
        fetch('/professorId/professor/' + th.state.id)  //http://localhost:3000/professor/api
            .then(res => res.json())
            .then(professor => {
                // console.log(professor)
                this.setState({ professor: professor[0] })
            })
        // fetch("http://localhost:3000/allcroom/newcroom" ) 
        // .then(res => res.json())
        // .then(c_room => {
        //     // console.log(this.state.userid)
        //     this.setState({ c_room: c_room })
        // })
    }
    componentDidUpdate() {
        $("#c_img1").change(function () {
            readURL(this);
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $("#preview_c_img1_img").attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
    }

    render() {
        let items = this.state.professor;
        console.log(this.state)
        return (
            <React.Fragment>
                <div className="container">
                    <form method="POST">
                        <h2 className="mt-4 txt_mes">我要開課</h2>
                        <div className="row mt-3 d-flex justify-content-center">
                            您好
                            <h4 className="text-f ml-3 mr-3">{items.teacher_name}</h4>
                            講師 請填寫下列開課所需資訊
                            </div>
                        <div className="row d-flex">
                            <div className="form-group col-md-8 text-left ellen_form ">
                                <label htmlFor="c_title">課程名稱</label>
                                <input
                                    value={this.state.c_title}
                                    onChange={this.handleChange}
                                    type="text" className="floatLabel"
                                    id="c_title"
                                    name="c_title"
                                    placeholder="請輸入課程名稱" />
                            </div>
                            <div className="form-group col-md-4 text-left ellen_form">
                                <label htmlFor="c_total_time">開課總時數/分鐘</label>
                                <input
                                    value={this.state.c_total_time}
                                    onChange={this.handleChange}
                                    type="number"
                                    className="floatLabel"
                                    id="c_total_time"
                                    name="c_total_time"
                                    placeholder="請輸入總時數" />
                            </div>
                        </div>
                        <div className="row d-flex mt-3">
                            <div className="form-group col-md-6 text-left ellen_form">
                                <label htmlFor="c_category">課程類別</label>
                                <select className="custom-select  ellen_form"
                                    value={this.state.c_category}
                                    onChange={this.handleChange}
                                    id="c_category"
                                    name="c_category" >
                                    <option defaultValue> 請選擇課程類別</option>
                                    <option value="1">證照課程</option>
                                    <option value="2">手技課程</option>
                                    <option value="3">芳香體驗</option>
                                    <option value="4">肌膚護理</option>
                                    <option value="5">企業講座</option>

                                </select>
                            </div>
                            <div className="form-group col-md-6 text-left ellen_form">
                                <label htmlFor="product_1">產品類型</label>
                                <select className="custom-select  ellen_form"
                                    value={this.state.product_1}
                                    onChange={this.handleChange}
                                    id="product_1"
                                    name="product_1" >
                                    <option defaultValue>請選擇課使用產品</option>
                                    <option value="1">一淨到底白泥潔顏乳</option>
                                    <option value="2">毛孔深層清潔泥</option>
                                    <option value="3">超能紅石榴微循環潔膚乳</option>
                                    <option value="4">深層卸粧精華露</option>
                                    <option value="5">天生麗質粉美肌精華</option>
                                    <option value="6">生命之源金萃精華液</option>
                                    <option value="7">凍妍新肌澎潤精華</option>
                                    <option value="8">鎂光銀燦保濕精華液</option>
                                    <option value="9">逆時完美再造精華</option>
                                    <option value="10">逆時緊緻精華乳</option>
                                </select>
                            </div>

                        </div>
                        <div className="row d-flex">
                            <div className="form-group col-md-4 col-sm text-left ellen_form">
                                <label htmlFor="c_people">人數限制</label>
                                <input
                                    value={this.state.c_people}
                                    onChange={this.handleChange}
                                    type="number"
                                    className="floatLabel"
                                    id="c_people"
                                    name="c_people"
                                    placeholder="請輸入你的人數" />
                            </div>
                            <div className="form-group col-md-4 text-left ellen_form">
                                <label htmlFor="amount">單堂金額</label>
                                <input
                                    value={this.state.amount}
                                    onChange={this.handleChange}
                                    type="number"
                                    className="floatLabel"
                                    id="amount"
                                    name="amount"
                                    placeholder="請輸入金額" />
                            </div>
                            <div className="form-group col-md-4 text-left ellen_form ">
                                <label htmlFor="c_opdate ">開課日期</label>
                                <input
                                    value={moment(this.state.c_opdate).format(moment.HTML5_FMT.DATETIME_LOCAL)}
                                    onChange={this.handleChange}
                                    // floatLabel
                                    type="datetime-local"
                                    className="floatLabel "
                                    id="c_opdate"
                                    name="c_opdate"
                                    placeholder="選擇日期" />
                            </div>
                        </div>
                        <label className="text-f ">開課地點</label>
                        <div className=" mb-2 ellen_form row d-flex">
                            <div className="col-md-3 mb-3">
                                <input
                                    value={this.state.c_area}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="floatLabel"
                                    placeholder="請輸入縣市"
                                    id="c_area"
                                    name="c_area" />
                            </div>
                            <div className="col-md-9">
                                <input
                                    value={this.state.c_address}
                                    onChange={this.handleChange}
                                    type="text"
                                    className=""
                                    placeholder="請輸入地址"
                                    id="c_address"
                                    name="c_address" />
                            </div>
                        </div>
                        <h3 className="mt-5">課程內容</h3>
                        <div className="ellen_form form-row ellen_floatLabel">
                            <textarea
                                value={this.state.c_detail}
                                onChange={this.handleChange}
                                type="text"
                                id="c_detail"
                                className=" input-group"
                                name="c_detail"
                                placeholder="請輸入此課程內容" />

                        </div>
                        <h3 className="mt-5">課程圖片</h3>
                        <label className="text-f ">第一張為課程封面圖</label>
                        <div className="row ellen_form">

                            <div className="col-md-6">
                                <div className="form-group files">
                                    <label>1. </label>
                                    <img className="ellen_fileimg" style={{ display: this.state.src ? 'none' : '' }} id="preview_c_img1_img" src="" />
                                    <input type="file" id="c_img1" name="c_img1" className="floatLabel" multiple onChange={this.img_onChange} encType="multipart/form-data" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group files color">
                                    <label>2.</label>
                                    <input type="file" className="floatLabel" multiple="" />
                                </div>
                            </div>
                        </div>

                    </form>
                    <div className="d-flex justify-content-center">
                        <Link to={`/professor/${items.user_id}`}
                            id="resetB" className="btn bg_mes text-w col-5 ml-3 mr-3">取消申請</Link >
                        <button type="button" onClick={this.add} className="btn  bg_er-r text-w col-5 ml-3 mr-3">確認送出</button >
                    </div>
                </div>


            </React.Fragment >
        )
    }
}
export default class_from;