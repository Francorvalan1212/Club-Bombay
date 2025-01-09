
import { motion } from "framer-motion";
import "./Gallery.css";

const images = [
  "https://images.unsplash.com/photo-1542124829-2f5596c489a0?crop=entropy&cs=tinysrgb&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1553124267-1b0b3f4b9d95?crop=entropy&cs=tinysrgb&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1568148839314-36a444d42a70?crop=entropy&cs=tinysrgb&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1559409749-8bc5b9907dd0?crop=entropy&cs=tinysrgb&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1597699408455-2cbe255bfe7f?crop=entropy&cs=tinysrgb&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1590086782795-2a6c1c3b7ef1?crop=entropy&cs=tinysrgb&w=400&h=300&fit=crop",
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <motion.div
            className="gallery-item"
            key={index}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={image} alt={`Gallery ${index + 1}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
