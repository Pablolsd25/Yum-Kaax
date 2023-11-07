import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Langind from "./Components/Landing.jsx/Langind";
import Footer from "./Components/Footer/Footer";
import "./Styles/App.scss";
import Productos from "./Components/Productos";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Langind />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/pedidos" element={<Productos />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
