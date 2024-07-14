import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Points,
  PointMaterial,
  Preload,
  OrbitControls,
} from '@react-three/drei';
import * as THREE from 'three';
import { Color } from 'three';
interface NebulaProps {
  scale: number;
}

const Nebula: React.FC<NebulaProps> = (props) => {
  const ref = useRef<THREE.Points>(null);
  const count = 300000; // Increase particle count for density
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      const distance = Math.sqrt(x * x + y * y + z * z);
      const intensity = Math.max(0, 1 - distance / 10); // Nebula density falloff
      positions[i * 3] = x * intensity;
      positions[i * 3 + 1] = y * intensity;
      positions[i * 3 + 2] = z * intensity;
    }
    return positions;
  }, [count]);

  const colors = useMemo(() => {
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const hue = Math.random() * 0.2 + 0.6; // Adjust hue range for color palette
      const saturation = 1;
      const lightness = Math.random() * 0.5 + 0.5;
      const color = new Color().setHSL(hue, saturation, lightness);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return colors;
  }, [count]);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 10;
      ref.current.rotation.y += delta / 15;
    }
  });

  return (
    <group {...props}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          color={colors} // Apply color array
        />
      </Points>
    </group>
  );
};

const NebulaCanvas: React.FC = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 35,
          near: 0.1, // Adjust near clipping plane
          far: 10000, // Increase far clipping plane
          position: [0, 0, 150], // Move camera farther away
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Nebula {...{ scale: 13 }} /> // Increase nebula scale
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default NebulaCanvas;
