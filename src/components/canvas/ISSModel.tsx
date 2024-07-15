import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, Stars, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

type GLTFResult = {
  scene: object;
};

const ISSModel: React.FC = () => {
  const issRef = useRef();
  const { scene } = useGLTF('./space_station/scene.gltf') as GLTFResult;

  // Rotate the ISS model to the right
  useFrame(() => {
    if (issRef.current) {
      (issRef.current as any).rotation.y += 0.002; // Adjust rotation speed as needed
    }
  });

  return (
    <primitive ref={issRef} object={scene} scale={5.0} position={[0, 5, 0]} />
  );
};

const Earth: React.FC = () => {
  const earthRef = useRef();
  const earth = useGLTF('./planet/scene.gltf');

  // Rotate the Earth backwards (on the X-axis)
  useFrame(() => {
    if (earthRef.current) {
      (earthRef.current as any).rotation.x -= 0.001; // Adjust rotation speed as needed
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.5} />
      <spotLight
        position={[0, 0, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight intensity={1} />
      <primitive
        ref={earthRef}
        object={earth.scene}
        scale={30.0}
        position={[0, -75, 0]} // Position adjusted to ensure it is below the ISSModel
        // No need to set initial rotation here unless you want a specific starting angle
      />
    </mesh>
  );
};

const ISSCanvas: React.FC<{}> = () => {
  return (
    <div className='relative w-full h-full z-0 mb-0 pb-0'>
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 50, near: 0.1, far: 2000, position: [-50, 10, 20] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.7} />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={1.0} // Adjust the auto-rotate speed if needed
          />
          <ISSModel />
          <Earth />
          <Stars
            radius={300}
            depth={50}
            count={5000}
            factor={7}
            saturation={0}
            fade
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ISSCanvas;
