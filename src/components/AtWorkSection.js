const AtWorkSection = () => {
    return (
        <section id="portfolio" className="portfolio section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span>Risk-io at work</span>
          <h2>
            Risk-io at work
          </h2>
          <p>Comprehensive Risk Management for Every Industry</p>
          <p>
              Risk-IO's flexible design approach allows for customization that suits any industry. The simple interface makes the platform easy to use for any individual regardless of their training or background, helping you navigate the complexities of risk management with ease. Embrace a smarter, more efficient approach to risk management today.
            </p>
        </div>{/* End Section Title */}
        <div className="container">
          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay={200}>
              <div className="col-lg-3 col-md-6 portfolio-item isotope-item filter-app">
                <img src="img/work1.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <p>A prominent financial institution successfully implemented Risk-IO in an effort to manage their operational risks with specific focus on fraud and data breaches amongst employees.</p>
                  <a href="portfolio-details.html" title="More Details" className="details-link" data-bs-toggle="modal" data-bs-target="#workModal1"><i className="bi bi-link-45deg" /></a>
                </div>
                
                <div className="modal fade" id="workModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered rounded-none">
                        <div className="modal-content">
                            <div className="modal-body">
                                <p>
                                A prominent financial institution successfully implemented Risk-IO in an effort to manage theri operational risks with specific focus on fraud and data breaches amongst employees. After the initial risk assessment was conducted, using Risk-IO, the company were able to identify legitimate shortfalls in theri existing processes and opted for continued use of the application for ongoing assessments on a more regular basis. By harnessing the Communications and Incident Register Modules of Risk-IO, the company were able to successfully reduce fraud cases by approximately 35% within a quarter. The Communications Module also proved to be a more secure channel for the company who have opted for this as their preferred method for internal communications. The Risk-IO deployment in this case led to an enhanced risk management approach for the company which resulted in compliance with local laws and regulations which boosted client confidence for the firm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>{/* End Portfolio Item */}
              <div className="col-lg-3 col-md-6 portfolio-item isotope-item filter-product">
                <img src="img/work2.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <p>A multinational corporation is currently using the Risk-IO application to enhance physical security at their headquarters.</p>
                  <a href="portfolio-details.html" title="More Details" className="details-link" data-bs-toggle="modal" data-bs-target="#workModal2"><i className="bi bi-link-45deg" /></a>
                </div>

                <div className="modal fade" id="workModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered rounded-none">
                        <div className="modal-content">
                            <div className="modal-body">
                                <p>
                                A multinational corporation is currently using the Risk-IO application to enhance physical security at thei headquarters. Risk-IO's customized checklist feature allowed the company to conduct a thorough risk assessment which allowed them to identify and assess vulnerabilities in the building along with a detailed risk assessment plan with prioritised mitigations. Risk-IO's Incident Register module allowed the company to reduce unauthorized access incidents by 40% whilst the communications module allowed for swift reporting and resolution of security breaches which led to an overall improvement in safety and security. The company's proactive approach facilitated a vast enhancement in physical security which in turn boosted employee confidence and trust in the workplace.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>{/* End Portfolio Item */}
              <div className="col-lg-3 col-md-6 portfolio-item isotope-item filter-branding">
                <img src="img/work3.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <p>The Risk-IO app was deployed by an auto manufacturer in an effort to enhance workplace safety.</p>
                  <a href="portfolio-details.html" title="More Details" className="details-link" data-bs-toggle="modal" data-bs-target="#workModal3"><i className="bi bi-link-45deg" /></a>
                </div>

                <div className="modal fade" id="workModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered rounded-none">
                        <div className="modal-content">
                            <div className="modal-body">
                                <p>
                                The Risk-IO app deployed by an auto manufacturer in an effort to enhance workplace safety. Utilizing the customized checklist feature, the manufacturer was able to detect potential hazards on the assebly line and through the use of the incident register module they were able to track incidents and expedite resolutions. Overall the use of Risk-IO led to 40% decrease in machine-related accidents within a 6 month period. The use of Risk-IO let to heightened oversight which allowed the company to redistribute part of their second quarter budget towards safety improvements and measures. Risk-IO's communication module allowed a timeous flow of information between employees and supervisors regarding safety and security matters which led to an overall improvement in productivity with effective mitigation of issues as they arose.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>{/* End Portfolio Item */}
              <div className="col-lg-3 col-md-6 portfolio-item isotope-item filter-books">
                <img src="img/work4.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <p>Site safety was a major concern for a construction company, and we were approached to set up Risk-IO to improve their safety score and overall safety of the construction workers.</p>
                  <a href="portfolio-details.html" title="More Details" className="details-link" data-bs-toggle="modal" data-bs-target="#workModal4"><i className="bi bi-link-45deg" /></a>
                </div>

                <div className="modal fade" id="workModal4" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered rounded-none">
                        <div className="modal-content">
                            <div className="modal-body">
                                <p>
                                Site safety was a major concern for a construction company, and we were approached to set up Risk-IO to improve their safety score and overall safety of the construction workers. After successful initialization, Risk-IO was able to reduce safety-related accidents by half within the space of a year. A two-pronged approach was employed in this case, namely a reactive approach, through Risk-IO's Incident Register Module, as well as a proactive approach using a customized checklist through the Risk Assessment Module of the app. A direct result of the Risk-IO deployment was a decrease in safety-related expenses which was a brought to light by the application's built-in budgeting feature in the Risk Assessment Module. The company also saw improvements in overall communication and an ability to mitigate risks earlier, thanks to the Communications Module of Risk-IO.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>{/* End Portfolio Item */}
            </div>{/* End Portfolio Container */}
            
          </div>
          
        </div>
        
      </section>
    )
}
export default AtWorkSection