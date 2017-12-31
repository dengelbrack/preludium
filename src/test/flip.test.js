const { flip } = require ("../prelude");

const minus = x => y => x - y;

test("flip (f) (y) (x) to be f (x) (y)", () => {
    expect(flip (minus) (2) (1)).toBe(minus (1) (2));
});

test("flip (x => y => x - y) (2) (1) to be -1", () => {
    expect(flip (minus) (2) (1)).toBe(-1);
});

