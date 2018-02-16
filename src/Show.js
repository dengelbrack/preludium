(function () {
    "use strict";

    const { head, tail, foldr } = require ("./Array");
    const { comp2 } = require ("./Func");
    const { Nothing, Just } = require ("./Maybe");
    const { Left, Right } = require ("./Either");

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

    module.exports = {
        show, read, print
    };
})();
