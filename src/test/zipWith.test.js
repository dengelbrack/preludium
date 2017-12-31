const { zipWith } = require ("../prelude");

const add = x => y => x + y;

test("zipWith of arrays [1,2,3] and [2,3,4] equals [3,5,7]", () => {
    expect(zipWith (add) ([1,2,3]) ([2,3,4])).toEqual([3,5,7]);
});

test("zipWith of arrays [1,2,3] and [] equals []", () => {
    expect(zipWith (add) ([1,2,3]) ([])).toEqual([]);
});

test("zipWith of arrays [] and [2,3,4] equals []", () => {
    expect(zipWith (add) ([]) ([2,3,4])).toEqual([]);
});

