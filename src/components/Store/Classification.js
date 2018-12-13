import React, { Component } from 'react';
import Text_Classification from './Text_Classification';

class classification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ation: false //true 
        };
    }
    toggle = () => this.setState({ ation: !this.state.ation })




    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="d-flex justify-content-end bg-s p-2 myMOUSE yuru-antd-slider" onClick={this.toggle}>
                        <h5 className="mr-2">進階篩選</h5>
                        <i className="ellen-fas fas fa-angle-down"></i>
                    </div>

                    {this.state.ation ? <Text_Classification /> : null}
                    
                </div>

               
            </React.Fragment>


        )
    }


   
}

export default classification;