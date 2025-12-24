import React, { useRef } from 'react';
import ChildRef from './ChildRef';

const ParentRef = () => {
    let name = useRef(null);
    // function
    const updateChildInput = () => {
        console.log('name input => ', name);
        name.current.value = 'Fusion Software Institute';
        name.current.focus();
    }
    return(
        <>
            <h2>Parent Component : useRef</h2>
            <ChildRef ref={name}/>
            <button onClick = {updateChildInput}>Manipulate</button>
        </>
    )
}

export default ParentRef;