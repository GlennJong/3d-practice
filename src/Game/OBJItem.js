
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

export function OBJItem({ path, name }) {
  return new Promise((resolve, reject) => {
    const texture = new THREE.TextureLoader().load(`${path}${name}_tex.png`);
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath(path);

    // load material
    mtlLoader.load(`${name}.mtl`, function(materials) {
      materials.preload();
  
      // load Object
      const objLoader = new OBJLoader();
      objLoader.setMaterials( materials );
      objLoader.load(`${path}${name}.obj`,
        function(object) {
          const objectItem = applyTexture(object, texture);
          resolve(objectItem);
        },
        function(xhr) {
          // Progress callback here...
        },
        // called when loading has errors
        function(error) {
          reject(error)
          console.log("An error happened" + error);
        }
      );
    });
  })
}

function applyTexture(object, texture) {
  object.traverse(function(child) {
    if (child instanceof THREE.Mesh) {
      child.material.map = texture;
    }
  });
  return object;
}
