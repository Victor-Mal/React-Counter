import React, { Component } from "react";
import Counter from "./components/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }
  handleStepChange = (event) => {
    const { target } = event;
    this.setState({ step: Number(target.value) });
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
        <h3>Step:</h3>{jsxCounter}
        <Counter step={this.state.step} />
      </div>
    );
  }
}

export default App;
