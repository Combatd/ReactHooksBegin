function Button() {
  return (
    <button onClick={sayHello}>Click me!</button>
  )
}

// Functions are not returning any JSX!
function sayHello() {
  console.log("Hello");
}

export default Button;