(function () {
    "use strict";

    const { foldr } = require ("./Array");

    //    id :: a -> a
    const id = x => x;

    //    always :: a -> b -> a
    //    Haskell const
    const always = x => _ => x;

    //    apply :: (a -> b) -> a -> b
    //    Haskell ($)
    const apply = f => x => f (x);

    //    comp :: (y -> z, x -> y, ... a -> b) -> (a -> z)
    //    https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10
    const comp = (...fs) => foldr (comp2) (id) (fs);

    //    comp2 :: (b -> c) -> (a -> b) -> (a -> c)
    //    Haskell (.)
    const comp2 = f => g => x => f (g (x));

    //    comp3 :: (c -> d) -> (b -> c) -> (a -> b) -> (a -> d)
    const comp3 = f => g => h => x => f (g (h (x)));

    //    flip :: (a -> b -> c) -> (b -> a -> c)
    const flip = f => x => y => f (y) (x);

    //    curry :: ((a, b) -> c) -> (a -> b -> c)
    const curry = f => x => y => f (x, y);

    //    uncurry :: (a -> b -> c) -> ((a, b) -> c)
    const uncurry = f => (x, y) => f (x) (y);

    module.exports = {
        id, always,
        apply,
        comp, comp2, comp3,
        flip,
        curry, uncurry
    };
})();

