// import React from "react";
// import logo from "../../assets/images/logo.png";
// import { Link, NavLink } from "react-router-dom";
// export default function Navbar() {
//   return (
//     <>
//       <div
//         className="navbar navbar-expand-lg "
//         style={{
//           height: "70px",
//           position: "fixed",
//           top: "0",
//           left: "0",
//           width: "100%",
//           zIndex: "999",
//           backgroundColor: "white",
//         }}
//       >
//         <div className="container">
//           <NavLink className="navbar-brand" to="/">
//             <img className="logo" src={logo} alt="logo" />
//             <ul className="car">
//               <li className="saver"> car</li>
//               <li className="saver">saver</li>
//             </ul>
//           </NavLink>
//           <div className="clear-fix"></div>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavDropdown">
//             <ul className="navbar-nav ms-auto ">
//               <li className="nav-item">
//                 <NavLink className="nav-link " aria-current="page" to="/">
//                   <span className="navfont">Home</span>
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className="nav-link "
//                   aria-current="page"
//                   to="services"
//                 >
//                   <span className="navfont">Services</span>
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link " aria-current="page" to="about">
//                   <span className="navfont">About Us</span>
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link " aria-current="page" to="contact">
//                   <span className="navfont">Contact Us</span>
//                 </NavLink>
//               </li>
//             </ul>
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <button className="out-btn">
//                   <Link
//                     className="nav-link mx-3 icon-link icon-link-hover "
//                     aria-current="page"
//                     to="Login"
//                   >
//                     <span style={{ color: "white" }}>SignOut</span>
//                   </Link>
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
