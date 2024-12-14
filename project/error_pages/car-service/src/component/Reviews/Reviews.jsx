import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Reviews() {
  let [review, setReview] = useState([]);

  async function getReview() {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    );
    setReview(data);
  }

  useEffect(() => {
    getReview();
  }, []);

  return (
    <>
      <div className="row mt-4">
        <div className="col-md-5 total-reviews mx-5">
          <div className="rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <h4 className="total">Total Rate</h4>
        </div>
        <div className="col-md-5 total-reviews mx-5">
          <div className="rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <h4 className="total">Rate of Mechanic</h4>
        </div>
        <hr />
        <div className="col-md-12 one-review ">
          <div className="rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>Total Rate</span>
          </div>
          <h6>very good</h6>
          <h6>20 dec 2024</h6>
        </div>
        <hr />
        <div className="col-md-12 one-review">
          <div className="rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>Total Rate</span>
          </div>
          <h6>excellent</h6>
          <h6>18 feb 2024</h6>
        </div>
        <hr />
        <div className="col-md-12 one-review">
          <div className="rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>Total Rate</span>
          </div>
          <h6>verrry good</h6>
          <h6>15 nov 2024</h6>
        </div>
      </div>
    </>
  );
}
