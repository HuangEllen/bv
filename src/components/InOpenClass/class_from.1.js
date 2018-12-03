import React, { Component } from 'react';
import './allprofessor.scss'
import MyClass from '../Professor/my_class';

class class_from extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                <form action="">

<div className="form-group">
    <h3>Adding a Car to your Account</h3>

    <h2 className="heading">Owner Details</h2>
    <div className="controls">
    <label htmlFor="name">Name</label>
        <input type="text" id="name" className="floatLabel" name="name" />
        
    </div>
    <div className="controls">
        <input type="text" id="email" className="floatLabel" name="email" />
        <label htmlFor="email">Email</label>
    </div>
    <div className="controls">
    <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" className="floatLabel" name="phone" />
        
    </div>
    <div className="grid">
        <div className="col-2-3">
            <div className="controls">
                <input type="text" id="street" className="floatLabel" name="street" />
                <label htmlFor="street">Street</label>
            </div>
        </div>
        <div className="col-1-3">
            <div className="controls">
                <input type="number" id="street-number" className="floatLabel" name="street-number" />
                <label htmlFor="street-number">House No.</label>
            </div>
        </div>
    </div>
    <div className="grid">
        <div className="col-2-3">
            <div className="controls">
                <input type="text" id="city" className="floatLabel" name="city" />
                <label htmlFor="city">City</label>
            </div>
        </div>
        <div className="col-1-3">
            <div className="controls">
                <input type="text" id="post-code" className="floatLabel" name="post-code" />
                <label htmlFor="post-code">Post Code</label>
            </div>
        </div>
    </div>
    <div className="controls">
        <input type="text" id="country" className="floatLabel" name="country" />
        <label htmlFor="country">Country</label>
    </div>
</div>

<div className="form-group">
    <h2 className="heading">Car Details</h2>

    <div className="grid">
        <div className="col-1-3">
            <div className="controls">
                <input type="text" id="regno" className="floatLabel" name="regno" />
                <label htmlFor="regno">Reg. Number</label>
            </div>
        </div>
        <button type="submit" value="Search" className="col-1-4" id="btnReg">Search for Reg. No.</button>
    </div>
    <div className="grid">
        <div className="col-1-3">
            <div className="controls">
                <input type="text" id="carmodel" className="floatLabel" name="carmodel" />
                <label htmlFor="carmodel">Car Model</label>
            </div>
        </div>

        <div className="col-1-3">
            <div className="controls">
                <input type="number" id="something" className="floatLabel" name="something" />
                <label htmlFor="something">Something</label>
            </div>
        </div>
    </div>

    <div className="grid">
        <div className="col-1-4 col-1-4-sm">
            <div className="controls">
                <input type="date" id="regyear" className="floatLabel" name="regyear" value="<?php echo date('Y-m-d'); ?>" />
                <label htmlFor="regyear" className="label-date"><i className="fa fa-calendar"></i>  Reg. Year</label>
            </div>
        </div>
        <div className="col-1-4 col-1-4-sm">
            <div className="controls">
                <input type="date" id="modelyear" className="floatLabel" name="modelyear" value="<?php echo date('Y-m-d'); ?>" />
                <label htmlFor="modelyear" className="label-date"><i className="fa fa-calendar"></i>  Model Year</label>
            </div>
        </div>
    </div>

</div>
<div className="grid">
    <p className="info-text">Any other information we should know about? Let us know below:</p>

    <div className="controls">
        <textarea name="comments" className="floatLabel" id="comments"></textarea>
        <label htmlFor="comments">Comments</label>
    </div>
    <button type="submit" value="Submit" className="col-1-4">Submit</button>
</div>

</form>
                </div>


            </React.Fragment>
        )
    }
}
export default class_from;