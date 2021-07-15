import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { PixelShader } from 'three/examples/jsm/shaders/PixelShader.js';


export function setShader(scene, renderer, camera) {
  const params = {
    pixelSize: 16,
    postprocessing: true
  };

  const composer = new EffectComposer( renderer );
  composer.addPass( new RenderPass( scene, camera ) );
  
  const pixelPass = new ShaderPass( PixelShader );
  pixelPass.uniforms[ "resolution" ].value = new THREE.Vector2( window.innerWidth, window.innerHeight );
  pixelPass.uniforms[ "resolution" ].value.multiplyScalar( window.devicePixelRatio );
  composer.addPass( pixelPass );


  function update() {
    pixelPass.uniforms[ "pixelSize" ].value = params.pixelSize;
    
    if (params.postprocessing) {
      composer.render();
    }
    else {
      renderer.render( scene, camera );
    }
  }
  
  return { update };

}