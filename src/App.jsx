
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
