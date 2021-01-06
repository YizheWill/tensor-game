import React, { useRef } from 'react';

import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import { drawHand } from './utils';

import './App.css';

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const runHandpose = async () => {
    const net = await handpose.load();
    console.log('Handpose loaded');
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (nnw) => {
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hand = await nnw.estimateHands(video);
      console.log(hand);

      const ctx = canvasRef.current.getContext('2d');
      drawHand(hand, ctx);
    }
  };
  runHandpose();
  return (
    <div>
      <header className='App-header'>
        <Webcam
          ref={webcamRef}
          style={{
            position: 'absolute',
            margin: '0 auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            margin: '0 auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default App;
