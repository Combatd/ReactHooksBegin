import React from 'react';
import './App.css';

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Hello! This component is App.js, which his rendered from index.js, since in there is a div #root in the public folder.</h1>
//     </div>
//   );
// }

function Header() {
  return (
    <h1>Click the button!</h1>
  )
}

function Button() {
  return (
    <button onClick={sayHello}>Click me!</button>
  )
}
// Functions are not returning any JSX!
function sayHello() {
  console.log("Hello");
}

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Button />
      </>
    );
  }
}

export default App;
