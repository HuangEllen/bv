import React,{Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Classification from './classification';
import Items from './Items';

class college extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }
    // componentDidMount(){
    //     this.getItems();
    // }
    getItemes=()=>{
        fetch("/all_croom/croom")
        .then(res=>res.json()) //將拿到的資料轉型成json格式 丟給下一個then  傳給items(自己取的參數名)
        .then(items => 
            this.setState({ 
            items:items    //後面的items是取得資料庫資料已轉型成json格式的資料  傳給前面的setState的items
        }))
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                <Classification/>
                <Items items={this.state.items}/>
                </div>
            </React.Fragment>
        )
    }
    componentDidMount(){
        this.getItems();
    }
}

export default college;