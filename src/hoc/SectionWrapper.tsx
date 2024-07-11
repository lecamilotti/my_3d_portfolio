import React from 'react';
import { motion, Variants } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

interface StarWrapperProps {
  idName: string;
  Component: React.ComponentType;
}

const SectionWrapper = ({ idName, Component }: StarWrapperProps): React.FC => {
  const HOC: React.FC = () => (
    <motion.section
      variants={staggerContainer() as unknown as Variants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id={idName}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
  );

  return HOC;
};

export default SectionWrapper;
