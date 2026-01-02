import React from "react";

const HOCBlue = (props) => {
    return(
        <>
            <div style={{backgroundColor: 'blue', width: '100px'}}>
                {props.blueComp}
            </div>
        </>
    )
}

export default HOCBlue;