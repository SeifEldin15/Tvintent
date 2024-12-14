import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar.jsx";
export default function UserLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
