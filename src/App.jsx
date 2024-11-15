import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarMenu } from "./Components/Navbar";
import { ComponentHome } from "./Components/ComponentHome";
import { ComponentContact } from "./Components/ComponentContact";
import { ComponentAbout } from "./Components/ComponentAbout";
import { ComponentProjects } from "./Components/ComponentProjects";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarMenu/>
        <Routes>
          <Route path="/" element={<ComponentHome />}></Route>
          <Route path="/contact" element={<ComponentContact />}></Route>
          <Route path="/about" element={<ComponentAbout />}></Route>
          <Route path="/projects" element={<ComponentProjects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
