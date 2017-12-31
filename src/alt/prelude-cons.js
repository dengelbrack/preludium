(function() {
    "use strict";

    const List = function(head, tail) {
        this.head = head;
        this.tail = tail;
    };

    // EmptyList :: [a]
    const EmptyList = Symbol("EmptyList");

    // cons :: a -> [a] -> [a]
    const cons = x => xs => new List(x, xs);

    // singleton :: a -> [a]
    const singleton = x => cons (x) (EmptyList);

    // head :: [a] -> a
    const head = list => list.head;
    // tail :: [a] -> [a]
    const tail = list => list.tail;

    // last :: [a] -> a
    const last = list => {
        if(single (list)) {
            return head (list);
        }
        return last (tail (list));
    };
    // init :: [a] -> [a]
    const init = list => {
        if(single (list)) {
            return EmptyList;
        }
        return cons (head (list)) (init (tail (list)));
    };

    // comp :: (b -> c) -> (a -> b) -> (a -> c)
    // https://stackoverflow.com/questions/27996544/how-to-correctly-curry-a-function-in-javascript
    const comp = f => g => x => f (g (x));
    // comp3 :: (c -> d) -> (b -> c) -> (a -> b) -> (a -> d)
    const comp3 = f => g => h => x => f (g (h (x)));
    // compUncurried :: (z -> y, y -> x, ... a -> b) -> a -> z
    // https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10
    const compUncurried = (...functions) => data =>
        functions.reduceRight((value, func) => func(value), data);
    // compn :: (z -> y) -> (y -> x) -> ... -> (a -> b) -> To -> a -> z
    const compn = arg1 => {
        const functions = [arg1];
        const compnWorker = argNext => {
            if(typeof argNext !== "function") {
                return compUncurried (...functions) (argNext);
            }
            functions.push(argNext);
            return compnWorker;
        };
        return compnWorker;
    };

    // flip :: (a -> b -> c) -> (b -> a -> c)
    const flip = f => x => y => f (y) (x);
    // curry :: ((a, b) -> c) -> (b -> a -> c)
    const curry = f => x => y => f(x, y);
    // uncurry :: (a -> b -> c) -> ((a, b) -> c)
    const uncurry = f => (x, y) => f (x) (y);

    // map :: (a -> b) -> [a] -> [b]
    const map = f => list => {
        if(empty (list)) {
            return list;
        }
        return cons (f (head (list))) (map (f) (tail (list)));
    };

    // filter :: (a -> boolean) -> [a] -> [a]
    const filter = p => list => {
        if(empty (list)) {
            return list;
        }
        if(p (head (list))) {
            return cons (head (list)) (filter (p) (tail (list)));
        }
        return filter (p) (tail (list));
    };

    // foldl, foldr :: (b -> a -> b) -> b -> [a] -> b
    const foldl = f => acc => list => {
        if(empty (list)) {
            return acc;
        }
        return foldl (f) (f (acc) (head (list))) (tail (list));
    };
    const foldr = f => acc => list => {
        if(empty (list)) {
            return acc;
        }
        return f (head (list)) (foldr (f) (acc) (tail (list)));
    };

    // foldl1, foldr1 :: (a -> a -> a) -> [a] -> a
    const foldl1 = f => list => foldl (f) (head (list)) (tail (list));
    const foldr1 = f => list => foldr (f) (last (list)) (init (list));

    // len :: [a] -> number
    // see Haskell length
    const len = foldl (acc => _ => acc + 1) (0);

    // empty, isList, single :: [a] -> boolean
    const empty = list => list === EmptyList;
    const isList = list => or (list instanceof List) (empty (list));
    const single = list => empty (tail (list));

    // join :: [a] -> [a] -> [a]
    // Haskell (++)
    const join = xs => ys => {
        if(empty (xs)) {
            return ys;
        }
        return cons (head (xs)) (join (tail (xs)) (ys));
    };

    // reverse :: [a] -> [a]
    const reverse = foldl (flip (cons)) (EmptyList);

    // concat :: [[a]] -> [a]
    const concat = foldl (join) (EmptyList);

    // take, drop :: number -> [a] -> [a]
    const take = n => list => {
        if(n === 0) {
            return EmptyList;
        }
        return cons (head (list)) (take (n - 1) (tail (list)));
    };
    const drop = n => list => {
        if(n === 0) {
            return list;
        }
        return drop (n - 1) (tail (list));
    };

    // plus, minus, times, divide, pow :: number -> number -> number
    const plus = x => y => y + x;
    const minus = x => y => y - x;
    const times = x => y => y * x;
    const divide = x => y => y / x;
    const pow = x => y => Math.pow(y, x);

    // quot, rem, div, mod :: number -> number -> number
    const quot = x => y => ~~(y / x);
    const rem = x => y => y % x;
    const div = x => y => Math.floor(y / x);
    const mod = x => y => y - (x * Math.floor(y / x));

    // sum, product :: [number] -> number
    const sum = foldl1 (plus);
    const product = foldl1 (times);

    // max, min :: number -> number -> number
    const max = x => y => x > y ? x : y;
    const min = x => y => x < y ? x : y;

    // id :: a -> a
    const id = x => x;
    // always :: a -> b -> a
    const always = x => _ => x;

    // even, odd :: number -> boolean
    const even = number => number % 2 === 0;
    const odd = number => Math.abs(number % 2) === 1;

    // not :: boolean -> boolean
    const not = bool => !bool;
    // and, or :: a -> a -> boolean
    const and = x => y => y && x;
    const or = x => y => y || x;
    // eq, lt, gt, lte, gte :: a -> a -> boolean
    const eq = x => y => y === x;
    const lt = x => y => y < x;
    const gt = x => y => y > x;
    const lte = x => y => y <= x;
    const gte = x => y => y >= x;

    // ands, ors :: [boolean] -> boolean
    const ands = foldl1 (and);
    const ors = foldl1 (or);
    // any, all :: (a -> boolean) -> [a] -> boolean
    const any = p => comp (foldl (or) (false)) (map (p));
    const all = p => comp (foldl (and) (true)) (map (p));

    // elem :: a -> [a] -> boolean
    const elem = comp (any) (eq);

    const Pair = function(x, y) {
        this.fst = x;
        this.snd = y;
    };
    Pair.prototype.toString = function() {
        return "(" + fst (this) + "," + snd (this) + ")";
    };
    // pair a -> b -> pair(a)(b)
    const pair = x => y => new Pair(x, y);
    // fst :: pair(a, b) -> a
    const fst = x => x.fst;
    // snd :: x(a, b) -> b
    const snd = x => x.snd;

    // zip :: [a] -> [b] -> [pair(a)(b)]
    const zip = xs => ys => zipWith(pair)(xs)(ys);
    // zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
    const zipWith = f => xs => ys => {
        if(or (empty (xs)) (empty (ys))) {
            return EmptyList;
        }
        return cons (f (head (xs)) (head (ys))) (zipWith (f) (tail (xs)) (tail (ys)));
    };

    // words, lines :: string -> [string]
    const words = str => fromArray (str.split(" "));
    const lines = str => fromArray (str.split("\n"));

    // prependString :: (Show a) => string -> [a] -> string
    const prependString = sep => list => {
        if(empty (list)) {
            return "";
        }
        return sep + head (list) + prependString (sep) (tail (list));
    };

    // unwords, unlines :: [string] -> string
    const unwords = list => head (list) + prependString (" ") (tail (list));
    const unlines = list => head (list) + prependString ("\n") (tail (list));

    // range :: Number -> Number -> [Number]
    const range = n => k => {
        const rangeRec = n => list => {
            if(n > k) {
                return list;
            }
            return cons (n) (rangeRec (n + 1) (list));
        };
        return rangeRec (n) (EmptyList);
    };

    // fromArray :: Array a -> [a]
    const fromArray = arr => {
        let i = arr.length - 1, list = EmptyList;
        for(; i >= 0; i--){
            let element = arr[i];
            if(Array.isArray(element)) {
                element = fromArray (element);
            }
            list = cons (element) (list);
        }
        return list;
    };

    // toArray :: [a] -> Array a
    const toArray = list => {
        let arr = [];
        while(not (empty (list))) {
            let element = head (list);
            if(isList (element)) {
                element = toArray (element);
            }
            arr.push(element);
            list = tail (list);
        }
        return arr;
    };

    // showList :: [a] -> string
    const showList = list => {
        return "[" + show (head (list)) + foldr (element => acc => "," + show (element) + acc) ("") (tail (list)) + "]";
    };

    // show :: a -> string
    const show = x => {
        if(isList (x)) {
            return showList (x);
        } if(typeof x === "string") {
            return JSON.stringify(x);
        } else {
            return x.toString();
        }
    };

    // read :: string -> a
    const read = str => JSON.parse(str);

    module.exports = {
        cons, EmptyList, singleton,
        head, last, tail, init,
        comp, comp3, compn,
        flip,
        curry, uncurry,
        map, filter,
        foldl, foldr, foldl1, foldr1,
        len, empty, isList, single,
        join, reverse, concat,
        take,// takeWhile,
        drop,// dropWhile,
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
        elem,
        fst, snd,
        zip, zipWith,
        words, lines, unwords, unlines,
        range, fromArray, toArray,
        show, read
    };
})();
