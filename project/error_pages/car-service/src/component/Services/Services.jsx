import React from "react";
import bolt from "../../assets/images/noun-lightning-bolt-213646 1.png";
import wrench from "../../assets/images/noun-wrench-1004034 1.png";
import testimonial from "../../assets/images/noun-testimonial-6099042 1.png";
import hours from "../../assets/images/noun-24-hours-999341 1.png";
import money from "../../assets/images/noun-money-6679624 1.png";
import phone from "../../assets/images/noun-phone-373695 1.png";
export default function Services() {
  return (
    <div id="services" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="container services">
        <p style={{ color: "#555454", fontSize: "14px" }}>What We Offer</p>
        <h2
          style={{
            color: "#003F66",
            fontWeight: "700",
            padding: "0px 0px 10px 0px",
            fontSize: "32px",
          }}
        >
          Services
        </h2>
        <div className="row">
          <div className="col-md-4 col-ms-12 service-box">
            <div className="service">
              <div className="ico-back">
                <img className="ico-img" src={bolt} alt="bolt" />
              </div>
              <div>
                <h5
                  style={{
                    color: "#003F66",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Instant Assistance
                </h5>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#262626",
                    fontWeight: "500",
                  }}
                >
                  Get rapid response and <br />
                  immediate assistance for roadside <br />
                  emergencies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-ms-12 service-box">
            <div className="service">
              <div className="ico-back">
                <img className="ico-img" src={wrench} alt="wrench" />
              </div>
              <div>
                <h5
                  style={{
                    color: "#003F66",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Professional Support
                </h5>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#262626",
                    fontWeight: "500",
                  }}
                >
                  Access skilled professionals <br /> equipped to handle
                  mechanical <br />
                  issues or vehicle recovery.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-ms-12 service-box">
            <div className="service">
              <div className="ico-back">
                <img className="ico-img" src={testimonial} alt="testimonial" />
              </div>
              <div>
                <h5
                  style={{
                    color: "#003F66",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Customer Reviews
                </h5>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#262626",
                    fontWeight: "500",
                  }}
                >
                  Gain confidence from positive <br />
                  testimonials and reviews from <br />
                  satisfied customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-ms-12 service-box">
            <div className="service">
              <div className="ico-back">
                <img className="ico-img" src={hours} alt="hours" />
              </div>
              <div>
                <h5
                  style={{
                    color: "#003F66",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  24/7 Support
                </h5>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#262626",
                    fontWeight: "500",
                  }}
                >
                  Access round-the-clock customer <br /> support for assistance
                  anytime, <br />
                  anywhere.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-ms-12 service-box">
            <div className="service">
              <div className="ico-back">
                <img className="ico-img" src={money} alt="money" />
              </div>
              <div>
                <h5
                  style={{
                    color: "#003F66",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Transparent Pricing
                </h5>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#262626",
                    fontWeight: "500",
                  }}
                >
                  View transparent pricing <br /> information to make informed{" "}
                  <br /> decisions with no hidden costs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-ms-12 service-box">
            <div className="service">
              <div className="ico-back">
                <img className="ico-img" src={phone} alt="phone" />
              </div>
              <div>
                <h5
                  style={{
                    color: "#003F66",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Easy Contact
                </h5>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#262626",
                    fontWeight: "500",
                  }}
                >
                  Reach out to us easily through <br /> various contact options
                  for quick <br />
                  assistance or inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
