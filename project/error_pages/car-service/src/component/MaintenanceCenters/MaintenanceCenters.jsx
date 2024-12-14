import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Index.css";
import MaintenanceCenter from "../MaintenanceCenter/MaintenanceCenter";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
export default function MaintenanceCenters() {
  const [mechanic, getMechanic] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getMechanicFromApi() {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
    getMechanic(data);
    setLoading(false);
  }

  useEffect(() => {
    getMechanicFromApi();
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
        to="/mechanic"
      >
        <i className="fa-sharp fa-solid fa-arrow-right"></i>
      </Link>
      <div className="container-fluid">
        <div className="row">
          {mechanic.map((item) => {
            return <MaintenanceCenter item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
}
