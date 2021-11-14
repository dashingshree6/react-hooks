import React, { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    }
  }));

  return (
    <div>
      <button>Child Button</button>
      {toggle && <h1>'IMPERATIVE HANDLE'</h1>}
    </div>
  );
});
export default Button;
