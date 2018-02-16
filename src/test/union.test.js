const { union } = require ("../index");

test("union of arrays [1,2,3] and [2,3,4] to equal [1,2,3,4]", () => {
    expect(union ([1,2,3]) ([2,3,4])).toEqual([1,2,3,4]);
});

test("union of arrays [1,2,3] and [] to equal [1,2,3]", () => {
    expect(union ([1,2,3]) ([])).toEqual([1,2,3]);
});

test("union of arrays [] and [2,3,4] to equal [2,3,4]", () => {
    expect(union ([]) ([2,3,4])).toEqual([2,3,4]);
});

