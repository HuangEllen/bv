import React, { Component } from 'react';
import Items from './Items';
import IntegerStep from './Priceslider';

class Test extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.match.params.c_category);
        this.state = {
            type: [],
            ation: false,//true 
        }
    }
    toggle = () => this.setState({ ation: !this.state.ation })
    componentDidMount() {
        this.getType();
    }

    getType(id) {
        if (!id) {
            id = ''
        }
        fetch("http://localhost:3000/classify/product/" + id)
            .then(res => res.json())
            .then(type => {
                this.setState({
                    type: type,
                })
            })
    }
    render() {
        console.log("render!!")

        return (
            <React.Fragment>
                <div className="container ">
                    <div className=" row d-flex justify-content-end bg-s p-2 myMOUSE yuru-antd-slider" onClick={this.toggle}>
                        <h5 className="mr-2">進階篩選</h5>
                        <i className="ellen-fas fas fa-angle-down"></i>
                    </div>
                    {this.state.ation ? <div className="row bg-s d-flex justify-content-around ellen-boxbh ">
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
                                <a onClick={() => this.getType(2)}> <p className=" mr-3 ellen-p">卸妝潔顏</p> </a>
                                <a onClick={() => this.getType(3)}> <p className=" mr-3 ellen-p">精華液</p> </a>
                                <a onClick={() => this.getType(4)}> <p className=" mr-3 ellen-p">乳液</p> </a>
                                <a onClick={() => this.getType(5)}> <p className=" mr-3 ellen-p">乳霜</p> </a>
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
                            <div className=" col mt-2 ellen-bt align-items-start">
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
                                <IntegerStep />
                            </div>
                        </div>
                    </div> : null}
                    <div className="row">
                        <Items type={this.state.type} />
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Test;