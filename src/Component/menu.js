import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./menu.css";
import {
  faCheckDouble,
  faCoins,
  faComment,
  faHeart,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import menudata from "./menuData";

function Menu() {
  
  return (
    <div className="menu-container">
      <div className="menu-title">
        <h2>Our Food Menu</h2>
        <h1>TODAY'S SPECIALITY</h1>
      </div>
      <div className="menu-cart-container">
        {menudata.map((cartData) => {
          return (
            <div className="menu-cart" key={cartData.id}>
              <div>
                <img src={cartData.photo} alt="" className="menu-cart-img" />
                <div className="menu-social">
                  <button className="menu-cart-heart-btn">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                  &nbsp;&nbsp;
                  <button className="menu-cart-heart-btn">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  &nbsp;&nbsp;
                  <button className="menu-cart-heart-btn">
                    <FontAwesomeIcon icon={faComment} />
                  </button>
                </div>
                <div className="menu-description">
                  <h1 style={{ color: "#192a56", fontSize: "4.3vh" }}>
                    {cartData.name}&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faCheckDouble} />
                  </h1>
                  <p>{cartData.description}</p>
                </div>
                <div className="menu-amount">
                  <button>Add To Cart</button>&nbsp;&nbsp;&nbsp;
                  <span>
                    <FontAwesomeIcon icon={faCoins} />
                    &nbsp;{cartData.amount}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Menu;
