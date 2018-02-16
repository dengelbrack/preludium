// todo: span, break, splitAt, scan*, zip3*, unzip*, (!!)
(function () {
    "use strict";

    const A = require ("./Array");
    const B = require ("./Boolean");
    const E1 = require ("./Either");
    const E2 = require ("./Eq");
    const F = require ("./Func");
    const M1 = require ("./Maybe");
    const M2 = require ("./Meta");
    const M3 = require ("./Monad");
    const N = require ("./Num");
    const P = require ("./Pair");
    const S1 = require ("./Show");
    const S2 = require ("./String");
    const W = require ("./Writer");

    module.exports =
        { ...A
        , ...B
        , ...E1
        , ...E2
        , ...F
        , ...M1
        , ...M2
        , ...M3
        , ...N
        , ...P
        , ...S1
        , ...S2
        , ...W
        };
})();

