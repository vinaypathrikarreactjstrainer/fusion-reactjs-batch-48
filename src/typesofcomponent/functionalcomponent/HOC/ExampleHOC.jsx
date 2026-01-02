import React, { useState } from "react";

/*
    Higher Oerder Component are those component which take component as an input, and return new component as output.
*/



const ExampleHOC = () => {
  return (
    <>
      <h1>Example - Higher Order Component</h1>
      <MyCounter />
      <MyCounter />
      <MyCounter />
      <HOCRed comp = {<MyCounter />} />
      <HOCGreen comp = {<MyCounter />} />

    </>
  )
};

// Higher Order Component
function HOCRed(props) {
  return(
    <>
      <h3>Higher Order Component</h3>
      <div style={{backgroundColor: 'red', width: '100px'}}>
        {props.comp}
      </div>
    </>
  )
}
function HOCGreen(props) {
  return(
    <>
      <h3>Higher Order Component</h3>
      <div style={{backgroundColor: 'green', width: '100px'}}>
        {props.comp}
      </div>
    </>
  )
}

// Counter Component
function MyCounter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </>
  )
};

export default ExampleHOC;
