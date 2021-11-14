import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

export default function USEMEMO() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data);
    });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (var i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("Data calculated");
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);
  return (
    <div>
      <h1>useMemo Hook</h1>
      <h2>{getLongestName}</h2>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1>'TOGGLE'</h1>}
    </div>
  );
}
