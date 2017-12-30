(function () {
    const { Maybe, Just, Nothing, concatMap, map  } = require ("./prelude");

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
        fmap, ap, pure, bind,
        liftM, liftM2, liftM3,
        compM2,
        type
    };
})();

