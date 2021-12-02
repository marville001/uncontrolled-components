import "./App.css";
import Controlled from "./components/Controlled";
import Uncontrolled from "./components/Uncontrolled";
import ClassUncontrolled from "./components/ClassUncontrolled";

function App() {
  return (
    <div className="row m-4 col col-sm-12 col-md-10 col-lg-8 m-auto">
      <Controlled />
      <Uncontrolled />
      {/* <ClassUncontrolled /> */}
    </div>
  );
}

export default App;
