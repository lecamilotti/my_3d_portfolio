'use client';
import React, { useRef, useEffect, useState, MutableRefObject } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import * as cocossd from '@tensorflow-models/coco-ssd';
import Webcam from 'react-webcam';
import './globals.css';
import { drawRect } from './utils/Utilities';

// Define types for webcam and canvas references
type WebcamRef = MutableRefObject<Webcam | null>;
type CanvasRef = MutableRefObject<HTMLCanvasElement | null>;

const Home: React.FC = () => {
  const webcamRef: WebcamRef = useRef(null);
  const canvasRef: CanvasRef = useRef(null);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);
  const [cameraOn, setCameraOn] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false); // State for loading spinner

  // Main function
  const runCoco = async () => {
    setLoading(true); // Set loading to true when starting to run Coco-SSD
    await tf.setBackend('webgl');
    await tf.ready();
    const net = await cocossd.load();
    console.log('Coco-SSD model loaded.');
    setLoading(false); // Set loading to false when Coco-SSD is loaded

    // Loop and detect objects
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net: cocossd.ObjectDetection) => {
    if (
      webcamRef.current !== null &&
      webcamRef.current.video !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      if (canvasRef.current) {
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        const obj = await net.detect(video);

        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, videoWidth, videoHeight);
          drawRect(obj, ctx);
        }
      }
    }
  };

  const handleDevices = (mediaDevices: MediaDeviceInfo[]) => {
    setDevices(mediaDevices.filter(({ kind }) => kind === 'videoinput'));
  };

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, []);

  useEffect(() => {
    if (selectedDeviceId && cameraOn) {
      runCoco();
    }
  }, [selectedDeviceId, cameraOn]);

  const toggleCamera = () => {
    setCameraOn((prev) => !prev);
  };

  const handleDeviceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDeviceId(e.target.value);
    setCameraOn(true); // Turn on the camera whenever a new device is selected
  };

  return (
    <div className='App'>
      <main className='App-header'>
        {devices.length > 0 && !loading && (
          <div className='select-device-container'>
            <label>Choose Camera:</label>
            <div className='select-device'>
              <select
                onChange={handleDeviceChange}
                value={selectedDeviceId || ''}
              >
                <option value=''>select a camera</option>
                {devices.map((device, index) => (
                  <option key={device.deviceId} value={device.deviceId}>
                    {device.label || `Camera ${index + 1}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {selectedDeviceId && (
          <>
            {cameraOn && (
              <>
                {loading && (
                  <div className='spinner-container'>
                    <div className='spinner'></div>
                  </div>
                )}
                <Webcam
                  ref={webcamRef}
                  audio={false}
                  videoConstraints={{
                    deviceId: selectedDeviceId ? selectedDeviceId : undefined,
                  }}
                  style={{
                    position: 'absolute',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    zIndex: 9,
                    width: 1280,
                    height: 980,
                  }}
                />
                <button
                  onClick={toggleCamera}
                  style={{
                    zIndex: 1000,
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    margin: 10,
                    padding: '8px 12px',
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  {cameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
                </button>
              </>
            )}

            {cameraOn && (
              <canvas
                ref={canvasRef}
                style={{
                  position: 'absolute',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  left: 0,
                  right: 0,
                  textAlign: 'center',
                  zIndex: 50,
                  width: 1280,
                  height: 980,
                }}
              />
            )}
          </>
        )}
      </main>

      {/* Spinner styles */}
      <style jsx>{`
        .spinner-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1000;
        }

        .spinner {
          border: 8px solid #f3f3f3;
          border-top: 8px solid #3498db;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
