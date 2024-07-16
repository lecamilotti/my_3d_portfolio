import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, Stars, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

import CanvasLoader from '../Loader';

type GLTFResult = {
  scene: THREE.Group;
};

const ISSModel: React.FC<{
  issRef: React.MutableRefObject<THREE.Mesh | null>;
}> = ({ issRef }) => {
  const { scene } = useGLTF('./space_station/scene.gltf') as GLTFResult;

  return (
    <mesh ref={issRef}>
      <hemisphereLight intensity={0.2} />
      <spotLight
        position={[0, 0, 0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      <primitive
        object={scene}
        scale={4.0}
        position={[0, 7, 2]}
        rotation={[0, 4.2, 0]}
        autorotation={0.05}
      />
    </mesh>
  );
};

const Earth: React.FC = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const { scene } = useGLTF('./planet/scene.gltf');

  // create a function to make the earth rotate as looping animation
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={earthRef}>
      <hemisphereLight intensity={0} groundColor='black' />
      <spotLight
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        rotation={[-0.05, -0.4, -0.1]}
        object={scene}
        scale={25.0}
        position={[0, -60, 0]}
        opacity={10}
        transparent
        matrixAutoUpdate={true}
      />
    </mesh>
  );
};

const ISSCanvas: React.FC<{}> = () => {
  const issRef = useRef<THREE.Mesh>(null);

  return (
    <div className='relative w-full h-full z-0 mb-0 pb-0'>
      <Canvas
        shadows
        frameloop='always'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 80,
          near: 0.1,
          far: 2000,
          position: [10, 20, 20],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.2} />
          {/* <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} /> */}
          <OrbitControls enableZoom enableRotate enablePan />
          <ISSModel issRef={issRef} />
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
