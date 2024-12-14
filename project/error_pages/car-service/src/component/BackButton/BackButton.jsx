import React from "react";
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <div className="container back-btn">
      <Link style={{ color: "black", paddingLeft: "1300px" }} to="/">
        <i className="fa-sharp fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );
}
