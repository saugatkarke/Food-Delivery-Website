import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import useFoodApi from "../hooks/useFoodApi";

const FetchContext = createContext();
export default function FetchContextProvider({ children }) {
  const resApiData = useFoodApi();
  const [filteredRes, setFilteredRes] = useState([]);
  const apiValue = {
    resApiData,
    filteredRes,
    setFilteredRes,
  };
  return (
    <FetchContext.Provider value={apiValue}>{children}</FetchContext.Provider>
  );
}

export function useFetchContext() {
  const context = useContext(FetchContext);
  if (!context) throw new Error("context not defined");
  return context;
}
