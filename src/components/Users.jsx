import React from "react";

const Users = (props) => {
    console.log('component props => ', props);
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.info}</p>
            <p>{props.userId}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default Users;