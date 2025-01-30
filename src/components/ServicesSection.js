const ServicesSection = () => {
    return (
        <section id="featured-services" className="featured-services section">
            <div className="container">
            <div className="row gy-4">
                <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay={100}>
                <div className="service-item position-relative">
                    <img src="img/service1.gif" className="service-icon" />
                    <h4><a href className="stretched-link">Effective Risk Evaluation</a></h4>
                    <p>Empowering you to identify, assess, and management risks with precision and confidence</p>
                </div>
                </div>{/* End Service Item */}
                <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay={200}>
                <div className="service-item position-relative">
                    <img src="img/service2.gif" className="service-icon" />
                    <h4><a href className="stretched-link">Continual Monitoring</a></h4>
                    <p>Effortlessly analyze and evaluate risks using our comprehensive risk assessment software</p>
                </div>
                </div>{/* End Service Item */}
                <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay={300}>
                <div className="service-item position-relative">
                    <img src="img/service3.gif" className="service-icon" />
                    <h4><a href className="stretched-link">Threat Mitigation</a></h4>
                    <p>Create effective mitigation strategies to minimize the impact of identified risks</p>
                </div>
                </div>{/* End Service Item */}
            </div>
            </div>
        </section>
    )
}
export default ServicesSection