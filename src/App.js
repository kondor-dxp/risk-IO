import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className='main'>
        <HeroSection></HeroSection>
        <ServicesSection></ServicesSection>
        <AboutSection></AboutSection>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;