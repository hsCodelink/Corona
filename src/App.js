import "./App.css";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Sample/login";
import Register from "./pages/Sample/register";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="/" element={<About />} /> */}
          </Route>   
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
