import "./App.css";
import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import useFoodApi from "./hooks/useFoodApi";
import Error from "./components/Error";
import About from "./components/About";
import { createBrowserRouter, Outlet } from "react-router";
import FetchContextProvider from "./context/FetchContext";

function App() {

  return (
    <>
      <FetchContextProvider>
        <Header />
        <Outlet />
      </FetchContextProvider>
    </>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
    ],
    errorElement: <Error />,
  },
]);
export default App;
