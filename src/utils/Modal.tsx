import { lazy, Suspense } from 'react';
import { projects } from '../constants';
import projectComponents from './projectsComponents';
import { PuffLoader } from 'react-spinners';

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  projectIndex: number | null;
}> = ({ isOpen, onClose, projectIndex }) => {
  if (!isOpen || projectIndex === null) return null;

  const project = projects[projectIndex];
  const ProjectComponent = lazy(() =>
    projectComponents[project.name as keyof typeof projectComponents]()
  );

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 min-w-full'>
      <div className='bg-white p-5 rounded-lg'>
        <div className='relative min-w-full h-full bg-gray-900 rounded-lg'>
          <button
            onClick={onClose}
            className='absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center'
          >
            &times;
          </button>
          <div className='flex items-center justify-center h-full'>
            <div className='bg-white min-w-full h-full flex items-center justify-center'>
              <Suspense
                fallback={
                  <div className='flex items-center min-w-[500px] justify-center min-h-[500px]'>
                    <PuffLoader color='black' size={80} />
                  </div>
                }
              >
                <ProjectComponent />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
