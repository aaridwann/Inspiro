import { createContext, useReducer, useState } from "react";
import HomeReducers from "../Reducer/HomeReducer";

export const MainContext = createContext();

const initialState = {
  position: null,
  data: [],
  loading: true,
  message: "",
  error: false,
};

export default function AppContext({ children }) {
  const [valueContext, dispatch] = useReducer(HomeReducers, initialState);
  return (
    <MainContext.Provider value={{ valueContext, dispatch }}>
      {children}
    </MainContext.Provider>
  );
}
