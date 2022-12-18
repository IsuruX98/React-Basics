import "./App.css";
//imrs
import React, { useState, useEffect } from "react";
//sfc component
const Person = (props) => {
  return (
    <>
      <h2>Name : {props.name}</h2>
      <h2>age : {props.age}</h2>
    </>
  );
};
//sfc component
const Counter = () => {
  const [counter, setCounter] = useState(0); //hook

  //by using this you can call some code when ever something changes in your react application
  //by provide that variable as the 2nd argument
  //then if that changes you can call the code inside the first argument
  // useEffect(() => {
  //   alert("you changed the counter to " + counter);
  // }, [counter]);

  return (
    <>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </>
  );
};
//main app
const App = () => {
  const name = "isuru";
  const name2 = "sanka";
  const isSet = true;

  return (
    <div className="App">
      <h1>Hello {isSet ? name : name2}</h1>
      {name ? (
        <>
          <h3>you are in the if part</h3>
          <h5>
            if there are two elements or more, have to wrap with jsx elemet
          </h5>
        </>
      ) : (
        <h3>you are in the else part</h3>
      )}
      <p>use of the props</p>
      <Person name={"isuru"} age={24} />
      <Person name={"sanka"} age={25} />
      <Counter />
    </div>
  );
};

export default App;
