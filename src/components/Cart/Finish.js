import React, { Component } from "react";
import {Link} from  'react-router-dom';
import "./Cart.scss";



class Finish extends Component {
    constructor(props) {
        super(props)
       
    }

    render() {
        return (
            <React.Fragment>
                <div className="mt-3 mb-5 d-flex justify-content-center align-items-baseline">
                    <i className="fas fa-check-circle pr-2" style={{color:'#84d1d1'}}></i>
                    <h4>您的訂單已送出</h4>
                    
                </div>
                <Link to="/store"><button type="button" className="btn yuru-btn-cart text-white btn-size">繼續選購</button></Link>
            </React.Fragment>
        );
    }
}

export default Finish;