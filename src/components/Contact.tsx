import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { ISSCanvas } from './canvas';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Leandro Camilotti',
          from_email: form.email,
          to_email: 'lecamilotti@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({ name: '', email: '', message: '' });
          setShowModal(false);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  useEffect(() => {
    if (showModal) {
      console.log(showModal);
      setHovered(false);
    }
  }, [showModal]);

  return (
    <div className='relative h-[60vh] pb-0 mb-0 z-50'>
      <motion.div
        // variants={slideIn('right', 'tween', 0.2, 1) as unknown as Variants}
        className='absolute inset-0 h-full z-0'
        onPointerOver={() => {
          if (!showModal) {
            setHovered(true);
          }
        }}
        onPointerOut={() => {
          let timeout: ReturnType<typeof setTimeout>;
          if (hovered) {
            timeout = setTimeout(() => {
              setHovered(false);
            }, 2000);
          }
          return () => clearTimeout(timeout);
        }}
      >
        <ISSCanvas />
      </motion.div>
      {hovered && (
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-black-100 bg-opacity-90 rounded-lg shadow-2xl z-index-50'>
          <p className='text-center text-lg'>
            Would you like to contact me or work with me?
            <button
              onClick={() => setShowModal(true)}
              className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300'
            >
              Click here
            </button>
          </p>
        </div>
      )}

      {showModal && (
        <div className='flex items-center justify-center bg-black-100 p-8 rounded-2xl bg-opacity-05 z-50'>
          <p className={styles.sectionSubText}>Get in touch</p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper({ idName: 'contact', Component: Contact });
