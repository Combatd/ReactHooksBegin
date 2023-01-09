import React from "react";

// function Button(props) {
//   
// }



class Button extends React.Component {
  constructor() {
    super();
    this.state = { 
      counter: 0
    }
    // this.handlleButtonClick = this.handlleButtonClick.bind(this); // without arrow function, bind the context of this to instance of Button
  }
  // If not arrow function, must use arrow function for onClick
  handlleButtonClick() {
    this.setState({ counter: 1})
  }

  render() {
    return (
      <button onClick={() => this.handlleButtonClick}>{this.props.label}</button>
    )
  }
 }

export default Button;