import React, { Component } from 'react';


class quantity extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: 1 }

    }

    // increment(evn) {
    //     this.setState(evn => {  ++evn.value });
    // }

    // decrement(evn) {
    //     this.setState(evn => {  evn.value > 0 ? --evn.value : 0 });
    // }

    render() {

        return (
            <div>
                <div className="quantity-input">
                    <button className="quantity-input__modifier quantity-input__modifier--left" onClick={this.decrement}> &mdash;
                    </button>
                    <input className="quantity-input__screen" type="text"  />
                    {/* value={this.state.value} readonly */}
                    <button className="quantity-input__modifier quantity-input__modifier--right" onClick={this.increment}>
                        &#xff0b;
                    </button>
                </div>
            </div>
        );
    }
}

export default quantity;