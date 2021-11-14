import React, { useRef } from "react";
import Button from "./button.js";
export default function USEIMPERATIVEHANDLE() {
  const buttonRef = useRef(null);
  return (
    <div>
      <h1>useImperativeHandle Hook</h1>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Parent Button
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}
