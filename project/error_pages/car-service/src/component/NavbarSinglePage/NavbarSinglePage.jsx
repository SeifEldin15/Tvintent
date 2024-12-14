import React from "react";
import Home from "../Home/Home";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
export default function NabarSinglePage() {
  return (
    <>
      <div
        className="navbar navbar-expand-lg "
        style={{
          height: "70px",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: "999",
          backgroundColor: "white",
        }}
      >
        <div className="container">
          <HashLink className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="logo" />
            <ul className="car">
              <li className="saver"> car</li>
              <li className="saver">saver</li>
            </ul>
          </HashLink>
          <div className="clear-fix"></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <HashLink className="nav-link " aria-current="page" to="#home">
                  <span className="navfont">Home</span>
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  className="nav-link "
                  aria-current="page"
                  to="#services"
                >
                  <span className="navfont">Services</span>
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link " aria-current="page" to="#about">
                  <span className="navfont">About Us</span>
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  className="nav-link "
                  aria-current="page"
                  to="#requestservice"
                >
                  <span className="navfont">Request Service</span>
                </HashLink>
              </li>
            </ul>
            <ul className="btn-list ms-auto">
              <li>
                <button className="out-btn">
                  <Link
                    className="nav-link mx-3 icon-link icon-link-hover "
                    aria-current="page"
                    to="signup"
                  >
                    <span style={{ color: "white" }}>SignOut</span>
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Home></Home>
    </>
  );
}
