var janitor2Assets = {
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
            warp(floor2, floor2Assets, 3, 1, 2);
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
        'addon': 'flower',
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
    },
    'd': {
        'type': 'sprite',
        'texture': 'ned-1',
        'animation': [
            'ned-1',
            'ned-2',
            'ned-1',
            'ned-2',
            'ned-blink',
            'ned-2',
            'ned-1',
            'ned-2'
        ],
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true,
        'action': function () {
            var self = this,
                orig = self.animation;

            if (flags['nedgone']) return;

            self.animation = [
                'ned-2',
                'ned-talk',
                'ned-2',
                'ned-talk',
                'ned-2',
                'ned-blink',
            ];

            runDialogue(
                [
                    ['Waaaaaa! Who are you??!', 'ned-1'],
                    ['FBI? CIA? NSA? PTA?', 'ned-2'],
                    ['You don\'t have to convince me!! I\'m outta here!', 'ned-3'],
                ],
                function () {
                    flags['nedgone'] = true;
                    shrinkAway(self.mesh);
                    self.animation = orig;
                }
            );
        },
        'hideif': 'nedgone'
    },
};

var janitor2 = [
    'wnmww',
    'wd fw',
    'wi lw',
    'wwxww',
    'wwwww',
];
