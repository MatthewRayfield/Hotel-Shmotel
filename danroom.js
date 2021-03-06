var danroomAssets = {
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
            warp(floor2, floor2Assets, 2, 6, 3);
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
        'texture': 'plant2',
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true
    },
    'd': {
        'type': 'sprite',
        'texture': 'dan-1',
        'animation': [
            'dan-1',
            'dan-2',
            'dan-1',
            'dan-2',
            'dan-blink',
            'dan-2',
            'dan-1',
            'dan-2'
        ],
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true,
        'action': function () {
            var self = this,
                orig = self.animation;

            if (flags['dangone']) return;

            self.animation = [
                'dan-2',
                'dan-talk',
                'dan-2',
                'dan-talk',
                'dan-2',
                'dan-blink',
            ];

            if (flags['haveteeth']) {
                runDialogue(
                    [
                        ['WaAhH!? THoSE TeeTH!', 'dan-6'],
                        ['OKaY ALRiGHT, i\'M OuTTa HeRE!', 'dan-7'],
                    ],
                    function () {
                        flags['dangone'] = true;
                        shrinkAway(self.mesh);
                        self.solid = false;

                        self.animation = orig;
                    }
                );
            }
            else {
                if (!flags['dan1']) {
                    runDialogue(
                        [
                            ['Huh?! What\'chu want??', 'dan-1'],
                            ['Dirty?! Look, this place was dirty before I got here...', 'dan-2'],
                            ['Leave?! Why?', 'dan-3'],
                            ['Scared?! Of you? You don\'t even have any teeth.', 'dan-4'],
                        ],
                        function () {
                            flags['dan1'] = true;
                            self.animation = orig;
                        }
                    );
                }
                else {
                    runDialogue(
                        [
                            ['Huh?! You might be scarier with teeth...', 'dan-5'],
                        ],
                        function () {
                            self.animation = orig;
                        }
                    );
                }
            }
        },
        'hideif': 'dangone'
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
    '0': {
        'type': 'short',
        'texture': [
            'bedside', // e
            'bedside', // w
            'bed-dirt', // top
            'counter-top', // bottom
            'bedside', // s
            'bedside' // n
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
        'addon': 'phone'
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
    '1': {
        'type': 'open',
        'floor': 'dirt-1',
        'ceiling': 'ceiling'
    },
    '2': {
        'type': 'open',
        'floor': 'dirt-2',
        'ceiling': 'ceiling'
    },
    '3': {
        'type': 'open',
        'floor': 'dirt-3',
        'ceiling': 'ceiling'
    },
    '4': {
        'type': 'open',
        'floor': 'dirt-4',
        'ceiling': 'ceiling'
    },
};

var danroom = [
    'wwwwww',
    'w0 tfw',
    'wb1d4w',
    'w2c3 x',
    'w   lw',
    'wwjwww',
    'wwwwww',
];
