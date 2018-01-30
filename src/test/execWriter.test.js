const { execWriter, writer } = require ("../control.monad.writer");

test("execWriter (1, [\"one\"])", () => {
    expect(execWriter (writer (1, ["one"]))).toEqual(["one"]);
});

test("execWriter (1, [1])", () => {
    expect(execWriter (writer (1, [1]))).toEqual([1]);
});

