(function () {
    var b = { // bellhop
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
    };
    var w = {
        'type': 'wall',
        'texture': [
            'tallwall', // e
            'tallwall', // w
            'floor', // ?
            'floor', // ?
            'tallwall', // s
            'tallwall' // n
        ]
    };
    var o = {
        'type': 'open',
        'floor': 'floor',
        'ceiling': 'ceiling'
    };
    var p = {
        'type': 'player',
        'floor': 'floor',
        'ceiling': 'ceiling'
    };

    window.floor1 = [
        [w, w, w, w, w,  w, w, w, w, w],
        [w, o, o, o, o,  o, o, o, o, w],
        [w, o, o, w, w,  w, w, o, o, w],
        [w, o, o, w, o,  o, w, o, o, w],
        [w, o, o, w, o,  o, w, o, o, w],

        [w, o, o, w, o,  b, w, o, o, w],
        [w, o, o, w, o,  o, w, o, o, w],
        [w, o, o, o, o,  o, o, o, o, w],
        [w, o, o, o, p,  o, o, o, o, w],
        [w, w, w, w, w,  w, w, w, w, w],
    ];
})();
