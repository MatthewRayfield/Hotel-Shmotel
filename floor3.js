var floor3Assets = {
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
            warp(floor4, floor4Assets, 3, 11, 0);
        }
    },
    't': {
        'type': 'wall',
        'texture': 'elevator-down',
        'action': function () {
            warp(floor2, floor2Assets, 4, 11, 0);
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
            warp(brendaroom, brendaroomAssets, 2, 4, 0);
        }
    },
    'k': {
        'type': 'wall',
        'texture': 'whitedoor',
        'action': function () {
            warp(teethroom, teethroomAssets, 2, 4, 0);
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

var floor3 = [
    'wwwwwww',
    'wwl  lww',
    'wj c  jw',
    'wwl  lww',
    'wd13c2jw',
    'wwl5 lww',
    'wj c4 jw',
    'wwl  lww',
    'wj  c jw',
    'wwl  lww',
    'wj c  jw',
    'wwl  lww',
    'wwytewww',
    'wwwwwwww',
];
