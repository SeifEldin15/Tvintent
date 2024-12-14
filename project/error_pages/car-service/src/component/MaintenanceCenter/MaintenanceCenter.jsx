import React from "react";
import "../MaintenanceCenters/Index.css";
import { Link } from "react-router-dom";
export default function MaintenanceCenter({ item }) {
  return (
    <>
      <div className="col-md-5 col-sm-12 my-5 p-5 my-bg center">
        <Link style={{ color: "#003F66" }} to={"/mechanic-details/" + item.id}>
          <div className="mec">
            <img
              src="https://www.motorera.com/wp-content/uploads/2018/07/tools-every-mechanic-should-have.jpeg"
              style={{ width: 150, height: 150, objectFit: "cover" }}
              alt=""
            />
          </div>
          <div className="mec name">
            <h4>{item.name}</h4>
            <h6 className="location">
              <i className="fa-solid fa-location-dot"></i>
              <span>{item.address.street}</span>
            </h6>
            <h6>
              <i className="fa-solid fa-paper-plane"></i>
              <span>{item.email}</span>
            </h6>
            <h6>
              <i className="fa-solid fa-phone"></i>
              <span>{item.phone}</span>
            </h6>
          </div>
          <div className="clearfix"></div>
        </Link>
      </div>
    </>
  );
}
