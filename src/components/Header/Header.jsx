
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="logo">Club Bombay</div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
