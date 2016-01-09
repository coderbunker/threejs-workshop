scene.add(new THREE.AmbientLight(0x333333));        
// 
var light = new THREE.DirectionalLight(0xffffff, 1);        
light.position.set(5,3,5);        
scene.add(light);        
var clouds = createClouds(radius, segments);        
clouds.rotation.y = rotation;        
scene.add(clouds);