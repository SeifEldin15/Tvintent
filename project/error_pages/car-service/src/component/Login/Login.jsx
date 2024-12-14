import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import RegisterNav from "../RegisterNav/RegisterNav";
export default function Login() {
  let login = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container-fluid login-page">
      <div className="m-auto">
        <form onSubmit={login.handleSubmit} className="form-style">
          <div className="row">
            <div className="col-md-4 login">
              <div className="login-logo">
                <img className="logo" src={logo} alt="logo" />
                <h4
                  className="logo"
                  style={{
                    fontSize: "21px",
                    paddingTop: "22px",
                    paddingLeft: "8px",
                    color: "white",
                  }}
                >
                  CarSaver
                </h4>
              </div>
              <div className="content">
                <RegisterNav></RegisterNav>
                <br />
                <br />
                <br />
                <input
                  onChange={login.handleChange}
                  className="input"
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email"
                />
                <input
                  onChange={login.handleChange}
                  className="input"
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Your Password"
                />
              </div>
              <br />
              <div className="check">
                <input type="checkbox" />
                <span className="checkmark"></span>{" "}
                <p
                  style={{
                    color: "white",
                    display: "inline-block",
                    marginLeft: "5px",
                  }}
                >
                  stay signed in
                </p>
                <br />
              </div>
              <button type="submit" className="in-btn">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "white" }}
                  className=""
                >
                  Sign In
                </Link>
              </button>
              <br />
              <Link
                to=""
                style={{
                  color: "#5e5e5e",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
