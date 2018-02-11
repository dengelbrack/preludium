const { curry } = require ("../preludium");

const minus = (x, y) => x - y;

test("curry (f) (y) (x) to be f (x) (y)", () => {
    expect(curry (minus) (1) (2)).toBe(minus (1, 2));
});

test("curry ((x, y) => x - y) (1) (2) to be -1", () => {
    expect(curry (minus) (1) (2)).toBe(-1);
});

