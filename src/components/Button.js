function Button(props) {
  return (
    <button onClick={sayHello}>{props.label}</button>
  )
}

// Functions are not returning any JSX!
function sayHello() {
  console.log("Hello");
}

export default Button;