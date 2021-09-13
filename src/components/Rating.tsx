import React from "react";
import { useState } from "react";

interface IRatingProps {
  rating: number;
}

export const Rating = ({ rating }: IRatingProps) => {
  const [state, setState] = useState({
    rating: rating,
    tempRating: 0,
  });

  const handleMouseover = (rating: number) => {
    setState((prev) => ({
      rating: rating,
      tempRating: prev.rating,
    }));
  };
  const handleMouseout = () => {
    setState((prev) => ({
      ...prev,
      rating: prev.tempRating,
    }));
  };

  const rate = (rating: number) => {
    setState((prev) => ({
      rating,
      tempRating: rating,
    }));
  };

  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 10; i++) {
      console.log("i", i);
      let klass = "ion-ios-star-outline";
      if (state.rating >= i && state.rating !== null) {
        klass = "ion-ios-star";
      }
      stars.push(
        <i
          style={{
            display: "inline-block",
            width: "7px",
            overflow: "hidden",
            direction: i % 2 === 0 ? "ltr" : "rtl",
          }}
          className={klass}
          onMouseOver={() => handleMouseover(i)}
          onClick={() => rate(i)}
          onMouseOut={() => handleMouseout()}
        />
      );
    }

    return stars;
  };

  return <div className="rating">{renderStars()}</div>;
};
