const { append } = require ("../preludium");

test("append of arrays [1,2] and [3,4] to equal [1,2,3,4]", () => {
    expect(append ([1,2]) ([3,4])).toEqual([1,2,3,4]);
});

test("append of array [1] and empty array [] to equal [1]", () => {
    expect(append ([1]) ([])).toEqual([1]);
});

test("append of two empty arrays [] to equal []", () => {
    expect(append ([]) ([])).toEqual([]);
});

