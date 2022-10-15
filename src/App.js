import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";

import Navbar from "./components/global/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
