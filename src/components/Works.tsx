import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion, Variants } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

import Modal from '../utils/Modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

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
  name,
  description,
  tags,
  image,
  source_code_link,
  onClick,
}) => {
  return (
    <Tilt className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer'>
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
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const Works: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);

  const handleCardClick = (index: number) => {
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        setSelectedProjectIndex(index);
        setIsModalOpen(true);
      }, 300); // Delay opening the modal to allow for scrolling
    }
  };

  const settings = {
    // dots: true,
    infinite: false,
    arrows: projects.length > 3 ? true : false,
    cssEase: 'ease',

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          arrows: projects.length > 2 ? true : false,
          // dots: true,
        },
      },
      {
        breakpoint: 897,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: projects.length > 1 ? true : false,
        },
      },
    ],
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

      <div className='mt-20'>
        <Slider {...settings} dots={false}>
          {projects.map((project, index) => (
            <div key={`project-${index}`} className='p-2'>
              <ProjectCard
                index={index}
                {...project}
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SectionWrapper({ idName: 'projects', Component: Works });
