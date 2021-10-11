import React, { Component } from "react";
import Counter from "../Counter";

class CounterSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      actionsPerSecond: 1,
    };
  }
  handleStepChange = (event) => {
    const { target } = event;
    this.setState({ step: Number(target.value) });
  };

  handleActionsPerSecondChange = (event) => {
    const { target } = event;
    this.setState({ actionsPerSecond: Number(target.value) });
  };

  render() {
    const jsxCounter = (
      <div>
        <input
          type="number"
          name="step"
          value={this.state.step}
          onChange={this.handleStepChange}
        />
      </div>
    );
    return (
      <div>
        <div>
          <h3>Step:</h3>
          {jsxCounter}
          <Counter
            step={this.state.step}
            actionsPerSecond={this.state.actionsPerSecond}
          />
        </div>
        <div>
          <h3>ActionsPerSecond</h3>
          <input
            type="number"
            name="actionsPerSecond"
            value={this.state.actionsPerSecond}
            onChange={this.handleActionsPerSecondChange}
          />
        </div>
      </div>
    );
  }
}

export default CounterSettings;
