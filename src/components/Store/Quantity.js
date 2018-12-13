import React, { Component } from 'react';

var a = 1;
class Quantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
       
        
    }
  
    onDecrement = () =>{
        this.setState({ value: this.state.value - 1 },
             function () { this.props.qtyChange(this.state.value) })       
    }

    onIncrement = () => {  
        this.setState({value: this.state.value + 1 },
            function () { this.props.qtyChange(this.state.value) })     
    }
    
    qtyHandler = (evt) => {
        this.setState({
            value: evt.target.value 
        }, function () { this.props.qtyChange(this.state.value) })
       
    }
    // qtyChangeHandler = (evt) => {
    //     this.props.qtyChange(this.state);
    //     this.setState(this.initState)
    //     evt.preventDefault();
    // }

    componentDidMount() {
        this.props.qtyChange(this.state.value);
    }

    render() {
        //console.log(this.state.value)
        return (
            <div className="m-2">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn bg-first btn-sm" onClick={this.onDecrement}><i className="fa fa-minus"></i></button>
                    </div>
                    <input type="number" id="qty_input" className="form-control form-control-sm" value={this.state.value} onChange={this.qtyHandler}/>
                    <div className="input-group-prepend">
                        <button className="btn bg-first btn-sm" onClick={this.onIncrement}><i className="fa fa-plus"></i></button>
                    </div>
                </div>
            </div>
            

        );
    }
}

export default Quantity;