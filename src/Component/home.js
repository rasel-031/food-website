import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import homeData from "./homeData";

function Home() {
  const [current, setCurrent] = useState(0);
  const len = homeData.length;

  const nextSlide = () => {
    setCurrent(current === len - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? len - 1 : current - 1);
  };

  return (
    <div className="home-container">
      <div className="home-arrow-container">
        <button className="home-left-arrow-btn" onClick={prevSlide}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
      </div>
      <div className="home-img-container">
        {homeData.map((data, index) => {
          return (
            <>
              {index === current && (
                <>
                  <div className="home-title">
                    <h3>Our Spcial Dish</h3>
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                    <button>Order Now</button>
                  </div>
                  <div className="home-photo">
                    <img
                      src={data.photo}
                      alt={data.photo}
                      className="home-img"
                    />
                  </div>
                </>
              )}
            </>
          );
        })}
      </div>
      <div className="home-arrow-container">
        <button className="home-right-arrow-btn" onClick={nextSlide}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}

export default Home;
