import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from "../Button/Button";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countingMode: true,
      
    };
  }
  incrementCount = () => {
    this.setState({
      countingMode: true,
    });
  };
  decrementCount = () => {
    this.setState({
      countingMode: false,
    });
  };

  changeCounter = () => {
    const increment = this.state.count + this.props.step;
    const decrement = this.state.count - this.props.step;
    this.state.countingMode
      ? this.setState({ count: increment })
      : this.setState({ count: decrement });
  };

  render() {
    
    return (
       
      <div>
        <div>
          
          <h3>Step: {this.props.step}</h3>
         
        </div>

        <div>
          <h2>Count: {this.state.count}</h2>
          <Button title={"Отнять"} action={this.decrementCount} />
          <Button title={"Добавить"} action={this.incrementCount} />
          <Button title={"Изменить счет"} action={this.changeCounter} />
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  step: PropTypes.number,
}

Counter.defaultProps = {
  step: 1
}