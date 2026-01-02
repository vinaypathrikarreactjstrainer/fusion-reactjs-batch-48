import React from "react";

const HOCRed = (props) => {
    return(
        <>
            <div style={{backgroundColor: 'red', width: '100px'}}>
                {props.comp}
            </div>
        </>
    )
}

export default HOCRed;