(function () {
    "use strict";

    //    Pair :: a -> b -> Pair a b
    const Pair = x => y => [x, y];

    //    fst :: Pair a b -> a
    const fst = tuple => tuple [0];

    //    snd :: Pair a b -> b
    const snd = tuple => tuple [1];

    module.exports = {
        Pair, fst, snd
    };
})();
