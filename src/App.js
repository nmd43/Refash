import logo from './logo.svg';
import React from 'react';
import './App.css';
import CameraButton from './Camera/CameraButton';
import Logo from './Logo/Logo'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo /> 
        <CameraButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
