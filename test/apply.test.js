const { apply } = require ("../prelude");

const inc = x => x + 1;

test("apply (f) (x) to equal f (x)", () => {
    expect(apply (inc) (1)).toBe(inc (1));
});

