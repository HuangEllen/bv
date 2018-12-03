import React, { Component } from 'react';
import './allprofessor.scss'
import MyClass from '../Professor/my_class';

class class_from extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <form>
                        <p>您好  </p>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label htmlFor="memName">姓名</label>
                                <input type="text" className="form-control" id="memName"
                                    name="memName" placeholder="請填入真實姓名" />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="memGender">性別</label>
                                <select className="custom-select " id="memGender" name="memGender" >
                                    <option selected>請選擇性別...</option>
                                    <option value="male">One</option>
                                    <option value="female">Two</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="memBirthday">生日</label>
                                <input type="date" className="form-control" id="memBirthday" 
                                    name="memBirthday" placeholder="選擇日期" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="memNickname">暱稱</label>
                                <input type="text" className="form-control" id="memNickname" 
                                    name="memNickname" placeholder="請填入你的暱稱" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="memMobile">手機號碼</label>
                                <input type="mobile" className="form-control" id="memMobile" 
                                    name="memMobile" placeholder="請填入手機號碼" />
                            </div>
                        </div>
                        <label className="mb-2">偏好項目</label>
                        <div className="form-row">
                            <div className="form-group col-md-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport1" value="跑步"  />
                                    <label className="form-check-label" htmlFor="memSport1">
                                        跑步
                            </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport2" value="游泳"  />
                                    <label className="form-check-label" htmlFor="memSport2">
                                        游泳
                            </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport3" value="瑜珈"  />
                                    <label className="form-check-label" htmlFor="memSport3">
                                        瑜珈
                            </label>
                                </div>
                            </div>
                            <div className="form-group col-md-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport4" value="爬山"  />
                                    <label className="form-check-label" htmlFor="memSport4">
                                        爬山
                            </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport5" value="健身"  />
                                    <label className="form-check-label" htmlFor="memSport5">
                                        健身
                            </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport6" value="有氧拳擊"  />
                                    <label className="form-check-label" htmlFor="memSport6">
                                        有氧拳擊
                            </label>
                                </div>
                            </div>
                            <div className="form-group col-md-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport7" value="國標舞"  />
                                    <label className="form-check-label" htmlFor="memSport7">
                                        國標舞
                            </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport8" value="街舞"  />
                                    <label className="form-check-label" htmlFor="memSport8">
                                        街舞
                            </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport9" value="攀岩"   />
                                    <label className="form-check-label" htmlFor="memSport9">
                                        攀岩
                            </label>
                                </div>
                            </div>
                            <div className="form-group col-md-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport10" value="籃球"   />
                                    <label className="form-check-label" htmlFor="memSport10">
                                        籃球
                            </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport11" value="排球"   />
                                    <label className="form-check-label" htmlFor="memSport11">
                                        排球
                            </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport12" value="棒球"   />
                                    <label className="form-check-label" htmlFor="memSport12">
                                        棒球
                            </label>
                                </div>
                            </div>
                            <div className="form-group col-md-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport13" value="羽球"   />
                                    <label className="form-check-label" htmlFor="memSport13">
                                        羽球
                            </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport14" value="桌球"   />
                                    <label className="form-check-label" htmlFor="memSport14">
                                        桌球
                            </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport15" value="撞球"   />
                                    <label className="form-check-label" htmlFor="memSport15">
                                        撞球
                            </label>
                                </div>
                            </div>
                            <div className="form-group col-md-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport16" value="保齡球"   />
                                    <label className="form-check-label" htmlFor="memSport16">
                                        保齡球
                            </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="memSport" id="memSport17" value="足球"   />
                                    <label className="form-check-label" htmlFor="memSport17">
                                        足球
                            </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" aria-label="Checkbox for following text input" />
                                    <label className="form-check-label mr-1" htmlFor="memEachSport">其他</label>
                                    <input type="text" className="inline" aria-label="Text input with checkbox" name="memEachSport" id="memEachSport"  />
                                </div>
                            </div>
                        </div>
                        <label>偏好地點</label>
                        <div className="form-row mb-2">
                            <div className="col-3">
                                <input type="text" className="form-control" placeholder="選擇縣市" id="memFavCity" 
                                    name="memFavCity" />
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control" placeholder="選擇區域" id="memFavArea" 
                                    name="memFavArea" />
                            </div>
                        </div>
                        <label>聯絡地點</label>
                        <div className="form-row mb-2">
                            <div className="col-3">
                                <input type="text" className="form-control" placeholder="選擇縣市" id="memCity" 
                                    name="memCity" />
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control" placeholder="選擇區域" id="memArea" 
                                    name="memArea" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="填寫地址" id="memAddress" 
                                    name="memAddress" />
                            </div>
                        </div>
                        <label>頭像上傳</label><br />
                        <div className="custom-file form-row col-3">
                            <div className="form-group">
                                <label htmlFor="memImage">選擇檔案</label>
                                <input type="file" className="form-control-file" id="memImage" />
                            </div>
                        </div>
                    </form>
                    <div className="d-flex justify-content-end">
                        <button id="resetB" className="btn btn-warning col-3">X清除資料</button>
                        <button className="btn btn-primary col-3">註冊</button>
                    </div>
                    <p className="text-right">或返回到 登入頁面?</p>
                </div>


            </React.Fragment>
        )
    }
}
export default class_from;