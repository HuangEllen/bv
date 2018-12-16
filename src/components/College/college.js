import React, { Component } from 'react';
import Items from './Items';

class college extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.match.params.c_category);
        this.state = {
            c_room: [],
            total: [],
            ation: false,//true 
            // cs_id: this.state.c_room.idx,
            // id:this.e.currentTarget.id
            // pop:true
        }
    }
    toggle = () => this.setState({ ation: !this.state.ation })
    componentDidMount() {
        //ajax call
        // this.getAllClass();
        this.getClass();
        this.getTotal();
        console.log(this.id)
        // this.onChange();
    }
    // getAllClass() {
    //     // 直接從父類別傳送類別參數去呼叫api回傳的值就重新跑map渲染畫面
    //     fetch("/allcategory/slider_page/" )  //http://localhost:3000/allcategory/slider_page
    //         .then(res => res.json())
    //         .then(c_room => {
    //             console.log(c_room)
    //             console.log(this.category)
    //             // console.log(this.props.match.params.c_category);
    //             this.setState({
    //                 c_room: c_room,
    //                 // category: ''
    //             })
    //         })
    // }
    getClass(id) {
        // 直接從父類別傳送類別參數去呼叫api回傳的值就重新跑map渲染畫面
        if (!id) {
            id = ''
        }
        //把api呼叫的參數使用setState變更參數他就會重新選染列表  map渲染變數放在state裡面去渲染更新
        fetch("/allcategory/slider_page/"+id )  //http://localhost:3000/allcategory/slider_page
            .then(res => res.json())
            .then(c_room => {
                // console.log(c_room)
                console.log(this.id)
                // console.log(this.props.match.params.c_category);
                this.setState({
                    c_room: c_room,
                    // category: ''
                })
                this.getTotal()
            })
            this.getTotal()
    }
    getTotal() {
        fetch('/allcategory/category_page')  //http://localhost:3000/allcategory/category_page
            .then(res => { res.json() })
            .then(total => {
                // console.log(total)
                this.setState({
                    total: total
                })
            })
    }
    // onChange = (e,id) => {
    //     //console.log(id)
    //     //const value = e.currentTarget.id;
    //     this.setState({ category: id });
    //     console.log(this.state.category)
    // }

    render() {
        return (
            <React.Fragment>
                <div className="container ">
                    <div className="row d-flex justify-content-end bg-s p-2 myMOUSE yuru-antd-slider" onClick={this.toggle}>
                        <h5 className="mr-2">進階篩選</h5>
                        <i className="ellen-fas fas fa-angle-down"></i>
                    </div>

                    {this.state.ation ? <div className="row bg-s d-flex justify-content-around ellen-boxbh ">
                        <div className="col-5 d-flex flex-column  align-items-start justify-content-start">
                            <div className="text-left">
                                <h5 >所有課程</h5>
                            </div>
                            <div className="d-flex  row ellen-boxh  col mt-2 ellen-bt flex-column align-items-start">
                                <a href="#" onClick={() => this.getClass(1)}> <p className=" mr-3 ellen-p"   >證照課程</p> </a>
                                <a href="#" onClick={() => this.getClass(2)}> <p className=" mr-3 ellen-p"  >護膚技術課程</p> </a>
                                <a href="#" onClick={() => this.getClass(3)}> <p className=" mr-3 ellen-p"  >專業技術課程</p> </a>
                                <a href="#" onClick={() => this.getClass(4)}> <p className=" mr-3 ellen-p"  >保養技術課程</p> </a>
                                <a href="#" onClick={() => this.getClass(5)}> <p className=" mr-3 ellen-p"  >企業講座</p> </a>
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
                    <div className="row">
                        <Items items={this.state.c_room} total={this.state.total} />
                    </div>

                </div>
            </React.Fragment>
        )
    }
    // componentDidMount(){

    //     this.getItems();
    // }
    // getItemes=()=>{
    //     fetch("/all_croom/croom")

    //     .then(res=>res.json()) //將拿到的資料轉型成json格式 丟給下一個then  傳給items(自己取的參數名)
    //     .then(items => 
    //         this.setState({ 
    //         itemso:items    
    //         //後面的items是取得資料庫資料已轉型成json格式的資料  傳給前面的setState的items
    //     }))
    // }
}

export default college;