var janitor1Assets = {
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
    'x': {
        'type': 'wall',
        'texture': 'door',
        'action': function () {
            warp(floor4, floor4Assets, 3, 1, 2);
        }
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
        'addon': 'paint',
        'action': function () {
            var self = this;

            if (flags['havered']) {
                return;
            }

            scene.remove(self.mesh);

            flags['havered'] = true;
            runDialogue(
                [
                    ['You found red paint!', ''],
                ],
                function () {
                }
            );
        },
        'hideif': 'havered'
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
    'i': {
        'type': 'sprite',
        'texture': 'coatrack',
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true
    }
};

var janitor1 = [
    'wnmww',
    'wi fw',
    'w  lw',
    'wwxww',
    'wwwww',
];
