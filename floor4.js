var floor4Assets = {
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
            warp(floor3, floor3Assets, 3, 11, 0);
        }
    },
    't': {
        'type': 'wall',
        'texture': 'elevator-down',
        'action': function () {
            warp(floor3, floor3Assets, 4, 11, 0);
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
        'type': 'wall',
        'texture': 'whitedoor',
        'action': function () {
            warp(danroom, danroomAssets, 2, 4, 0);
        }
    },
    'u': {
        'type': 'wall',
        'texture': 'door',
        'action': function () {
            warp(janitor1, janitor1Assets, 2, 2, 0);
        }
    },
};

var floor4 = [
    'wwwuwwww',
    'wwl  lww',
    'wj  c jw',
    'wwl  lww',
    'wj c  jw',
    'wwl  lww',
    'wj  c jw',
    'wwl  lww',
    'wj c  jw',
    'wwl  lww',
    'wj  c jw',
    'wwl  lww',
    'wwytwwww',
    'wwwwwwww',
];