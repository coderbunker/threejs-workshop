/*

If you run that, you’ll notice two things:

The particles are squares
They don’t move
Let’s fix both of those, one at a time.

*/


// create the particle variables
var pMaterial = new THREE.ParticleBasicMaterial({
  color: 0xFFFFFF,
  size: 20,
  map: THREE.ImageUtils.loadTexture(
    "https://raw.githubusercontent.com/codersfield/threejs-workshop/master/images/particle.png"
  ),
  blending: THREE.AdditiveBlending,
  transparent: true
});

// also update the particle system to
// sort the particles which enables
// the behaviour we want
particleSystem.sortParticles = true;

