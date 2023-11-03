import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Langind from "./Components/Landing.jsx/Langind";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Langind />} />
      </Routes>
    </>
  );
}

export default App;
