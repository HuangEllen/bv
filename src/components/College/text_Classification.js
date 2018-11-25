import React, { Component } from 'react';

class text_Classification extends Component {

    render() {
        return (
            <div className="container">
                <div className="row bg-s d-flex justify-content-around ellen-boxbh ">
                    <div className="col-5 d-flex flex-column  align-items-start justify-content-start">
                        <div className="text-left">
                            <h5 >所有課程</h5>
                        </div>
                        <div className="d-flex  row ellen-boxh  col mt-2 ellen-bt flex-column align-items-start">
                            <a href="#"> <p className=" mr-3 ellen-p">證照課程</p> </a>
                            <a href="#"> <p className=" mr-3 ellen-p">護膚技術課程</p> </a>
                            <a href="#"> <p className=" mr-3 ellen-p">保養技術課程</p> </a>
                            <a href="#"> <p className=" mr-3 ellen-p">專業技術課程</p> </a>
                            <a href="#"> <p className=" mr-3 ellen-p">企業講座</p> </a>
                        </div>
                    </div>
                    <div className="col-5 d-flex flex-column  align-items-start justify-content-start  ">
                        <div className="text-left">
                            <h5 >排序</h5>
                        </div>
                        <div className="d-flex  row ellen-boxh  col mt-2 ellen-bt flex-column align-items-baseline">
                            <a href="#"> <p className=" mr-3 ellen-p">優惠消息</p> </a>
                            <a href="#"> <p className=" mr-3 ellen-p">團體優惠</p> </a>
                            <a href="#"> <p className=" mr-3 ellen-p">最多詢問</p> </a>
                            <a href="#"> <p className=" mr-3 ellen-p">最新上架</p> </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default text_Classification;