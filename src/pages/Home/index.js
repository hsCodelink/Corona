import React, { useState } from "react";
import User from "../User";

const Home = () => {
  
  return (
    <>
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <User/>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
