(function () {
    "use strict";

    //    words :: String -> [String]
    const words = str => str === "" ? [] : str.split (" ");
    //    lines :: String -> [String]
    const lines = str => str.split ("\n");

    //    unwords :: [String] -> String
    const unwords = lst => lst.join (" ");
    //    unlines :: [String] -> String
    const unlines = lst => lst.join ("\n");

    //    toUpper :: String -> String
    const toUpper = str => str.toUpperCase ();
    //    toLower :: String -> String
    const toLower = str => str.toLowerCase ();

    module.exports = {
        words, lines, unwords, unlines,
        toUpper, toLower
    };
})();
