const { all } = require ("../prelude");

const lt3 = x => x < 3;

test("all of array [1,2] less than 3 is true", () => {
    expect(all (lt3) ([1,2])).toBeTruthy();
});

test("all of array [2,3,4] less than 3 is false", () => {
    expect(all (lt3) ([2,3,4])).toBeFalsy();
});

test("all of array [] less than 3 is true", () => {
    expect(all (lt3) ([])).toBeTruthy();
});

