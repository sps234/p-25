import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
    console.log(getCurrentIndex);
  }

  function handleMouseLeave(getCurrentIndex) {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  }

  function handleMouseMove(getCurrentIndex) {
    console.log(getCurrentIndex);
    setHover(rating);
  }

  return (
    <>
      <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
          return (
            <FaStar
              key={index}
              size={64}
              className={index <= (hover || rating) ? "active" : "inactve"}
              onClick={() => handleClick(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onMouseMove={() => handleMouseMove(index)}
            />
          );
        })}
      </div>
    </>
  );
}

export default StarRating;
