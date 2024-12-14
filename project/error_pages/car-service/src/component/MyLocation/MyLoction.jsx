// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import axios from "axios";
// import BasicMap from "../../leaflet/BasicMap";
// import { Link } from "react-router-dom";
// import DropdownList from "../DropdwonList/DropdwonList";
// function MyLocation() {
//   const [position, setPosition] = useState({ latitude: "", longitude: "" });
//   useEffect(() => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         setPosition({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       });
//     } else {
//       console.log("Geolocation is not available in your browser.");
//     }
//   }, []);
//   useEffect(() => {
//     request.setValues({
//       ...request.values,
//       position: `${position.latitude}, ${position.longitude}`,
//     });
//   }, [position]);

//   // let request = useFormik({
//   //   initialValues: {
//   //     position: `${position.latitude}, ${position.longitude}`,
//   //     destination: "",
//   //     phone: "",
//   //   },
//   //   onSubmit: (values) => {
//   //     console.log(values);
//   //   },
//   // });
//   let request = useFormik({
//     initialValues: {
//       position: `${position.latitude}, ${position.longitude}`,
//       destination: "",
//       phone: "",
//     },
//     onSubmit: async (values) => {
//       try {
//         // Make an HTTP POST request to the backend endpoint
//         await axios.post("https://fakestoreapi.com/users", {
//           position: values.position,
//           destination: values.destination,
//           phone: values.phone,
//         });

//         // Handle successful submission
//         console.log("Location submitted successfully!");
//       } catch (error) {
//         // Handle error
//         console.error("Error submitting location:", error);
//       }
//     },
//   });

//   return (
//     <div className="container row">
//       <div className="col-md-6 map">
//         <BasicMap position={position}></BasicMap>
//       </div>
//       <div className="col-md-6 request-form">
//         <h4
//           style={{
//             color: "#003F66",
//             paddingBottom: "40px",
//           }}
//         >
//           Get Moving with Ease: Request a Winch Now!
//         </h4>
//         <form className="mylocation" onSubmit={request.handleSubmit}>
//           <input
//             type="text"
//             id="position"
//             name="position"
//             required
//             placeholder="Current Location"
//             value={request.values.position}
//           />
//           <input
//             type="text"
//             id="destination"
//             name="destination"
//             required
//             placeholder="Destination"
//           />
//           <br></br>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             pattern="^01[0-2]\d{1,8}$"
//             required
//             placeholder="Your Phone"
//           />
//           <DropdownList></DropdownList>
//           {/* <br /> */}
//           <br />
//           <br />
//           <button
//             type="submit"
//             className="out-btn next"
//             onClick={request.handleChange}
//           >
//             <Link
//               to="/winchcost"
//               style={{ textDecoration: "none", color: "white" }}
//             >
//               Next
//             </Link>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default MyLocation;

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import BasicMap from "../../leaflet/BasicMap";
import { useNavigate } from "react-router-dom";
import DropdownList from "../DropdwonList/DropdwonList";

function MyLocation() {
  const [position, setPosition] = useState({ latitude: "", longitude: "" });
  const [submitted, setSubmitted] = useState(false); // State to track submission
  const navigate = useNavigate();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);
  useEffect(() => {
    request.setValues({
      ...request.values,
      position: `${position.latitude}, ${position.longitude}`,
    });
  }, [position]);

  let request = useFormik({
    initialValues: {
      position: `${position.latitude}, ${position.longitude}`,
      destination: "",
      phone: "",
    },
    onSubmit: async (values) => {
      try {
        // Make an HTTP POST request to the backend endpoint
        await axios.post("https://fakestoreapi.com/users", {
          position: values.position,
          destination: values.destination,
          phone: values.phone,
        });

        // Handle successful submission
        console.log("Location submitted successfully!");
        setSubmitted(true); // Set submitted to true upon successful submission
      } catch (error) {
        // Handle error
        console.error("Error submitting location:", error);
      }
    },
  });

  if (submitted) {
    // Redirect to Winch component if data has been successfully submitted
    navigate("/winchcost");
  }

  return (
    <div className="container row">
      <div className="col-md-6 map">
        <BasicMap position={position}></BasicMap>
      </div>
      <div className="col-md-6 request-form">
        <h4
          style={{
            color: "#003F66",
            paddingBottom: "40px",
          }}
        >
          Get Moving with Ease: Request a Winch Now!
        </h4>
        <form className="mylocation" onSubmit={request.handleSubmit}>
          <input
            type="text"
            id="position"
            name="position"
            required
            placeholder="Current Location"
            value={request.values.position}
          />
          <input
            type="text"
            id="destination"
            name="destination"
            required
            placeholder="Destination"
          />
          <br></br>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="^01[0-2]\d{1,8}$"
            required
            placeholder="Your Phone"
          />
          <DropdownList></DropdownList>
          {/* <br /> */}
          <br />
          <br />
          <button type="submit" className="out-btn next">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default MyLocation;
