import React from "react";

const User = (props) => {
    console.log('props => ', props);
    
    return (
        <>
            <h3>User Component</h3>
            <button onClick={() => props.data()}>Users</button>
        </>
    )
}

export default User;