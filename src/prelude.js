// todo: span, break, splitAt, scan*, zip3*, unzip*, (!!)
(function () {
    "use strict";
    const { ValueConstructor } = require ("./meta.util");

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

    //    Pair :: a -> b -> Pair a b
    const Pair = x => y => [x, y];

    //    fst :: Pair a b -> a
    const fst = tuple => tuple [0];

    //    snd :: Pair a b -> b
    const snd = tuple => tuple [1];

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

    //    words :: String -> [String]
    const words = str => str === "" ? [] : str.split (" ");
    //    lines :: String -> [String]
    const lines = str => str.split ("\n");

    //    unwords :: [String] -> String
    const unwords = lst => lst.join (" ");
    //    unlines :: [String] -> String
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

    //    isList :: [a] -> Boolean
    const isList = lst => lst instanceof Array;

    //    nub :: [a] -> [a]
    const nub = xs => [...new Set (xs)];

    //    union :: [a] -> [a] -> [a]
    const union = xs => ys => nub (append (xs) (ys));

    //    toUpper :: String -> String
    const toUpper = str => str.toUpperCase ();
    //    toLower :: String -> String
    const toLower = str => str.toLowerCase ();


    // data Maybe
    const Maybe = function () {};
    //    Nothing :: Maybe a
    const Nothing = ValueConstructor (Maybe) (function Nothing () {});
    //    Just :: a -> Maybe a
    const Just = ValueConstructor (Maybe) (function Just (x) { this.unJust = x; });

    //    isNothing :: Maybe a -> Boolean
    const isNothing = m => m.valueconstructor.name === "Nothing";
    //    isJust :: Maybe a -> Boolean
    const isJust = m => m.valueconstructor.name === "Just";

    //    maybe :: b -> (a -> b) -> Maybe a -> b
    const maybe = n => f => m => {
        if (m === Nothing) return n;
        else return f (m.unJust);
    };


    // data Either
    const Either = function () {};
    //    Left :: a -> Either a b
    const Left = ValueConstructor (Either) (function Left (x) { this.unLeft = x; });
    //    Right :: b -> Either a b
    const Right = ValueConstructor (Either) (function Right (x) { this.unRight = x; });

    //    isLeft :: Either a b -> Boolean
    const isLeft = e => e.valueconstructor.name === "Left";
    //    isRight :: Either a b -> Boolean
    const isRight = e => e.valueconstructor.name === "Right";

    //    either :: (a -> c) -> (b -> c) -> Either a b -> c
    const either = f => g => e => {
        if (isLeft (e)) return f (e.unLeft);
        else if (isRight (e)) return g (e.unRight);
    };

    // class Show a where
    //    show :: a -> String
    const show = x => x.show ();

    // instance Show Number
    Number.prototype.show = function () {
        return this.toString ();
    };

    // instance Show String
    String.prototype.show = function () {
        return JSON.stringify (this);
    };

    // instance Show Boolean
    Boolean.prototype.show = function () {
        return this.toString ();
    };

    // instance Show a => Show [a]
    Array.prototype.show = function () {
        return "[" + show (head (this)) + foldr (item => acc => ", " + show (item) + acc) ("") (tail (this)) + "]";
    };

    // instance Show a => Show (Maybe a)
    Nothing.prototype.show = function () {
        return "Nothing";
    };
    Just.prototype.show = function () {
        return "Just (" + show (this.unJust) + ")";
    };

    // instance (Show b, Show a) => Show (Either a b)
    Left.prototype.show = function () {
        return "Left (" + show (this.unLeft) + ")";
    };
    Right.prototype.show = function () {
        return "Right (" + show (this.unRight) + ")";
    };

    //    read :: String -> a
    const read = str => JSON.parse (str);

    //    print :: Show a => a -> IO ()
    const print = comp2 (console.log) (show);


    // class Eq a where
    //    eq :: a -> a -> Boolean
    //    Haskell (==)
    const eq = x => y => x.eq (y);
    //    neq :: a -> a -> Boolean
    //    Haskell (/=)
    const neq = x => y => not (eq (x) (y));

    // instance Eq Number
    Number.prototype.eq = function (n) {
        return this === n;
    };

    // instance Eq String
    String.prototype.eq = function (s) {
        return this === s;
    };

    // instance Eq Boolean
    Boolean.prototype.eq = function (b) {
        return this === b;
    };

    // instance Eq a => Eq [a]
    Array.prototype.eq = function (xs) {
        if (this.length !== xs.length) return false;
        let i = 0;
        for (; i < this.length; i++)
            if (neq (this [i]) (xs [i])) return false;
        return true;
    };

    // instance Eq a => Eq (Maybe a)
    Nothing.prototype.eq = function (m2) {
        return this === m2;
    };
    Just.prototype.eq = function (m2) {
        if (m2 === Nothing) return false;
        else return eq (this.unJust) (m2.unJust);
    };

    // instance (Eq b, Eq a) => Eq (Either a b)
    Left.prototype.eq = function (e2) {
        if (isRight (e2)) return false;
        else return eq (this.unLeft) (e2.unLeft);
    };
    Right.prototype.eq = function (e2) {
        if (isLeft (e2)) return false;
        else return eq (this.unRight) (e2.unRight);
    };

    //    elem :: Eq a => a -> [a] -> Boolean
    const elem = comp2 (any) (eq);

    //    lookup :: String -> {String: a} -> Maybe a
    const lookup = k => o => {
        const v = o[k];
        if (typeof v === "undefined") return Nothing;
        else return Just (v);
    };

    module.exports = {
        head, last, tail, init,
        map, filter,
        foldl, foldr, foldl1, foldr1,
        apply,
        comp, comp2, comp3,
        flip,
        curry, uncurry,
        len, nil,
        append, concat, concatMap,
        reverse,
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
        lt, gt, lte, gte,
        ands, ors,
        any, all,
        Pair, fst, snd,
        zip, zipWith,
        words, lines, unwords, unlines,
        range, isList,
        nub, union,
        toUpper, toLower,
        Maybe, Nothing, Just, isNothing, isJust, maybe,
        Either, Left, Right, isLeft, isRight, either,
        show, read, print,
        eq, neq,
        elem,
        lookup
    };
})();

