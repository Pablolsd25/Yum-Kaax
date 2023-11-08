import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Langind from "./Components/Landing.jsx/Langind";
import Footer from "./Components/Footer/Footer";
import "./Styles/App.scss";
import Productos from "./Components/Productos/Productos";
import Contacto from "./Components/Contacto/Contacto";
import DetalleProducto from "./Components/Productos/DetalleProdcuto.jsx";
function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Langind />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" component={DetalleProducto} />
        <Route path="/pedidos" element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
