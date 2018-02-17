const P = require ("./preludium");
const M = require ("./control.monad");
const W = require ("./control.monad.writer");

module.exports = {
    ...P,
    ...M,
    ...W
};
