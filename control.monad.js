const { map, concat, show, head, tail, foldr } = require ("./prelude");

const Maybe = function (x) {
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
const fromJust = j => j.fromJust ();

// instance Functor Maybe
Maybe.prototype.fmap = function (f) {
    if (this === Nothing) return Nothing;
    else return Just (f (this.fromJust()));
};

// instance Applicative Maybe
Maybe.prototype.ap = function (fa) {
    if (fa === Nothing) return Nothing;
    else return this.fmap (fa.fromJust());
};
Maybe.pure = Just;

// instance Monad Maybe
Maybe.prototype.bind = function (f) {
    if (this === Nothing) return Nothing;
    else return f (this.fromJust());
};

// instance Show Maybe
Maybe.prototype.show = function () {
    if (this === Nothing) return "Nothing";
    else return "Just " + this.fromJust() + "";
};


// instance Functor []
Array.prototype.fmap = function (f) {
    return map (f) (this);
};

// instance Applicative []
Array.prototype.ap = function (fa) {
    return fa.bind (f => this.bind(x => [f (x)]));
};
Array.pure = x => [x];

// instance Monad []
Array.prototype.bind = function (f) {
    return concat (map (f) (this));
};
// instance Show []
Array.prototype.show = function () {
    return "[" + show (head (this)) + foldr (item => acc => ", " + show (item) + acc) ("") (tail (this)) + "]";
};


//    fmap :: Functor f => (a -> b) -> f a -> f b
const fmap = f => m => m.fmap (f);
//    ap :: Applicative f => f (a -> b) -> f a -> f b
const ap = fa => m => m.ap (fa);
//    pure :: Applicative f => f -> a -> f b
const pure = t => x => t.pure (x);
//    bind :: Monad m => (a -> m b) -> m a -> m b
const bind = m => f => m.bind (f);

//    lift :: Applicative f => (a -> b) -> f a -> f b
const lift = fmap;
//    lift2 :: Applicative f => (a -> b -> c) -> f a -> f b -> f c
const lift2 = f => x => ap (fmap (f) (x));
//    lift3 :: Applicative f => (a -> b -> c -> d) -> f a -> f b -> f c -> f d
const lift3 = f => x => y => ap (ap (fmap (f) (x)) (y));

//    type :: Monad m => m a -> m
const type = m => m.constructor;


module.exports = {
    Just, Nothing,
    maybe, fromJust,
    fmap, ap, pure, bind,
    lift, lift2, lift3,
    type
};

