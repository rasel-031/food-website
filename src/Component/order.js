import "./order.css";

function Order() {
  return (
    <div className="order-container">
      <div className="order-title">
        <h2>Order Now</h2>
        <h1>FREE AND FAST</h1>
      </div>
      <div className="order-cart-container">
        <form className="order-form">
          <label htmlFor="">Your Name</label>
          <br />
          <input type="text" placeholder="Enter your name" />
          <br />
          <label htmlFor="">Your Phone</label>
          <br />
          <input type="text" placeholder="Enter your phone number" />
          <br />
          <label htmlFor="">Your Email</label>
          <br />
          <input type="text" placeholder="Enter your email" />
          <br />
          <label htmlFor="">Your Address</label>
          <br />
          <textarea placeholder="Enter your address" />
          <br />
        </form>
        <form className="order-form">
          <label htmlFor="">Your Order</label>
          <br />
          <input type="text" placeholder="Enter your order name" />
          <br />
          <label htmlFor="">How Much?</label>
          <br />
          <input type="text" placeholder="Enter your quantity" />
          <br />
          <label htmlFor="">Date & Time</label>
          <br />
          <input type="text" placeholder="Enter your date & time" />
          <br />
          <label htmlFor="">Your Message</label>
          <br />
          <textarea placeholder="Message us" />
          <br />
        </form>
        <button className="order-now-btn">Order Now</button>
      </div>
    </div>
  );
}
export default Order;
