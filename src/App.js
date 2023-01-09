import "./App.css";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Login from "./Components/Authuntication/login";
import Register from "./Components/Authuntication/register";
import User from "./pages/User";
import Add from "./pages/User/Add";
import Todo from "./pages/TodoList";
import Form from "./pages/Form";

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
          <Route path="/addUser" element={<Add/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/form" element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
