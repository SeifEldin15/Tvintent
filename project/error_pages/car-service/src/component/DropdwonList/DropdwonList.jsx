import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DropdownList() {
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState("");
  //get nieghbiurhood
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setOptions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //post nieghbiurhood
  function handlesubmit(event) {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", { output })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  const dropdownStyle = {
    margin: "10px",
    padding: "5px",
    fontSize: "16px",
    borderRadius: "5px",
    width: "150px",
    textAlign: "center",
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label htmlFor="dropdown">Choose your Nieghboorhood:</label>
        <select id="dropdown" style={dropdownStyle}>
          <option value="">-- Select --</option>
          {options.map((options) => (
            <option
              key={options.id}
              onChange={(e) => setOutput(e.target.value)}
            >
              {options.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
