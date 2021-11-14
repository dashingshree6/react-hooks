import React, { useRef } from "react";

export default function USEREF() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>useRef hook</h1>
      <input placeholder="Type something...." ref={inputRef} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
