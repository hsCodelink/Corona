import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import CheckUser from "./Checkuser";
import Register from "./register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passswordError, setPasswordError] = useState(null);
  const [validError, setValidError] = useState(null);

  let navigate = useNavigate();

  const login = () => {
    setValidError(null);
    setPasswordError(null);
    setEmailError(null);

    const logInEmail = localStorage.getItem("email");
    const logInPassword = localStorage.getItem("password");

    if (email == "" && password == "") {
      setValidError("Please Enter Your Email and Password");
    } else if (email !== logInEmail) {
      setEmailError("*Invelid Email*");
    } else if (password !== logInPassword) {
      setPasswordError("*Invelid Password*");
    } else if (email === logInEmail && password === logInPassword) {
      console.log([email, password]);
      navigate("/", { replace: true });
    }

  };

  useEffect(() => {
    const isLoggedIn = CheckUser();
    if (isLoggedIn) {
      // navigate("/");
      
    }
  }, []);

  return (
    <div>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="row w-100 m-0">
            <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
              <div className="card col-lg-4 mx-auto">
                <div className="card-body px-5 py-5">
                  <h3 className="card-title text-left mb-3">Login</h3>
                  {validError && (
                    <p className="text-center text-danger">{validError}</p>
                  )}
                  <form>
                    <div className="form-group">
                      <label>Username or email *</label>
                      <input
                        type="email"
                        className="form-control p_input"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    {emailError && (
                      <p className="text-center text-danger">{emailError}</p>
                    )}

                    <div className="form-group">
                      <label>Password *</label>
                      <input
                        type="text"
                        className="form-control p_input"
                        value={password}
                        required
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    {passswordError && (
                      <p className="text-center text-danger">
                        {passswordError}
                      </p>
                    )}
                    <div className="form-group d-flex align-items-center justify-content-between">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />{" "}
                          Remember me{" "}
                        </label>
                      </div>
                      <a href="#" className="forgot-pass">
                        Forgot password
                      </a>
                    </div>
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-primary btn-block enter-btn"
                        onClick={login}
                      >
                        Login
                      </button>
                    </div>
                    <div className="d-flex">
                      <button className="btn btn-facebook me-2 col">
                        <i className="mdi mdi-facebook" /> Facebook{" "}
                      </button>
                      <button className="btn btn-google col">
                        <i className="mdi mdi-google-plus" /> Google plus{" "}
                      </button>
                    </div>
                    <p className="sign-up">
                      Don't have an Account?<Link to="/register"> Sign Up</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            {/* content-wrapper ends */}
          </div>
          {/* row ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>
    </div>
  );
};

export default Login;
