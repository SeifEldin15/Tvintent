import React from "react";
import error from "../../assets/images/error404.jpg";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="row d-flex align-items-center justify-content-center my-3">
      <div className="col-md-12" style={{ paddingLeft: "500px" }}>
        <img src={error} alt="NotFound" height={500} />
      </div>
      <div className="col-md-12" style={{ paddingLeft: "580px" }}>
        <Link style={{ textDecoration: "none" }}>
          <button
            className="in-btn"
            style={{ color: "white", backgroundColor: "#1b2e35" }}
          >
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}
