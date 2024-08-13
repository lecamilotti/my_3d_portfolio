"use client";
import React, { useRef, useEffect, useState, MutableRefObject } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./globals.css";
import { drawRect } from "./utils/Utilities";
import { PuffLoader } from "react-spinners";

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
  const [permissionError, setPermissionError] = useState<string | null>(null);

  // Main function
  const runCoco = async () => {
    setLoading(true); // Set loading to true when starting to run Coco-SSD
    await tf.setBackend("webgl");
    await tf.ready();
    const net = await cocossd.load();

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

        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          setTimeout(() => setLoading(false), 3000); // Set loading to false after 3 seconds to make sure tensorflow is loaded
          ctx.clearRect(0, 0, videoWidth, videoHeight);
          drawRect(obj, ctx);
        }
      }
    }
  };

  const handleDevices = React.useCallback(
    (mediaDevices: MediaDeviceInfo[]) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  const requestCameraPermissions = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
    } catch (error) {
      console.error("Error accessing camera:", error);
      setPermissionError("Unable to access camera. Please grant permission.");
    }
  };

  React.useEffect(() => {
    requestCameraPermissions();
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
    <div className="App">
      <main className="App-header">
        {permissionError && (
          <div className="error-message">{permissionError}</div>
        )}

        {devices.length > 0 && !loading && !permissionError && (
          <div className="select-device-container">
            <label>Choose Camera:</label>
            <div className="select-device">
              <select
                onChange={handleDeviceChange}
                value={selectedDeviceId || ""}
              >
                <option value="">select a camera</option>
                {devices.map((device, index) => (
                  <option key={device.deviceId} value={device.deviceId}>
                    {device.label || `Camera ${index + 1}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {selectedDeviceId && !permissionError && (
          <>
            {cameraOn && (
              <>
                {loading && <PuffLoader color="black" size={80} />}
                <Webcam
                  ref={webcamRef}
                  audio={false}
                  videoConstraints={{
                    deviceId: selectedDeviceId ? selectedDeviceId : undefined,
                  }}
                  style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    zIndex: 9,
                    width: "980px",
                    height: "540px",
                  }}
                />
                <button
                  onClick={toggleCamera}
                  style={{
                    zIndex: 1000,
                    position: "absolute",
                    top: 0,
                    right: 0,
                    margin: 10,
                    padding: "8px 12px",
                    backgroundColor: "transparent",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  {cameraOn ? "Turn Off Camera" : "Turn On Camera"}
                </button>
              </>
            )}

            {cameraOn && (
              <canvas
                ref={canvasRef}
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zIndex: 50,
                  width: "980px",
                  height: "540px",
                }}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
