(function () {
    "use strict";

    const { ValueConstructor } = require ("./Meta");

    // data Maybe a = Nothing | Just a
    const Maybe = function () {};
    //    Nothing :: Maybe a
    const Nothing = ValueConstructor (Maybe) (function Nothing () {});
    //    Just :: a -> Maybe a
    const Just = ValueConstructor (Maybe) (function Just (x) { this.unJust = x; });

    //    isNothing :: Maybe a -> Boolean
    const isNothing = m => m.valueconstructor.name === "Nothing";
    //    isJust :: Maybe a -> Boolean
    const isJust = m => m.valueconstructor.name === "Just";

    //    maybe :: b -> (a -> b) -> Maybe a -> b
    const maybe = n => f => m => {
        if (m === Nothing) return n;
        else return f (m.unJust);
    };

    //    lookup :: String -> {String: a} -> Maybe a
    const lookup = k => o => {
        const v = o[k];
        if (typeof v === "undefined") return Nothing;
        else return Just (v);
    };

    module.exports = {
        Maybe, Nothing, Just, isNothing, isJust, maybe,
        lookup
    };
})();
