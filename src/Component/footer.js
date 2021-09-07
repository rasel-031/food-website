import "./footer.css";
function Footer() {
  return (
    <div className="footerBG">
      <div className="footer-container">
        <div className="footer">
          <h2>Locations</h2>
          <li>
            <a href="#bangladesh">Bangladesh</a>
          </li>
          <li>
            <a href="#india">India</a>
          </li>
          <li>
            <a href="#china">Chaina</a>
          </li>
          <li>
            <a href="#usa">USA</a>
          </li>
          <li>
            <a href="#france">France</a>
          </li>
          <li>
            <a href="#berlin">Berlin</a>
          </li>
        </div>
        <div className="footer">
          <h2>Quick Links</h2>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#dishes">Dishes</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#review">Review</a>
          </li>
          <li>
            <a href="#order">Order</a>
          </li>
        </div>
        <div className="footer">
          <h2>Contact Info</h2>
          <li>
            <a href="#phone1">+123-456-7890</a>
          </li>
          <li>
            <a href="#phone2">+111-222-3333</a>
          </li>
          <li>
            <a href="#gmail1">Shaikhanas@Gmail.Com</a>
          </li>
          <li>
            <a href="#gmail2">Anasbhai@Gmail.Com</a>
          </li>
          <li>
            <a href="#mumbai,india">Mumbai, India - 400104</a>
          </li>
          <li>
            <a href="#dhaka,bangladesh">Dhaka, Bangladesh - 817104</a>
          </li>
        </div>
        <div className="footer">
          <h2>Follow Us</h2>
          <li>
            <a href="#facebook">Facebook</a>
          </li>
          <li>
            <a href="#twitter">Twitter</a>
          </li>
          <li>
            <a href="#instagram">Instagram</a>
          </li>
          <li>
            <a href="#github">GitHub</a>
          </li>
          <li>
            <a href="#linkedin">Linkedin</a>
          </li>
          <li>
            <a href="#telegram">Telegram</a>
          </li>
        </div>
      </div>
      <br />
      <hr className="footer-container" />
      <div className="copyright">Copyright @ 2021</div>
    </div>
  );
}

export default Footer;
