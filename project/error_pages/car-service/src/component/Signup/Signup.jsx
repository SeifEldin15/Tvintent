import React, { useState } from "react";
import { useFormik } from "formik";
import logo from "../../assets/images/logo.png";
import RegisterNav from "../RegisterNav/RegisterNav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
export default function Signup() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState("");

  function sendDataToApi(values) {
    setLoading(false);
    axios
      .post("https://fakestoreapi.com/users", values)
      .then(({ data }) => {
        console.log(data);
        if (data.message === "success") {
          navigate("/login");
        }
      })
      .catch((err) => {
        setErrMessage(err.response.data.message);
        setLoading(true);
      });
  }
  function validationSchema() {
    let schema = new Yup.object({
      name: Yup.string().min(3).max(20).required(),
      email: Yup.string().email().required(),
      password: Yup.string()
        .matches(/^[A-Z][a-zA-Z0-9@]{6,}$/)
        .required(),
    });
    return schema;
  }
  let register = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      //send to api
      sendDataToApi(values);
    },
  });
  return (
    <div className="container-fluid login-page">
      <div className="m-auto">
        <form onSubmit={register.handleSubmit} className="form-style">
          <div className="row">
            <div className="col-md-4 login">
              <div className="login-logo">
                <img className="logo" src={logo} alt="logo" />
                <h4
                  className="logo"
                  style={{
                    fontSize: "21px",
                    paddingTop: "22px",
                    paddingLeft: "8px",
                    color: "white",
                  }}
                >
                  CarSaver
                </h4>
              </div>
              <div className="content">
                <RegisterNav></RegisterNav>
                <br />
                <br />
                <input
                  onChange={register.handleChange}
                  className="input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  onBlur={register.handleBlur}
                />
                {register.errors.name && register.touched.name ? (
                  <div
                    style={{
                      color: "white",
                      paddingBottom: "2px",
                      marginTop: "-9px",
                      textAlign: "left",
                      marginLeft: "90px",
                    }}
                  >
                    {register.errors.name}
                  </div>
                ) : (
                  ""
                )}

                <input
                  onChange={register.handleChange}
                  className="input"
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="^01[0-2]\d{1,8}$"
                  placeholder="Your Phone"
                  onBlur={register.handleBlur}
                />
                {register.errors.phone && register.touched.phone ? (
                  <div
                    style={{
                      color: "white",
                      paddingBottom: "2px",
                      marginTop: "-9px",
                      textAlign: "left",
                      marginLeft: "90px",
                    }}
                  >
                    {register.errors.phone}
                  </div>
                ) : (
                  ""
                )}

                <input
                  onChange={register.handleChange}
                  className="input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  onBlur={register.handleBlur}
                />
                {register.errors.email && register.touched.email ? (
                  <div
                    style={{
                      color: "white",
                      paddingBottom: "2px",
                      marginTop: "-9px",
                      textAlign: "left",
                      marginLeft: "90px",
                    }}
                  >
                    {register.errors.email}
                  </div>
                ) : (
                  ""
                )}

                <input
                  onChange={register.handleChange}
                  className="input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your Password"
                  onBlur={register.handleBlur}
                />
                {register.errors.password && register.touched.password ? (
                  <div
                    style={{
                      color: "white",
                      marginTop: "-9px",
                      textAlign: "left",
                      marginLeft: "90px",
                    }}
                  >
                    {register.errors.password}
                  </div>
                ) : (
                  ""
                )}
              </div>
              {errMessage ? (
                <div className="alert" style={{ color: "white" }}>
                  {errMessage}
                </div>
              ) : (
                ""
              )}
              <br />
              <button type="submit" className="in-btn">
                {loading ? (
                  "Sign Up"
                ) : (
                  <i className="fa fa-spinner fa-spin"></i>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
