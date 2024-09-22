import { motion } from 'framer-motion';
import { useState } from 'react';
import '/src/assets/css/navBar.css';

function Header() {

  const [label, setLabel] = useState('FR');
  
  return (
    <section className="navBar">
      <div className="logo">
        <img src="/src/assets/images/logo.png" alt="logo" />
      </div>
      <div className="btn">
        <div className="divContainer">
        <motion.button 
            className="btnNav"
            whileHover={{ scale: 1.1 }}
          >
            + Projets
          </motion.button>
          <motion.button 
            className="btnNav"
            whileHover={{ scale: 1.1 }}
          >
            + A propos
            </motion.button>
        </div>
        <div className="divContainer">
          <motion.button 
            className="btnTranslate"
            whileHover={{ scale: 1.1, rotate: 360 }}
            onHoverStart={() => setLabel('EN')}
            onHoverEnd={() => setLabel('FR')}
            >
              { label }
            </motion.button>
          <motion.button 
            className="btnMenu"
            whileHover={{ scale: 1.1, rotate: 45 }}
          >
            <div className="menuIcon" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default Header;