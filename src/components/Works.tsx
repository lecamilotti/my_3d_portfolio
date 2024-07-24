import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion, Variants } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import projectComponents from '../utils/projectsComponents';
import Modal from '../utils/Modal';

interface Tag {
  name: string;
  color: string;
}

interface ProjectProps {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  onClick,
}) => {
  console.log('On click', onClick);
  return (
    <motion.div
      variants={
        fadeIn('up', 'spring', index * 0.5, 0.75) as unknown as Variants
      }
    >
      <Tilt
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer'
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <div
          className='relative w-full h-[230px]'
          onClick={() => {
            onClick();
          }}
        >
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, '_blank');
              }}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);

  const handleCardClick = (index: number) => {
    console.log('clicked', index);
    setSelectedProjectIndex(index);
    setIsModalOpen(true);
    console.log(projects);
    console.log('isModalOpen', isModalOpen);
    console.log('selectedProjectIndex', selectedProjectIndex);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectIndex={selectedProjectIndex}
      />

      <motion.div variants={textVariant() as unknown as Variants}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1) as unknown as Variants}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper({ idName: '', Component: Works });
