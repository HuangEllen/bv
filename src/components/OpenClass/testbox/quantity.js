import React, { Component } from 'react';


class quantity extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: 1 }
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
        // console.log(this.state)//一個Obj的value 1
    }

    increment=(evt)=> {
        // console.log(this);//找不到props
        let prevState=this.state;
        console.log(prevState)
        console.log(evt.target.value);//空白  但是有點擊次數
        // console.log(+this);//NaN
        // this.setState(prevState => { value: ++prevState.value });
    }

    decrement() {
        // this.setState(prevState => { value: prevState.value > 0 ? --prevState.value : 0 });
    }

    render() {

        return (
            <div>
                <p>
                    Set the quantity
</p>
                <div className="quantity-input">
                    <button className="quantity-input__modifier quantity-input__modifier--left" onClick={this.decrement}>
                        -
</button>
                    <input className="quantity-input__screen" type="text" value={this.state.value}  />
                    <button className="quantity-input__modifier quantity-input__modifier--right" onClick={this.increment}>
                        +
</button>
                </div>
            </div>
        );
    }
}

export default quantity;