import React from 'react';
import './App.css';

import Button from './components/Button';
import Header from './components/Header';

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
        <Header text="Hit it"/>
        <Button label="Hey!" />
      </>
    );
  }
}

export default App;
