import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';
class IntegerStep extends React.Component {
    state = {
      inputValue: 2300,
    }
  
    onChange = (value) => {
      this.setState({
        inputValue: value,
      });
    }
  
    render() {
      const { inputValue } = this.state;
      return (
      
            <div className=" col mt-2 align-items-baseline">
            <Col >
            <InputNumber
              min={2300}
              max={5000}
              style={{ marginLeft: 16 }}
              value={inputValue}
              onChange={this.onChange}
            />
          </Col>
          <Col >
            <Slider
              min={2300}
              max={5000}
              onChange={this.onChange}
              value={typeof inputValue === 'number' ? inputValue : 0}
            />
          </Col>
          
          </div>
      
      );
    }
  }
  
  export default IntegerStep;