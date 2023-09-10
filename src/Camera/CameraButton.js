// src/CameraButton.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import './CameraButton.css';
import Webcam from '../Webcam/Webcam';

const CameraButton = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  // const handleCameraClick = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ video: true});
  //   } catch (error) {
  //     console.error( 'Error accessing camera:', error);
  //   }
  // }

  const handleCameraClick = () => {
    setIsCameraOpen(true);
  }
  const handleCloseCamera = () => {
    setIsCameraOpen(false);
  }

  return (
    <div className="camera-button-container">
      <button style={{
        height: '2em',
        width: '2em',
        fontSize: '70px'
      }} className="camera-button" onClick={handleCameraClick}>
        <FontAwesomeIcon icon={faCamera} className ="camera-icon" />
      </button>
      <Webcam isCameraOpen={isCameraOpen} onClose={handleCloseCamera} />
    </div>
  );
};

export default CameraButton;
