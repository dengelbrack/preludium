const { plus } = require ("../index");

test("plus (1) (1) to be 2", () => {
    expect(plus (1) (1)).toBe(2);
});

test("plus (1) (-1) to be 0", () => {
    expect(plus (1) (-1)).toBe(0);
});

test("plus (1) (1.5) to be 2.5", () => {
    expect(plus (1) (1.5)).toBe(2.5);
});

test("plus ('Hello ') ('World!') to be 'World!Hello ' (hacky)", () => {
    expect(plus ("Hello ") ("World!")).toBe("World!Hello ");
});

