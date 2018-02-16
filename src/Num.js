(function () {
    "use strict";

    const { foldr } = require ("./Array");

    //    plus :: Number -> Number -> Number
    //    Haskell (+)
    const plus = x => y => y + x;
    //    minus :: Number -> Number -> Number
    //    Haskell (-)
    const minus = x => y => y - x;
    //    times :: Number -> Number -> Number
    //    Haskell (*)
    const times = x => y => y * x;
    //    divide :: Number -> Number -> Number
    //    Haskell (/)
    const divide = x => y => y / x;
    //    pow :: Number -> Number -> Number
    //    Haskell (^)
    const pow = x => y => Math.pow (y, x);

    //    quot :: Number -> Number -> Number
    const quot = x => y => ~~ (y / x);
    //    rem :: Number -> Number -> Number
    const rem = x => y => y % x;
    //    div :: Number -> Number -> Number
    const div = x => y => Math.floor (y / x);
    //    mod :: Number -> Number -> Number
    const mod = x => y => y - (x * Math.floor (y / x));

    //    sum :: [Number] -> Number
    const sum = foldr (plus) (0);
    //    product :: [Number] -> Number
    const product = foldr (times) (1);

    //    max :: Number -> Number -> Number
    const max = x => y => x > y ? x : y;
    //    min :: Number -> Number -> Number
    const min = x => y => x < y ? x : y;

    module.exports = {
        plus, minus, times, divide, pow,
        quot, rem, div, mod,
        sum, product,
        max, min
    };
})();

