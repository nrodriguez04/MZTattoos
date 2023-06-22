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

  const menuItem = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <nav>
      <div className="logo">
        <h2>MZ</h2>
      </div>
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
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'easeInOut', stiffness: 120 }}
        >
          <ul>
            {['Home', 'About', 'Contact', 'Portfolio'].map((item, index) => (
              <motion.li
                key={item}
                variants={menuItem}
                initial="closed"
                animate="open"
                exit="closed"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/${item.toLowerCase()}`} onClick={toggleMenu}>
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
