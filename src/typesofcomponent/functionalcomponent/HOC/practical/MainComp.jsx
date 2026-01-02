import React from "react";
import HOCRed from "./HOCRed";
import MyCounter from "./MyCounter";
import HOCBlue from "./HOCBlue";

const MainComp = () => {
    return(
        <>
            <h2>Main Component</h2>
            <HOCRed comp = {<MyCounter />} />
            <HOCBlue blueComp = {<MyCounter />} />
        </>
    )
}

export default MainComp;