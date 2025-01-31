const HeroSection = () => {
    return (
        <section id="hero" className="hero section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
              <h1>Simplify Risk Assessment</h1>
              <p>Risk-IO was created to simplify the risk assessment process without compromising standards of quality and thoroughness. The application fulfils the entire risk manamente process in a single platform.</p>
              <div className="d-flex">
                <a href="#about" className="btn-get-started">Get Started</a>
                <a href="video/video.mp4" target="_blank" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay={100}>
              <img src="img/2. box (hero img).png" className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
    )
}
export default HeroSection