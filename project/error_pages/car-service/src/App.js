import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup.jsx";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout.jsx";
import { Offline } from "react-detect-offline";
import NavbarSinglePage from "./component/NavbarSinglePage/NavbarSinglePage.jsx";
import Winch from "./component/Winch/Winch.jsx";
import Mechanic from "./component/Mechanic/Mechanic.jsx";
import MaintenanceCenters from "./component/MaintenanceCenters/MaintenanceCenters.jsx";
import MechanicDetails from "./component/MechanicDetails/MechanicDetails.jsx";
// import Rating from "./component/Rating/Rating.jsx";
import NotFound from "./component/NotFound/NotFound.jsx";
import WinchCost from "./component/WinchCost/WinchCost.jsx";
function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <NavbarSinglePage />,
      children: [
        {
          index: true,
          element: <NavbarSinglePage />,
        },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "signup",
          element: <Signup></Signup>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "winch/",
          element: <Winch></Winch>,
        },
        {
          path: "mechanic/",
          element: <Mechanic></Mechanic>,
        },
        {
          path: "maintenance",
          element: <MaintenanceCenters></MaintenanceCenters>,
        },
        {
          path: "mechanic-details/:id",
          element: <MechanicDetails></MechanicDetails>,
        },
        { path: "*", element: <NotFound /> },
        {
          path: "winchcost",
          element: <WinchCost></WinchCost>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      <Offline>
        <div className="offline">You're currently Offline!</div>
      </Offline>
    </>
  );
}

export default App;
