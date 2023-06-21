import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Style import
import '../../assets/styles/Navigation.css'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const topBar = {
      open: { rotate: 45, translateY: -7 },
      closed: { rotate: 0, translateY: 0 },
    };
  
    const middleBar = {
      open: { opacity: 0 },
      closed: { opacity: 1 },
    };
  
    const bottomBar = {
      open: { rotate: -45, translateY: 7 },
      closed: { rotate: 0, translateY: 0 },
    };
  
    return (
      <nav>
        <div onClick={toggleMenu}>
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={topBar}
          ></motion.div>
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={middleBar}
          ></motion.div>
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={bottomBar}
          ></motion.div>
        </div>
  
        {isOpen && (
          <motion.div
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <ul>
              <li>
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>About</Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    );
  };
  
  export default Navigation;
