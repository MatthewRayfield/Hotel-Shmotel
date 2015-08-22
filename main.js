var camera, scene, renderer;
var map = [
    [1, 1, 1, 1, 1,  1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0,  0, 0, 0, 0, 1],
    [1, 0, 0, 1, 1,  1, 1, 0, 0, 1],
    [1, 0, 0, 1, 0,  0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0,  0, 1, 0, 0, 1],

    [1, 0, 0, 1, 0,  0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0,  0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0,  0, 0, 0, 0, 1],
    [1, 0, 0, 0, 2,  0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1,  1, 1, 1, 1, 1],
];
var keys = {};
var moving = false;
var playerDirection = 0;
var playerX;
var playerZ;

init();
animate();

function init() {
    var x,
        z,
        mapWidth,
        mapHeight,
        mesh;

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    //

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 2500);
    camera.position.z = 400;

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x222222, 0.0008);

    var geometry = new THREE.BoxGeometry( 200, 200, 200 );

    var texture = THREE.ImageUtils.loadTexture( 'crate.gif' );
    texture.anisotropy = renderer.getMaxAnisotropy();
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.LinearMipMapLinearFilter;

    var material = new THREE.MeshBasicMaterial( { map: texture } );

    //

    mapWidth = map[0].length;
    mapHeight = map.length;

    for (z = 0; z < mapHeight; z ++) {
        for (x = 0; x < mapWidth; x ++) {
            if (map[z][x] == 1) {
                mesh = new THREE.Mesh( geometry, material );

                mesh.position.set(x * 200, 0, z * 200);

                scene.add( mesh );
            }
            else if (map[z][x] == 2) {
                playerX = x;
                playerZ = z;
                camera.position.set(x * 200, 0, z * 200);
                map[z][x] = 0;
            }

            if (map[z][x] == 0) {
                mesh = new THREE.Mesh( geometry );
                mesh.position.set(x * 200, 200, z * 200);
                scene.add( mesh );

                mesh = new THREE.Mesh( geometry );
                mesh.position.set(x * 200, -200, z * 200);
                scene.add( mesh );
            }
        }
    }

    //

    window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
    requestAnimationFrame( animate );

    //mesh.rotation.x += 0.005;
    //mesh.rotation.y += 0.01;

    renderer.render( scene, camera );
}

document.addEventListener('keydown', function (event) {
    var key = event.which;

    console.log(event.which);

    if (key == 38) {
        if (playerDirection == 0) slowMove(0, -1);
        if (playerDirection == 3) slowMove(1, 1);
        if (playerDirection == 2) slowMove(0, 1);
        if (playerDirection == 1) slowMove(1, -1);
    }
    if (key == 40) {
        if (playerDirection == 0) slowMove(0, 1);
        if (playerDirection == 3) slowMove(1, -1);
        if (playerDirection == 2) slowMove(0, -1);
        if (playerDirection == 1) slowMove(1, 1);
    }

    if (key == 37) {
        slowRotate(1);
    }
    if (key == 39) {
        slowRotate(-1);
    }
});

function slowMove(axis, direction) {
    var i = 20,
        units = direction * 200;
        increment = units / i;

    if (moving) return;

    if (axis) {
        if (map[playerZ][playerX + direction]) return;
        playerX += direction;
    }
    else {
        if (map[playerZ + direction][playerX]) return;
        playerZ += direction;
    }

    function add() {
        if (i) {
            i --;

            if (axis) {
                camera.position.x += increment;
            }
            else {
                camera.position.z += increment;
            }

            setTimeout(add, 10);
        }
        else {
            moving = false;
        }
    }

    moving = true;
    add();
}

function slowRotate(direction) {
    var i = 20,
        radians = Math.PI / 180 * (90 * direction),
        increment = radians / i;

    if (moving) return;

    playerDirection += direction;
    if (playerDirection < 0) playerDirection = 3;
    if (playerDirection > 3) playerDirection = 0;

    function add() {
        if (i) {
            i --;

            camera.rotation.y += increment;

            setTimeout(add, 10);
        }
        else {
            moving = false;
        }
    }

    moving = true;
    add();
}

/*document.addEventListener('keydown', function (event) {
    console.log(event.which);

    keys[event.which] = true;
});

document.addEventListener('keyup', function (event) {
    keys[event.which] = false;
});*/
