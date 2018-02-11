const { any } = require ("../preludium");

const lt3 = x => x < 3;

test("any of array [1,2,3] less than 3 is true", () => {
    expect(any (lt3) ([1,2,3])).toBeTruthy();
});

test("any of array [3,4,5] less than 3 is false", () => {
    expect(any (lt3) ([3,4,5])).toBeFalsy();
});

test("any of array [] less than 3 is false", () => {
    expect(any (lt3) ([])).toBeFalsy();
});

