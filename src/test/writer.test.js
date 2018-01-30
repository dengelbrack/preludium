const { writer } = require ("../control.monad.writer");

test("writer (1, [\"one\"])", () => {
    expect(writer (1, ["one"])).toEqual({"value": 1, "writing": ["one"]});
});

test("writer (1, [1])", () => {
    expect(writer (1, [1])).toEqual({"value": 1, "writing": [1]});
});

