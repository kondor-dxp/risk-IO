const FeaturesSection = () => {
    return (
        <section id="services" className="services section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span>Key Features</span>
          <h2>Key Features</h2>
          <p>Discover how our cutting-edge risk management app transforms challenges into opportunities, equipping your team with real-time insights and streamlined processes to safeguard your business's future with confidence</p>
        </div>{/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="service-item position-relative">
                  <h3>Real-Time Risk Management</h3>
                <p>Risk-IO provides real-time determination, assessment and management of risks for assets and processes, helping you stay ahead of potential threats and take proactive measures.</p>
              </div>
            </div>{/* End Service Item */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="service-item position-relative">
                  <h3>Customizable and Scalable</h3>
                <p>Adapt and scale Risk-IO to suit your evolving business needs, offering flexibility and long-term utility, with customizable features and settings.</p>
              </div>
            </div>{/* End Service Item */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
              <div className="service-item position-relative">
                  <h3>ISO 31000 Standard Compliance</h3>
                <p>Risk-IO aligns with the ISO 31000 Standard, ensuring your risk management practices meet globally recognized guidelines for effectiveness and reliability.</p>
              </div>
            </div>{/* End Service Item */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={400}>
              <div className="service-item position-relative">
                  <h3>Automated Reporting and Advanced Analysis</h3>
                <p>Benefit from fully automated reporting in real-time, multi-currency support and automated GANTT chart creation for effective planning. Leverage multifactor risk analysis and mitigation solutions tailored to geographic areas.</p>
              </div>
            </div>{/* End Service Item */}
          </div>
        </div>
      </section>
    )
}
export default FeaturesSection