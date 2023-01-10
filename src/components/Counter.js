import React, { useEffect, useState } from "react";

// class Counter extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       counter: 0
//     };
//   }
//   // After rendering, we will attach a timer to the component
//   componentDidMount() {
//     // We are defining the timer attribute, this is not built into React
//     this.timer = setInterval(() => {
//       this.setState({
//         counter: this.state.counter + 1
//       });
//     }, 1000);
//   }
//   // When not rendered on the DOM anymore, remove the timer
//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     return (
//       <div>
//         <span>{this.state.counter}</span>
//       </div>
//     )
//   }
// }

const Counter = () => {
  const [counter, setCounter] = useState(0); // array destructuring of attributes/functions

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((counter) => {
        return counter + 1; 
      });
    }, 1000);

    // component unmounts
    return () => {
      clearInterval(timer);
    }
  }, [])

  return(
    <div>
      <span>You spent {counter} seconds</span>
    </div>
  );
};

export default Counter;