import { motion } from 'framer-motion';
import { useState } from 'react';
import '/src/assets/css/navBar.css';

function Header() {

  const [label, setLabel] = useState('FR');

  const hoverVariants = {
    scale : 1.1,
  }
  
  return (
    <motion.section className="navBar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="logo">
        <img src="/src/assets/images/logo.png" alt="logo" />
      </div>
      <div className="btn">
        <div className="divContainer">
        <motion.button 
            className="btnNav"
            whileHover={ hoverVariants }
          >
            + Projets
          </motion.button>
          <motion.button 
            className="btnNav"
            whileHover={ hoverVariants }
          >
            + A propos
            </motion.button>
        </div>
        <div className="divContainer">
          <motion.button
            className="btnTranslate"
            whileHover={ hoverVariants }
            animate={{ rotate: label === 'FR' ? 0 : 360 }}
            onClick={() => {
              setLabel(label === 'FR' ? 'EN' : 'FR');
            }}
          >
            {label}
          </motion.button>
          <motion.button 
            className="btnMenu"
            whileHover={{ scale: 1.1, rotate: 45 }}
          >
            <div className="menuIcon" />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

export default Header;