import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aurora from "./components/Aurora.js";
import Beach from "./components/Beach.js";
import Jungle from "./components/Jungle.js";
import Forest from "./components/Forest.js";
import Lake from "./components/Lake.js";
import Milky from "./components/Milky.js";
import Navegacion from "./components/Navegacion.js";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="text-center mt-3 mb-3 text-white">Galeria Ciclistica</h1>
      </div>
      <Routes>
        <Route path="/Aurora" Component={Aurora} />
        <Route path="/Beach" Component={Beach} />
        <Route path="/Jungle" Component={Jungle} />
        <Route path="/Forest" Component={Forest} />
        <Route path="/Lake" Component={Lake} />
        <Route path="/Milky" Component={Milky} />
      </Routes>
      <Navegacion />
    </BrowserRouter>
  );
}

export default App;
