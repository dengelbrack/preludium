(function () {
    "use strict";

    const CurriedValueConstructor = Constructor => {
        if (Constructor.length === 0) {
            return new Constructor ();
        } else if (Constructor.length === 1) {
            return x => new Constructor (x);
        } else if (Constructor.length === 2) {
            return x => y => new Constructor (x, y);
        } else {
            throw new Error ("Value constructors of arity > 2 are currently not supported.");
        }
    };

    const ValueConstructor = Type => Constructor => {
        Constructor.prototype.constructor = Type;
        Constructor.prototype.valueconstructor = Constructor;

        const ValueConstructor = CurriedValueConstructor (Constructor);
        ValueConstructor.prototype = Constructor.prototype;
        return ValueConstructor;
    };

    module.exports = {
        ValueConstructor
    };
})();
