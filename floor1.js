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
        'ceiling': 'ceiling',
        'solid': true
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
        ],
        'solid': true
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
    'z': {
        'type': 'wall',
        'texture': 'doubledoor-left',
        'solid': true
    },
    'x': {
        'type': 'wall',
        'texture': 'doubledoor-right',
        'solid': true
    },
    'e': {
        'type': 'wall',
        'texture': 'elevator-up',
        'action': function () {
            warp(floor1, floor1Assets);
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
    'h': {
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
        'solid': true
    },
    'g': {
        'type': 'short',
        'texture': [
            'counter-side', // e
            'counter-side', // w
            'guestbook', // top
            'counter-top', // bottom
            'counter-side', // s
            'counter-side' // n
        ],
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true,
        'addon': 'flower'
    },
    'o': {
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
        'addon': 'phone+bell'
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
    'p': {
        'type': 'player',
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
    'i': {
        'type': 'sprite',
        'texture': 'coatrack',
        'floor': 'floor',
        'ceiling': 'ceiling',
        'solid': true
    }
};

var floor1 = [
    'wnmwwwwwwww',
    'w  b  jwwww',
    'whohghwwwww',
    'w        lw',
    'w         e',
    'w   c  c  y',
    'wl pi    lw',
    'wwxzwwwwwww'
];
