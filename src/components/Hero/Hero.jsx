
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="hero-title">
          Welcome to <motion.span whileHover={{ scale: 1.1 }}>Club Bombay</motion.span>
        </h1>
        <p className="hero-subtitle">The best nightlife experience awaits you.</p>
        <motion.a
          href="#about"
          className="hero-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Now
        </motion.a>
      </motion.div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
