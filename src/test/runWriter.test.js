const { runWriter, writer } = require ("../writer");
const { Pair } = require ("../preludium");

test("runWriter (1, [\"one\"])", () => {
    expect(runWriter (writer (1, ["one"]))).toEqual(Pair (1) (["one"]));
});

test("runWriter (1, [1])", () => {
    expect(runWriter (writer (1, [1]))).toEqual(Pair (1) ([1]));
});

