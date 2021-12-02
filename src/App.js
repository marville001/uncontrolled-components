import "./App.css";
import Controlled from "./components/Controlled";
import Uncontrolled from "./components/Uncontrolled";

function App() {
  return (
    <div className="row m-4 col col-sm-12 col-md-10 col-lg-8 m-auto">
      <Controlled />
      <Uncontrolled />
    </div>
  );
}

export default App;
