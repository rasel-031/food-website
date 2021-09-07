import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dishes.css";
import {
  faCoins,
  faEye,
  faHeart,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

import dishesdata from "./dishesData";

function Dishes() {
  return (
    <div className="dishes-container">
      <div className="dishes-title">
        <h2>Our Dishes</h2>
        <h1>POPULAR DISHES</h1>
      </div>
      <div className="dishes-cart-container">
        {dishesdata.map((cartData) => {
          return (
            <div className="dishes-cart" key={cartData.id}>
              <div className="dishes-logo">
                <button className="cart-heart-btn">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button className="cart-eye-btn">
                  <FontAwesomeIcon icon={faEye} />
                </button>
              </div>
              <img src={cartData.photo} alt="" className="cart-img" />
              <h1>{cartData.name}</h1>
              <div className="cart-rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <div className="cart-price">
                <span>
                  <FontAwesomeIcon icon={faCoins} />
                  &nbsp;{cartData.amount}
                </span>
                <button>Add To Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Dishes;
