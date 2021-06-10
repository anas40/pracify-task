import './footer.css'
import logo from '../../assets/Group 225.png'
import fblogo from '../../assets/Group 99.png'
function Footer() {
  return (
    <footer>
      <div className="container container-box">
        <section className="footer-info">
          <div className="footer-logo-image-container"><img src={logo} alt="logo" /></div>
          <p className="bottom-line">Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor </p>
          <div className="bold copyright-message">© Copyright 2020 Nature</div>
        </section>
        <section className="footer-links">
          <h6 className="bold bottom-line">Information</h6>
          <div className="row">
            <div className="col-6">
              <div><a href="#">About us</a></div>
              <div><a href="#">Products</a></div>
              <div><a href="#">Contact us</a></div>
              <div><a href="#">Terms of Service</a></div>
            </div>
            <div className="col-6">
              <div><a href="#">About us</a></div>
              <div><a href="#">Products</a></div>
            </div>
          </div>
        </section>
        <section className="footer-social">
          <h6 className="bold bottom-line">Follow us</h6>
          <ul>
            <li><a href="/"><img src={fblogo} alt="facebook page link" /></a></li>
            <li><a href="/"><img src={fblogo} alt="facebook page link" /></a></li>
            <li><a href="/"><img src={fblogo} alt="facebook page link" /></a></li>
            <li><a href="/"><img src={fblogo} alt="facebook page link" /></a></li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
