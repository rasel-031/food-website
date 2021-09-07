import Review from "./review";
import Review1 from "./review1";
import "./reviewer.css";
function Reviewer() {
  return (
    <div className="review-1">
      <h2>Customer's Review</h2>
      <h1>WHAT THEY SAY</h1>
      <div className="review">
        <Review />
        <Review1 />
      </div>
    </div>
  );
}

export default Reviewer;
