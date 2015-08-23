var teethroomAssets = {
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
    'e': {
        'type': 'wall',
        'texture': 'elevator-up',
        'action': function () {
        }
    },
    't': {
        'type': 'wall',
        'texture': 'elevator-down',
        'action': function () {
            warp(floor1, floor1Assets, 9, 4, 1);
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
        'action': function () {
            warp(floor2, floor2Assets, 5, 2, 1);
        }
    },
    'x': {
        'type': 'wall',
        'texture': 'door',
        'solid': true
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
    'b': {
        'type': 'short',
        'texture': [
            'bedside', // e
            'bedside', // w
            'bedtop', // top
            'counter-top', // bottom
            'bedside', // s
            'bedside' // n
        ],
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true
    },
    'v': {
        'type': 'short',
        'texture': [
            'bedside', // e
            'bedside', // w
            'bedtop', // top
            'counter-top', // bottom
            'bedside', // s
            'bedside' // n
        ],
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true,
        'addon': 'teeth',
        'action': function () {
            var self = this;

            if (flags['haveteeth']) {
                return;
            }

            scene.remove(self.mesh);

            flags['haveteeth'] = true;
            runDialogue(
                [
                    ['You found teeth!', ''],
                ],
                function () {
                }
            );
        },
        'hideif': 'haveteeth'

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
    },
    'f': {
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
};

var teethroom = [
    'wwwwww',
    'wb tfw',
    'wv   w',
    'w c  x',
    'w   lw',
    'wwjwww',
    'wwwwww',
];
