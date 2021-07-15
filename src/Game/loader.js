import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

var objLoader = new OBJLoader();
// objLoader.setMaterials(materials);
objLoader.load(
  "./obj/test.obj",
  function(object) {
    console.log(object)
  },
  function(xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  // called when loading has errors
  function(error) {
    console.log("An error happened" + error);
  }
);