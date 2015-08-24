var camera, scene, renderer;

var movementLocked = false;
var playerDirection = 0;
var playerX;
var playerZ;

var map = [];

var sprites = [];

var textureCache = {};
var materialCache = {};
var meshes = [];

var wallGeometry = new THREE.BoxGeometry(200, 400, 200),
    shortGeometry = new THREE.BoxGeometry(200, 100, 200),
    flatGeometry = new THREE.PlaneGeometry(200, 200),
    spriteGeometry = new THREE.PlaneGeometry(200, 400);

var fader;
var textbox;
var textboxInner;

var handr;
var handl;

var waitingForKey;

var startTime = (new Date()).getTime();
var gamewin;
var timebox;

var flags = {};

var mobile = /ipad|iphone|ipod|android/.test(navigator.userAgent.toLowerCase()) && !window.MSStream;

init();
animate();

window.onload = function () {
    fader = document.getElementById('fader');
    textbox = document.getElementById('textbox');
    textboxInner = document.getElementById('textbox-inner');
    gamewin = document.getElementById('gamewin');
    timebox = document.getElementById('time');

    if (mobile) setupTouches();

    warp(floor1, floor1Assets, 3, 6, 0);
    //warp(danroom, danroomAssets, 2, 4, 0);
    //warp(teethroom, teethroomAssets, 2, 4, 0);
    //warp(brendaroom, brendaroomAssets, 2, 4, 0);
    //warp(floor4, floor4Assets, 3, 11, 0);
    //warp(janitor2, janitor2Assets, 3, 3, 0);
};

function loadTexture(textureName) {
    var texture = textureCache[textureName];

    if (!texture) {
        textureCache[textureName] = texture = THREE.ImageUtils.loadTexture('images/' + textureName + '.gif');
    }

    return texture;
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
        material = materialCache[textureName];

        if (!material) {
            texture = loadTexture(textureName);
            texture.anisotropy = renderer.getMaxAnisotropy();
            texture.magFilter = THREE.NearestFilter;
            texture.minFilter = THREE.LinearMipMapLinearFilter;

            material = new THREE.MeshBasicMaterial({map: texture, transparent: transparent});
            material.alphaTest = .9;

            materialCache[textureName] = material;
        }

        return material;
    }
}

function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 5000);

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x222222, 0.0008);

    scene.add(camera);

    window.addEventListener( 'resize', onWindowResize, false );
}

function clean() {
    var key;

    camera.remove(handl);
    camera.remove(handr);
    handl = handr = null;

    // I can't tell if this help memory or not ; ]

    meshes.forEach(function (mesh) {
        scene.remove(mesh);
        //mesh.dispose();
        //mesh.deallocate();
    });

    for (key in textureCache) {
        textureCache[key].dispose();
    }

    for (key in materialCache) {
        materialCache[key].dispose();
    }

    meshes = [];
    textureCache = {};
    materialCache = {};
    map = [];
    sprites = [];

    if (flags['havered']) {
        handl = new THREE.Mesh(spriteGeometry, makeMaterial('left-red', true));
    }
    else {
        handl = new THREE.Mesh(spriteGeometry, makeMaterial('left-hand', true));
    }
    handl.position.z = -20;
    handl.position.y = -7;
    handl.position.x = -8;
    handl.rotation.x = -.5;
    handl.rotation.z = .3;
    handl.scale.set(.05, .05, .05)
    camera.add(handl);

    if (flags['havered']) {
        handr = new THREE.Mesh(spriteGeometry, makeMaterial('right-red', true));
    }
    else {
        handr = new THREE.Mesh(spriteGeometry, makeMaterial('right-hand', true));
    }
    handr.position.z = -20;
    handr.position.y = -7;
    handr.position.x = 8;
    handr.rotation.x = -.5;
    handr.rotation.z = -.3;
    handr.scale.set(.05, .05, .05)
    camera.add(handr);
}

