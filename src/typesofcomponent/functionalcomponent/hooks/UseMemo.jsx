import React, { useMemo, useState } from "react";

const UseMemo = () => {
    // state
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);
    // functions
    const handleCount = () => {
        console.log('Fun.Comp. => inside the handle count function');
        setCount(count);
    }
    // if count(state) has changes/updated that time only call the testComponent func.
    const useMemoFunc = useMemo(() => {
        console.log('inside the testComponent function');
        return count * 10
    }, [count]);
    console.log('UseMemo Component..');
    return(
        <>
            <h1>Use Memo Component</h1>
            <h2>Count : {count}</h2>
            <h2>{useMemoFunc}</h2>
            <h2>Item : {item}</h2>
            <button onClick={() => handleCount()}>Count++</button>
            <button onClick={() => setItem(item * 2)}>Item</button>
        </>
    )
}

export default UseMemo;