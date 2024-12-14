import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
export default function AuthLayout() {
  return (
    <>
      <div className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div
            className="navbar-brand"
            // to="login"
            style={{ paddingLeft: "80px" }}
          >
            <img className="logo" src={logo} alt="logo" />
            <ul className="car">
              <li className="saver"> car</li>
              <li className="saver">saver</li>
            </ul>
          </div>
        </div>
        <div className="clear-fix"></div>
      </div>
      <Outlet />
    </>
  );
}
