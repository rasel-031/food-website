import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faSearch,
  faHeart,
  faCartPlus,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div>
      <nav className="App-nav">
        <div className="nav-logo">
          <FontAwesomeIcon icon={faUtensils} className="nav-icon" />
          <h1>Resto.</h1>
        </div>
        <div className="nav-links">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#dishes">Dishes</a>
          <a href="#menu">Menu</a>
          <a href="#reviewer">Review</a>
          <a href="#order">Order</a>
        </div>
        <div className="nav-social">
          <button className="nav-social-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button className="nav-social-btn">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="nav-social-btn">
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
          <button
            className="responsive-btn"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <FontAwesomeIcon icon={faBars} style={{ fontSize: "3vh" }} />
          </button>
        </div>
      </nav>
      <div className={mobileMenu ? "mobile-link" : "display:none"}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#dishes">Dishes</a>
        <a href="#menu">Menu</a>
        <a href="#reviewer">Review</a>
        <a href="#order">Order</a>
      </div>
    </div>
  );
}
export default Navbar;
