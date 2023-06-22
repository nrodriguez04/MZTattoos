import { motion } from 'framer-motion';

//Style import
import '../../assets/styles/Header.css'

const Header = () => {
    return (
      <header>
      <motion.h1
      initial={{ opacity: 0, y: 50 }} // start from slightly below the final position
      animate={{ opacity: .8, y: 0 }} // end at the final position
      transition={{ duration: 3 }} // animate over 1 second
      >
        <span className="first-letter">M</span><span className="other-letter">aksym</span> <span className="first-letter">Z</span><span className="other-letter">elenchuk</span>
      </motion.h1>
      </header>
    );
  };
  
  export default Header;