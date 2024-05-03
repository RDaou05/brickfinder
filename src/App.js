import "./App.css";
import EastImage from "./Components/EastImage";
import WestImage from "./Components/WestImage";
import NorthImage from "./Components/NorthImage";
import SouthImage from "./Components/SouthImage";
import NEImage from "./Components/NEImage";
import { Route, Routes } from "react-router-dom";
import SEImage from "./Components/SEImage";
import SWImage from "./Components/SWImage";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/NI" element={<NorthImage />}></Route>
        <Route path="/SI" element={<SouthImage />}></Route>
        <Route path="/EI" element={<EastImage />}></Route>
        <Route path="/WI" element={<WestImage />}></Route>
        <Route path="/NEI" element={<NEImage />}></Route>
        <Route path="/SEI" element={<SEImage />}></Route>
        <Route path="/SWI" element={<SWImage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
