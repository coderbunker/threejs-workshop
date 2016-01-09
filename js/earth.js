(function () {

	// get the html element
	var webglEl = document.getElementById('webgl');

	// if webgl is not supported, trigger an alert
	if (!Detector.webgl) {
		Detector.addGetWebGLMessage(webglEl);
		return;
	}

	// Get the dimensions of the window
	var width  = window.innerWidth,
		height = window.innerHeight;

	// Create a new threejs scene
scene = new THREE.Scene();

	// Earth params
	var radius   = 0.5,
	segments = 32,
	rotation = 6;

	var sphere = createSphere(radius, segments);
	sphere.rotation.y = rotation;
	scene.add(sphere);

	scene.add(new THREE.AmbientLight(0x333333));
	var light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(5,3,5);
	scene.add(light);


	var particleCount = 1000,
    particles = new THREE.Geometry(),
    pMaterial = new THREE.ParticleBasicMaterial({
      color: 0xFFFFFF,
      size: 1
    });

// now create the individual particles
for (var p = 0; p < particleCount; p++) {

  // create a particle with random
  // position values, -250 -> 250
  var pX = Math.random() * 100 - 50,
      pY = Math.random() * 100 - 50,
      pZ = Math.random() * 100 - 50,
      particle =  new THREE.Vector3(pX, pY, pZ);
 

  // add it to the geometry
  particles.vertices.push(particle);
}

// create the particle system
var particleSystem = new THREE.ParticleSystem(
    particles,
    pMaterial);

// add it to the scene
scene.add(particleSystem);


	var stars = createStars(90, 64);
	scene.add(stars);

	var clouds = createClouds(radius, segments);
	clouds.rotation.y = rotation;
	scene.add(clouds)


	// Create a new camera to see the scene
	var camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);
	camera.position.z = 1.5;

	// Create the 3d object rendering
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);

	//mouse control
	var controls = new THREE.TrackballControls(camera);

	//append it on the HTML
	webglEl.appendChild(renderer.domElement);

	//start the recursive function to render it
	render();

	function render() {
		//update rendering according to mouse control
		controls.update();

		// let the browser decide how much FPS it can calculate
		requestAnimationFrame(render);

		//rotation
		sphere.rotation.y += 0.0005;
		clouds.rotation.y += 0.00045;

		// render the 3d scene
		renderer.render(scene, camera);
	}

	function createSphere(radius, segments) {
		return new THREE.Mesh(
				new THREE.SphereGeometry(radius, segments, segments),
				new THREE.MeshPhongMaterial({
					map:         THREE.ImageUtils.loadTexture('images/2_no_clouds_4k.jpg'),
					bumpMap:     THREE.ImageUtils.loadTexture('images/elev_bump_4k.jpg'),
					bumpScale:   0.005,
					specularMap: THREE.ImageUtils.loadTexture('images/water_4k.png'),
					specular:    new THREE.Color('grey')
				})
		);
	}

	function createClouds(radius, segments) {
		return new THREE.Mesh(
				new THREE.SphereGeometry(radius + 0.003, segments, segments),
				new THREE.MeshPhongMaterial({
					map:         THREE.ImageUtils.loadTexture('images/fair_clouds_4k.png'),
					transparent: true
				})
		);
	}

	function createStars(radius, segments) {
		return new THREE.Mesh(
				new THREE.SphereGeometry(radius, segments, segments),
				new THREE.MeshBasicMaterial({
					map:  THREE.ImageUtils.loadTexture('images/galaxy_starfield.png'),
					side: THREE.BackSide
				})
		);
	}

}());