import React, { Component } from 'react';

class classification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ation: false //true 
        };
    }
    toggle = () => this.setState({ ation: !this.state.ation })

    getSears = (evt) => {
        // console.log(this.state)
        // var a  = encodeURI(this.state.city)
        // var b = encodeURI(this.state.sport)
        var a = this.state.city;
        var b = this.state.sport;
        // console.log(a,b)
        fetch('/allcategory/slider_page/' + a + "/" + b)
            .then(res => res.json())
            .then(sears => {
                console.log(sears)
                this.setState({
                    sears: sears,
                    sear: this.initState
                })
            })
    }


    render() {
        return (
            <React.Fragment>

                <div className="row d-flex justify-content-end bg-s p-2 myMOUSE" onClick={this.toggle}>
                    <h5 className="mr-2">進階篩選</h5>
                    <i className="ellen-fas fas fa-angle-down"></i>
                </div>

                {this.state.ation ? <div className="row bg-s d-flex justify-content-around ellen-boxbh ">
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
                </div> : null}



                {/* <div class="container accordion d-flex p-0 my-3"  onClick={this.handleClick}>
                    <a class="d-block p-3 active">
                        jQuery
        </a>
                    <div class="content active">
                        <p class="p-3">
                            jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. It is free, open-source software using the permissive MIT License. Web analysis indicates that it is the most widely deployed JavaScript library by a large margin.
            </p>
                    </div>
                </div> */}
            </React.Fragment>


        )
    }


    // shouldComponentUpdate(nextProps, nextState) {
    //     //預設回傳true
    //     //return true;
    //     //不要更新
    //     return false;
    // }
}

export default classification;