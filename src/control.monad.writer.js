(function () {
    "use strict";

    const { Pair, append, show, eq } = require ("./prelude");
    const { ValueConstructor } = require ("./meta.util.js");

    // data Writer w a = Writer a w
    const Writer = ValueConstructor (function Writer () {}) (function Writer (x, ss) {
        this.value = x;
        this.writing = ss;
    });

    //    runWriter :: Writer w a -> Pair a w
    const runWriter = w => Pair (w.value) (w.writing);

    //    execWriter :: Writer w a -> w
    const execWriter = w => w.writing;

    //    writer :: (a, w) -> Writer w a
    const writer = (x, ss) => Writer (x) (ss);

    //    tell :: w -> Writer w ()
    const tell = ss => Writer (null) (ss);

    // instance Functor (Writer w)
    Writer.prototype.fmap = function (f) {
        return writer (f (this.value), this.writing);
    };

    // instance Applicative (Writer [String])
    Writer.pure = x => writer (x, [""]);
    Writer.prototype.ap = function (w2) {
        return writer (this.value (w2.value), append (this.writing) (w2.writing));
    };

    // instance Monad (Writer [String])
    Writer.prototype.bind = function (f) {
        const w2 = f (this.value);
        return writer (w2.value, append (this.writing) (w2.writing));
    };
    Writer.prototype.then = function (w2) {
        return writer (w2.value, append (this.writing) (w2.writing));
    };

    // instance (Show a, Show w) => Show (Writer w a)
    Writer.prototype.show = function () {
        return "Writer { " + show (this.value) + ", " + show (this.writing) + " }";
    };

    // instance (Eq a, Eq w) => Eq (Writer w a)
    Writer.prototype.eq = function (w2) {
        return eq (this.value) (w2.value) && eq (this.writing) (w2.writing);
    };

    module.exports = {
        Writer,
        runWriter, execWriter,
        writer, tell
    };
})();

