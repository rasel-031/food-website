import {
  faDollarSign,
  faHeadset,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-title">
        <h2 style={{ color: "#27ae60" }}>About Us</h2>
        <h1>WHY CHOOSE US?</h1>
      </div>
      <div className="about-img-container">
        <div className="about-photo">
          <img src="../images/about-img.png" alt="" />
        </div>
        <div className="about-description">
          <h1>Best Food In The Country</h1>
          <p>
            Be mesmerized by an enchanting 14th-floor view of Kuala Lumpur's
            skyline, while relishing an extensive and exquisite French and
            Italian vegetarian fine dining menu. Share and savor classic moments
            with your loved ones as you embark on a joyful gastronomic adventure
            exclusively designed by the restaurant's Chef de Cuisine, Chef Val.
          </p>
          <div className="about-btn">
            <button>
              <FontAwesomeIcon icon={faTruck} className="icon-color" />
              &nbsp; &nbsp;Free Delivery
            </button>
            <button>
              <FontAwesomeIcon icon={faDollarSign} className="icon-color" />
              &nbsp; &nbsp;Easy Payments
            </button>
            <button>
              <FontAwesomeIcon icon={faHeadset} className="icon-color" />
              &nbsp; &nbsp;24/7 Service
            </button>
          </div>
          <button className="about-learn-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
