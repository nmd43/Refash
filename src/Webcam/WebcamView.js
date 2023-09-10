// src/WebcamView.js
import '../Camera/CameraButton.css';

import React, { useEffect, useRef } from 'react';

const WebcamView = ({ onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const openCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    openCamera();

    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach((track) => track.stop());
        }
      }
    };
  }, []);

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className="webcam-view">
      <video ref={videoRef} autoPlay className="webcam-video" />
      <button className="close-button" onClick={handleCloseClick}>
        Close Camera
      </button>
    </div>
  );
};

export default WebcamView;
