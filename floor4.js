var floor4Assets = {
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
        'texture': 'elevator-up-yellow',
        'action': function () {
            warp(floor3, floor3Assets, 3, 11, 0);
        }
    },
    't': {
        'type': 'wall',
        'texture': 'elevator-down-yellow',
        'action': function () {
            warp(floor3, floor3Assets, 4, 11, 0);
        }
    },
    'y': {
        'type': 'wall',
        'texture': 'elevator-buttons-yellow',
        'solid': true
    },
    'j': {
        'type': 'wall',
        'texture': 'reddoor',
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
    '2': {
        'type': 'sprite',
        'texture': 'plant2',
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
    'd': {
        'type': 'wall',
        'texture': 'reddoor',
        'action': function () {
            warp(danroom, danroomAssets, 2, 4, 0);
        }
    },
    'u': {
        'type': 'wall',
        'texture': 'door-yellow',
        'action': function () {
            warp(janitor1, janitor1Assets, 2, 2, 0);
        }
    },
};

var floor4 = [
    'wwwuwwww',
    'ww2  3ww',
    'wj  c jw',
    'ww3  2ww',
    'wj c  jw',
    'ww2  3ww',
    'wj  c jw',
    'ww3  2ww',
    'wj c  jw',
    'ww2  3ww',
    'wj  c jw',
    'ww3  2ww',
    'wwytwwww',
    'wwwwwwww',
];
