const { compn } = require ("../prelude");

const inc = x => x + 1;

const add = x => y => x + y;

test("compn (f1) (f2) (f3) (f4) (x) to equal f1 (f2 (f3 (f4 (x))))", () => {
    expect(compn (inc) (inc) (inc) (inc) (1)).toBe(inc (inc (inc (inc (1)))));
});

test("compn (f1) (f2) (f3) (f4) (x) to equal f1 (f2 (f3 (f4 (x)))) w/ partial application", () => {
    expect(compn (add (1)) (add (1)) (add (1)) (add (1)) (1)).toBe(add (1) (add (1) (add (1) (add (1) (1)))));
});

