import { useState } from "react";

const Input = () => {
    // states
    const [name, setName] = useState(null);
    const [city, setCity] = useState(null);
    const [print, setPrint] = useState(false);
    // Handlers
    const nameHandler = event => {
        console.log('value => ', event.target.value);
        setName(event.target.value);
        setPrint(false);
    }
    const cityHandler = event => {
        console.log('city => ', event.target.value);
        let city = event.target.value;
        setCity(city);
        setPrint(false);
    }
    // Event
    const printData = () => {
        setPrint(true);
    }

    return (
        <>
           <h2>Input Component</h2> 
           
            {
                print
                // ? <div><h1>{name}</h1><h1>{city}</h1></div>
                ? <h1>{name}, {city}</h1>
                : null
            }
           <label htmlFor="name">Name:</label>
           <input 
            type = "text"
            placeholder="Enter your Name"
            className="form-input"
            onChange={
                // (event) => console.log(event.target.value)
                (e) => nameHandler(e)
            }
           />
           <label htmlFor="name">City:</label>
           <input 
             type = "text"
             placeholder="Enter city"
             onChange = {(e) => cityHandler(e)}
             className="form-input"
           />
           <button onClick={() => printData()}>Print</button>
        </>
    )
}

export default Input;