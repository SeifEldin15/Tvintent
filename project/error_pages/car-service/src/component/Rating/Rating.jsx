import axios from "axios";
import "./style.css";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Rating() {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);
  const [data, setData] = useState("");

  function handlesubmit(event) {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", { data })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return "Evaluate";
      case 1:
        return "Dissatifation";
      case 2:
        return "Unsatisfied";
      case 3:
        return "Normal";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "Evaluate";
    }
  };

  const handlePlaceHolder = () => {
    switch (number || hoverStar) {
      case 0:
        return "Comment here...";
      case 1:
      case 2:
      case 3:
      case 4:
        return "What is your problem?";
      case 5:
        return "Why do you like the service?";
      default:
        return "Comment here...";
    }
  };
  return (
    <div className="rate">
      <div className="popup">
        <div className="content">
          <div className="product">
            <img
              style={{ width: 100, height: 100, objectFit: "cover" }}
              src="https://performanceautospecialists.com/wp-content/uploads/2019/05/46212975_m.jpg"
              alt="name"
            />
            <h1>Our Service</h1>
          </div>
          <div>
            <h1>{handleText()}</h1>
            {Array(5)
              .fill()
              .map((_, index) =>
                number >= index + 1 || hoverStar >= index + 1 ? (
                  <AiFillStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                ) : (
                  <AiOutlineStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                )
              )}
          </div>
          <form onSubmit={handlesubmit}>
            <textarea
              placeholder={handlePlaceHolder()}
              onChangeonChange={(e) => setData(e.target.value)}
            />
            <button
              className={`btn my-btn ${!number && "disabled"} `}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
