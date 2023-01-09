import React from 'react';

class Form extends React.Component {
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Hey!");
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input id="name" type="text" />
        <input type="submit" />
      </form>
    );
  }
}

export default Form;