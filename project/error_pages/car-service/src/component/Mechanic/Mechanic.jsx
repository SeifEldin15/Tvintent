import React from "react";
import BackButton from "../BackButton/BackButton.jsx";
import MyLocationMechanic from "../MyLocationMechanic/MyLocationMechanic.jsx";
export default function Mechanic() {
  return (
    <>
      <div className="container">
        <BackButton></BackButton>
        <div className="request-page request-form">
          <MyLocationMechanic></MyLocationMechanic>
        </div>
      </div>
    </>
  );
}
