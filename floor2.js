var floor2Assets = {
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
    'k': {
        'type': 'wall',
        'texture': 'whitedoor',
        'action': function () {
            warp(teethroom, teethroomAssets, 2, 4, 0);
        }
    },
    'u': {
        'type': 'wall',
        'texture': 'door',
        'action': function () {
            if (flags['havekey']) {
                warp(janitor2, janitor2Assets, 3, 3, 0);
            }
            else {
                runDialogue([
                    ['It\'s locked.']
                ]);
            }
        },
        'solid': true
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
};

var floor2 = [
    'wwwuwwww',
    'wwl  lww',
    'wj  c kw',
    'wwl  lww',
    'wj c  jw',
    'wwl  lww',
    'wd1 c jw',
    'wwl2 lww',
    'wj c  jw',
    'wwl  lww',
    'wj  c jw',
    'wwl  lww',
    'wwytewww',
    'wwwwwwww',
];
