import React, { Component } from 'react';
import './MemberOrder.css';

class MemberOrder extends Component {
    
  

    render() {

        return (
            <React.Fragment>
                <div className="container caOrdermain">
                    <div className="caOrdermain">
                    
                    <div className="caOrdermaintext">
                    <h5 className="text-center textcolor">我的訂單</h5>
                    </div>
                    <hr></hr>
                    <div className="caOrdermaintext">
                    <h5 className="text-center textcolor">我的收蔵</h5></div>

                    </div>
                </div>


            </React.Fragment>
        )
    }

}

export default MemberOrder;