/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

//Style import
import '../../assets/styles/Carousel.css'

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
    }, 4000); // change slide every 3 seconds

    return () => clearInterval(timer); // clean up on unmount
  }, [images.length]);

  return (
    <div className="carousel">
      <AnimatePresence>
        {images.map((image, index) => index === current && (
          <motion.img
            key={index}
            src={image}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: .8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .8, ease: "easeInOut" }}
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
