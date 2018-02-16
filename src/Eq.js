(function () {
    "use strict";

    const { comp2 } = require ("./Func");
    const { any, not } = require ("./Boolean");
    const { Nothing, Just } = require ("./Maybe");
    const { Left, Right, isLeft, isRight } = require ("./Either");

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

    module.exports = {
        eq, neq,
        elem
    };
})();

