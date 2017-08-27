const { concat } = require ("../prelude");

test("concat array of arrays [[1,2], [3,4]] to equal [1,2,3,4]", () => {
    expect(concat ([[1,2],[3,4]])).toEqual([1,2,3,4]);
});

test("concat array [1] to equal [1]", () => {
    expect(() => concat ([1])).toThrowError(TypeError);
});

test("concat empty array [] to equal []", () => {
    expect(concat ([])).toEqual([]);
});

