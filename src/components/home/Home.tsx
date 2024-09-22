import { motion } from 'framer-motion';
import '/src/assets/css/home/home.css';
import LeftHome from './LeftHome.tsx';
import RightHome from './RightHome.tsx';

function Home() {

  return (
    <section className="home">
      <motion.div
        className="homeLeftContainer"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <LeftHome />
      </motion.div>
        <motion.div
            className="homeRightContainer"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <RightHome />
        </motion.div>
    </section>
  );
}

export default Home;