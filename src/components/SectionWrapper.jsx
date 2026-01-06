
import { motion } from 'framer-motion';

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`relative z-0`}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
