const AboutSection = () => {
  return (
    <>
    <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 position-relative align-self-start text-center" data-aos="fade-up" data-aos-delay={100}>
              <img src="img/aboutLeft.png" className="img-fluid about-image" alt="" />
            </div>
            <div className="col-lg-6 content align-self-center" data-aos="fade-up" data-aos-delay={200}>
              <h3>Identify and Mitigate Risks with Ease</h3>
              <p className="fst-italic">
              Risk-IO allows for easy identification of potential risks that could impact your organization. With comprehensive analysis and evaluation tools, you can develop effective mitigation plans.
              </p>
              <ul>
                <li><i className="bi bi-check2-all" /> <span><b>Risk Identification:</b> efficiently identify and assess potential risks that could impact your organization.</span></li>
                <li><i className="bi bi-check2-all" /> <span><b>Risk Analysis:</b> analyze and evaluate risks to develop effective mitigation strategies.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    <section id="aboutRight" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 content align-self-center float-left" data-aos="fade-up" data-aos-delay={200}>
              <h3>Real-time Risk Analysis</h3>
              <p className="fst-italic">
              Risk-IO delivers a comprehensive assessment of potential risks, empowering you to make informed decisions. With real-time risk determination, assessment, and management for your assets and processes, our solutions keep you ahead of emerging threats and enables proactive mitigation of potential issues.
              </p>
              <ul>
                <li><i className="bi bi-check2-all" /> <span><b>60% Faster:</b> risk assessments with our intuitive interface and optimized backend processes.</span></li>
                <li><i className="bi bi-check2-all" /> <span><b>Syncronized:</b> integration between modules provides a complete solution for the risk management process and seamless workflow.</span></li>
              </ul>
            </div>
            <div className="col-lg-6 position-relative float-right text-center" data-aos="fade-up" data-aos-delay={100}>
              <img src="img/aboutRight.png" className="img-fluid about-image" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default AboutSection