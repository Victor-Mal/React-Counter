import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./index.sass";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countingMode: true,
      seconds: 30,
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
  
  tick = () => {
    this.setState({ seconds: 30 });
    this.autoInterval = setInterval(() => {
      if (this.state.seconds > 0) {
        this.changeCounter();
      }
    }, 1000 / this.props.actionsPerSecond);
    this.timeInterval = setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState((prevSeconds) => ({ seconds: prevSeconds.seconds - 1 }));
      }
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.autoInterval);
  }
  
  render() {
    return (
      <div>
        <div>
          <h2>Count: {this.state.count} Seconds: {this.state.seconds}</h2>
          <div></div>
          <div>
            <Button style={{backgroundColor: this.state.countingMode ? 'white' : 'mediumvioletred'}} title={"Отнимать"} action={this.decrementCount} />
            <Button style={{backgroundColor: this.state.countingMode ? 'green' : 'white'}} title={"Добавлять"} action={this.incrementCount} />
          </div>
          <Button title={"Изменить счет"} action={this.changeCounter} />
          <Button title={"Автокликер"} action={this.tick} />
        </div>
        
      </div>
    );
  }
}

Counter.propTypes = {
  step: PropTypes.number,
};

Counter.defaultProps = {
  step: 1,
};
