const { isList } = require ("../index");

test("isList array [1,2] to be true", () => {
    expect(isList ([1,2])).toBeTruthy();
});

test("isList array [] to be true", () => {
    expect(isList ([])).toBeTruthy();
});

test("isList 1 to be false", () => {
    expect(isList (1)).toBeFalsy();
});

test("isList {1:1} to be false", () => {
    expect(isList ({1:1})).toBeFalsy();
});

