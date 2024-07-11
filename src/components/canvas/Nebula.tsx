import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as THREE from 'three';

const Nebula: React.FC = (props) => {
  const ref = useRef<THREE.Points>(null);
  const count = 10000;
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 10;
      ref.current.rotation.y += delta / 15;
    }
  });

  return (
    <group {...props}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color='#ffffff'
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const NebulaCanvas: React.FC = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Nebula />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default NebulaCanvas;
