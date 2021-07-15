import * as THREE from 'three';
import { setCamera } from './setCamera';
import { setRenderer } from './setRenderer';
import { setLights } from './setLights';
import { setOBJItems } from './setOBJItems';
import { setShader } from './setShader';
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function core(canvas) {

  // basic
  const scene = new THREE.Scene();
  const camera = setCamera();
  const renderer = setRenderer(canvas);

  // controller 
  const controls = new OrbitControls(camera, renderer.domElement);

  // Lights
  const lights = setLights(scene);

  // OBJItems
  const objects = setOBJItems(scene);

  // Shader
  const shader = setShader(scene, renderer, camera);


  const loader = new MMDLoader();
  console.log(loader)
  // loader.loadWithAnimation( modelFile, vmdFiles, function ( mmd ) {

  //   mesh = mmd.mesh;
  //   mesh.position.y = - 10;
  //   scene.add( mesh );

  //   helper.add( mesh, {
  //     animation: mmd.animation,
  //     physics: true
  //   } );

  //   ikHelper = helper.objects.get( mesh ).ikSolver.createHelper();
  //   ikHelper.visible = false;
  //   scene.add( ikHelper );

  //   physicsHelper = helper.objects.get( mesh ).physics.createHelper();
  //   physicsHelper.visible = false;
  //   scene.add( physicsHelper );

  //   initGui();

  // });

  // animation
  const animate = function () {
    requestAnimationFrame( animate );

    shader.update();
  };
  animate();
}
