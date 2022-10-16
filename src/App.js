import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";

import Navbar from "./components/global/Navbar";
import "./App.css";

function App() {
  const [isMob, setIsMob] = useState(window.innerWidth < 600);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismob = window.innerWidth < 600;
        if (ismob !== isMob) setIsMob(ismob);
      },
      false
    );
  }, [isMob]);

  return (
    <>
      <Navbar mob={isMob} />
      <Routes>
        <Route exact path="/" element={<Home mob={isMob} />} />
        <Route exact path="/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
