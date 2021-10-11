import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

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
    const autoCounter = (
      <div>
        <div>Seconds: {this.state.seconds} </div>
      </div>
    );
    return (
      <div>
        <div>
          <h2>Count: {this.state.count}</h2>
          <Button title={"Отнять"} action={this.decrementCount} />
          <Button title={"Добавить"} action={this.incrementCount} />
          <Button title={"Изменить счет"} action={this.changeCounter} />
          <Button title={"Автокликер"} action={this.tick} />
          <div>{autoCounter}</div>
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
