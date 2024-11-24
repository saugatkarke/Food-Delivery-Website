import "./App.css";
import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import useFoodApi from "./hooks/useFoodApi";
function App() {
  const resApiData = useFoodApi();
  const [filteredRes, setFilteredRes] = useState([]);
  return (
    <>
      <Header resData={resApiData} setFilteredRes={setFilteredRes} />
      <Body resData={filteredRes} />
    </>
  );
}

export default App;
