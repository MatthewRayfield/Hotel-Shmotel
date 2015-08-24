var brendaroomAssets = {
    'w': {
        'type': 'wall',
        'texture': [
            'yellowwall', // e
            'yellowwall', // w
            'floor', // ?
            'floor', // ?
            'yellowwall', // s
            'yellowwall' // n
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
        'texture': 'whitedoor-yellow',
        'action': function () {
            warp(floor3, floor3Assets, 2, 4, 3);
        }
    },
    'x': {
        'type': 'wall',
        'texture': 'door-yellow',
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
        'texture': 'plant3',
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true
    },
    'd': {
        'type': 'sprite',
        'texture': 'brenda-1',
        'animation': [
            'brenda-1',
            'brenda-2',
            'brenda-1',
            'brenda-2',
            'brenda-blink',
            'brenda-2',
            'brenda-1',
            'brenda-2'
        ],
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true,
        'action': function () {
            var self = this,
                orig = self.animation;

            if (flags['brendagone']) return;

            self.animation = [
                'brenda-2',
                'brenda-talk',
                'brenda-2',
                'brenda-talk',
                'brenda-2',
                'brenda-blink',
            ];

            if (flags['havered']) {
                runDialogue(
                    [
                        ['Bahh! You\'ve startled my darlings with those ghastly red hands!', 'brenda-5'],
                        ['Come on sweeties! We\'re going back to Florida!', 'brenda-6'],
                    ],
                    function () {
                        flags['brendagone'] = true;
                        shrinkAway(self.mesh);

                        self.animation = orig;
                    }
                );
            }
            else {
                if (!flags['brenda1']) {
                    runDialogue(
                        [
                            ['Oh hehehe. My darlings are so taken with your lovely green hands.', 'brenda-1'],
                            ['They said no pets. But I just can\'t live without my sweeties.', 'brenda-2'],
                            ['Leave? No, this is our home now. Look how they love it here.', 'brenda-3'],
                        ],
                        function () {
                            flags['brenda1'] = true;
                            self.animation = orig;
                        }
                    );
                }
                else {
                    runDialogue(
                        [
                            ['They adore green. Red, not so much...', 'brenda-4'],
                        ],
                        function () {
                            self.animation = orig;
                        }
                    );
                }
            }
        },
        'hideif': 'brendagone'
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
    '6': {
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
        'addon': 'high-cat-2',
        'hideif': 'brendagone'
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
        'addon': 'high-cat-1',
        'hideif': 'havekey',
        'action': function () {
            var self = this;

            if (!flags['brendagone'] || flags['havekey']) return;

            runDialogue(
                [
                    ['Meow.', 'meow1'],
                    ['You found a key!', ''],
                    ['Meow.', 'meow2'],
                ],
                function () {
                    flags['havekey'] = true;
                    shrinkAway(self.mesh);
                }
            );
        }
    },
    '1': {
        'type': 'sprite',
        'texture': 'cat-1',
        'floor': 'floor',
        'ceiling': 'ceiling',
        'hideif': 'brendagone',
    },
    '2': {
        'type': 'sprite',
        'texture': 'cat-2',
        'floor': 'floor',
        'ceiling': 'ceiling',
        'hideif': 'brendagone',
    },
    '3': {
        'type': 'sprite',
        'texture': 'cat-3',
        'floor': 'floor',
        'ceiling': 'ceiling',
        'hideif': 'brendagone',
    },
    '4': {
        'type': 'sprite',
        'texture': 'cat-4',
        'floor': 'floor',
        'ceiling': 'ceiling',
        'hideif': 'brendagone',
    },
    '5': {
        'type': 'sprite',
        'texture': 'cat-5',
        'floor': 'floor',
        'ceiling': 'ceiling',
        'hideif': 'brendagone',
    },
};

var brendaroom = [
    'wwwwww',
    'w61tfw',
    'wb4d w',
    'w2c51x',
    'w352lw',
    'wwjwww',
    'wwwwww',
];
