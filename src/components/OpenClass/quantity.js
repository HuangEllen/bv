import React, { Component } from 'react';


class quantity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 1
            
        }
// console.log(this.state);
    }

    onDecrement () {
        console.log(this.state);
        if (this.state.value <= 0) return;
        this.setState({ value: --this.state.value });
        console.log(this.state);
    }
    onIncrement () {
        this.setState({ value: ++this.state.value });
        
    }
    handleChange(evn) {
        this.setState({ value: evn.target.value });
        // console.log(this);
    }
    render() {
        // console.log(this);
        return (
            <div>
            <p>
                Set the quantity
</p>
            <div className="quantity-input">
                <button className="quantity-input__modifier quantity-input__modifier--left" onClick={this.decrement}>
                    &mdash;
</button>
                <input className="quantity-input__screen" type="text" value={this.state.value}  />
                <button className="quantity-input__modifier quantity-input__modifier--right" onClick={this.increment}>
                    &#xff0b;
</button>
            </div>
        </div>
    );
}}

export default quantity;