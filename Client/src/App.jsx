import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Langind from "./Components/Landing.jsx/Langind";
import Footer from "./Components/Footer/Footer";
import "./Styles/App.scss";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Langind />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
