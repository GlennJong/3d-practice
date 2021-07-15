import React, { useEffect, useRef } from 'react';
import { core } from './core.js';

function Game() {
  const rootRef = useRef(null);

  useEffect(() => {
    core(rootRef.current)
  }, [])
  
  return (
    <canvas ref={rootRef}></canvas>
  );
}

export default Game;
