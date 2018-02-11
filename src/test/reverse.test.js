const { reverse } = require ("../preludium");

test("reverse array [1,2,3] to equal [3,2,1]", () => {
    expect(reverse ([1,2,3])).toEqual([3,2,1]);
});

test("reverse singleton array [1] to equal [1]", () => {
    expect(reverse ([1])).toEqual([1]);
});

test("reverse empty array [] to equal []", () => {
    expect(reverse ([])).toEqual([]);
});

