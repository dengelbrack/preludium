(function () {
    const { Maybe, Just, Nothing, concatMap, map } = require ("./prelude");


    // class Functor f where
    //    fmap :: (a -> b) -> f a -> f b
    const fmap = f => m => m.fmap (f);

    // instance Functor Maybe
    Maybe.prototype.fmap = function (f) {
        if (this === Nothing) return Nothing;
        else return Just (f (this.fromJust));
    };

    // instance Functor []
    Array.prototype.fmap = function (f) {
        return map (f) (this);
    };


    // class Functor m => Monad m where
    //    pure :: m -> a -> m a
    const pure = t => x => t.pure (x);
    //    bind :: (a -> m b) -> m a -> m b
    const bind = m => f => m.bind (f);
    //    then :: m a -> m b -> m b
    //    Haskell (>>)
    const then = m1 => m2 => m1.then (m2);

    // instance Monad Maybe
    Maybe.pure = Just;
    Maybe.prototype.bind = function (f) {
        if (this === Nothing) return Nothing;
        else return f (this.fromJust);
    };
    Maybe.prototype.then = function (m2) {
        if (this === Nothing) return Nothing;
        else return m2;
    };

    // instance Monad []
    Array.pure = x => [x];
    Array.prototype.bind = function (f) {
        return concatMap (f) (this);
    };
    Array.prototype.then = function (ys) {
        return this.bind (_ => ys);
    };


    //    ap :: Monad m => m (a -> b) -> m a -> m b
    const ap = mf => m => mf.bind (f => m.bind (x => pure (type (m)) (f (x))));

    //    lift :: Monad m => (a -> b) -> m a -> m b
    const liftM = fmap;
    //    liftM2 :: Monad m => (a -> b -> c) -> m a -> m b -> m c
    const liftM2 = f => m1 => m2 => m1.bind (x1 => m2.bind (x2 => pure (type (m1)) (f (x1) (x2))));
    //    liftM3 :: Monad m => (a -> b -> c -> d) -> m a -> m b -> m c -> m d
    const liftM3 = f => m1 => m2 => m3 => m1.bind (x1 => m2.bind (x2 => m3.bind (x3 => pure (type (m1)) (f (x1) (x2) (x3)))));

    //    compM2 :: Monad m => (b -> m c) -> (a -> m b) -> a -> m c
    //    Haskell (<=<)
    const compM2 = f => g => x => g (x).bind (f);

    //    type :: Monad m => m a -> m
    const type = m => m.constructor;


    module.exports = {
        fmap,
        pure, bind, then,
        ap, liftM, liftM2, liftM3, compM2,
        type
    };
})();

