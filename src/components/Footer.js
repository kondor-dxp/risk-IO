const Footer = () => {
    return (
      <footer id="footer" className="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>
                  Subscribe to our newsletter and receive the latest news about our
                  products and services!
                </p>
                <form
                  action="#"
                  method="post"
                  className="php-email-form"
                >
                  <div className="newsletter-form">
                    <input type="email" name="email" />
                    <input type="submit" defaultValue="Subscribe" />
                  </div>
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your subscription request has been sent. Thank you!
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="d-flex align-items-center">
                <span className="sitename">Risk-IO </span>
              </a>
              <div className="footer-contact pt-3">
                {/* <p>25 Vitosha blvd, fl. 2 1000</p>
                <p>Sofia - Bulgaria</p> */}
                <p>
                    powered by 
                </p>
                <p>
                <img src="img/zuluLogo.png" className="footer-logo"></img>
                </p>
                {/* <p className="mt-3">
                  <strong>Phone:</strong> <span>+39 348 798 8236</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@zuluconsultingroup.com</span>
                </p> */}
              </div>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right" /> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <a href="#">About us</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <a href="#">Services</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="#">Terms of service</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12">
              <h4>Follow Us</h4>
              <div className="social-links d-flex">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">powered by Zulu Consulting Ltd</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits"></div>
        </div>
      </footer>

    )
}
export default Footer