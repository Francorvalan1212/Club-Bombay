
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="about-text"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="about-title">About <span>Club Bombay</span></h2>
          <p className="about-description">
            Club Bombay is where nightlife comes alive. We bring you the best DJs, electrifying atmosphere, and unforgettable moments. Join us for a night filled with music, lights, and good vibes.
          </p>
        </motion.div>
        <motion.div
          className="about-image"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="https://images.unsplash.com/photo-1553034540-8f9d74dbcd38?crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop" alt="Club atmosphere" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
