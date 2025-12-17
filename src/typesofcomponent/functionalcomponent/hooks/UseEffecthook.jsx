import React, { useEffect, useState } from 'react'

const UseEffecthook = () => {
    const [name, setName] = useState('Fusion');
    const [count, setCount] = useState(1);
    const [student, setStudent] = useState('Aditya');
    // syntax
    // do not have dependancy array
    useEffect(() => {
        console.log('this is not having dependancy array')
    });
    // dependancy array is empty
    useEffect(() => {
        console.log('empty dependancy array will runs only one time')
    }, []);
    // provided state inside dependancy array
    useEffect(() => {
        alert();
        console.log('it only runs when count is changed', count);
    }, [count]); // dependancy array
    /*
        React rendering must stay pure(API calls, DOM manipulation), useEffects lets you run code after the rendering safely
        * useEffect runs every render - mouting phase
        * without dependancy array - it runs every time
        * when dependancy array is an empty it runs only one time at the time of component render
        * when we provide any state inside the dependancy array only that time useEffect runs when the given state is update
    */
  return (
    <>
        <h2 style = {{color: "blue", fontSize: "28px"}}>UseEffecthook Component</h2>
        <h3>Name: {name}</h3>
        <h3>Count: {count}</h3>
        <h3>Student: {student}</h3>
        <button type='button' onClick={() => setName('Harsh')}>Update Name</button>
        <button type='button' onClick={() => setCount(count + 1)}>Update Count</button>
        <button type='button' onClick={() => setStudent('Aaishwarya')}>Update Student</button>
    </>
  )
}

export default UseEffecthook