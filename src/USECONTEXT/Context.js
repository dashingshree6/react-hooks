import React, { createContext, useState } from "react";
import Input from "./Input";
import User from "./User";

export const AppContext = createContext(null);

export default function USECONTEXT() {
  const [username, setUsername] = useState("");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Input />
      <User />
    </AppContext.Provider>
  );
}
