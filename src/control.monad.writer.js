(function () {
    "use strict";

    const { Pair, append, show, eq } = require ("./prelude");
    const { ValueConstructor } = require ("./meta.util.js");

    // data Writer
    const Writer = ValueConstructor (function Writer () {}) (function Writer (x, ss) {
        this.value = x;
        this.writing = ss;
    });

    //    runWriter :: Writer a -> Pair a [String]
    const runWriter = w => Pair (w.value) (w.writing);

    //    execWriter :: Writer a -> [String]
    const execWriter = w => w.writing;

    //    writer :: (a, [String]) -> Writer a
    const writer = (x, ss) => Writer (x) (ss);

    //    tell :: [String] -> Writer ()
    const tell = ss => Writer (null) (ss);

    // instance Functor Writer
    Writer.prototype.fmap = function (f) {
        return writer (f (this.value), this.writing);
    };

    // instance Monad (Writer a)
    Writer.pure = x => writer (x, [""]);
    Writer.prototype.bind = function (f) {
        const w2 = f (this.value);
        return writer (w2.value, append (this.writing) (w2.writing));
    };
    Writer.prototype.then = function (w2) {
        return writer (w2.value, append (this.writing) (w2.writing));
    };

    // instance Show a => Show (Writer a)
    Writer.prototype.show = function () {
        return "Writer { " + show (this.value) + ", " + show (this.writing) + " }";
    };

    // instance Eq a => Eq (Writer a)
    Writer.prototype.eq = function (w2) {
        return eq (this.value) (w2.value) && eq (this.writing) (w2.writing);
    };

    module.exports = {
        Writer,
        runWriter, execWriter,
        writer, tell
    };
})();

