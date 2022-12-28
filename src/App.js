import "./App.css";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import About from "./pages/About/about";
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>   
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
