var floor1Assets = {
    'b': { // bellhop
        'type': 'sprite',
        'texture': 'bellhop-1',
        'animation': [
            'bellhop-1',
            'bellhop-2',
            'bellhop-1',
            'bellhop-2',
            'bellhop-blink',
            'bellhop-2',
            'bellhop-1',
            'bellhop-2'
        ],
        'floor': 'floor',
        'ceiling': 'ceiling'
    },
    'w': {
        'type': 'wall',
        'texture': [
            'tallwall', // e
            'tallwall', // w
            'floor', // ?
            'floor', // ?
            'tallwall', // s
            'tallwall' // n
        ]
    },
    ' ': {
        'type': 'open',
        'floor': 'floor',
        'ceiling': 'ceiling'
    },
    'p': {
        'type': 'player',
        'floor': 'floor',
        'ceiling': 'ceiling'
    },
    'l': {
        'type': 'sprite',
        'texture': 'plant',
        'floor': 'floor',
        'ceiling': 'ceiling'
    }
};

var floor1 = [
    'wwwwwwwwww',
    'w        w',
    'w  wwww  w',
    'w  w  w  w',
    'w  w  w  w',
    'w  w bw  w',
    'w  w  w  w',
    'w     l  w',
    'w   p   lw',
    'wwwwwwwwww'
];
