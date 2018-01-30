(function () {
    const { Maybe, Just, Nothing,
        Either, Left, Right,
        concatMap, map, foldr
    } = require ("./prelude");


    // class Functor f where
    //    fmap :: (a -> b) -> f a -> f b
    const fmap = f => m => m.fmap (f);

    // instance Functor Maybe
    Nothing.prototype.fmap = function (_) {
        return Nothing;
    };
    Just.prototype.fmap = function (f) {
        return Just (f (this.unJust));
    };

    // instance Functor Either
    Left.prototype.fmap = function (_) {
        return Left (this.unLeft);
    };
    Right.prototype.fmap = function (f) {
        return Right (f (this.unRight));
    };

    // instance Functor []
    Array.prototype.fmap = function (f) {
        return map (f) (this);
    };


    // class Functor f => Applicative f where
    //    pure :: f -> a -> f a
    const pure = t => x => t.pure (x);
    //    ap :: f (a -> b) -> f a -> f b
    const ap = a1 => a2 => a1.ap (a2);

    // instance Applicative Maybe
    Maybe.pure = Just;
    Nothing.prototype.ap = function (_) {
        return Nothing;
    };
    Just.prototype.ap = function (m2) {
        return m2.fmap (this.unJust);
    };

    // instance Applicative Either
    Either.pure = Right;
    Left.prototype.ap = function (_) {
        return Left (this.unLeft);
    };
    Right.prototype.ap = function (e2) {
        return e2.fmap (this.unRight);
    };

    // instance Applicative Array
    Array.pure = x => [x];
    Array.prototype.ap = function (ys) {
        const thisLength = this.length, ysLength = ys.length;
        if (thisLength === 0 || ysLength === 0) return [];
        let apped = new Array (thisLength * ysLength);
        for (let i = 0; i < thisLength; i++) {
            for (let j = 0; j < ysLength; j++) {
                apped [i * thisLength + j] = this [i] (ys [j]);
            }
        }
        return apped;
    };


    // class Applicative m => Monad m where
    //    bind :: (a -> m b) -> m a -> m b
    //    Haskell (>>=)
    const bind = m => f => m.bind (f);
    //    then :: m a -> m b -> m b
    //    Haskell (>>)
    const then = m1 => m2 => m1.then (m2);

    // instance Monad Maybe
    Nothing.prototype.bind = function (_) {
        return Nothing;
    };
    Just.prototype.bind = function (f) {
        return f (this.unJust);
    };
    Nothing.prototype.then = function (_) {
        return Nothing;
    };
    Just.prototype.then = function (m2) {
        return m2;
    };

    // instance Monad Either
    Left.prototype.bind = function (_) {
        return Left (this.unLeft);
    };
    Right.prototype.bind = function (f) {
        return f (this.unRight);
    };
    Left.prototype.then = function (_) {
        return Left (this.unLeft);
    };
    Right.prototype.then = function (e2) {
        return e2;
    };

    // instance Monad []
    Array.prototype.bind = function (f) {
        return concatMap (f) (this);
    };
    Array.prototype.then = function (ys) {
        return this.bind (_ => ys);
    };


    //    lift :: Monad m => (a -> b) -> m a -> m b
    const liftM = fmap;
    //    liftM2 :: Monad m => (a -> b -> c) -> m a -> m b -> m c
    const liftM2 = f => m1 => m2 => m1.bind (x1 => m2.bind (x2 => pure (type (m1)) (f (x1) (x2))));
    //    liftM3 :: Monad m => (a -> b -> c -> d) -> m a -> m b -> m c -> m d
    const liftM3 = f => m1 => m2 => m3 => m1.bind (x1 => m2.bind (x2 => m3.bind (x3 => pure (type (m1)) (f (x1) (x2) (x3)))));

    //    compM :: Monad m => m -> (y -> m z, x -> m y, ... a -> m b) -> (a -> m z)
    const compM = t => (...fs) => foldr (compM2) (pure (t)) (fs);
    //    compM2 :: Monad m => (b -> m c) -> (a -> m b) -> a -> m c
    //    Haskell (<=<)
    const compM2 = f => g => x => g (x).bind (f);
    //    compM3 :: Monad m => (c -> m d) -> (b -> m c) -> (a -> m b) -> a -> m d
    const compM3 = f => g => h => x => h (x).bind (g).bind (f);

    //    type :: Monad m => m a -> m
    const type = m => m.constructor;


    module.exports = {
        fmap,
        pure, bind, then,
        ap, liftM, liftM2, liftM3,
        compM, compM2, compM3,
        type
    };
})();

