import React, { useState, useCallback } from "react";
import Child from "./child";

export default function USECALL() {
  const [data, setData] = useState("Hello subscribe to my Youtube channel");
  const [toggle, setToggle] = useState(false);

  const returnStatement = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div>
      <h1>useCallback Hook</h1>
      <Child returnStatement={returnStatement} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {""}
        Toggle
      </button>
      {toggle && <h1>"TOGGLE"</h1>}
    </div>
  );
}
