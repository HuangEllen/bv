import React, { Component } from 'react';
import IntegerStep from './Priceslider';
class Text_Classification extends Component {

    render() {
        return (
            <div className="container">
            <div className="row bg-s d-flex justify-content-around ellen-boxbh">
                <div className="col flex-column  align-items-start justify-content-start">
                    <div className="text-left">
                        <h5 >所有系列</h5>
                    </div>
                    <div className=" col mt-2 ellen-bt align-items-start">
                        <a href="#"> <p className=" mr-3 ellen-p">水妍潤澤系列</p> </a>
                        <a href="#"> <p className=" mr-3 ellen-p">毛孔淨化系列</p> </a>
                        <a href="#"> <p className=" mr-3 ellen-p">光感超淨白系列</p> </a>
                        <a href="#"> <p className=" mr-3 ellen-p">BV年輕肌密系列</p> </a>
                        <a href="#"> <p className=" mr-3 ellen-p">全方位防曬系列</p> </a>
                    </div>
                </div>
                <div className="col d-flex flex-column  align-items-start justify-content-start  ">
                    <div className="text-left">
                        <h5 >排序</h5>
                    </div>
                    <div className="d-flex  row  col mt-2 ellen-bt flex-column align-items-baseline">
                        <a href="#"> <p className=" mr-3 ellen-p">化妝水</p> </a>
                        <a href="#"> <p className=" mr-3 ellen-p">卸妝潔顏</p> </a>
                        <a href="#" onClick={() => this.getClass(3)}> <p className=" mr-3 ellen-p">精華液</p> </a>
                        <a href="#" onClick={() => this.getClass(4)}> <p className=" mr-3 ellen-p">乳液</p> </a>
                        <a href="#" onClick={() => this.getClass(5)}> <p className=" mr-3 ellen-p">乳霜</p> </a>
                        <a href="#"> <p className=" mr-3 ellen-p">眼霜</p> </a>
                        <a href="#"> <p className=" mr-3 ellen-p">保養油</p> </a>
                        <a href="#"> <p className=" mr-3 ellen-p">防曬</p> </a>
                        <a href="#"> <p className=" mr-3 ellen-p">精油</p> </a>
                    </div>
                </div>
                <div className="col flex-column  align-items-start justify-content-start">
                    <div className="text-left">
                        <h5 >肌膚需求</h5>
                    </div>
                    <div  className=" col mt-2 ellen-bt align-items-start">
                    <a href="#"> <p className=" mr-3 ellen-p">水潤粉嫩</p> </a>
                                <a href="#"> <p className=" mr-3 ellen-p">深層清潔</p> </a>
                                <a href="#"> <p className=" mr-3 ellen-p">緊緻毛孔</p> </a>
                                <a href="#"> <p className=" mr-3 ellen-p">提亮膚色</p> </a>
                                <a href="#"> <p className=" mr-3 ellen-p">彈力澎潤</p> </a>
                    </div>
                </div>
                 <div className="col d-flex flex-column  align-items-start justify-content-start  ">
                       <div className="text-left">
                                <h5 >價格區間</h5>
                            </div>
                            <div className="d-flex row ellen-boxh col mt-2 ellen-bt flex-column align-items-baseline">
                                <IntegerStep/>
                            </div>
                </div>
                <div className="col d-flex flex-column  align-items-start justify-content-start  ">
                <div className="text-left">
                                <h5 >評論星數</h5>
                            </div>
                            <div className=" col mt-2 ellen-bt align-items-start">
                                <div>
                                    <input type="checkbox" id="fivestar" name="fivestar" />
                                    <label htmlFor="fivestar">五星</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="fourstar" name="fourstar" />
                                    <label htmlFor="fourstar">四星</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="threestar" name="threestar" />
                                    <label htmlFor="threestar">三星</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="twostar" name="twostar" />
                                    <label htmlFor="twostar">二星</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="onestar" name="onestar" />
                                    <label htmlFor="onestar">一星</label>
                                </div>
                            </div>
                    </div>
            </div>
        </div>
        )
    }
}

export default Text_Classification;