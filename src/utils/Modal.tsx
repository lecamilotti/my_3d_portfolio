// Modal Component
import { lazy, Suspense, useState, useCallback } from 'react';
import { projects } from '../constants';
import projectComponents from './projectsComponents';
import { PuffLoader } from 'react-spinners';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../components/Loader';

import { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

type GLTFResult = {
  scene: THREE.Group;
};

const MonitorModel = ({ onLoaded }: { onLoaded: () => void }) => {
  const { scene } = useGLTF(
    './4k_monitor_lg_32_inches/scene.gltf'
  ) as GLTFResult;

  useEffect(() => {
    onLoaded();
  }, [onLoaded]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive object={scene} scale={11} position={[0, -3, 0]} />
    </mesh>
  );
};

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  projectIndex: number | null;
}> = ({ isOpen, onClose, projectIndex }) => {
  const [isMonitorLoaded, setIsMonitorLoaded] = useState<boolean>(false);

  const handleMonitorLoaded = useCallback(() => {
    setIsMonitorLoaded(true);
  }, []);

  if (!isOpen || projectIndex === null) return null;

  const project = projects[projectIndex];
  const ProjectComponent = lazy(() =>
    projectComponents[project.projectName as keyof typeof projectComponents]()
  );

  // Disable scrolling on the background page
  document.body.style.overflow = 'hidden';

  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-900 to-black  z-50 w-full h-full'>
        {projects[projectIndex].warningMessage && (
          <div className='absolute text-white p-4 top-20'>
            <div className='bg-red-500 p-5'>
              <p className='text-center text-white '>
                {projects[projectIndex].warningMessage}
              </p>
            </div>
          </div>
        )}
        <div className='relative w-full h-full max-w-[1280px] max-h-[800px]'>
          <button
            className='absolute top-4 right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center z-50'
            onClick={() => {
              // Restore scrolling on the background page when the modal is closed
              document.body.style.overflow = 'auto';
              onClose();
            }}
          >
            &times;
          </button>

          <div className='w-full h-full flex items-center justify-center'>
            <Canvas
              style={{ width: '100%', height: '100%' }}
              shadows
              camera={{ position: [11, 0, 0], fov: 30 }}
              dpr={[1, 2]}
              gl={{ preserveDrawingBuffer: true }}
            >
              <Suspense fallback={<CanvasLoader />}>
                <MonitorModel onLoaded={handleMonitorLoaded} />
              </Suspense>
            </Canvas>

            {isMonitorLoaded && (
              <div
                className='absolute inset-0 flex items-center justify-center z-30'
                style={{
                  backgroundColor: 'transparent',
                }}
              >
                <div
                  className='relative'
                  style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '1070px',
                    maxHeight: '540px',
                    marginBottom: '85px',
                    backgroundColor: 'white',
                    overflowY: 'scroll',
                    borderRadius: '8px',
                    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                  }}
                >
                  <Suspense fallback={<PuffLoader color='black' size={80} />}>
                    <ProjectComponent />
                  </Suspense>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
