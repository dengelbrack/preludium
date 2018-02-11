const { Just, replicate } = require ("../preludium");

test("replicate 0 1", () => {
    expect(replicate (0) (1)).toEqual([]);
});

test("replicate 3 1", () => {
    expect(replicate (3) (1)).toEqual([1,1,1]);
});

test("replicate 3 [1]", () => {
    expect(replicate (3) ([1])).toEqual([[1],[1],[1]]);
});

test("replicate 3 \"test\"", () => {
    expect(replicate (3) ("test")).toEqual(["test","test","test"]);
});

test("replicate 3 Just (1)", () => {
    expect(replicate (3) (Just (1))).toEqual([Just (1),Just (1),Just (1)]);
});

