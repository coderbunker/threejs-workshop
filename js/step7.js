function createParticleSystem() {
  // create the particle variables
  particleCount = 1000,
      particles = new THREE.Geometry(),
      pMaterial = new THREE.ParticleBasicMaterial({
        color: 0xFFFFFF,
        size: 10
      });

  // now create the individual particles
  for (var p = 0; p < particleCount; p++) {

    // create a particle with random
    // position values, -250 -> 250
    var pX = Math.random() * 500 - 250,
        pY = Math.random() * 500 - 250,
        pZ = Math.random() * 500,
        particle = new THREE.Vector3(pX, pY, pZ);

    // add it to the geometry
    particles.vertices.push(particle);
  }

  // create the particle system
  particleSystem = new THREE.ParticleSystem(
      particles,
      pMaterial);

  // add it to the scene
  scene.add(particleSystem);
}

function createParticleSystem2() {
  // create the particle variables
  var particleCount = 1000,
      particles = new THREE.Geometry();

  // create the particle variables
  var pMaterial = new THREE.ParticleBasicMaterial({
    color: 0xFFFFFF,
    size: 1,
    map: THREE.ImageUtils.loadTexture(
      "https://raw.githubusercontent.com/codersfield/threejs-workshop/master/images/particle.png"
    ),
    blending: THREE.AdditiveBlending,
    transparent: true
  });

  // now create the individual particles
  for (var p = 0; p < particleCount; p++) {

    // create a particle with random
    // position values, -250 -> 250
    var pX = Math.random() * 100 - 50,
        pY = Math.random() * 100 - 50,
        pZ = Math.random() * 100 - 50,
        particle = new THREE.Vector3(pX, pY, pZ);

    // add it to the geometry
    particles.vertices.push(particle);
  }

  // create the particle system
  particleSystem = new THREE.ParticleSystem(
      particles,
      pMaterial);

  // add it to the scene
  scene.add(particleSystem);
}


function createParticleSystem3() {
  // create the particle variables
  particleCount = 1000,
      particles = new THREE.Geometry();

  // create the particle variables
  var pMaterial = new THREE.ParticleBasicMaterial({
    color: 0xFFFFFF,
    size: 1,
    map: THREE.ImageUtils.loadTexture(
      "https://raw.githubusercontent.com/codersfield/threejs-workshop/master/images/particle.png"
    ),
    blending: THREE.AdditiveBlending,
    transparent: true
  });

  // now create the individual particles
  for (var p = 0; p < particleCount; p++) {

    // create a particle with random
    // position values, -250 -> 250
    var pX = Math.random() * 100 - 50,
        pY = Math.random() * 100 - 50,
        pZ = Math.random() * 100 - 50,
        particle = new THREE.Vector3(pX, pY, pZ);
    particle.velocity = new THREE.Vector3(
      0,              // x
      -Math.random(), // y: random vel
      0);
    // add it to the geometry
    particles.vertices.push(particle);
  }

  // create the particle system
  particleSystem = new THREE.ParticleSystem(
      particles,
      pMaterial);

  particleSystem.sortParticles = true;
 
  // add it to the scene
  scene.add(particleSystem);
}


function updateParticleSystem() {
  // add some rotation to the system

  var pCount = particleCount;
  while (pCount--) {
    // get the particle
    var particle =
      particles.vertices[pCount];

    // check if we need to reset
    if (particle.y < -200) {
      particle.y = 200;
      particle.velocity.y = 0;
    }

    // update the velocity with
    // a splat of randomniz
    particle.velocity.y -= Math.random() * .1;
  }

  // flag to the particle system
  // that we've changed its vertices.
  particleSystem.
    geometry.
    __dirtyVertices = true;

}