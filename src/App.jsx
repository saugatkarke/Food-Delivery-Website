import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <div
        id="foodie-body"
        className="mx-auto py-3 flex flex-col items-start gap-3"
      >
        <Body />
      </div>
    </>
  );
}

export default App;
