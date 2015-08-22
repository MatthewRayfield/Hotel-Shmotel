var camera, scene, renderer;

var moving = false;
var playerDirection = 0;
var playerX;
var playerZ;

var map = [];

var sprites = [];

init();
animate();

function loadTexture(textureName) {
    return THREE.ImageUtils.loadTexture('images/' + textureName + '.gif');
}

function makeMaterial(textureName, transparent) {
    var materials = [],
        material,
        texture;

    transparent = transparent || false;

    if (textureName.constructor === Array) {
        textureName.forEach(function (textureName) {
            materials.push(makeMaterial(textureName));
        });

        return new THREE.MeshFaceMaterial(materials);
    }
    else {
        texture = loadTexture(textureName);
        texture.anisotropy = renderer.getMaxAnisotropy();
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.LinearMipMapLinearFilter;

        material = new THREE.MeshBasicMaterial({map: texture, transparent: transparent});
        material.alphaTest = .9;

        return material;
    }
}

function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 2500);

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x222222, 0.0008);

    window.addEventListener( 'resize', onWindowResize, false );

    buildMap(floor1, floor1Assets);
}

function buildMap(data, assets) {
    var x,
        z,
        mapWidth = data[0].length,
        mapHeight = data.length,
        mesh,
        asset,
        tile,
        wallGeometry = new THREE.BoxGeometry(200, 400, 200),
        spriteGeometry = new THREE.PlaneGeometry(200, 400);

    map = [];
    for (z = 0; z < mapHeight; z ++) {
        map[z] = [];
        for (x = 0; x < mapWidth; x ++) {
            asset = assets[data[z][x]];

            tile = {'type': asset.type};

            if (asset.type == 'wall') {
                mesh = new THREE.Mesh(wallGeometry, makeMaterial(asset.texture));
                mesh.position.set(x * 200, 0, z * 200);

                scene.add(mesh);
            }
            else if (asset.type == 'player') {
                playerX = x;
                playerZ = z;
                camera.position.set(x * 200, 0, z * 200);

                tile.type = 'open';
            }
            else if (asset.type == 'sprite') {
                mesh = new THREE.Mesh(spriteGeometry, makeMaterial(asset.texture, true));
                mesh.position.set(x * 200, 0, z * 200);

                sprites.push(tile);

                scene.add(mesh);
            }

            if (mesh) {
                tile.mesh = mesh;
            }

            if (asset.floor) {
                mesh = new THREE.Mesh(wallGeometry, makeMaterial(asset.floor));
                mesh.position.set(x * 200, -400, z * 200);
                scene.add(mesh);
            }

            if (asset.ceiling) {
                mesh = new THREE.Mesh(wallGeometry, makeMaterial(asset.ceiling));
                mesh.position.set(x * 200, 400, z * 200);
                scene.add(mesh);
            }

            map[z][x] = tile;
        }
    }
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

    sprites.forEach(function (sprite) {
        var f = Math.floor((new Date()).getTime() / 300),
            texture;

        sprite.mesh.lookAt(camera.position);

        if (sprite.animation) {
            texture = loadTexture(sprite.animation[f % sprite.animation.length]);
            texture.anisotropy = renderer.getMaxAnisotropy();
            texture.magFilter = THREE.NearestFilter;
            texture.minFilter = THREE.LinearFilter;

            sprite.mesh.material.map = texture;
            sprite.mesh.material.needsUpdate = true;
        }
    });

    renderer.render( scene, camera );
}

document.addEventListener('keydown', function (event) {
    var key = event.which;

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

    if (key == 32) {
        console.log('SPACE');
    }
});

function slowMove(axis, direction) {
    var i = 20,
        units = direction * 200;
        increment = units / i;

    if (moving) return;

    if (axis) {
        if (map[playerZ][playerX + direction].type != 'open') return;
        playerX += direction;
    }
    else {
        if (map[playerZ + direction][playerX].type != 'open') return;
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
