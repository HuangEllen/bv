import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Classification from './classification';
import Items from './Items';

class college extends Component {
    constructor(props) {
        super(props);
        this.state = {
            c_room: []
        }
    }
    componentDidMount() {
        //ajax call
        this.getClass();
    }
    getClass() {
        fetch("/allcroom/croom")  //http://localhost:3000/professor/api
            .then(res => res.json())
            .then(c_room => {
                console.log(c_room)
                this.setState({ c_room: c_room })
            })

    }


    render() {
        // console.log(Storage(this.items));
        return (
            <React.Fragment>
                <div className="container ">
                    <Classification />
                    <div className="row">
                    <Items items={this.state.c_room} />
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