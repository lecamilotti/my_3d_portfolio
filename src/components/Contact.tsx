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
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-black-100 bg-opacity-90 rounded-lg shadow-2xl z-50 min-w-80 text-center'>
          <p className='text-center text-lg'>
            Would you like to contact me or work with me?
          </p>
          <button
            onClick={() => setShowModal(true)}
            className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 text-center'
          >
            Click here
          </button>
        </div>
      )}

      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 '>
          <div className='bg-black-100 p-8 rounded-2xl shadow-lg relative w-[600px]'>
            <button
              onClick={() => setShowModal(false)}
              className='absolute top-4 right-4 text-gray-100 hover:text-gray-900 transition'
            >
              &times;
            </button>
            <p className={styles.sectionSubText}>Get in touch</p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-12 flex flex-col gap-8 '
            >
              <label className='flex flex-col'>
                <span className='text-gray-700 font-medium mb-4'>
                  Your Name
                </span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className='bg-gray-200 py-4 px-6 placeholder-gray-500 text-gray-800 rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-gray-700 font-medium mb-4'>
                  Your Email
                </span>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  className='bg-gray-200 py-4 px-6 placeholder-gray-500 text-gray-800 rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-gray-700 font-medium mb-4'>
                  Your Message
                </span>
                <textarea
                  rows={7}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='What do you want to say?'
                  className='bg-gray-200 py-4 px-6 placeholder-gray-500 text-gray-800 rounded-lg outline-none border-none font-medium'
                />
              </label>

              <button
                type='submit'
                className='bg-blue-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:bg-blue-600 transition duration-300 '
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper({ idName: 'contact', Component: Contact });
