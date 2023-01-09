import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'Write your name'
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    alert('The state was changed: '+ this.state.value)
  }
  // we binded context to instane of form using arrow function
  handleInputChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input id="name" type="text" value={this.state.value} onChange={this.handleInputChange} />
        <input type="submit" />
      </form>
    );
  }
}

export default Form;