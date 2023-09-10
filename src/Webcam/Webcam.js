

// src/Webcam.js
import React, { useRef, useEffect, useState } from 'react';

const Webcam = ({ isCameraOpen, onClose }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageDataUrl, setImageDataUrl] = useState(null); // To store the captured image

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

    if (isCameraOpen) {
      openCamera();
    }

    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach((track) => track.stop());
        }
      }
    };
  }, [isCameraOpen]);

  if (!isCameraOpen) {
    return null; 
  }

  const handleCloseClick = () => {
    onClose();
  };

  const handleTakePicture = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      // Set the canvas size to match the video frame
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Capture the current frame from the video and draw it on the canvas
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Get the image data from the canvas as a data URL
      const dataUrl = canvas.toDataURL('image/png');

      // Set the captured image data URL in state
      setImageDataUrl(dataUrl);
    }
  };

  return (
    <div className={`webcam-container ${isCameraOpen ? 'open' : ''}`}>
      <video ref={videoRef} autoPlay muted className="mirrored-video" />
      <div className="close-button-container">
        <button className="close-button" onClick={handleCloseClick}>
          Close Camera
        </button>
        <button className="take-picture-button" onClick={handleTakePicture}>
          Take Picture
        </button>
      </div>
      {imageDataUrl && (
        <div className="captured-image">
          <img src={imageDataUrl} alt="Captured" />
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default Webcam;
