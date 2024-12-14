import React from "react";
import bluecar from "../../assets/images/winch.png";
import phone from "../../assets/images/phone.png";
export default function About() {
  return (
    <>
      <div id="about" className="container about">
        <div className="about-heading">
          <p
            style={{
              color: "#555454",
              fontSize: "13px",
              padding: "5px 0px 0px 0px",
              marginBottom: "1px",
            }}
          >
            Get to Know Car Saver
          </p>
          <h3
            style={{
              color: "#003F66",
              fontWeight: "700",
              padding: "0px 0px 20px 0px",
              fontSize: "32px",
            }}
          >
            About Us
          </h3>
        </div>
        <div className=" d-flex justify-content-between section">
          <div className="topic" style={{ marginLeft: "0px" }}>
            <h3 className="about-question">
              What is <span className="logo-span">Car Saver</span> all about?
            </h3>
            <div className="blue-bar"></div>
            <p className="about-paragraph">
              At Car Saver, we're your dedicated partner <br />
              on the road to safety and reliability. We <br />
              provide prompt and professional assistance <br />
              for all your roadside needs, from mechanical <br />
              assistance to vehicle recovery.
            </p>
          </div>
          <div className="about-img img1">
            <img src={phone} alt="car-saver" />
          </div>
        </div>
        <div className=" d-flex justify-content-between section">
          <div className="about-img">
            <img src={bluecar} alt="winch" />
          </div>

          <div className="topic" style={{ marginRight: "100px" }}>
            <h3 className="about-question">
              What services does <span className="logo-span">Car Saver</span>
              offer?
            </h3>
            <div className="blue-bar"></div>
            <p className="about-paragraph">
              We offer a range of services, including <br />
              mechanical assistance for breakdowns,
              <br />
              winching for vehicle recovery, and more.
              <br />
              Whatever your roadside emergency, we're
              <br />
              here to provide timely and effective solutions
              <br />
              tailored to your specific needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
