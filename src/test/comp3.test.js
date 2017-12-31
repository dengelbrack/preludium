const { comp3 } = require ("../prelude");

const inc = x => x + 1;

const add = x => y => x + y;

test("comp3 (f) (g) (h) (x) to equal f (g (h (x)))", () => {
    expect(comp3 (inc) (inc) (inc) (1)).toBe(inc (inc (inc (1))));
});

test("comp3 (f) (g) (h) (x) to equal f (g (h (x))) w/ partial application", () => {
    expect(comp3 (add (1)) (add (1)) (add (1)) (1)).toBe(add (1) (add (1) (add (1) (1))));
});

