import { useState } from 'react';
import { motion } from 'framer-motion';

const ExpandableListItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div layout onClick={toggleOpen}>
      <motion.h2 layout>{question}</motion.h2>
      <motion.div layout initial={false} animate={{ height: isOpen ? 'auto' : 0 }}>
        <p>{answer}</p>
      </motion.div>
    </motion.div>
  );
};

export default ExpandableListItem;
