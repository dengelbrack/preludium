const { compose } = require ("../prelude");

const inc = x => x + 1;

const add = x => y => x + y;

test("compose (f, g) (x) to equal f (g (x))", () => {
    expect(compose (inc, inc) (1)).toBe(inc (inc (1)));
});

test("compose (f, g) (x) to equal f (g (x)) w/ partial application", () => {
    expect(compose (add (1), add (1)) (1)).toBe(add (1) (add (1) (1)));
});

