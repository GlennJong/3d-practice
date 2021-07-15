import { OBJItem } from './OBJItem';

export async function setOBJItems(scene) {
  const objects = [];
  const test = await OBJItem({ path: './assets/', name: 'test' });
  objects.push(test);
  scene.add(test);
  
  return objects;
}