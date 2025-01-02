import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Error from "./components/Error";
import About from "./components/About";
import { createBrowserRouter, Outlet } from "react-router";
import FetchContextProvider from "./context/FetchContext";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <FetchContextProvider>
          <Header />
          <Outlet />
        </FetchContextProvider>
      </Provider>
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
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);
export default App;
