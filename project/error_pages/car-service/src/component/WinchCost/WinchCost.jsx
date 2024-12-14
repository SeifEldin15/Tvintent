// import React from "react";
// import { Link } from "react-router-dom";
// import BackButton from "../BackButton/BackButton.jsx";
// export default function WinchCost() {
//   return (
//     <>
//       <BackButton></BackButton>
//       <div className="container">
//         <div className="Cost p-5">
//           <h4>Choose Winch Type</h4>
//           <h6>
//             Choosing the type of winch depends on the type of car that needs to
//             be transported.
//           </h6>
//           <div className="winch-type">
//             <h5>A regular winch.</h5>
//             <h5>Cost :</h5>
//           </div>
//           <div className="winch-type">
//             <h5>An European winch.</h5>
//             <h5>Cost :</h5>
//           </div>
//           <Link to="" style={{ textDecoration: "none", color: "white" }}>
//             <button type="submit" className="out-btn next">
//               Verify Request
//             </button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function WinchCost() {
  const [selectedWinch, setSelectedWinch] = useState(null); // State to track selected winch type
  const navigate = useNavigate();
  const handleWinchSelection = (winchType) => {
    setSelectedWinch(winchType);
  };

  const handleSubmit = () => {
    // Send selected winch type to backend
    console.log("Selected winch:", selectedWinch);

    axios
      .post("https://fakestoreapi.com/users", { winchType: selectedWinch })
      .then((res) => {
        if (res) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Link style={{ color: "black", paddingLeft: "1400px" }} to="/winch">
        <i className="fa-sharp fa-solid fa-arrow-right"></i>
      </Link>
      <div className="container">
        <div className="Cost p-5">
          <h4>Choose Winch Type</h4>
          <h6>
            Choosing the type of winch depends on the type of car that needs to
            be transported.
          </h6>
          <div
            className={`winch-type ${
              selectedWinch === "regular" ? "selected" : ""
            }`}
            onClick={() => handleWinchSelection("regular")}
          >
            <h5>A regular winch.</h5>
            <h5>Cost :</h5>
          </div>
          <div
            className={`winch-type ${
              selectedWinch === "european" ? "selected" : ""
            }`}
            onClick={() => handleWinchSelection("european")}
          >
            <h5>An European winch.</h5>
            <h5>Cost :</h5>
          </div>
          <Link
            to=""
            style={{ textDecoration: "none", color: "white" }}
            onClick={handleSubmit}
          >
            <button type="button" className="out-btn next">
              Verify Request
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
