import React, { Component } from "react";
import Step from './Step';
import ShoppingList from './ShoppingList';
import "./Cart.scss";



class Cart extends Component {
    constructor(props) {
        super(props)
       
    }

    render() {
        return (
            <React.Fragment>
                <Step />
                <ShoppingList/>
            </React.Fragment>
        );
    }
}

export default Cart;