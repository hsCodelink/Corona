import React, { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import CheckUser from "../Authuntication/Checkuser";

const Layout = () => {
  let navigate = useNavigate();
  let isLoggedIn = CheckUser();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div className="container-scroller">
        <Header />
        <Sidebar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
