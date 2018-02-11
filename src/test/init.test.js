const { init } = require ("../preludium");

test("init of array [1, 2, 3] to equal [2, 3]", () => {
    expect(init ([1,2,3])).toEqual([1,2]);
});

test("init of array [1, 2] to equal [2]", () => {
    expect(init ([1,2])).toEqual([1]);
});

test("init of singleton array [1] to equal []", () => {
    expect(init ([1])).toEqual([]);
});

test("init of empty array [] to equal []", () => {
    expect(init ([])).toEqual([]);
});

