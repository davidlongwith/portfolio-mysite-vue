/*
 * Generate Sprites (Endless Stars, Three.js)
 *
 * Instructions:
 * 1. this script file must be included before main application script (application.js needs it to run)
 * 2. call generateSprites() in main initialize function just after creating new scene()
 * 3. call spritesInMotion() in animate loop
 *
 */

// global
let spriteArray = [];

function generateSprites() {
  for (let i = 0; i < 1000; i++) {
    // sprite vertices
    let spriteGeometry = new THREE.PlaneGeometry(); // default 1

    // load texture
    let textureLoader = new THREE.TextureLoader();
    let sprite1 = textureLoader.load("textures/sprites/spark1.png");

    // configure material to apply
    let spriteMaterial = new THREE.PointsMaterial({
      size: 10, // size parameter (default 1.0)
      map: sprite1, // sprite texture data to define colors
      blending: THREE.AdditiveBlending, // blending equation for material's RGBA, default is NormalBlending
      depthTest: false, // depth test material for frag shader (default true)
      transparent: true // using a .png with transparency (default false)
    });
    spriteMaterial.color.setHSL(0.9, 0.05, 0.5);

    // combine geometry + material and set sprite position properties
    newSprite = new THREE.Points(spriteGeometry, spriteMaterial);
    newSprite.position.x = getRandomIntInclusive(-1000, 1000); // (min, max) left, right
    newSprite.position.y = getRandomIntInclusive(-1000, 1000); // (min, max) down, up
    newSprite.position.z = getRandomIntInclusive(-1000, 1000); // (min, max) far, near

    // collect new sprites in array as loop continues
    spriteArray.push(newSprite);

    // add single new sprite to scene
    scene.add(newSprite);
  }
}

// move sprites and reposition as they move off screen
function spritesInMotion() {
  for (let i = 0; i < spriteArray.length; i++) {
    spriteArray[i].position.z += 1;
    if (spriteArray[i].position.z > 1000) {
      spriteArray[i].position.z = -1000;
    }
  }
}

// Math Helper: random integer between two values, inclusive (Mozilla.org)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
