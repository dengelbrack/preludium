// todo: span, break, splitAt, scan*, zip3*, unzip*, (!!)
(function () {
    "use strict";

    //    head, last :: [a] -> a
    const head = xs => xs [0];
    const last = xs => xs [xs.length - 1];

    //    tail, init :: [a] -> [a]
    const tail = xs => xs.slice (1);
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

    //    foldl, foldr :: (b -> a -> b) -> b -> [a] -> b
    const foldl = f => init => xs => {
        const xsLength = xs.length;
        let i = 0, acc = init;
        for (; i < xsLength; i++) {
            acc = f (acc) (xs [i]);
        }
        return acc;
    };
    const foldr = f => init => xs => {
        let i = xs.length - 1, acc = init;
        for (; i >= 0; i--) {
            acc = f (xs [i]) (acc);
        }
        return acc;
    };

    //    foldl1, foldr1 :: (a -> a -> a) -> [a] -> a
    const foldl1 = f => xs => foldl (f) (head (xs)) (tail (xs));
    const foldr1 = f => xs => foldr (f) (last (xs)) (init (xs));

    //    apply :: (a -> b) -> a -> b
    //    Haskell ($)
    const apply = f => x => f (x);

    //    comp :: (b -> c) -> (a -> b) -> (a -> c)
    //    Haskell (.)
    const comp = f => g => x => f (g (x));

    //    comp3 :: (c -> d) -> (b -> c) -> (a -> b) -> (a -> d)
    const comp3 = f => g => h => x => f (g (h (x)));

    //    compose :: (z -> y, y -> x, ... a -> b) -> a -> z
    //    https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10
    const compose = (...fs) => x => foldr (apply) (x) (fs);

    //    compn :: (z -> y) -> (y -> x) -> ... -> (a -> b) -> a -> z
    const compn = arg1 => {
        const compnWorker = fs => argNext => {
            if (typeof argNext !== "function") {
                return compose (...fs) (argNext);
            }
            fs.push (argNext);
            return compnWorker (fs);
        };
        return compnWorker ([arg1]);
    };

    //    flip :: (a -> b -> c) -> (b -> a -> c)
    const flip = f => x => y => f (y) (x);

    //    curry :: ((a, b) -> c) -> (a -> b -> c)
    const curry = f => x => y => f (x, y);

    //    uncurry :: (a -> b -> c) -> ((a, b) -> c)
    const uncurry = f => (x, y) => f (x) (y);

    //    len :: [a] -> Number
    //    Haskell length
    const len = xs => xs.length;

    //    empty :: [a] -> Boolean
    //    Haskell null
    const empty = xs => xs.length === 0;

    //    join :: [a] -> [a] -> [a]
    //    Haskell (++)
    const join = xs => ys => xs.concat (ys);

    //    concat :: [[a]] -> [a]
    const concat = foldr (join) ([]);

    //    reverse :: [a] -> [a]
    const reverse = xs => xs.slice ().reverse ();

    //    elem :: a -> [a] -> Boolean
    const elem = k => xs => xs.indexOf (k) !== -1;

    //    take, drop :: Number -> [a] -> [a]
    const take = n => xs => xs.slice (0, n);
    const drop = n => xs => xs.slice (n, xs.length);

    //    takeWhile, dropWhile :: (a -> Boolean) -> [a] -> [a]
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

    //    plus, minus, times, divide, pow :: Number -> Number -> Number
    //    Haskell (+), (-), (*), (/), (^)
    const plus = x => y => y + x;
    const minus = x => y => y - x;
    const times = x => y => y * x;
    const divide = x => y => y / x;
    const pow = x => y => Math.pow (y, x);

    //    quot, rem, div, mod :: Number -> Number -> Number
    const quot = x => y => ~~ (y / x);
    const rem = x => y => y % x;
    const div = x => y => Math.floor (y / x);
    const mod = x => y => y - (x * Math.floor (y / x));

    //    sum, product :: [Number] -> Number
    const sum = foldr1 (plus);
    const product = foldr1 (times);

    //    max, min :: Number -> Number -> Number
    const max = x => y => x > y ? x : y;
    const min = x => y => x < y ? x : y;

    //    id :: a -> a
    const id = x => x;

    //    always :: a -> b -> a
    //    Haskell const
    const always = x => _ => x;

    //    even, odd :: Number -> Boolean
    const even = n => n % 2 === 0;
    const odd = n => Math.abs (n % 2) === 1;

    //    not :: Boolean -> Boolean
    const not = b => ! b;

    //    and, or :: a -> a -> Boolean
    const and = x => y => y && x;
    const or = x => y => y || x;

    //    eq, lt, gt, lte, gte :: a -> a -> Boolean
    //    Haskell (==), (>), (<), (>=), (<=)
    const eq = x => y => y === x;
    const lt = x => y => y < x;
    const gt = x => y => y > x;
    const lte = x => y => y <= x;
    const gte = x => y => y >= x;

    //    ands, ors :: [Boolean] -> Boolean
    //    Haskell and, or
    const ands = foldr1 (and);
    const ors = foldr1 (or);

    //    any, all :: (a -> Boolean) -> [a] -> Boolean
    const any = p => comp (foldr (or) (false)) (map (p));
    const all = p => comp (foldr (and) (true)) (map (p));

    //    pair :: a -> b -> (a, b)
    const pair = x => y => [x, y];

    //    fst :: (a, b) -> a
    const fst = tuple => tuple [0];

    //    snd :: (a, b) -> b
    const snd = tuple => tuple [1];

    //    zip :: [a] -> [b] -> [(a, b)]
    const zip = xs => ys => zipWith (pair) (xs) (ys);

    //    zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
    const zipWith = f => xs => ys => {
        const newLength = min (len (xs)) (len (ys));
        let i = 0, zipped = new Array (newLength);
        for (; i < newLength; i++) {
            zipped [i] = f (xs [i]) (ys [i]);
        }
        return zipped;
    };

    //    words, lines :: String -> [String]
    const words = str => str.split (" ");
    const lines = str => str.split ("\n");

    //    unwords, unlines :: [String] -> String
    const unwords = lst => lst.join (" ");
    const unlines = lst => lst.join ("\n");

    //    range :: Number -> Number -> [Number]
    const range = n => k => {
        const newLength = k - n + 1;
        let i = 0, ranged = new Array (newLength);
        for (; i < newLength; i++) {
            ranged [i] = i + n;
        }
        return ranged;
    };

    //    isList :: [a] -> Boolean
    const isList = lst => lst instanceof Array;

    //    showList :: [a] -> String
    const showList = lst => {
        return "[" + show (head (lst)) + foldr (item => acc => ", " + show (item) + acc) ("") (tail (lst)) + "]";
    };

    //    show :: a -> String
    const show = x => {
        if (isList (x)) {
            return showList (x);
        } if (typeof x === "string") {
            return JSON.stringify (x);
        } else {
            return x.toString ();
        }
    };

    //    read :: String -> a
    const read = str => JSON.parse (str);

    //    nub :: [a] -> [a]
    const nub = xs => [...new Set (xs)];

    //    union :: [a] -> [a] -> [a]
    const union = xs => ys => nub (join (xs) (ys));

    //    toUpper, toLower :: String -> String
    const toUpper = str => str.toUpperCase ();
    const toLower = str => str.toLowerCase ();

    module.exports = {
        head, last, tail, init,
        map, filter,
        foldl, foldr, foldl1, foldr1,
        apply,
        comp, comp3, compn, compose,
        flip,
        curry, uncurry,
        len, empty,
        join, concat,
        reverse,
        elem,
        take, takeWhile,
        drop, dropWhile,
        plus, minus, times, divide, pow,
        quot, rem, div, mod,
        sum, product,
        max, min,
        id, always,
        even, odd,
        not, and, or,
        eq, lt, gt, lte, gte,
        ands, ors,
        any, all,
        fst, snd,
        zip, zipWith,
        words, lines, unwords, unlines,
        range, isList,
        show, read,
        nub, union,
        toUpper, toLower
    };
})();

