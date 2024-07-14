// Spaceship.js
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Spaceship: React.FC = () => {
  const model = useGLTF('./spaceShip/scene.gltf');
  const spaceshipRef = useRef<THREE.Group>();
  const { viewport } = useThree();

  const [position, setPosition] = useState([
    Math.random() * viewport.width - viewport.width / 2,
    Math.random() * viewport.height - viewport.height / 2,
    -50,
  ]);
  const [direction, setDirection] = useState([
    Math.random() * 2 - 1,
    Math.random() * 2 - 1,
    Math.random() * 0.2 - 0.1,
  ]);
  const speed = 0.02;

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection([
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 0.2 - 0.1,
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useFrame(() => {
    if (spaceshipRef.current) {
      const newPosition = [
        position[0] + direction[0] * speed,
        position[1] + direction[1] * speed,
        position[2] + direction[2] * speed,
      ];
      setPosition(newPosition);

      spaceshipRef.current.position.set(
        newPosition[0],
        newPosition[1],
        newPosition[2]
      );

      // Reset position if out of view
      if (
        newPosition[0] > viewport.width / 2 ||
        newPosition[0] < -viewport.width / 2 ||
        newPosition[1] > viewport.height / 2 ||
        newPosition[1] < -viewport.height / 2 ||
        newPosition[2] > 40 || // Adjust this value based on your scene depth
        newPosition[2] < -50
      ) {
        setPosition([
          Math.random() * viewport.width - viewport.width / 2,
          Math.random() * viewport.height - viewport.height / 2,
          -50,
        ]);
      }
    }
  });

  return <primitive ref={spaceshipRef} object={model.scene} />;
};

const SpaceshipCanvas: React.FC = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 75,
          near: 0.1,
          far: 600,
          position: [0, 0, 5],
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls autoRotate enableZoom={false} />
          <Spaceship />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SpaceshipCanvas;
