import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Style.css";
import Reviews from "../Reviews/Reviews";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
export default function MechanicDetails() {
  const [mcenter, setMCenter] = useState({});
  const [loading, setLoading] = useState(true);
  let x = useParams();
  console.log(x);

  async function getMCenterFromApi() {
    let { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${x.id}`
    );
    setMCenter(data);
    setLoading(false);
  }

  useEffect(() => {
    getMCenterFromApi();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Link
        style={{
          color: "black",
          paddingLeft: "1420px",
        }}
        to="/maintenance"
      >
        <i className="fa-sharp fa-solid fa-arrow-right"></i>
      </Link>
      <div className="container my-5">
        <div className="row p-5 mechanic-details-page ">
          <div className="col-md-5 image">
            <img
              src="https://www.motorera.com/wp-content/uploads/2018/07/tools-every-mechanic-should-have.jpeg"
              style={{}}
              className="w-100"
              alt=""
            />
          </div>
          <div className="col-md-7 my-3  ">
            <h2 style={{ color: "#003F66" }}>{mcenter.name}</h2>
            <h5>
              <i className="fa-solid fa-paper-plane"></i>
              {mcenter.email}
            </h5>
            <h5>
              <i className="fa-solid fa-phone"></i>
              {mcenter.phone}
            </h5>
            <h5>
              {mcenter.address && (
                <div className="address">
                  <p>Street: {mcenter.address.street}</p>
                  <p>Suite: {mcenter.address.suite}</p>
                  <p>City: {mcenter.address.city}</p>
                  <p>Zipcode: {mcenter.address.zipcode}</p>
                </div>
              )}
            </h5>
            <Link to="">
              <button
                className="in-btn next"
                style={{ marginLeft: "20PX", width: "200px" }}
              >
                Rate Me
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Reviews />
        </div>
      </div>
    </>
  );
}
