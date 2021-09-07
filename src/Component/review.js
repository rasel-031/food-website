import reviewdata from "./reviewData";
import "./review.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
function Review() {
  var [count, setCount] = useState(0);

    useEffect(() => {
      var len = reviewdata.length;
      const tid = setInterval(() => {
        setCount(count <len ? count++ : 0);
      }, 2000);
      return () => {
        clearInterval(tid);
      };
    }, [count]);
  return (
    <div>
      {reviewdata.map((data, index) => {
        return (
          <div>
            {index === count && (
              <div className="review-carousel" key={data.id}>
                <div className="review-title">
                  <img src={data.photo} alt="" />
                  <div className="review-name">
                    <h3>{data.name}</h3>
                    <h4>{data.city}</h4>
                  </div>
                  <div className="review-logo">
                    <FontAwesomeIcon icon={faQuoteRight} />
                  </div>
                </div>
                <div className="review-about">
                  <p>{data.comment}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Review;
