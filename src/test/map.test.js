const { map } = require ("../preludium");

const double = x => 2 * x;

test("double every item in array of numbers", () => {
    expect(map (double) ([1,2,3,4])).toEqual([2,4,6,8]);
});

test("double every item in singleton array of numbers", () => {
    expect(map (double) ([1])).toEqual([2]);
});

test("map empty array [] to equal []", () => {
    expect(map (double) ([])).toEqual([]);
});

