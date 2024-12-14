import React from "react";
import { Link } from "react-router-dom";
export default function NextButton() {
  return (
    <div>
      <button type="submit" className="out-btn next">
        <Link to="" style={{ textDecoration: "none", color: "white" }}>
          Next
        </Link>
      </button>
    </div>
  );
}
