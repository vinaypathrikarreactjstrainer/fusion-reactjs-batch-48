import React, { useState } from "react";

// Counter Component
function MyCounter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </>
  )
};

export default MyCounter;