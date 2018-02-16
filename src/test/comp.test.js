const { comp } = require ("../index");

const inc = x => x + 1;

const add = x => y => x + y;

test("comp (f, g) (x) to equal f (g (x))", () => {
    expect(comp (inc, inc) (1)).toBe(inc (inc (1)));
});

test("comp (f, g) (x) to equal f (g (x)) w/ partial application", () => {
    expect(comp (add (1), add (1)) (1)).toBe(add (1) (add (1) (1)));
});

