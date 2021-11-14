import React, { useContext } from "react";
import { AppContext } from "./Context";

export default function Input() {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <h1>useContext Hook</h1>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        placeholder="Type username"
      />
    </div>
  );
}
