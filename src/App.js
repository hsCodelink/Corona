import "./App.css";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Login from "./Components/Authuntication/login";
import Register from "./Components/Authuntication/register";
import User from "./pages/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="*" element={<Home />} /> */}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
