import "./App.css";
import Nav from "./components/nav";
import Body from "./components/body";
import Drinks from "./components/drinks";

function App() {
  return (
    <>
      <div className="backgroud">
        <div className="circle"></div>
      </div>
      <Nav />
      <Body />
      <Drinks />
    </>
  );
}

export default App;
