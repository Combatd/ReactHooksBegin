import React from 'react';
import axios from 'axios';


// import Button from './components/Button';
// import Counter from './components/Counter';
// import Header from './components/Header';
// import Form from './components/Form';
import Search from './components/Search';
import List from './components/List';

const App = () => {
  return (
    <div> 
      <Search />
      <List/ >
    </div>
  );
}

// class App extends React.Component {

//   render() {
//     return (
//       <>
//         <Header text="You spent: "/>
//         <Counter />
//         <Button label="Hey!" />
//         <Form />
//       </>
//     );
//   }
// }

export default App;
