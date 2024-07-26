import { Html, useProgress } from '@react-three/drei';

interface CanvasLoaderProps {
  color?: string;
}

const CanvasLoader: React.FC<CanvasLoaderProps> = ({ color }) => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: color || '#F1F1F1',
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
