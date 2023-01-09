import React from 'react';
import './App.css';

import Button from './components/Button';
import Counter from './components/Counter';
import Header from './components/Header';
import Form from './components/Form';

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Hello! This component is App.js, which his rendered from index.js, since in there is a div #root in the public folder.</h1>
//     </div>
//   );
// }

class App extends React.Component {

  render() {
    return (
      <>
        <Header text="You spent: "/>
        <Counter />
        <Button label="Hey!" />
        <Form />
      </>
    );
  }
}

export default App;
