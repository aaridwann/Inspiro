import React, { useState } from "react";
import { createContext } from "react";

const Context = createContext({
  location: {},
});

export default function Provider({ children }) {
  const [value, setValue] = useState(Context);
  return (
    <Context.Provider value={{ value, setValue }}>{children}</Context.Provider>
  );
}
