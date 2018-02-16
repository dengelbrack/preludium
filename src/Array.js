(function () {
    "use strict";

    const { min } = require ("./Num");
    const { always } = require ("./Func");
    const { Pair } = require ("./Pair");

    //    head :: [a] -> a
    const head = xs => xs [0];
    //    last :: [a] -> a
    const last = xs => xs [xs.length - 1];

    //    tail :: [a] -> [a]
    const tail = xs => xs.slice (1);
    //    init :: [a] -> [a]
    const init = xs => xs.slice (0, xs.length - 1);

    //    map :: (a -> b) -> [a] -> [b]
    const map = f => xs => {
        const xsLength = xs.length;
        let i = 0, mapped = new Array (xsLength);
        for (; i < xsLength; i++) {
            mapped [i] = f (xs [i]);
        }
        return mapped;
    };

    //    filter :: (a -> Boolean) -> [a] -> [a]
    const filter = p => xs => {
        const xsLength = xs.length;
        let i = 0, filtered = [];
        for (; i < xsLength; i++) {
            const item = xs [i];
            if (p (item)) {
                filtered.push (item);
            }
        }
        return filtered;
    };

    //    foldl :: (b -> a -> b) -> b -> [a] -> b
    const foldl = f => init => xs => {
        const xsLength = xs.length;
        let i = 0, acc = init;
        for (; i < xsLength; i++) {
            acc = f (acc) (xs [i]);
        }
        return acc;
    };

    //    foldr :: (a -> b -> b) -> b -> [a] -> b
    const foldr = f => init => xs => {
        let i = xs.length - 1, acc = init;
        for (; i >= 0; i--) {
            acc = f (xs [i]) (acc);
        }
        return acc;
    };

    //    foldl1 :: (a -> a -> a) -> [a] -> a
    const foldl1 = f => xs => foldl (f) (head (xs)) (tail (xs));
    //    foldr1 :: (a -> a -> a) -> [a] -> a
    const foldr1 = f => xs => foldr (f) (last (xs)) (init (xs));

    //    len :: [a] -> Number
    //    Haskell length
    const len = xs => xs.length;

    //    nil :: [a] -> Boolean
    //    Haskell null
    const nil = xs => xs.length === 0;

    //    append :: [a] -> [a] -> [a]
    //    Haskell (++)
    const append = xs => ys => xs.concat (ys);

    //    concat :: [[a]] -> [a]
    const concat = xs => Array.prototype.concat.apply ([], xs);

    //    concatMap :: (a -> [b]) -> [a] -> [b]
    const concatMap = f => xs => {
        const concated = [], xsLength = xs.length;
        let i = 0;
        for (; i < xsLength; i++) {
            const fed = f (xs [i]);
            concated.push (...fed);
        }
        return concated;
    };

    //    reverse :: [a] -> [a]
    const reverse = xs => xs.slice ().reverse ();

    //    take :: Number -> [a] -> [a]
    const take = n => xs => xs.slice (0, n);
    //    drop :: Number -> [a] -> [a]
    const drop = n => xs => xs.slice (n, xs.length);

    //    takeWhile :: (a -> Boolean) -> [a] -> [a]
    const takeWhile = p => xs => {
        const xsLength = xs.length;
        let i = 0, taken = [];
        for (; i < xsLength; i++) {
            const item = xs [i];
            if (! p (item)) {
                break;
            }
            taken.push (item);
        }
        return taken;
    };

    //    dropWhile :: (a -> Boolean) -> [a] -> [a]
    const dropWhile = p => xs => {
        const xsLength = xs.length;
        let i = 0;
        for (; i < xsLength; i++) {
            if (! p (xs [i])) {
                break;
            }
        }
        return drop (i) (xs);
    };

    //    replicate :: Int -> a -> [a]
    const replicate = n => x => map (always (x)) (new Array (n));

    //    range :: Number -> Number -> [Number]
    const range = n => k => {
        const newLength = k - n + 1;
        if (newLength < 1) {
            return [];
        }
        let i = 0, ranged = new Array (newLength);
        for (; i < newLength; i++) {
            ranged [i] = i + n;
        }
        return ranged;
    };

    //    isList :: [a] -> Boolean
    const isList = lst => lst instanceof Array;

    //    nub :: [a] -> [a]
    const nub = xs => [...new Set (xs)];

    //    union :: [a] -> [a] -> [a]
    const union = xs => ys => nub (append (xs) (ys));

    //    zip :: [a] -> [b] -> [Pair a b]
    const zip = xs => ys => zipWith (Pair) (xs) (ys);

    //    zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
    const zipWith = f => xs => ys => {
        const newLength = min (len (xs)) (len (ys));
        let i = 0, zipped = new Array (newLength);
        for (; i < newLength; i++) {
            zipped [i] = f (xs [i]) (ys [i]);
        }
        return zipped;
    };

    module.exports = {
        head, last, tail, init,
        map, filter,
        foldl, foldr, foldl1, foldr1,
        len, nil,
        append, concat, concatMap,
        reverse,
        take, takeWhile,
        drop, dropWhile,
        replicate,
        range, isList,
        nub, union,
        zip, zipWith
    };
})();