function buildMap(data, assets) {
    var x,
        z,
        mapWidth = data[0].length,
        mapHeight = data.length,
        mesh,
        asset,
        tile;

    map = [];
    for (z = 0; z < mapHeight; z ++) {
        map[z] = [];
        for (x = 0; x < mapWidth; x ++) {
            asset = assets[data[z][x]];

            tile = {'type': asset.type, 'solid': asset.solid, 'animation': asset.animation, 'action': asset.action};

            if (asset.type == 'wall') {
                mesh = new THREE.Mesh(wallGeometry, makeMaterial(asset.texture));
                mesh.position.set(x * 200, 0, z * 200);
            }
            else if (asset.type == 'short') {
                mesh = new THREE.Mesh(shortGeometry, makeMaterial(asset.texture));
                mesh.position.set(x * 200, -150, z * 200);

                scene.add(mesh);
                meshes.push(mesh);

                mesh = null;
                if (!asset.hideif || !flags[asset.hideif]) {
                    if (asset.addon) {
                        mesh = new THREE.Mesh(spriteGeometry, makeMaterial(asset.addon, true));
                        mesh.position.set(x * 200, 0, z * 200);

                        sprites.push(tile);
                    }
                }
            }
            else if (asset.type == 'sprite') {
                if (!asset.hideif || !flags[asset.hideif]) {
                    mesh = new THREE.Mesh(spriteGeometry, makeMaterial(asset.texture, true));
                    mesh.position.set(x * 200, 0, z * 200);

                    sprites.push(tile);
                }
                else {
                    tile.solid = false;
                }
            }

            if (mesh) {
                scene.add(mesh);
                meshes.push(mesh);

                tile.mesh = mesh;
            }

            if (asset.floor) {
                mesh = new THREE.Mesh(flatGeometry, makeMaterial(asset.floor));
                mesh.position.set(x * 200, -200, z * 200);
                mesh.rotation.x = Math.PI / 180 * -90;
                scene.add(mesh);
                meshes.push(mesh);
            }

            if (asset.ceiling) {
                mesh = new THREE.Mesh(flatGeometry, makeMaterial(asset.ceiling));
                mesh.position.set(x * 200, 200, z * 200);
                mesh.rotation.x = Math.PI / 180 * 90;
                scene.add(mesh);
                meshes.push(mesh);
            }

            mesh = null;

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

    if (handr && handl) {
        var t = (new Date()).getTime();

        handr.position.z = -20;
        handr.position.y = -7 - (.5*Math.cos(t / 400));
        handr.position.x = 8;
        handr.rotation.x = -.5;
        handr.rotation.z = -.3 - (.1*Math.sin(t / 500));

        handl.position.z = -20;
        handl.position.y = -7 - (.5*Math.cos(t / 500));
        handl.position.x = -8;
        handl.rotation.x = -.5;
        handl.rotation.z = .3 + (.1*Math.sin(t / 400));
    }

    renderer.render( scene, camera );
}

function keydown (event) {
    var key = event.which;

    if (waitingForKey) {
        waitingForKey();
        return;
    }

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
}

document.addEventListener('keydown', keydown);


function slowMove(axis, direction) {
    var i = 20,
        units = direction * 200,
        increment = units / i,
        tile;

    if (movementLocked) return;

    if (axis) {
        tile = map[playerZ][playerX + direction];
        if (!tile) return;
        if (tile.action) {
            tile.action.call(tile);
        }
        if (tile.solid) return;
        playerX += direction;
    }
    else {
        tile = map[playerZ + direction][playerX];
        if (!tile) return;
        if (tile.action) {
            tile.action.call(tile);
        }
        if (tile.solid) return;
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
            movementLocked = false;
        }
    }

    movementLocked = true;
    add();
}

function slowRotate(direction) {
    var i = 20,
        radians = Math.PI / 180 * (90 * direction),
        increment = radians / i;

    if (movementLocked) return;

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
            movementLocked = false;
        }
    }

    movementLocked = true;
    add();
}

function warp(data, assets, pX, pZ, pD) {
    fader.style.animationName = 'fade';
    fader.style.webkitAnimationName = 'fade';

    setTimeout(function () {
        fader.style.animationName = '';
        fader.style.webkitAnimationName = '';
    }, 1000);

    setTimeout(function () {
        playerX = pX;
        playerZ = pZ;
        playerDirection = pD;
        camera.rotation.y = Math.PI / 180 * 90* pD;
        camera.position.set(pX * 200, 0, pZ * 200);

        clean();
        buildMap(data, assets);
    }, 500);
}

function runDialogue(segments, callback) {
    var i = 0,
        audio;

    movementLocked = true;

    function show() {
        textbox.style.opacity = 1;
        textboxInner.innerHTML = segments[i][0];

        textboxInner.style.opacity = '1';
        textboxInner.style.animationName = 'opentext';
        textboxInner.style.webkitAnimationName = 'opentext';

        if (segments[i][1]) {
            audio = playSound(segments[i][1]);
        }

        waitingForKey = function () {
            waitingForKey = null;

            if (audio) {
                audio.pause();
            }

            i ++;

            textboxInner.style.opacity = '0';
            textboxInner.style.animationName = 'closetext';
            textboxInner.style.webkitAnimationName = 'closetext';

            if (i < segments.length) {
                setTimeout(show, 500);
            }
            else {
                if (callback) callback();
                movementLocked = false;
            }
        };
    }

    show();
}

function playSound(fileName) {
    var audio = new Audio('sounds/' + fileName + '.mp3');

    audio.play();

    return audio;
}

function setupTouches() {
    document.getElementById('button-box').style.display = 'block';

    document.getElementById('touchup').addEventListener('touchmove', function (event) {
        event.preventDefault();
    });

    document.getElementById('touchup').addEventListener('click', function (event) {
        event.preventDefault();
        keydown({which: 38});
    });
    document.getElementById('touchdown').addEventListener('click', function (event) {
        event.preventDefault();
        keydown({which: 40});
    });
    document.getElementById('touchleft').addEventListener('click', function (event) {
        event.preventDefault();
        keydown({which: 37});
    });
    document.getElementById('touchright').addEventListener('click', function (event) {
        event.preventDefault();
        keydown({which: 39});
    });
}

function shrinkAway(mesh) {
    var i = 10;

    function shrink() {
        if (i) {
            mesh.scale.set(i*.1, i*.1, i*.1);
            mesh.position.y = (10-i) * 20;
            i --;
            setTimeout(shrink, 50);
        }
        else {
            scene.remove(mesh);
        }
    }

    shrink();
}
