import React, { Component } from 'react';
import Text_Classification from './text_Classification';

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
                    <div className="d-flex justify-content-end bg-s p-2 myMOUSE" onClick={this.toggle}>
                        <h5 className="mr-2">進階篩選</h5>
                        <i className="ellen-fas fas fa-angle-down"></i>
                    </div>

                    {this.state.ation ? <Text_Classification /> : null}
                    
                </div>

                {/* <div class="container accordion d-flex p-0 my-3"  onClick={this.handleClick}>
                    <a class="d-block p-3 active">
                        jQuery
        </a>
                    <div class="content active">
                        <p class="p-3">
                            jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. It is free, open-source software using the permissive MIT License. Web analysis indicates that it is the most widely deployed JavaScript library by a large margin.
            </p>
                    </div>
                </div> */}
            </React.Fragment>


        )
    }


    // shouldComponentUpdate(nextProps, nextState) {
    //     //預設回傳true
    //     //return true;
    //     //不要更新
    //     return false;
    // }
}

export default classification;