import React from "react";
import BackButton from "../BackButton/BackButton.jsx";
import MyLocation from "../MyLocation/MyLoction.jsx";
import { useFormik } from "formik";
export default function Winch() {
  let request = useFormik({
    initialValues: {
      destination: "",
      phone: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div className="container request-page">
        <BackButton></BackButton>
        <MyLocation></MyLocation>
      </div>
    </>
  );
}
