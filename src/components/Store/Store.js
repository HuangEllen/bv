import React, { Component } from "react";
import Items from "./Items";
import Classification from "./Classification";



class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            

        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Classification/>
                    <div className="row">
                    <Items items={this.state.items} />
                    </div>
                </div>
            </React.Fragment>

        );
    }
    componentDidMount() {
        this.getItems();
    }
    getItems() {
        fetch("http://localhost:3000/store/items")
            .then(res => res.json()) //將拿到的資料轉型成json格式 丟給下一個then  傳給items(自己取的參數名)
            .then(items => this.setState({
                items: items    //後面的items是取得資料庫資料已轉型成json格式的資料  傳給前面的setState的items
            }))
    }
}

export default Store;