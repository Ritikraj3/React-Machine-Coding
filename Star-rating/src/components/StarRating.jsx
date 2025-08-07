import React, { useState } from "react";

const StarRating = ({ starCount = 5 }) => {
  const [rating, setRating] = useState();
  const [hover, setHover] = useState(0);
  //   console.log(hover);
  return (
    <div className="container">
      {new Array(starCount).fill("0").map((value, index) => (
        <span
          className={
            (hover == 0 && index < rating) || index < hover ? "gold" : ""
          }
          onClick={() => setRating(index + 1)}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(0)}
          key={index}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
