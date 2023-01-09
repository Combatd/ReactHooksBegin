import React from "react";

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    };
  }
  // After rendering, we will attach a timer to the component
  componentDidMount() {
    // We are defining the timer attribute, this is not built into React
    this.timer = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <span>{this.state.counter}</span>
      </div>
    )
  }
}

export default Counter;