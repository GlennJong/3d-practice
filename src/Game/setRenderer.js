import * as THREE from 'three';

export function setRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas: canvas });
  renderer.setClearColor("#263238");
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );

  return renderer;
}