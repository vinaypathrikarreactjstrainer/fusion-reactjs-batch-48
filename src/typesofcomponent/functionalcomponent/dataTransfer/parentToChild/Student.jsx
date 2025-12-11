import React from "react";

const Student = (props) => {
    console.log('student props => ', props);
    return (
        <>
            <h3>Students Component</h3>
            <button onClick={() => props.info()}>Students</button>
        </>
    )
}

export default Student;