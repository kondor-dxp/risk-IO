import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Elements from './components/Elements';
import UseScript from './components/UseScript';
import FeaturesSection from './components/FeaturesSection';
import AtWorkSection from './components/AtWorkSection';
import FeaturedIn from './components/FeauredIn';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className='main'>
        <HeroSection></HeroSection>
        <ServicesSection></ServicesSection>
        <AboutSection></AboutSection>
        <FeaturesSection></FeaturesSection>
        <AtWorkSection></AtWorkSection>
        <FeaturedIn></FeaturedIn>
        <ContactSection></ContactSection>
      </main>
      <Footer></Footer>

      <Elements></Elements>
        
      <UseScript src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></UseScript>
      <UseScript src="assets/vendor/php-email-form/validate.js"></UseScript>
      <UseScript src="assets/vendor/aos/aos.js"></UseScript>
      <UseScript src="assets/vendor/glightbox/js/glightbox.min.js"></UseScript>
      <UseScript src="assets/vendor/purecounter/purecounter_vanilla.js"></UseScript>
      <UseScript src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></UseScript>
      <UseScript src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></UseScript>
      <UseScript src="assets/vendor/swiper/swiper-bundle.min.js"></UseScript>
      <UseScript src="assets/js/main.js"></UseScript>
    </div>
  );
}

export default App;