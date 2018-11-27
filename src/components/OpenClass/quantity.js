import React, { Component } from 'react';

var a=1;
class quantity extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: 1
    //     }
    //     this.onDecrement=this.onDecrement.bind(this);
    //     this.onIncrement=this.onIncrement.bind(this);
    // }
// console.log(this.state);
    // onDecrement=(a)=> {
    //     console.log(this.state);
    //     if (a <= 0) return;
    //     this.setState({ value: a-1 });
    //     console.log(this.state);
    // }
    // onIncrement() {
    //     this.setState({ value: ++this.state.value });

    // }
    // handleChange(evn) {
    //     this.setState({ value: evn.target.value });
    //     // console.log(this);
    // }
    render() {
        // console.log(this);
        return (
            <div className="m-2">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn bg-first btn-sm" onClick={this.onDecrement}><i className="fa fa-minus"></i></button>
                    </div>
                    <input type="number" id="qty_input" className="form-control form-control-sm" value="1" min="1" />
                    <div className="input-group-prepend">
                        <button className="btn bg-first btn-sm" onClick={this.onIncrement}><i className="fa fa-plus"></i></button>
                    </div>
                </div>
            </div>

        );
    }
}

export default quantity;