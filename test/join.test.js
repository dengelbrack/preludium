const { join } = require ("../prelude");

test("join of arrays [1,2] and [3,4] to equal [1,2,3,4]", () => {
    expect(join ([1,2]) ([3,4])).toEqual([1,2,3,4]);
});

test("join of array [1] and empty array [] to equal [1]", () => {
    expect(join ([1]) ([])).toEqual([1]);
});

test("join of two empty arrays [] to equal []", () => {
    expect(join ([]) ([])).toEqual([]);
});

