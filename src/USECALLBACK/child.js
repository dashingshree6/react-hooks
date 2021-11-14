import React, { useEffect } from "react";

export default function Child({ returnStatement }) {
  useEffect(() => {
    console.log("Function was called");
  }, [returnStatement]);
  return (
    <div>
      <h1>{returnStatement("Like & Subscribe")}</h1>
    </div>
  );
}
