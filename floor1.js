var floor1Assets = {
    'b': { // bellhop
        'type': 'sprite',
        'texture': 'bellhop-1',
        'animation': [
            'bellhop-1',
            'bellhop-2',
            'bellhop-1',
            'bellhop-2',
            'bellhop-blink',
            'bellhop-2',
            'bellhop-1',
            'bellhop-2'
        ],
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true
    },
    'w': {
        'type': 'wall',
        'texture': [
            'tallwall', // e
            'tallwall', // w
            'floor', // ?
            'floor', // ?
            'tallwall', // s
            'tallwall' // n
        ],
        'solid': true
    },
    'n': {
        'type': 'wall',
        'texture': 'mailslots-left',
        'solid': true
    },
    'm': {
        'type': 'wall',
        'texture': 'mailslots-right',
        'solid': true
    },
    'z': {
        'type': 'wall',
        'texture': 'doubledoor-left',
        'solid': true
    },
    'x': {
        'type': 'wall',
        'texture': 'doubledoor-right',
        'solid': true
    },
    'e': {
        'type': 'wall',
        'texture': 'elevator-up',
        'action': function () {
            warp(floor2, floor2Assets, 3, 11, 0);
        }
    },
    'y': {
        'type': 'wall',
        'texture': 'elevator-buttons',
        'solid': true
    },
    'j': {
        'type': 'wall',
        'texture': 'whitedoor',
        'solid': true
    },
    'h': {
        'type': 'short',
        'texture': [
            'counter-side', // e
            'counter-side', // w
            'counter-top', // top
            'counter-top', // bottom
            'counter-side', // s
            'counter-side' // n
        ],
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true
    },
    't': {
        'type': 'short',
        'texture': [
            'counter-side', // e
            'counter-side', // w
            'counter-top', // top
            'counter-top', // bottom
            'counter-side', // s
            'counter-side' // n
        ],
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true,
        //'addon': 'sandwhich',
        'action': function () {
            var self = this;
            var sprite = map[1][3],
                orig = sprite.animation;

            sprite.animation = [
                'bellhop-2',
                'bellhop-talk',
                'bellhop-2',
                'bellhop-talk',
                'bellhop-2',
                'bellhop-blink',
            ];

            if (flags['dangone'] && flags['brendagone'] && flags['nedgone']) {
                    runDialogue(
                        [
                            ['Whoa! You did it!', 'bellhop-8'],
                            ['I saw them all leave in a hurry.', 'bellhop-9'],
                            ['Here\'s the payment we agreed upon.', 'bellhop-10'],
                            ['One peanut butter and celery sandwhich, on whole-wheat.', 'bellhop-11'],
                        ],
                        function () {
                            var mesh = new THREE.Mesh(spriteGeometry, makeMaterial('sandwhich', true));
                            mesh.position.set(3 * 200, 0, 2 * 200);
                            scene.add(mesh);
                            setTimeout(function () {movementLocked = true}, 10);

                            gamewin.style.display = 'block';
                            timebox.innerHTML = ((new Date()).getTime() - startTime) /1000/60;

                            sprite.animation = orig;
                        }
                    );
            }
            else {
                if (!flags['bellhop1']) {
                    runDialogue(
                        [
                            ['Oh... Hey there!', 'bellhop-1'],
                            ['So glad you could make it.', 'bellhop-2'],
                            ['You came highly recommended.', 'bellhop-3'],
                            ['We\'ve got 3 guests, that we just can\'t take anymore.', 'bellhop-4'],
                            ['We need your expertise to clear them out.', 'bellhop-5'],
                            ['But, we\'re a little short staffed, so if you need anything, just look around.', 'bellhop-6'],
                        ],
                        function () {
                            flags['bellhop1'] = true;
                            sprite.animation = orig;
                        }
                    );
                }
                else {
                    runDialogue(
                        [
                            ['Let me know when you\'re done.', 'bellhop-7'],
                        ],
                        function () {
                            sprite.animation = orig;
                        }
                    );
                }
            }
        }
    },
    'g': {
        'type': 'short',
        'texture': [
            'counter-side', // e
            'counter-side', // w
            'guestbook', // top
            'counter-top', // bottom
            'counter-side', // s
            'counter-side' // n
        ],
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true,
        'addon': 'flower'
    },
    'o': {
        'type': 'short',
        'texture': [
            'counter-side', // e
            'counter-side', // w
            'counter-top', // top
            'counter-top', // bottom
            'counter-side', // s
            'counter-side' // n
        ],
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true,
        'addon': 'phone+bell'
    },
    's': {
        'type': 'short',
        'texture': [
            'counter-side', // e
            'counter-side', // w
            'counter-top', // top
            'counter-top', // bottom
            'counter-side', // s
            'counter-side' // n
        ],
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true,
        'addon': 'flower'
    },
    'c': {
        'type': 'sprite',
        'texture': 'chandelier',
        'floor': 'floor',
        'ceiling': 'ceiling'
    },
    ' ': {
        'type': 'open',
        'floor': 'floor',
        'ceiling': 'ceiling'
    },
    'l': {
        'type': 'sprite',
        'texture': 'plant',
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true
    },
    '3': {
        'type': 'sprite',
        'texture': 'plant3',
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true
    },
    'i': {
        'type': 'sprite',
        'texture': 'coatrack',
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true
    }
};

var floor1 = [
    'wnmwwwwwwwww',
    'w  b  jwwwww',
    'whotghwwwwww',
    'w        lww',
    'w         ew',
    'w  c    c yw',
    'w3  i    lww',
    'wwxzwwwwwwww'
];
