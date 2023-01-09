import React from 'react';
import './App.css';

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
      <h1>Hello! This Class is in App.js, which his rendered from index.js, since in there is a div #root in the public folder.</h1>
    );
  }
}

export default App;
