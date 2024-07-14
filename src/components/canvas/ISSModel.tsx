import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

type GLTFResult = {
  scene: object;
};

const ISSModel: React.FC = () => {
  const { scene } = useGLTF('./space_station/scene.gltf') as GLTFResult;
  return <primitive object={scene} scale={3.0} position-y={0} rotation-y={0} />;
};

const ISSCanvas: React.FC<{}> = () => {
  return (
    <div className='relative w-full h-full z-0'>
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 45, near: 1.5, far: 1000, position: [-35, 2, 10] }}
        // onPointerOver={() => setOnPoint(true)}
        // onPointerOut={() => setOnPoint(false)}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            autoRotateSpeed={1.1}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <ISSModel />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ISSCanvas;
