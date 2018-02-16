const { uncurry } = require ("../index");

const minus = x => y => x - y;

test("uncurry (f) (x, y) to be f (x) (y)", () => {
    expect(uncurry (minus) (1, 2)).toBe(minus (1) (2));
});

test("uncurry (x => y => x - y) (1, 2) to be -1", () => {
    expect(uncurry (minus) (1, 2)).toBe(-1);
});

