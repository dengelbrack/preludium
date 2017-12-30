const { concatMap, map, show, head, tail, foldr } = require ("./prelude");

const Maybe = function (x) {
    if (typeof x !== "undefined")
        this.fromJust = () => x;
};
//    Just :: a -> Maybe a
const Just = x => new Maybe (x);
//    Nothing :: Maybe a
const Nothing = new Maybe ();
//    maybe :: b -> (a -> b) -> Maybe a -> b
const maybe = n => f => m => {
    if (m === Nothing) return n;
    else return f (m.fromJust());
};
//    fromJust :: Maybe a -> a
const fromJust = m => m.fromJust ();

// instance Functor Maybe
Maybe.prototype.fmap = function (f) {
    if (this === Nothing) return Nothing;
    else return Just (f (this.fromJust()));
};

// instance Monad Maybe
Maybe.prototype.bind = function (f) {
    if (this === Nothing) return Nothing;
    else return f (this.fromJust());
};
Maybe.prototype.ap = function (mf) {
    if (mf === Nothing) return Nothing;
    else return this.fmap (mf.fromJust());
};
Maybe.pure = Just;

// instance Show Maybe
Maybe.prototype.show = function () {
    if (this === Nothing) return "Nothing";
    else return "Just (" + show (this.fromJust()) + ")";
};


// instance Functor []
Array.prototype.fmap = function (f) {
    return map (f) (this);
};

// instance Monad []
Array.prototype.bind = function (f) {
    return concatMap (f) (this);
};
Array.prototype.ap = function (mf) {
    return mf.bind (f => this.bind(x => [f (x)]));
};
Array.pure = x => [x];

// instance Show []
Array.prototype.show = function () {
    return "[" + show (head (this)) + foldr (item => acc => ", " + show (item) + acc) ("") (tail (this)) + "]";
};


//    fmap :: Functor f => (a -> b) -> f a -> f b
const fmap = f => m => m.fmap (f);
//    ap :: Monad m => m (a -> b) -> m a -> m b
const ap = mf => m => m.ap (mf);
//    pure :: Monad m => m -> a -> m b
const pure = t => x => t.pure (x);
//    bind :: Monad m => (a -> m b) -> m a -> m b
const bind = m => f => m.bind (f);

//    lift :: Monad m => (a -> b) -> m a -> m b
const liftM = fmap;
//    liftM2 :: Monad m => (a -> b -> c) -> m a -> m b -> m c
const liftM2 = f => m1 => m2 => bind (m1) (x1 => bind (m2) (x2 => pure (type (m1)) (f (x1) (x2))));
//    liftM3 :: Monad m => (a -> b -> c -> d) -> m a -> m b -> m c -> m d
const liftM3 = f => m1 => m2 => m3 => bind (m1) (x1 => bind (m2) (x2 => bind (m3) (x3 => pure (type (m1)) (f (x1) (x2) (x3)))));

//    compM2 :: Monad m => (b -> m c) -> (a -> m b) -> a -> m c
//    Haskell (<=<)
const compM2 = f => g => x => bind (g (x)) (f);

//    type :: Monad m => m a -> m
const type = m => m.constructor;


module.exports = {
    Maybe, Just, Nothing,
    maybe, fromJust,
    fmap, ap, pure, bind,
    liftM, liftM2, liftM3,
    compM2,
    type
};

