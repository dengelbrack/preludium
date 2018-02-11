const { comp2 } = require ("../preludium");

const inc = x => x + 1;

const add = x => y => x + y;

test("comp2 (f) (g) (x) to equal f (g (x))", () => {
    expect(comp2 (inc) (inc) (1)).toBe(inc (inc (1)));
});

test("comp2 (f) (g) (x) to equal f (g (x)) w/ partial application", () => {
    expect(comp2 (add (1)) (add (1)) (1)).toBe(add (1) (add (1) (1)));
});

