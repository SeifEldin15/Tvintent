import React from "react";
import { Link } from "react-router-dom";
import mechanic from "../../assets/images/mechanic.jpg";
import winch from "../../assets/images/winch.jpg";
export default function RequestService() {
  return (
    <div>
      <div id="requestservice" className="container request">
        <h3
          style={{
            color: "#003F66",
            fontWeight: "700",
            padding: "0px 0px 20px 0px",
            fontSize: "32px",
            textAlign: "center",
            paddingBottom: "40px",
          }}
        >
          Request a Service
        </h3>
        <div className="row">
          <div className="col-md-4 card">
            <Link to="winch" style={{ textDecoration: "none", color: "black" }}>
              <div className="card-img">
                <img src={winch} alt="winch" />
              </div>
              <h3 style={{ padding: "10px" }}>Request a Winch</h3>
            </Link>
          </div>
          <div className="col-md-4 card">
            <Link
              to="mechanic"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="card-img">
                <img src={mechanic} alt="mechanic" />
              </div>
              <h3 style={{ padding: "10px" }}>Request a Mechanic</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
