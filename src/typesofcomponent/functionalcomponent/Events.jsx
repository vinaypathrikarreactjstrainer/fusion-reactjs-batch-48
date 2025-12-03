import React, { useState } from "react";
const MyEvents = () => {
        return(
            <>
                <h3>My Events Component</h3>
                <p>This component is inside the Events Component</p>
            </>
        )
    };
const Events = () => {
    // useState Hook
    const [name, setName] = useState('Aditya');
    const [value, setValue] = useState(100);
    // variables
    // let a = 'Harsh';
    // event handlers
    const clickMe = () => {
        // a = 'Akansha';
        console.log('Clicked ' +  name);
        setName('Aaishwarya');
        console.log('Clicked ' +  name);
        setValue(200);
    }

    return(
        <>
            <h3>Events Handling in React</h3>
            <h4>Name : {name}</h4>
            <h4>Value : {value}</h4>
            {/* <button onClick={() => alert('Clicked')}>Click Me</button> */}
            <button onClick={() => clickMe()}>Click Me</button><br/>
            {/* Option 2 */}
            <MyEvents />

        </>
    )
}

export default Events;