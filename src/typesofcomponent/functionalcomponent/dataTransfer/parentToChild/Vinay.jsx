import React from "react";

const Vinay = (props) => {
    console.log('vinay props => ', props);
    return(
        <>
            <h2>Vinay Component</h2>
            <button onClick={props.action}>Vinay action button</button>
            <button onClick={props.data}>Vinay info button</button>
        </>
    )
}
export default Vinay;