import React from "react";
import winch from "../../assets/images/yellow-winch.png";
import Services from "../Services/Services";
import About from "../About/About";
import RequestService from "../RequestService/RequestService.jsx";
import DropdwonList from "../DropdwonList/DropdwonList.jsx";
// import BasicMap from "../../leaflet/BasicMap";
export default function Home() {
  return (
    <>
      <div id="home" className="container home">
        <div className="caption">
          <p style={{ color: "#003F66", fontSize: "14px" }}>
            Your Lifeline on the Road.
          </p>
          <h1 style={{ color: "#003F66", fontWeight: "700" }}>
            Instant Assistance for Accident <br />
            Vehicles
          </h1>
          <p style={{ color: "#555454", fontSize: "14px" }}>
            Welcome to Car Saver. We provide immediate assistance for road
            emergencies.
            <br /> Our team dispatches trained professionals and powerful
            winches to your location.
          </p>
        </div>
        <div className="caption-img">
          <div className="winch-circle"></div>
          <div>
            <img className="yellow-winch-img" src={winch} alt="winch" />
          </div>
        </div>
        <div className="clear-fix"></div>
      </div>
      <Services></Services>
      <About></About>
      <RequestService></RequestService>
      {/* <BasicMap></BasicMap> */}
    </>
  );
}
