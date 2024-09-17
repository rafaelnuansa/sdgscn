import "react/jsx-runtime";
import { createContext } from "react";
const initialState = {
  theme: "light",
  setTheme: () => null
};
createContext(initialState);
