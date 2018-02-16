(function () {
    "use strict";

    const { comp2 } = require ("./Func");
    const { map, foldr } = require ("./Array");

    //    even :: Number -> Boolean
    const even = n => n % 2 === 0;
    //    odd :: Number -> Boolean
    const odd = n => Math.abs (n % 2) === 1;

    //    not :: Boolean -> Boolean
    const not = b => ! b;

    //    lt :: a -> a -> Boolean
    //    Haskell (>)
    const lt = x => y => y < x;
    //    gt :: a -> a -> Boolean
    //    Haskell (<)
    const gt = x => y => y > x;
    //    lte :: a -> a -> Boolean
    //    Haskell (>=)
    const lte = x => y => y <= x;
    //    gte :: a -> a -> Boolean
    //    Haskell (<=)
    const gte = x => y => y >= x;

    //    and :: Boolean -> Boolean -> Boolean
    //    Haskell (&&)
    const and = x => y => y && x;
    //    or :: Boolean -> Boolean -> Boolean
    //    Haskell (||)
    const or = x => y => y || x;

    //    ands :: [Boolean] -> Boolean
    //    Haskell and
    const ands = foldr (and) (true);
    //    ors :: [Boolean] -> Boolean
    //    Haskell or
    const ors = foldr (or) (false);

    //    any :: (a -> Boolean) -> [a] -> Boolean
    const any = p => comp2 (foldr (or) (false)) (map (p));
    //    all :: (a -> Boolean) -> [a] -> Boolean
    const all = p => comp2 (foldr (and) (true)) (map (p));


    module.exports = {
        even, odd,
        not, and, or,
        lt, gt, lte, gte,
        ands, ors,
        any, all,
    };
})();

