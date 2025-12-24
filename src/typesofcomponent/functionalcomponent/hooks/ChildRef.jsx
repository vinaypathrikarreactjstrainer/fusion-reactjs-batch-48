import React, {forwardRef} from 'react';

const ChildRef = (props, ref) => {
    return(
        <>
            <h2>Child Component : useRef</h2>
            <input type='text' placeholder='User Name' ref = {ref} />
        </>
    )
}

export default forwardRef(ChildRef);