// todo: span, break, splitAt, scan*, zip3*, unzip*, (!!)
(function () {
    "use strict";

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

    //    filter :: (a -> boolean) -> [a] -> [a]
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

    //    apply :: (a -> b) -> a -> b
    //    Haskell ($)
    const apply = f => x => f (x);

    //    comp :: (z -> y, y -> x, ... a -> b) -> a -> z
    //    https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10
    const comp = (...fs) => x => foldr (apply) (x) (fs);

    //    comp2 :: (b -> c) -> (a -> b) -> (a -> c)
    //    Haskell (.)
    const comp2 = f => g => x => f (g (x));

    //    comp3 :: (c -> d) -> (b -> c) -> (a -> b) -> (a -> d)
    const comp3 = f => g => h => x => f (g (h (x)));

    //    compn :: (z -> y) -> (y -> x) -> ... -> (a -> b) -> a -> z
    const compn = arg1 => {
        const compnWorker = fs => argNext => {
            if (typeof argNext !== "function") {
                return comp (...fs) (argNext);
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

    //    nil :: [a] -> boolean
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

    //    elem :: a -> [a] -> boolean
    const elem = k => xs => xs.indexOf (k) !== -1;

    //    take :: Number -> [a] -> [a]
    const take = n => xs => xs.slice (0, n);
    //    drop :: Number -> [a] -> [a]
    const drop = n => xs => xs.slice (n, xs.length);

    //    takeWhile :: (a -> boolean) -> [a] -> [a]
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

    //    dropWhile :: (a -> boolean) -> [a] -> [a]
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

    //    id :: a -> a
    const id = x => x;

    //    always :: a -> b -> a
    //    Haskell const
    const always = x => _ => x;

    //    even :: Number -> boolean
    const even = n => n % 2 === 0;
    //    odd :: Number -> boolean
    const odd = n => Math.abs (n % 2) === 1;

    //    not :: boolean -> boolean
    const not = b => ! b;

    //    eq :: a -> a -> boolean
    //    Haskell (==)
    const eq = x => y => y === x;
    //    lt :: a -> a -> boolean
    //    Haskell (>)
    const lt = x => y => y < x;
    //    gt :: a -> a -> boolean
    //    Haskell (<)
    const gt = x => y => y > x;
    //    lte :: a -> a -> boolean
    //    Haskell (>=)
    const lte = x => y => y <= x;
    //    gte :: a -> a -> boolean
    //    Haskell (<=)
    const gte = x => y => y >= x;

    //    and :: boolean -> boolean -> boolean
    //    Haskell (&&)
    const and = x => y => y && x;
    //    or :: boolean -> boolean -> boolean
    //    Haskell (||)
    const or = x => y => y || x;

    //    ands :: [boolean] -> boolean
    //    Haskell and
    const ands = foldr1 (and);
    //    ors :: [boolean] -> boolean
    //    Haskell or
    const ors = foldr1 (or);

    //    any :: (a -> boolean) -> [a] -> boolean
    const any = p => comp2 (foldr (or) (false)) (map (p));
    //    all :: (a -> boolean) -> [a] -> boolean
    const all = p => comp2 (foldr (and) (true)) (map (p));

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

    //    words :: string -> [string]
    const words = str => str === "" ? [] : str.split (" ");
    //    lines :: string -> [string]
    const lines = str => str.split ("\n");

    //    unwords :: [string] -> string
    const unwords = lst => lst.join (" ");
    //    unlines :: [string] -> string
    const unlines = lst => lst.join ("\n");

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

    //    isList :: [a] -> boolean
    const isList = lst => lst instanceof Array;

    //    show :: a -> string
    const show = x => {
        if (typeof x.show === "function") {
            return x.show ();
        } if (typeof x === "string" || typeof x === "object") {
            return JSON.stringify (x);
        } else {
            return x.toString ();
        }
    };

    //    read :: string -> a
    const read = str => JSON.parse (str);

    //    print :: a -> IO ()
    const print = comp2 (console.log) (show);

    //    nub :: [a] -> [a]
    const nub = xs => [...new Set (xs)];

    //    union :: [a] -> [a] -> [a]
    const union = xs => ys => nub (append (xs) (ys));

    //    toUpper :: string -> string
    const toUpper = str => str.toUpperCase ();
    //    toLower :: string -> string
    const toLower = str => str.toLowerCase ();

    module.exports = {
        head, last, tail, init,
        map, filter,
        foldl, foldr, foldl1, foldr1,
        apply,
        comp, comp2, comp3, compn,
        flip,
        curry, uncurry,
        len, nil,
        append, concat, concatMap,
        reverse,
        elem,
        take, takeWhile,
        drop, dropWhile,
        replicate,
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
        toUpper, toLower,
        print
    };
})();

