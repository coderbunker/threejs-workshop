
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

    // Create a new camera to see the scene
    camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);
    camera.position.z = 1.5;

    // Create the 3d object rendering
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    //append it on the HTML
    webglEl.appendChild(renderer.domElement);  

    createParticleSystem();

    controls = new THREE.TrackballControls(camera);

    function render() {
      // let the browser decide how much FPS it can calculate
      requestAnimationFrame(render);
      // render the 3d scene
      renderer.render(scene, camera);
      //update rendering according to mouse control  
      controls.update();
    }

    //start the recursive function to render it
    render();
}());


function createSphere(radius, segments) {
  return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshPhongMaterial({
           map:         THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/codersfield/threejs-workshop/master/images/2_no_clouds_4k.jpg'),
           bumpMap:     THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/codersfield/threejs-workshop/master/images/elev_bump_4k.jpg'),
           // Lod the bumping
           bumpScale:   0.005,
           specularMap: THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/codersfield/threejs-workshop/master/images/water_4k.png'),
           // And the specular light for water reflection
           specular:    new THREE.Color('grey')

           // Three.js takes care of everything
         }));
}

/**/


/**/


function createClouds(radius, segments) {        
      return new THREE.Mesh(        
            new THREE.SphereGeometry(radius + 0.003, segments, segments),        
            new THREE.MeshPhongMaterial({        
               map:         THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/codersfield/threejs-workshop/master/images/fair_clouds_4k.png'),        
               transparent: true        
            })
            );
           }




function createStars(radius, segments) {
  return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({

           map:  THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/codersfield/threejs-workshop/master/images/galaxy_starfield.png'),
           side: THREE.BackSide
        }))                 
 }    



// // Maybe a particles system ??

// //Next in our animation loop we’re going to pass over each particle and update its velocity and position as well as reset it should it go off the bottom of the screen:


// // animation loop
// function update() {

//   // // add some rotation to the system
//   // particleSystem.rotation.y += 0.01;

//   // var pCount = particleCount;
//   // while (pCount--) {

//   //   // get the particle
//   //   var particle =
//   //     particles.vertices[pCount];

//   //   // check if we need to reset
//   //   if (particle.position.y < -200) {
//   //     particle.position.y = 200;
//   //     particle.velocity.y = 0;
//   //   }

//   //   // update the velocity with
//   //   // a splat of randomniz
//   //   particle.velocity.y -= Math.random() * .1;

//   //   // and the position
//   //   particle.position.addSelf(
//   //     particle.velocity);
//   // }

//   // // flag to the particle system
//   // // that we've changed its vertices.
//   // particleSystem.
//   //   geometry.
//   //   __dirtyVertices = true;

//   // draw
//   renderer.render(scene, camera);

//   // set up the next call
//   requestAnimationFrame(update);

// }