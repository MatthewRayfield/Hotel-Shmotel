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
        'texture': 'plant',
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

            if (!flags['dan1']) {
                runDialogue(
                    [
                        ['Huh?! What\'chu want??', ''],
                        ['Dirty?! Look, this place was dirty before I got here...', ''],
                        ['Leave?! Why?', ''],
                        ['Scared?! Of you? You don\'t even have any teeth.', ''],
                    ],
                    function () {
                        flags['dan1'] = true;
                        self.animation = orig;
                    }
                );
            }
            else {
                if (flags['haveteeth']) {
                    runDialogue(
                        [
                            ['WaAhH!? THoSE TeeTH!', ''],
                            ['OKaY OKaY, i\'M OuTTa HeRE!', ''],
                        ],
                        function () {
                            flags['dangone'] = true;
                            shrinkAway(self.mesh);

                            self.animation = orig;
                        }
                    );
                }
                else {
                    runDialogue(
                        [
                            ['Huh?! You might be scarier with some teeth...', ''],
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
};

var danroom = [
    'wwwwww',
    'wb tfw',
    'wb d w',
    'w c  x',
    'w   lw',
    'wwjwww',
    'wwwwww',
];
