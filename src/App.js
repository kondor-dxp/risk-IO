import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Elements from './components/Elements';
import AboutSection from './components/AboutSection';
import UseScript from './components/UseScript';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className='main'>
        <HeroSection></HeroSection>
        <ServicesSection></ServicesSection>
        <AboutSection></AboutSection>

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
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;