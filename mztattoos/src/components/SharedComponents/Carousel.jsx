import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import '../../assets/styles/Carousel.css'

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(timer); // clean up on unmount
  }, [images.length]);

  return (
    <div className="carousel">
      <AnimatePresence>
        {images.slice(current, current + 4).map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt=""
            initial={{ opacity: 0, x: 50 * index }}
            animate={{ opacity: .8, x: 0 }}
            exit={{ opacity: 0, x: -50 * index }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
