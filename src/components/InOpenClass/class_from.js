import React, { Component } from 'react';
// import './allprofessor.scss'

class class_from extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            professor: {},
        }
    }

    componentDidMount() {
        //ajax call
        this.getClass()
        // this.getState()
        console.log('id', this.state.id)
        console.log(this.props.match.params.id)
    }
    getClass() {
        const th = this
        fetch('/professorId/professor/' + th.state.id)  //http://localhost:3000/professor/api
            .then(res => res.json())
            .then(professor => {
                // console.log(professor)
                this.setState({ professor: professor[0] })
            })
        // fetch("/allcategory/mystart/" + th.state.id + '/'+1)  //http://localhost:3000/professor/api
        // .then(res => res.json())
        // .then(c_room => {
        //     // console.log(this.state.userid)
        //     this.setState({ c_room: c_room })
        // })
    }
    render() {
        let items = this.state.professor;
        return (
            <React.Fragment>
                <div className="container">
                    <form>
                        <h2 className="mt-5 txt_mes">我要開課</h2>
                        <p className="mt-3 d-flex justify-content-center"> 您好  <h4 className="text-f ml-3 mr-3">{items.teacher_name}</h4> 講師 請填寫下列資料</p>
                        <div className="row d-flex">
                            <div className=" col-md-9 text-left ellen_form ">
                                <label htmlFor="myClassName">課程名稱</label>
                                <input type="text" className="floatLabel " id="myClassName"
                                    name="myClassName" placeholder="請輸入課程名稱" />
                            </div>
                            <div className="form-group col-md-3 text-left ellen_form">
                                <label htmlFor="myCategory">課程類別</label>
                                <select className="custom-select  ellen_form" id="myCategory" name="myCategory" >
                                    <option selected>請選擇課程類別</option>
                                    <option value="1">證照課程</option>
                                    <option value="2">手技課程</option>
                                    <option value="3">芳香體驗</option>
                                    <option value="4">肌膚護理</option>
                                    <option value="5">企業講座</option>

                                </select>
                            </div>
                        </div>
                        <div className="row d-flex">
                            <div className="form-group col-md-4 col-sm text-left ellen_form">
                                <label htmlFor="myClassPeople">人數限制</label>
                                <input type="text" className="floatLabel" id="myClassPeople"
                                    name="myClassPeople" placeholder="請輸入你的人數" />
                            </div>
                            <div className="form-group col-md-4 text-left ellen_form">
                                <label htmlFor="myClassAmount">單堂金額</label>
                                <input type="number" className="floatLabel" id="myClassAmount"
                                    name="myClassAmount" placeholder="請輸入金額" />
                            </div>
                            <div className="form-group col-md-4 text-left ellen_form ">
                                <label htmlFor="myClassDate ">開課日期</label>
                                <input type="date" className="floatLabel " id="myClassDate"
                                    name="myClassDate" placeholder="選擇日期" />
                            </div>
                        </div>
                        <label className="text-f ">開課地點</label>
                        <div className="form-row mb-2 ellen_form">
                            <div className="col-md-3 mb-3">
                                <input type="text" className="floatLabel" placeholder="請輸入縣市" id="myClassCity"
                                    name="myClassCity" />
                            </div>
                            <div className="col-md-9">
                                <input type="text" className="" placeholder="請輸入地址" id="myClassAddress"
                                    name="myClassAddress" />
                            </div>
                        </div>
                        <h3 className="mt-5">課程內容</h3>
                        <div className="ellen_form form-row ellen_floatLabel">
                            <textarea type="text" id="" className=" input-group" name="country" placeholder="請輸入此課程內容" />

                        </div>
                        <h3 className="mt-5">課程圖片</h3>
                        <label className="text-f ">第一張為課程封面圖</label>
                        <div className="row ellen_form">

                            <div className="col-md-6">
                                <div className="form-group files">
                                    <label>1. </label>
                                    <input type="file" className="floatLabel" multiple="" />
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
                        <button id="resetB" className="btn bg_mes text-w col-5 ml-3 mr-3">取消申請</button>
                        <button className="btn  bg_er-r text-w col-5 ml-3 mr-3">確認送出</button>
                    </div>
                </div>


            </React.Fragment >
        )
    }
}
export default class_from;