(function () {
    "use strict";

    const { ValueConstructor } = require ("./Meta");

    // data Either a b = Left a | Right b
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
        else return g (e.unRight);
    };


    module.exports = {
        Either, Left, Right, isLeft, isRight, either
    };
})();
